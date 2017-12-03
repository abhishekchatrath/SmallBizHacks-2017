import React, { Component } from 'react';
import './Post.css';

class Post extends React.Component {
  render() {
    return (
      <div className="Post">
            <header className="mdl-layout__header postheader">
                Post Title
            </header>
                        
        <div className="mdl-grid major Profilepic">
            <div className="mdl-cell mdl-cell--4-col">
                <img className="profilepic" src='https://static.pexels.com/photos/220453/pexels-photo-220453.jpeg' alt='' width="100" />
            </div>
            <div className="mdl-cell mdl-cell--8-col content">
                Content
            </div>
            
        </div>
        
    </div>
   
    )
  }
}

export default Post;
