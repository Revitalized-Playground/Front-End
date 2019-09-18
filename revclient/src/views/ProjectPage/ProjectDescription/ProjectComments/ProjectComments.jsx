import React from 'react'

const ProjectComments = ({comments}) => {
    return (
        <div className='projectCommentsContainer'>
            <h2 className='commentsTitle'>Comments</h2>
            <div>
                {comments.map(each => (
                    <div className='commentFlex'>
                        <img src={each.profilePic} alt='Profile icon' />
                        <div>
                            <p className='comment'>{each.comment}</p>
                            <div className='lowerCommentSide'>
                                <p>{each.createdAt}</p>
                                <p>{each.likes.length} {each.likes.length === 1 ? 'Like' : 'Likes'}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectComments