import React from 'react';



const MemberIcons = props => {
    const { arrayOfUsers } = props;

    return (
        <>
            {(arrayOfUsers[0] && arrayOfUsers[1]) ? ( //  PROJECT ADMIN and TRADES MASTER Students on Project
                <>
                    <img
                        src={arrayOfUsers[0].profile.profileImage}
                        alt={arrayOfUsers[0].profile.firstName}
                        className="dashboard-picture-icons"
                    />
                    <img
                        src={arrayOfUsers[1].profile.profileImage}
                        alt={arrayOfUsers[1].profile.firstName}
                        className="dashboard-picture-icons"
                    />
                    <div className="count">{arrayOfUsers.length}</div>
                </>
            ) : (arrayOfUsers[0] ) ? (
                <>
                    <img
                        src={arrayOfUsers[0].profile.profileImage}
                        alt={arrayOfUsers[0].profile.firstName}
                        className="dashboard-picture-icons"
                    />
                    <div className="count">{arrayOfUsers.length}</div>
                </>
            ) : (
                <>
                    <img
                        src="https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png"
                        alt="team member"
                        className="dashboard-picture-icons"
                    />
                    <img
                        src="https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Greg_zvzyrc.png"
                        alt="team member 2"
                        className="dashboard-picture-icons"
                    />
                    <div className="count">{arrayOfUsers.length}</div>
                </>
            )}
        </>
    );
}


export default MemberIcons

