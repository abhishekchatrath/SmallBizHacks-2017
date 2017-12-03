import React  from 'react';
import './mainbody.css'
import Home from '../Home/Home'
import Profile from '../Profile/profile.js'
import Community from '../Communities/Community'
import Awards from '../Awards/Awards';
import Post from '../Communities/Post.js'
import {Route,Redirect} from 'react-router-dom';

class Main extends React.Component {
  render() {
    return(
      <main className="mdl-layout__content">
        <div className="page-content">
          <Route exact path="/" render={ () => <Redirect to="/home" />} />
          <Route path="/home" render={ () => <Home/> } />
          <Route path="/profile" render={ () => <Profile/> } />
          <Route path="/communities" render={ () => <Community/> } />
          <Route path="/awards" render={ () => <Awards/> } />

        </div>
      </main>
    )
  }
}
export default Main;
