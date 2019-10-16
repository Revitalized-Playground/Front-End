import React from "react";
import Header from "../DashboardComponents/Header/Header";
import MainProjectAdmin from "../DashboardComponents/Main/MainProjectAdmin";
import MainTradeMaster from "../DashboardComponents/Main/MainTradeMaster";
import MainStudent from "../DashboardComponents/Main/MainStudent";
import MainDonor from "../DashboardComponents/Main/MainDonor";
// import Donations from "../DashboardComponents/Main/Donations/Donations";


export default function HeaderMainSort(props) {
    const { projectArray, selectedProject, setProject, mainTabs, setMainTabs, dashNavTabState, possibleDashNavTabs } = props;
    if (!projectArray) return null;
    let renderedHeaderMain;


    // Selected tab is PROJECT ADMIN
    if (dashNavTabState.selectedDashNavTab === possibleDashNavTabs[0]) { 

        // console.log("Project admin main sort array  ", projectArray);

        return renderedHeaderMain = projectArray.map(project => (
            <React.Fragment key={project.id} >
                {!selectedProject.id ? ( // If there is no selected project, render all the headers in this view
                    <Header 
                        type={dashNavTabState.selectedDashNavTab}
                        possibleDashNavTabs={possibleDashNavTabs}
                        key={project.id} 
                        project={project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                    />
                ) : project.id === selectedProject.id ? ( // If there is a selected project, only render that header
                    <Header 
                        type={dashNavTabState.selectedDashNavTab}
                        possibleDashNavTabs={possibleDashNavTabs}
                        key={project.id} 
                        project={project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                    />
                ) : null}
                
                {project.id === selectedProject.id ? ( // Render the main tab of the selected header
                    <MainProjectAdmin
                        project={project}
                        mainTabs={mainTabs}
                        selectedMainTab={mainTabs.selectedMainTab}
                        setMainTabs={setMainTabs}
                    />
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
                        key={projectObject.project.id} 
                        project={projectObject.project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                    />
                ) : projectObject.project.id === selectedProject.id ? (
                    <Header 
                        type={dashNavTabState.selectedDashNavTab}
                        possibleDashNavTabs={possibleDashNavTabs}
                        key={projectObject.project.id} 
                        project={projectObject.project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                    />
                ) : null}
                
                {projectObject.project.id === selectedProject.id ? (
                    <MainStudent
                        project={projectObject.project}
                        mainTabs={mainTabs}
                        selectedMainTab={mainTabs.selectedMainTab}
                        setMainTabs={setMainTabs}
                    />
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
                        key={projectObject.project.id} 
                        project={projectObject.project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                    />
                ) : projectObject.project.id === selectedProject.id ? (
                    <Header 
                        type={dashNavTabState.selectedDashNavTab}
                        possibleDashNavTabs={possibleDashNavTabs}
                        key={projectObject.project.id} 
                        project={projectObject.project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                    />
                ) : null}
                
                {/* {console.log("project.project.id :", project.project.id)}
                {console.log("selectedProject.id :", selectedProject.id)} */}
                {projectObject.project.id === selectedProject.id ? (
                    <MainTradeMaster
                        project={projectObject.project}
                        mainTabs={mainTabs}
                        selectedMainTab={mainTabs.selectedMainTab}
                        setMainTabs={setMainTabs}
                        defaultTab={mainTabs.defaultMainTab}
                    />
                ) : null}
            </React.Fragment>
        ))
    }


    // Selected tab is DONATIONS
    if (dashNavTabState.selectedDashNavTab === possibleDashNavTabs[3]) { 

        // console.log("Donation main sort array  ", projectArray);

        // return renderedHeaderMain = projectArray.map(donation => (
        //     <React.Fragment key={donation.id} >
        //         {!selectedProject.id ? (
        //             <Header 
        //                 key={project.project.id}
        //                 project={project.project} 
        //                 setProject={setProject}
        //                 selectedProject={selectedProject}
        //             />
        //         ) : project.id === selectedProject.id ? (
        //             <Header 
        //                 key={project.project.id} 
        //                 project={project.project} 
        //                 setProject={setProject}
        //                 selectedProject={selectedProject}
        //             />
        //         ) : null}
                
        //         {donation.id === selectedProject.id ? (
        //             <Donations 
        //                 donations={project}
        //                 project={project}
        //                 mainTabs={mainTabs.donationTabs}
        //                 defaultTab={mainTabs.donationTabs[0]}
        //                 setMainTabs={setMainTabs}
        //             />
        //         ) : null}
        //     </React.Fragment>
        // ))
        return renderedHeaderMain = (
            <MainDonor 
                donations={projectArray}
                mainTabs={mainTabs.donationTabs}
                defaultTab={mainTabs.donationTabs[0]}
                setMainTabs={setMainTabs}
            />
        )
    }

    return (
        <>
            {() => renderedHeaderMain()}
        </>
    )
}
