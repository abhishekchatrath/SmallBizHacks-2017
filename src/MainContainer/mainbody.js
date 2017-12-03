import React  from 'react';
import './mainbody.css'
import Profile from '../Profile/profile.js'
import {Route,Redirect} from 'react-router-dom';
class Main extends React.Component {
  render() {
    return(
      <main className="mdl-layout__content">
        <div className="page-content">
          <Route exact path="/" render={ () => <Redirect to="/home" />} />
          <Route path="/home" render={ () => <Profile/> } />
          <Route path="/profile" render={ () => <Profile/> } />
          <Route path="/communities" render={ () => <Profile/> } />
          <Route path="/awards" render={ () => <Profile/> } />

        </div>
      </main>
    )
  }
}
export default Main;
