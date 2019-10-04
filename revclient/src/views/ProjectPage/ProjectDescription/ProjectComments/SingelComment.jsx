import React, {useState} from 'react'


const SingleComment = ({each, editCommentMutation, deleteComment, currentUser}) => {
    const [comment, setComment] = useState(each)
    const [editComment, setEditComment] = useState({comment: comment.comment, id: comment.id})
    const editCommentHandle = e => {
        setEditComment({...editComment, comment: e.target.value})
    }
    const submitEditComment = async e => {
        e.preventDefault()

        const edited = await editCommentMutation({variables: {data: editComment}})
        console.log(edited)
        if(edited) {
            setComment({...each, comment:edited.data.updateProjectComment.comment })
        }
    }

    return (
        <div className='commentFlex' key={comment.id}>
            <img src={comment.profile.profileImage} alt='Profile icon' />
            <div>
                <div className='commenter-name-flex'>
                    <p>{comment.profile.firstName}</p>
                    <p>{comment.profile.lastName}</p>
                </div>
                <p className='comment'>{comment.comment}</p>
                <div className='lowerCommentSide'>
                    {comment.profile.id === currentUser().profileId && <button onClick={(e) => deleteComment(e, comment.id)}>Delete</button>}
                    <button onClick={submitEditComment}>Edit</button>
                    <form>
                        <input 
                          placeholder='edit'
                          onChange={editCommentHandle}
                          value={editComment.comment}
                        />
                    </form>
                    {/* <p>{comment.createdAt}</p> */}
                    {/* <p>{comment.likes.length} {comment.likes.length === 1 ? 'Like' : 'Likes'}</p> */}
                </div>
            </div>
        </div>
    )
}

export default SingleComment

