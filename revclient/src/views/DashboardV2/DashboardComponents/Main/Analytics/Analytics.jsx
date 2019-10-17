import React from 'react';


const Analytics = props => {
    const { applicants, donations, likes, students, tasks, tradeMasters, trades } = props.project;
    return (
        <>
            <div className="analytics">
                    <h3 className="analytics-heading">A total analysis</h3>

                    <div className="analytics-overview">
                        <div className="analysis-card">
                            <h2>{donations.length}</h2>
                            <p>Donations</p>
                        </div>
                        <div className="analysis-card">
                            <h2>{likes.length}</h2>
                            <p>Likes</p>
                        </div>
                        <div className="analysis-card">
                            <h2>{students.length}</h2>
                            <p>Students</p>
                        </div>
                        <div className="analysis-card">
                            <h2>{tasks.length}</h2>
                            <p>Tasks</p>
                        </div>
                        <div className="analysis-card">
                            <h2>{applicants.length}</h2>
                            <p>Applicants</p>
                        </div>
                    </div>

                    <h3 className="analytics-heading">Show me the past...</h3>

                    {/* WORK IN PROGRESS, IF U TOUCH, I WILL GIT BLAME YOU AND SEND A STRONGLY WORDED MESSAGE */}
            </div>
        </>
    )

}


export default Analytics;

