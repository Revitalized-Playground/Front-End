import React, {useState} from 'react'

const ProjectComments = ({comments}) => {
    const [commentCount, setCommentCount] = useState(2)
    return (
        <div className='projectCommentsContainer'>
            <h2 className='commentsTitle'>Comments</h2>
            <div>
                {comments.map((each, index) => {
                    if(index <= commentCount - 1) {
                        return <div className='commentFlex'>
                                    <img src={each.profilePic} alt='Profile icon' />
                                    <div>
                                        <p className='comment'>{each.comment}</p>
                                        <div className='lowerCommentSide'>
                                            <p>{each.createdAt}</p>
                                            <p>{each.likes.length} {each.likes.length === 1 ? 'Like' : 'Likes'}</p>
                                        </div>
                                    </div>
                                </div>
                    }    
                })}
            </div>
            <div className='comment-button-container'>
                <button disabled={comments.length < commentCount ? true : false} className='see-more-comments' onClick={() => setCommentCount(commentCount + 8)}>Load more comments</button>
            </div>
            
        </div>
    )
}

export default ProjectComments