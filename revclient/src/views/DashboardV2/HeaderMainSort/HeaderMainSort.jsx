import React, { useState } from "react";
import { Tween, Timeline } from 'react-gsap';

// Components
import Header from "../DashboardComponents/Header/Header";
import MainProjectAdmin from "../DashboardComponents/Main/MainProjectAdmin";
import MainTradeMaster from "../DashboardComponents/Main/MainTradeMaster";
import MainStudent from "../DashboardComponents/Main/MainStudent";
import MainDonor from "../DashboardComponents/Main/MainDonor";
import AddTask from "../DashboardComponents/AddTask/AddTask";
// import Donations from "../DashboardComponents/Main/Donations/Donations";


export default function HeaderMainSort(props) {
    const { projectArray, selectedProject, setProject, mainTabs, setMainTabs, dashNavTabState, possibleDashNavTabs } = props;
    const [ addTaskModal, setAddTaskModal ] = useState({ show: false, selectedProject: null, trade: null });

    if (!projectArray) return null;
    let renderedHeaderMain;

    
    
        
    if (addTaskModal.show === true) {
        return (
            <AddTask 
                setAddTaskModal={setAddTaskModal} 
                addTaskModal={addTaskModal} 
                selectedProject={addTaskModal.selectedProject} 

                trade={addTaskModal.trade}
            />
        )
    }
    


    // Selected tab is PROJECT ADMIN
    if (dashNavTabState.selectedDashNavTab === possibleDashNavTabs[0]) { 

        // console.log("Project admin main sort array  ", projectArray);

        return renderedHeaderMain = projectArray.map(project => (
            <React.Fragment key={project.id} >
                {!selectedProject.id ? ( // If there is no selected project, render all the headers in this view
                    <Header 
                        type={dashNavTabState.selectedDashNavTab}
                        possibleDashNavTabs={possibleDashNavTabs}
                        project={project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                        setAddTaskModal={setAddTaskModal}
                    />
                ) : project.id === selectedProject.id ? ( // If there is a selected project, only render that header
                    <Header 
                        type={dashNavTabState.selectedDashNavTab}
                        possibleDashNavTabs={possibleDashNavTabs}
                        project={project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                        setAddTaskModal={setAddTaskModal}
                    />
                ) : null}
                
                {project.id === selectedProject.id ? ( // Render the main tab of the selected header
                    
                    <Timeline  target={
                        <div className="tween-container">
                            <MainProjectAdmin
                                project={project}
                                mainTabs={mainTabs}
                                selectedMainTab={mainTabs.selectedMainTab}
                                setMainTabs={setMainTabs}
                                setAddTaskModal={setAddTaskModal}
                                dashNavTabState={dashNavTabState}
                                possibleDashNavTabs={possibleDashNavTabs}
                            />
                        </div>
                    }>
                        <Tween 
                            from={{ 
                                opacity: 0,
                                yPercent: -30
                            }} 
                            to={{ 
                                opacity: 1,
                                yPercent: 0
                            }}
                            duration={0.75}
                            // ease="Back.easeInOut"
                        />
                    </Timeline>

                ) : null}
            </React.Fragment>
        ))
    }
    
    
    // Selected tab is STUDENT
    if (dashNavTabState.selectedDashNavTab === possibleDashNavTabs[1]) {
        
        console.log("Student header main sort array  ", projectArray);

        return renderedHeaderMain = projectArray.map(projectObject => (
            <React.Fragment key={projectObject.id} >
                {!selectedProject.id ? (
                    <Header 
                        type={dashNavTabState.selectedDashNavTab}
                        possibleDashNavTabs={possibleDashNavTabs}
                        project={projectObject.project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                    />
                ) : projectObject.project.id === selectedProject.id ? (
                    <Header 
                        type={dashNavTabState.selectedDashNavTab}
                        possibleDashNavTabs={possibleDashNavTabs}
                        project={projectObject.project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                    />
                ) : null}
                
                {projectObject.project.id === selectedProject.id ? (
                    
                    <Timeline  target={
                        <div className="tween-container">
                            <MainStudent
                                project={projectObject.project}
                                mainTabs={mainTabs}
                                selectedMainTab={mainTabs.selectedMainTab}
                                setMainTabs={setMainTabs}
                            />
                        </div>
                    }>
                        <Tween 
                            from={{ 
                                opacity: 0,
                                yPercent: -30
                            }} 
                            to={{ 
                                opacity: 1,
                                yPercent: 0
                            }}
                            duration={0.75}
                            // ease="Back.easeInOut"
                        />
                    </Timeline>
                    
                ) : null}
            </React.Fragment>
        ))
    }


    // Selected tab is TRADE MASTER
    if (dashNavTabState.selectedDashNavTab === possibleDashNavTabs[2]) { 

        // console.log("Trade Master main sort array  ", projectArray);

        return renderedHeaderMain = projectArray.map(projectObject => (
            <React.Fragment key={projectObject.id} >
                {!selectedProject.id ? (
                    <Header 
                        type={dashNavTabState.selectedDashNavTab}
                        possibleDashNavTabs={possibleDashNavTabs}
                        project={projectObject.project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                        setAddTaskModal={setAddTaskModal}
                    />
                ) : projectObject.project.id === selectedProject.id ? (
                    <Header 
                        type={dashNavTabState.selectedDashNavTab}
                        possibleDashNavTabs={possibleDashNavTabs}
                        project={projectObject.project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                        setAddTaskModal={setAddTaskModal}
                    />
                ) : null}
                

                {projectObject.project.id === selectedProject.id ? (

                    <Timeline target={
                        <div className="tween-container">
                            <MainTradeMaster
                                project={projectObject.project}
                                mainTabs={mainTabs}
                                selectedMainTab={mainTabs.selectedMainTab}
                                setMainTabs={setMainTabs}
                                dashNavTabState={dashNavTabState}
                                possibleDashNavTabs={possibleDashNavTabs}
                            />
                        </div>
                    }>
                        <Tween 
                            from={{ 
                                opacity: 0,
                                yPercent: -30
                            }} 
                            to={{ 
                                opacity: 1,
                                yPercent: 0
                            }}
                            duration={0.75}
                            // ease="Back.easeInOut"
                        />
                        </Timeline>

                        
                ) : null}
            </React.Fragment>
        ))
    }


    // Selected tab is DONATIONS
    if (dashNavTabState.selectedDashNavTab === possibleDashNavTabs[3]) { 
        return renderedHeaderMain = (
            <MainDonor 
                donations={projectArray}
                mainTabs={mainTabs}
                setMainTabs={setMainTabs}
                defaultTab={mainTabs.defaultMainTab}
            />
        )
    }

    return (
        <>
                {() => renderedHeaderMain()}
        </>
    )
}
