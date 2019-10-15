import React, { useState, useEffect } from 'react';
import { FaRegEdit } from 'react-icons/fa';

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
			setComment({ ...each, comment: edited.data.updateProjectComment.comment });
		}
	};

	return (
		<div className="commentFlex" key={comment.id}>
			{comment.profile.profileImage === undefined ? null : (
				<img src={comment.profile.profileImage} alt="Profile icon" />
			)}
			<div className="comment-inner-container">
				<div className="commenter-name-flex">
					<p>{comment.profile.firstName}</p>
					<p>{comment.profile.lastName}</p>
				</div>
				<div className="dot-position-div">
					<div className="each-comment-container">
						{!editing ? (
							<p className="comment">{comment.comment}</p>
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
					{comment.profile.id === currentUser().profileId && (
					<div className="settings-drop" onClick={() => setSettings(!eachSetting)}>
						<div className="dot-container">
							<div onClick={() => setSettings(!eachSetting)} className="dot"></div>
							<div className="dot"></div>
							<div className="dot"></div>
						</div>
						{eachSetting && 
							<div className="settings-drop-buttons">
								<button onClick={() => setEditing(true)}>Edit</button>
								<button onClick={e => deleteComment(e, comment.id)}>Delete</button>
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
