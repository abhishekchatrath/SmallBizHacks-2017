import React, { Component } from 'react';
import './profile.css';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';


class Profile extends React.Component {
  render() {
    return (
      <div className="mdl-grid margin">
        <div className="mdl-cell mdl-cell--3-col background">
          <img src='https://static.pexels.com/photos/220453/pexels-photo-220453.jpeg' alt='' width="100%" height="300"/>

          <div>
          <h4 className='yellowheader'>FEM MECHANICS</h4>
          <h4 className='yellowheader'>AVA LOVELACE</h4>
          </div>

          <div className='biocontainer'>
          <p className='profilebio'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel feugiat velit. Aenean posuere erat id arcu luctus, vel condimentum ante
          ultrices. Suspendisse urna diam, laoreet ut sem id, eleifend ultrices metus.
          Nam porta purus sodales diam auctor, at ullamcorper ligula mattis. Proin in tincidunt elit. Cras ac consequat velit. Donec


          Sed in imperdiet elit, a condimentum velit. Nulla risus lorem, mollis maximus lorem eu, semper auctor lacus. Lorem ipsum
          </p>
          </div>
          <div className='tagcontainer'>
            <Chip label="Barbershop" style={{margin: '5px 5px 5px 5px'}}/>
            <Chip label="Garage" style={{margin: '5px 5px 5px 5px'}}/>
            <Chip label="Brewery" style={{margin: '5px 5px 5px 5px'}}/>
          </div>
        </div>

        <div className="mdl-cell mdl-cell--6-col profiledetailcontainer">
          <div className='mycommunitiescontainer'>
            <h5> My Communities </h5>
            <div className="CommunitiesList">
            <Avatar
            alt="Adelle Charles"
            src="http://farzadsbarbershop.com/wp-content/uploads/2016/11/f1.jpg"
            className="mdl-shadow--2dp"
            />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
