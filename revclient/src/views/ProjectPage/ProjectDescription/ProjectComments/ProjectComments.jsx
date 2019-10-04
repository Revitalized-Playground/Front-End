import React, {useState, useRef} from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_COMMENT, REMOVE_COMMENT } from '../../../../graphql/mutations/Project';
import { useAuth } from '../../../../components/Layout/useDecodeToken'
import { withRouter } from 'react-router-dom'
// import { gql } from 'apollo-boost';
// import { frob } from 'gl-matrix/src/gl-matrix/mat2';

const ProjectComments = ({comments, id, setProjectData, projectData, history}) => {
    const [commentCount, setCommentCount] = useState(2)
    const [comment, setComment] = useState({comment: '', id})
    const inputRef = useRef()

    const {currentUser} = useAuth(history)

    const [addComment] = useMutation(ADD_COMMENT)

    const [removeComment] = useMutation(REMOVE_COMMENT)

    const commentHandle = e => {
        setComment({...comment, [e.target.name]: e.target.value})
    }

    const submitComment = async e => {
        e.preventDefault()

        const newComment = await addComment({variables: {data: comment}})
        if(newComment) {
            setProjectData({
                ...projectData,
                project: {...projectData.project,
                    comments: [...projectData.project.comments, newComment.data.createProjectComment]
                },
            })
        }

        setComment({...comment, comment: ''})
        inputRef.current.blur()
    }


    // console.log(userId)
    console.log(currentUser().profileId)


    const deleteComment = async (e, com) => {
        e.preventDefault()

        const deleted = await removeComment({variables: {id: com}})

        if (deleted) {
            setProjectData({
                ...projectData,
                project: {
                    ...projectData.project,
                    comments: projectData.project.comments.filter(each => each.id !== deleted.data.deleteProjectComment.id)
                }
            })
            
        }
    }

    if(!comments) return <div>Loading Comments...</div>
    return (
        <div className='projectCommentsContainer'>
            <h2 className='commentsTitle'>Comments</h2>
            {
                localStorage.getItem('token') 
                && 
                <form className='comment-form' onSubmit={submitComment}>
                    <textarea 
                        placeholder='comment'
                        onChange={commentHandle}
                        value={comment.comment}
                        name='comment'
                        ref={inputRef}
                    />
                    <button disabled={comment.comment.length === 0 ? true : false} style={comment.comment.length === 0 ? {color: 'gray', cursor: 'default'} : null}>Submit</button>
                </form>
            }
            <div>
                {comments ? comments.map((each, index) => {
                    if(index <= commentCount - 1) {
                        return (
                            <div className='commentFlex' key={index}>
                                <img src={each.profile.profileImage} alt='Profile icon' />
                                <div>
                                    <div className='commenter-name-flex'>
                                        <p>{each.profile.firstName}</p>
                                        <p>{each.profile.lastName}</p>
                                    </div>
                                    <p className='comment'>{each.comment}</p>
                                    <div className='lowerCommentSide'>
                                        {each.profile.id === currentUser().profileId && <button onClick={(e) => deleteComment(e, each.id)}>Delete</button>}
                                        {/* <p>{each.createdAt}</p> */}
                                        {/* <p>{each.likes.length} {each.likes.length === 1 ? 'Like' : 'Likes'}</p> */}
                                    </div>
                                </div>
                            </div>
                        )
                    } else return null;
                }) : null }
            </div>
            <div className='comment-button-container'>
                <button disabled={comments.length < commentCount ? true : false} style={comments.length < commentCount ? {color: 'gray', border: '1px solid gray', cursor: 'default'} : null} className='see-more-comments' onClick={() => setCommentCount(commentCount + 8)}>{commentCount < comments.length ? 'Load more comments' : 'No more comments'}</button>
            </div>
            
        </div>
    )
}

export default withRouter(ProjectComments)