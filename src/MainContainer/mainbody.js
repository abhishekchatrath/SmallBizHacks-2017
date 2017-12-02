import React  from 'react';
import './mainbody.css'
import Profile from '../Profile/profile.js'

class Main extends React.Component {
  render() {
    return(
      <main className="mdl-layout__content">
        <div className="page-content"><Profile /></div>
      </main>
    )
  }
}
export default Main;
