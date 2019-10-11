import React, { useState, useEffect } from 'react';

import Nav from '../../components/Layout/Nav';
import Footer from "../../components/Layout/Footer";
import Sidebar from './DashboardComponents/Sidebar/Sidebar';
import Header from './DashboardComponents/Header/Header';
import Main from './DashboardComponents/Main/Main';

import { useQuery } from '@apollo/react-hooks';
import { GET_USER_PROFILE } from '../../graphql/queries/Users';

export default function Dashboard() {
    
    const [selectedProject, setSelectedProject] = useState();
    const [toggle, setToggle] = useState(false);
    const [array, setArray] = useState([]);

    const { loading, error, data, refetch } = useQuery(GET_USER_PROFILE);

    useEffect(() => {
        refetch();
        if(data) {
            data.me.projects.map(project => {
                project.type = "admin";
                setArray(array => [...array, project])
            })
            data.me.donations.map(project => {
                project.type = "donation";
                setArray(array => [...array, project])
            })
            data.me.studentProjects.map(project => {
                project.type = "student";
                setArray(array => [...array, project])
            })
            data.me.tradeMasterProjects.map(project => {
                project.type = "master";
                setArray(array => [...array, project])
            })
        }
    }, [data])

    if (loading) return <p>loading....</p>;
    if (error) return <p>Error....</p>;

    return (
        <>
            <div className="dashboard-container" >
                <Nav />
                    <section className="dashboard">
                        <Sidebar user={data.me} />
                        <section className="dashboard-body">
                            { // Renders the project admin components
                                toggle
                                ? 
                                    array.map(project => {
                                        if (project.id === selectedProject){
                                            return <>
                                                <Header
                                                    key={project.id}
                                                    project={project}
                                                    setSelectedProject={setSelectedProject}
                                                    setToggle={setToggle}
                                                    toggle={toggle}
                                                />
                                                <Main project={project} />
                                            </>
                                        }
                                    })
                                :
                                    array.map(project => (
                                        <>
                                            <Header
                                                key={project.id}
                                                project={project}
                                                setSelectedProject={setSelectedProject}
                                                setToggle={setToggle}
                                                toggle={toggle}
                                            />
                                        </>
                                    ))
                            }
                        </section>
                    </section>        
                <Footer />
            </div>

        </>
    )
}

