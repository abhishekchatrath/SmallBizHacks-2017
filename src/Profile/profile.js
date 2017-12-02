import React, { Component } from 'react';
import './profile.css';

class Profile extends React.Component {
  render() {
    return (
      <div className="mdl-grid">
        <div classNanme="mdl-cell mdl-cell--5-col">
          <img src='https://static.pexels.com/photos/220453/pexels-photo-220453.jpeg' alt='' width="100" />
        </div>
      </div>
    )
  }
}

export default Profile;
