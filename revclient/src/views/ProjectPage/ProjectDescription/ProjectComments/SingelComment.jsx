import React, { useState, useEffect } from 'react';
import InitialAvatar from '../../../../components/InitialAvatar/InitialAvatar'

const SingleComment = ({ each, editCommentMutation, deleteComment, currentUser, settings, settingsBlur, bool }) => {
	const [comment, setComment] = useState(each);
	const [editComment, setEditComment] = useState({ comment: comment.comment, id: comment.id });
	const [eachSetting, setSettings] = useState(settings);
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		setSettings(settings);
	}, [bool]);

	const editCommentHandle = e => {
		setEditComment({ ...editComment, comment: e.target.value });
	};
	const submitEditComment = async e => {
		e.preventDefault();

		const edited = await editCommentMutation({ variables: { data: editComment } });
		if (edited) {
			setComment(each)
		}
	};

	return (
		<div className="commentFlex" key={each.id}>
			{!each.profile.profileImage ? <InitialAvatar
										height={40}
										width={40}
										className="user-icon"
										firstName={each.profile.firstName}
										lastName={each.profile.lastName}
										useRandomColor={1}
									/> : (
				<img src={each.profile.profileImage} alt="Profile icon" />
			)}
			<div className="comment-inner-container">
				<div className="commenter-name-flex">
					<p>{each.profile.firstName}</p>
					<p>{each.profile.lastName}</p>
				</div>
				<div className="dot-position-div">
					<div className="each-comment-container">
						{!editing ? (
							<p className="comment">{each.comment}</p>
						) : (
							<div className="lowerCommentSide">
								<form>
									<textarea
										placeholder="edit"
										onChange={editCommentHandle}
										value={editComment.comment}
									/>
									<div className="edit-form-buttons">
										<button
											onClick={e => {
												submitEditComment(e);
												setEditing(false);
											}}
										>
											Save
										</button>{' '}
										<button onClick={() => setEditing(false)}>Cancel</button>
									</div>
								</form>
							</div>
						)}
					</div>
					{each.profile.id === currentUser().profileId && (
					<div className="settings-drop" onClick={() => setSettings(!eachSetting)}>
						<div className="dot-container">
							<div onClick={() => setSettings(!eachSetting)} className="dot"></div>
							<div className="dot"></div>
							<div className="dot"></div>
						</div>
						{eachSetting && 
							<div className="settings-drop-buttons">
								<button onClick={() => setEditing(true)}>Edit</button>
								<button onClick={e => deleteComment(e, each.id)}>Delete</button>
							</div>
						}
					</div>)
					}
					{/* <FaRegEdit onClick={submitEditComment} style={{fontSize: '2rem', color:'red'}}/> */}
				</div>
			</div>
		</div>
	);
};

export default SingleComment;
