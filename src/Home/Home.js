import React from 'react';
import SignIn from './SignIn';

class Home extends React.Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className="Home">
                <p>find your community</p>
                <p>grow your business</p>
                <SignIn />
            </div>
        );
    };
}

export default Home;
