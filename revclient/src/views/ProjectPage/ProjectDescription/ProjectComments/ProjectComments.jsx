import React, { useState, useRef } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT } from '../../../../graphql/mutations/Project';
import { useAuth } from '../../../../hooks/useAuth';
import { withRouter } from 'react-router-dom';
// import { gql } from 'apollo-boost';
// import { frob } from 'gl-matrix/src/gl-matrix/mat2';
import SingleComment from './SingelComment'

const ProjectComments = ({comments, id, setProjectData, projectData, history}) => {
    const [commentCount, setCommentCount] = useState(2)
    const [comment, setComment] = useState({comment: '', id})
    const [settings, setSettings] = useState(false)
    const [bool, setBool] = useState(false)
    
    const inputRef = useRef()

    const {currentUser} = useAuth(history)

    const [addComment] = useMutation(ADD_COMMENT)

    const [removeComment] = useMutation(REMOVE_COMMENT)

    const [editCommentMutation] = useMutation(EDIT_COMMENT)

    const [inputClicked, setInptuClicked] = useState(false)

    const textAreaFocus = {
        width: '25%',
        height: '40px',
        transition: '1s'
    }
    const textarea = {
        height: '20px'
    }

    const onBlurForm = e => {
        if(e.target.className !== 'click') {
            setInptuClicked(false)
        }
    }


    const settingsBlur = e => {
        
        if(e.target.className === 'settings-drop' || e.target.className === 'dot-container' || e.target.className === 'dot') {
            return ;
        } else {
            setSettings(false)
            setBool(!bool)
        }
    }

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
        <div onClick={(e) => {settingsBlur(e); onBlurForm(e)}} className='projectCommentsContainer'>
            <h2 className='commentsTitle'>Comments</h2>
            {
                localStorage.getItem('token') 
                && 
                <form className='comment-form click' onSubmit={submitComment}>
                    <textarea 
                        style={inputClicked ? textAreaFocus : textarea}
                        className='click'
                        placeholder='comment'
                        onChange={commentHandle}
                        onClick={() => setInptuClicked(true)}
                        value={comment.comment}
                        name='comment'
                        ref={inputRef}
                    />
                    <button onClick={() => setInptuClicked(false)} className='click' disabled={comment.comment.length === 0 ? true : false} style={comment.comment.length === 0 ? {color: 'gray', cursor: 'default'} : null}>Submit</button>
                </form>
            }
            <div>
                {comments ? comments.map((each, index) => {
                    
                
                    if(index <= commentCount - 1) {
                        return <SingleComment key={index} bool={bool} settingsBlur={settingsBlur} settings={settings} currentUser={currentUser} deleteComment={deleteComment} editCommentMutation={editCommentMutation} each={each}/>
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
