import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaPlusCircle, FaAngleDown, FaAngleUp, FaBan, FaPlus, FaLink } from 'react-icons/fa';
import { GoKebabVertical } from 'react-icons/go';

// Sub components
import AddTrade from "../AddTrade/AddTrade";
import AddTask from '../AddTask/AddTask';
import MemberIcons from './MemberIcons/MemberIcons';
import { HeaderSkeleton } from '../Skeleton/HeaderSkeleton';

// Helper functions
import { calculateDueDate } from '../../../../helpers/helpers';

// GQL
import { DELETE_PROJECT } from '../../../../graphql/mutations';
import { CREATE_PROJECT_TRADE } from '../../../../graphql/mutations';

import { useMutation, useQuery } from '@apollo/react-hooks';

import { GET_PROJECT_BY_ID } from '../../../../graphql/queries';

const Header = props => {
	const { project, setProject, selectedProject, type, possibleDashNavTabs, setAddTaskModal } = props;

	const [settingsToggle, setSettingsToggle] = useState({ settingsDropdown: false });
	// const [addTaskModal, setAddTaskModal] = useState({ show: false });
	const [deleteProject] = useMutation(DELETE_PROJECT);
	const [projectData, setProjectData] = useState(project);

	const [addTradeModal, setAddTradeModal] = useState({ show: false });
	const [addTradeState, setAddTradeState] = useState({
		project: projectData.id,
		name: '',
		description: '',
	});

	const [createProjectTrade] = useMutation(CREATE_PROJECT_TRADE, {
		update(
			cache,
			{
				data: { createProjectTrade },
			},
		) {
			const { projectById } = cache.readQuery({
				query: GET_PROJECT_BY_ID,
				variables: { id: data.projectById.id },
			});
			// console.log("Cache inside of mutation  ", cache, "\nprojectById", projectById );
			cache.writeQuery({
				query: GET_PROJECT_BY_ID,
				data: { projectById: projectById.trades.concat([createProjectTrade]) },
			});
		},
	});

	const { loading, error, data } = useQuery(GET_PROJECT_BY_ID, {
		variables: { id: project.id },
	});

	useEffect(() => {
		// data && console.log(data);
		data && setProjectData(data.projectById);
	}, [data]);

	const submitAddTrade = async event => {
		event.preventDefault();

		const created = await createProjectTrade({ variables: { data: addTradeState } });

		setAddTradeState({ ...addTradeState, project: '', name: '', description: '' });
		setAddTradeModal({ show: false });
	};

	const submitDeleteProject = async () => {
		const deletedProject = await deleteProject({
			variables: { id: projectData.id },
		});
		// console.log(`${deletedProject} has been deleted.`)
		props.history.push('/dashboard');
	};

	if (loading) return <HeaderSkeleton />;
	if (error) return <h3>Error</h3>;

	// if (addTaskModal.show === true) {
	// 	return (
	// 		<AddTask 
	// 			setAddTaskModal={setAddTaskModal} 
	// 			addTaskModal={addTaskModal} 
	// 			project={project} 

	// 			trade={null}
	// 		/>
	// 	)
	// }

	if (addTradeModal.show === true) {
		return (
			<AddTrade
				setAddTradeState={setAddTradeState}
				addTradeState={addTradeState}
				submitAddTrade={submitAddTrade}
				setAddTradeModal={setAddTradeModal}
				addTradeModal={addTradeModal}
				projectData={projectData}
			/>
		);
	}

	// console.log("Header props",props);

	return (
		<>
			<section className="dashboard-header section"  >
				<div className={`dashboard-section-inner-container  ${selectedProject.showMore ? "show-more" : ""} `}>

					<div className="header-top">
						<div className="header-status">
							{// IF a Project has tradesMaster, student, and trades, it is considered "LIVE"
							projectData.tradeMasters.length > 0 &&
							projectData.students.length > 0 &&
							projectData.trades.length > 0 ? (
								<div className="project-status started">In Progress!</div>
								) : (
									<div className="project-status not-started">Not Started</div>
								)
							}
							{type === possibleDashNavTabs[0] ? ( // PROJECT ADMIN
								<div className="project-status">{possibleDashNavTabs[0]}</div>
							) : null}
						</div>

						<div className="header-top-right">
							{(type === possibleDashNavTabs[1]) ? null : ( // Don't render add task for student
								<div className="add-tasks">
									<div className="add-task-title">Add Task</div>
									<FaPlusCircle className="add-task-button"  onClick={() => setAddTaskModal({ show: true, selectedProject: projectData })} />
								</div>
							) }
							{(type === possibleDashNavTabs[0]) ? (  // Only PROJECT ADMIN can add trades or delete the project. If we have more items for the kebab, we can adjust this logic
								<div className="project-settings">
									<GoKebabVertical
										onClick={() =>
											setSettingsToggle({ settingsDropdown: !settingsToggle.settingsDropdown })
										}
									/>
									{(settingsToggle.settingsDropdown && type === possibleDashNavTabs[0]) ? (   // Only PROJECT ADMIN; Rendundant, but built to be added to
										<div className="project-settings-dropdown">
											<div
												className="project-settings-dropdown-option add-trade"
												onClick={() => setAddTradeModal({ show: true })}
											>
												<FaPlus />
												&nbsp; Add Project Trade
											</div>
											<div
												className="project-settings-dropdown-option delete"
												onClick={submitDeleteProject}
											>
												<FaBan />
												&nbsp; Delete Project
											</div>
										</div>
									) : null}
								</div>
							) : null }
						</div>
					</div>

					<div className="header-middle">
						<div className="header-middle-geo">
							{projectData.city}, {projectData.state}
						</div>
						<div className="header-middle-title">
							<Link to={`/project/${projectData.slug}`}>
								{projectData.name} &nbsp;
								<FaLink />
							</Link>
						</div>
						<p className="header-middle-description">{projectData.description}</p>
					</div>

					<div className="header-bottom">
						<div className="bottom-left">
							<p className="due-date">Due Date: {calculateDueDate(projectData.startDate, projectData.duration)}</p>
						</div>

						<div className="bottom-icons">
							{!selectedProject.buttonToggle ? (

								<div className="manage-project-button-container"  onClick={() => {
									setProject({
										project: project,
										showMore: !selectedProject.showMore,
										id: selectedProject.id ? null : projectData.id,
										buttonToggle: !selectedProject.buttonToggle,
									})}}
								>
									<p  className="bottom-button manage" >Manage</p>
									<FaAngleDown className="bottom-button arrow" />
								</div>

							) : (

								<div className="manage-project-button-container" onClick={() => {
									setProject({
										project: null,
										showMore: !selectedProject.showMore,
										id: selectedProject.id ? null : projectData.id,
										buttonToggle: !selectedProject.buttonToggle,
									})}}
								>
									<p  className="bottom-button close" >Close</p>
									<FaAngleUp className="bottom-button arrow" />
								</div>
							)}
						</div>

						<div className="team-members">
							<div className="member-icons">
								{type === possibleDashNavTabs[0] 
								|| type === possibleDashNavTabs[1] 
								|| type === possibleDashNavTabs[2] 
								? (
									<MemberIcons 
										arrayOfUsers={projectData.students} // Should work for student view, but not tested yet
										// possibleDashNavTabs={possibleDashNavTabs}
										// type={type}
									/>
								) : (
									<>
										<p>Team</p>
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
										<div className="count">{`${
											projectData.students ? projectData.students.length : '?'
										}`}</div>
									</>
								)}
							</div>
						</div>
					</div>

				</div>
			</section>
		</>
	);
};

export default withRouter(Header);
