import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { MdArrowBack, MdClose } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useMutation, useLazyQuery } from "@apollo/react-hooks";
import { UPDATE_USER_PROFILE } from "../../graphql/mutations";
import { GET_USER } from "../../graphql/queries";
import Toggle from "react-toggle";
import "react-toggle/style.css"

import Nav from "../../components/Layout/Nav";
import Footer from "../../components/Layout/Footer";


const SetupProfile = props => {
    const [updateUserProfile] = useMutation(UPDATE_USER_PROFILE);
    const [getUser, { loading, data }] = useLazyQuery(GET_USER);

    const [profileData, setProfileData] = useState({
        firstName: "",
        lastName: "",
        email: props.email,
        // phone: "",
        address: "",
        aptNumber: "",
        city: "",
        state: "",
        zip: "",
        country: "USA",
    });
    const [darkModeState, setDarkMode] = useState(false);

    const handleChanges = event => {

        if (event.target.name === 'zip' || event.target.name === 'goalAmount') {
            setProfileData({ ...profileData, [event.target.name]: Number(event.target.value) });
        } else {
            setProfileData({ ...profileData, [event.target.name]: event.target.value });
        }
    };



    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        address: false,
        aptNumber: false,
        city: false,
        state: false,
        zip: false,
        serverError: ""

    })
    const validateInput = e => {
        if (!e.target.value.length) {
            console.log("error Fired", e.target.name);
            setProfileData({ ...profileData, [e.target.name]: e.target.value })
            setErrors({
                ...errors,
                [e.target.name]: true,
            })
        } else {
            console.log("no error", e.target.name);
            // Test to ensure both entered emails match


            setErrors({
                ...errors,
                [e.target.name]: false,
            })
            if (e.target.name === 'zip' || e.target.name === 'goalAmount') {
                setProfileData({ ...profileData, [e.target.name]: Number(e.target.value) });
            } else {
                setProfileData({ ...profileData, [e.target.name]: e.target.value });
            }
        }
    };
    const checkInput = () => !errors.firstName && !errors.lastName
    const [page, setPageNumber] = useState(1);
    const formBack = () => setPageNumber(1);
    const formForward = (e) => { e.preventDefault(); if (!errors.firstName && !errors.lastName && !errors.email) setPageNumber(2) };

    const formSubmit = async event => {
        event.preventDefault();
        const updated = await updateUserProfile({ variables: { data: profileData } });

        if (updated) {
            props.history.push("/dashboard");
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkModeState);
        localStorage.setItem('dark-mode', !darkModeState);
    };

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('dark-mode')) === true) {
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    }, [darkModeState]);

    if (loading) return <h1>Loading</h1>
    if (!localStorage.getItem("token")) props.history.push("/");


    console.log(Array.from(errors))
    return (
        <>
            {props.destination === "settings" ? (
                <Nav />
            ) : null}

            <section
                className={`setup-profile-container ${props.destination === "settings" ? "settings-view" : ""}`}
            >
                <div className="setup-profile-container-card">

                    <div className="setup-profile-interaction-overlay">

                        {page === 2 ? (
                            <MdArrowBack onClick={formBack} />
                        ) : null}

                        {props.destination === "modal" && page === 1 ? (
                            <MdClose onClick={props.toggleForm} />
                        ) : null}

                    </div>

                    {page === 1 || props.destination === "settings" ? (
                        <>
                            <div className="setup-profile-form">
                                <div className="setup-profile-heading-container">
                                    <div className="setup-profile-heading">{props.destination === "settings" ? "Settings" : "Hello!"}</div>
                                </div>
                                {props.destination === "settings" ? (
                                    <div className="setup-profile-settings-options">
                                        <div className="setting-label">
                                            <FaMoon />&nbsp; Toggle Dark Mode
                                        </div>
                                        <div className="setting-toggle">
                                            <Toggle
                                                defaultChecked={darkModeState}
                                                onChange={toggleDarkMode}
                                            />
                                        </div>
                                    </div>
                                ) : null}
                                <form onSubmit={formForward}>
                                    <input
                                        name="firstName"
                                        type="text"
                                        className={`${(errors.firstName || errors.invalidCreds) && `errorBorder`}`}
                                        placeholder="First Name"
                                        value={profileData.firstName}
                                        onChange={validateInput}
                                    />
                                    <input
                                        name="lastName"
                                        type="text"
                                        className={`${(errors.lastName || errors.invalidCreds) && `errorBorder`}`}
                                        placeholder="Last Name"
                                        value={profileData.lastName}
                                        onChange={validateInput}
                                    />
                                    <input
                                        name="email"
                                        type="text"
                                        disabled
                                        placeholder="Email"
                                        value={profileData.email}
                                        onChange={validateInput}
                                    />
                                    {/* <input
                                        name="phone"
                                        type="number"
                                        placeholder="Phone"
                                        value={profileData.phone}
                                        onChange={validateInput}
                                    /> */}
                                    {props.destination === "settings" ? null : (
                                        <div className="setup-profile-button-container">
                                            <button
                                                onClick={e => { checkInput(); formForward(e) }}
                                            >Next
                                            </button>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </>
                    ) : null}
                    {page === 2 || props.destination === "settings" ? (
                        <>
                            <div className="setup-profile-form">
                                {props.destination === "settings" ? null : (
                                    <div className="setup-profile-heading-container">
                                        <div className="setup-profile-heading">Hi {profileData.firstName ? profileData.firstName : null}</div>
                                        <h3>Where are you from?</h3>
                                    </div>
                                )}
                                <form onSubmit={formSubmit}>
                                    <input
                                        name="address"
                                        type="text"
                                        className={`${(errors.address || errors.invalidCreds) && `errorBorder`}`}
                                        placeholder="Address"
                                        value={profileData.address}
                                        onChange={validateInput}
                                    />
                                    <input
                                        name="city"
                                        type="text"
                                        className={`${(errors.city || errors.invalidCreds) && `errorBorder`}`}
                                        placeholder="City"
                                        value={profileData.city}
                                        onChange={validateInput}
                                    />
                                    <div className="setup-profile-statezip">
                                        <input
                                            name="state"
                                            type="text"
                                            className={`${(errors.state || errors.invalidCreds) && `errorBorder`}`}
                                            placeholder="State"
                                            value={profileData.state}
                                            onChange={validateInput}
                                        />
                                        <input
                                            name="zip"
                                            type="text"
                                            className={`${(errors.zip || errors.invalidCreds) && `errorBorder`}`}
                                            placeholder="Zip"
                                            value={profileData.zip === 0 ? '' : profileData.zip}
                                            step="1"
                                            pattern="\d+"
                                            maxLength="5"
                                            onChange={validateInput}
                                        />
                                    </div>

                                    <div className="setup-profile-button-container">
                                        <button onClick={formSubmit} className="">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </>
                    ) : null}
                </div>
            </section>
            {props.destination === "settings" ? (
                <Footer />
            ) : null}
        </>
    );
};


export default withRouter(SetupProfile);

