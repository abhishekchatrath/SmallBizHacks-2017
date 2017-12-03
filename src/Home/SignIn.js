import React from 'react';
import './Signup.css';
import history from '../history.js'

class SignIn extends React.Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className="SignIn">
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="sample3" placeholder="Username" />
                <br />
                <input className="mdl-textfield__input" type="text" id="sample3" placeholder="Password" />

              </div>
              <div>
              <button className="mdl-button mdl-js-button mdl-js-ripple-effect REGISTER">
                REGISTER
              </button>
              <button className="mdl-button mdl-js-button mdl-js-ripple-effect loggin">
                <a onClick={()=>{let path='/communities'; 
                          history.push(path);
                        }}>LOG IN</a>
                </button>
                </div>
                </form>
            </div>
        );
    };
}

export default SignIn;
