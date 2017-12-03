import React from 'react';
import SignIn from './SignIn';
import './Home.css';
import StarryNight from './star_night_sky.jpg';

class Home extends React.Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
          <div>
          <img src={StarryNight} height="1080" width="1920" className='fill'/>
          <div className='Headings'>
          <p className='NormalCharacterStyle'>find your community</p>
          <p className='NormalCharacterStyle'>grow your business</p>
          </div>
            <div className="Home">
                <SignIn />
            </div>
            </div>
        );
    };
}

export default Home;
