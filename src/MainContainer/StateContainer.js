import React, { Component } from 'react';
import Navbar from '../Navbar/navbar.js';
import Main from './mainbody.js';

class StateContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage:"home",
        };
    }

    selectPage=(p)=>{
        console.log("I am here at the selectPage");
        this.setState({
            currentPage: p,
        });
    }
    
    render() {
        console.log("app: currentPage = "+this.state.currentPage);
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Navbar currentPage={this.state.currentPage} selectPage={this.selectPage}/>
                <Main currentPage={this.state.currentPage}/>
            </div>
        );
    }

}

export default StateContainer;
