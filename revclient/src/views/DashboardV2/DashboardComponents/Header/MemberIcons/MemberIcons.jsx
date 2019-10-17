import React from 'react';



const MemberIcons = props => {
    const { arrayOfUsers } = props;

    return (
        <>
            {(arrayOfUsers[0] && arrayOfUsers[1]) ? ( //  PROJECT ADMIN and TRADES MASTER Students on Project
                <>
                    <p>Team</p>
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
                    <p>Team</p>
                    <img
                        src={arrayOfUsers[0].profile.profileImage}
                        alt={arrayOfUsers[0].profile.firstName}
                        className="dashboard-picture-icons"
                    />
                    <div className="count">{arrayOfUsers.length}</div>
                </>
            ) : (
                <>
                    <div className="count">{arrayOfUsers.length} Team Members</div>
                </>
            )}
        </>
    );
}


export default MemberIcons

