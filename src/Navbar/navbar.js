import React, { Component }  from 'react';
import './navbar.css'

class Navbar extends Component{
  render() {
    return(
      <header className="mdl-layout__header ctnr">
        <div className="mdl-layout__header-row ctnr">
          <span className="mdl-layout-title">Title</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <a className="mdl-navigation__link  ctnr1" href="http://localhost:3000/profile" >RPOFILE</a>
            <a className="mdl-navigation__link  ctnr1" href="http://localhost:3000/communities">COMMUNITIES</a>
            <a className="mdl-navigation__link  ctnr1" href="http://localhost:3000/communities/post">AWARDS</a>
            <a className="mdl-navigation__link ctnr1" href="">searchicon</a>
          </nav>
        </div>
      </header>

    )
  }
}

export default Navbar;
