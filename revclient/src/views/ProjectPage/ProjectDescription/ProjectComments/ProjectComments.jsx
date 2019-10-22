import React, { useState, useRef } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT } from '../../../../graphql/mutations/Project';
import { useAuth } from '../../../../hooks/useAuth';
import { withRouter } from 'react-router-dom';
import { GET_PROJECT_BY_SLUG } from '../../../../graphql/queries/Projects';
import SingleComment from './SingelComment'

const ProjectComments = ({comments, refetch, id, history, match, newBool, boolState, deleteBool, setDeleteBool}) => {
    const [commentCount, setCommentCount] = useState(5)
    const [comment, setComment] = useState({comment: '', id})
    const [settings, setSettings] = useState(false)
    const [bool, setBool] = useState(false)
    
    const inputRef = useRef()

    const {currentUser} = useAuth(history)

    const [addComment] = useMutation(ADD_COMMENT, {
        update(cache, {data: createProjectComment }){
            const { projectBySlug } = cache.readQuery({
                query: GET_PROJECT_BY_SLUG,
                variables: { slug: match.params.slug }
            })
            cache.writeQuery({
                query: GET_PROJECT_BY_SLUG,
                data: { projectBySlug: projectBySlug.comments = createProjectComment.createProjectComment.project.comments }
            })
            newBool(!boolState)
        }
    })

    const [removeComment] = useMutation(REMOVE_COMMENT
    //     , {
    //     update(cache, {data: deleteProjectComment }){
            
    //         const { projectBySlug } = cache.readQuery({
    //             query: GET_PROJECT_BY_SLUG,
    //             variables: { slug: match.params.slug }
    //         })
            
    //         cache.writeQuery({
    //             query: GET_PROJECT_BY_SLUG,
    //             data: { projectBySlug: projectBySlug.comments}
    //         })
    //         console.log('slug',projectBySlug, 'delete',deleteProjectComment)
            
            
    //     }
    // }
    )

    const [editCommentMutation] = useMutation(EDIT_COMMENT, {
        update(cache, {data: updateProjectComment }){
            const { projectBySlug } = cache.readQuery({
                query: GET_PROJECT_BY_SLUG,
                variables: { slug: match.params.slug }
            })
            cache.writeQuery({
                query: GET_PROJECT_BY_SLUG,
                data: { projectBySlug: projectBySlug.comments = updateProjectComment.updateProjectComment.project.comments}
            })
            newBool(!boolState)
        }
    })

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
        e.target.style.height = "1px";
        e.target.style.height = (1+e.target.scrollHeight)+"px";
          
    }
    

    const submitComment = async e => {
        e.preventDefault()

        const newComment = await addComment({variables: {data: comment}})

        setComment({...comment, comment: ''})
        inputRef.current.blur()
    }

    



    const deleteComment = async (e, com) => {
        e.preventDefault()

        const deleted = await removeComment({variables: {id: com}})

        if(deleted) {
            refetch()
        }
    }

    if(!comments) return <div>Loading Comments...</div>
    return (
        <div onClick={(e) => settingsBlur(e)} className='projectCommentsContainer'>
            <h2 className='commentsTitle'>Comments</h2>
            {
                localStorage.getItem('token') 
                && 
                <form className='comment-form click' onSubmit={submitComment}>
                    <textarea
                        className='click'
                        onChange={commentHandle}
                        value={comment.comment}
                        name='comment'
                        ref={inputRef}
                    />
                    <button className='click' disabled={comment.comment.length === 0 ? true : false} style={comment.comment.length === 0 ? {background: '#4840ba', cursor: 'default'} : null}>Submit</button>
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
                <button disabled={comments.length < commentCount ? true : false} style={comments.length <= commentCount ? {color: 'gray', border: '1px solid gray', cursor: 'default'} : null} className='see-more-comments' onClick={() => setCommentCount(commentCount + 8)}>{commentCount < comments.length ? 'Load more comments' : 'No more comments'}</button>
            </div>
            
        </div>
    )
}

export default withRouter(ProjectComments)
