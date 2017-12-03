import React, { Component } from 'react';
import './Post.css';

class Post extends React.Component {
  render() {
    return (
      <div className="Post">
            <header class="mdl-layout__header">
            </header>
                        
        <div classNanme="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col">
                <img src='https://static.pexels.com/photos/220453/pexels-photo-220453.jpeg' alt='' width="100" />

            </div>
            <div class="mdl-cell mdl-cell--8-col">
                Content
            </div>
        </div>
      </div>
    )
  }
}

export default Post;
