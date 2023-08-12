import React from 'react'
import './PostPage.css'

const Postpage = ({profilename, img, postImage, postcaption}) => {
  return (
    <>
  
    <div className="post-box">
    <div className="post-header">
    <div className="user-info">
        <h1 className="profile-name">{profilename}</h1>
        <div className="user-details">
        <img className="profile-image" src={img} alt="User Profile"/>
        <div className="post-content">
        <p className="post-caption">{postcaption}</p>
        <img className="post-image" src={postImage} alt="Post Image"/>
        <div className="post-actions">

        <div className="post-actions">
        <button className="action-button">Like</button>
        <button className="action-button">Comment</button>
        <button className="action-button">Share</button>
        </div>
        </div>
    
        
    </div>
    </div>
    </div>
    </div>
    </div>
  
     </>


);
}


export default Postpage;