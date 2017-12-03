import React  from 'react';
import './mainbody.css'
import Profile from '../Profile/profile.js'
import {Route} from 'react-router-dom';
class Main extends React.Component {
  render() {
    return(
      <main className="mdl-layout__content">
        <div className="page-content">
          <Route path="/profile" render={ () => <Profile/> } />
          <Route path="/communities" render={ () => <Profile/> } />
          <Route path="/awards" render={ () => <Profile/> } />
        </div>
      </main>
    )
  }
}
export default Main;
