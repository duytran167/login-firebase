import React from 'react'

function PostItem({title,
    desc,}) {
    return (
        <div className="post-item">
            <h2 className="post-title">{title}</h2>
            <h2 className="post-desc"> {desc}</h2>

            
        </div>
    )
}
export default PostItem;