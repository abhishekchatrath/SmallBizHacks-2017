import React, { Component }  from 'react';
import './navbar.css'
import logo from './logo.png';

class Navbar extends Component{

  render() {
    let ctnr = {
      profile: "ctnr1",
      communities: "ctnr1",
      awards: "ctnr1",
      searchicon: "ctnr1",
    };

    ctnr[this.props.currentPage] = "ctnr2";

    // switch (this.props.currentPage){
    //   case "home":
    //   break;

    //   case "profile":
    //   ctnr.profile = "ctnr2";
    //   break;

    //   case "communities":
    //   ctnr.communities = "ctnr2";
    //   break;

    //   case "awards":
    //   ctnr.awards = "ctnr2";      
    //   break;
        
    //   default:
    //   this.tr=<div>shouldn't see this</div>;
    //   break;
  
    // }

    return (
      <header className="mdl-layout__header ctnr">
        <div className="mdl-layout__header-row ctnr">
          <span className="mdl-layout-title">
          <img className="logo" src={logo} width="120" height="30"/>
          </span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
              
              <a 
                className={"mdl-navigation__link " + ctnr.profile} 
                id= "profile" 
                /* href="http://localhost:3000/profile"  */
                onClick={()=>this.props.selectPage("profile")}
              >PROFILE</a>

              <a 
                className={"mdl-navigation__link " + ctnr.communities} 
                id = "communities" 
                /* href="http://localhost:3000/communities"  */
                onClick={()=>this.props.selectPage("communities")}
              >COMMUNITIES</a>

              <a 
                className={"mdl-navigation__link " + ctnr.awards} 
                id = "awards" 
                /* href="http://localhost:3000/communities/post"  */
                onClick={()=>this.props.selectPage("awards")}
              >AWARDS</a>

              <a 
                className={"mdl-navigation__link " + ctnr.searchicon} 
                href=""
              >
              <i className="material-icons">search</i>

              </a>

            </nav>           
        </div>
      </header> 
    );
  }
}

export default Navbar;
