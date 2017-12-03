import React, { Component } from 'react';
import './profile.css';
import Chip from 'material-ui/Chip';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

import pic from './BnWDude.jpg'

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 300,
    height: 400,
  },
};

class Profile extends React.Component {
  constructor(){
    super();
    var request = require('request');
    request('http://localhost:6001/api/getUser', function(err, res, body){
      console.log(body);
    })
  }
  render() {
    return (
      <div className="mdl-grid margin">
        <div className="mdl-cell mdl-cell--3-col background">
        <div className='crop'>
          <img src={pic} width="100%" height="300"/>
          </div>
          <div>
          <h4 className='yellowheader'>BARBER</h4>
          <h4 className='yellowheader'>ADAM KING</h4>
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
            <Chip label="Barbers" style={{margin: '5px 5px 5px 5px'}}/>
            <Chip label="Saloons" style={{margin: '5px 5px 5px 5px'}}/>
          </div>
        </div>

        <div className="mdl-cell mdl-cell--6-col profiledetailcontainer">
          <div className='mycommunitiescontainer'>
            <h5> <b>MY COMMUNITIES</b> </h5>
            <div className="CommunitiesList">
            <div className='CommunityCards'>
            <img src="http://farzadsbarbershop.com/wp-content/uploads/2016/11/f1.jpg" style={{borderRadius: '50%'}} width='200' height='200'/>
            <p style={{color: '#1098DE'}}>Barbers</p>
            </div>
            <div classNmae='CommunityCards'>
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored AddButton">
              <i className="material-icons">add</i>
                </button>
                <p style={{color: '#1098DE'}}>Add Content</p>
                </div>
            </div>

            <div className='myHistoryPost'>
            <h5> <b>MY CONTENT</b> </h5>
            <ul className="demo-list-three mdl-list" style={{paddingLeft: '3em'}}>
              <li className="mdl-list__item mdl-list__item--three-line alignLiText">
                <span className="mdl-list__item-primary-content listbody">
                    <span>Title One</span>
                      <span className="mdl-list__item-text-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas facilisis pulvinar. Mauris felis dolor, maximus eget odio nec, ullamcorper commodo nulla. Phasellus fringilla sem eu enim ullamcorper dignissim.
                      </span>
                  </span>
                  <br />
                  <span className="mdl-list__item-secondary-content newLine">
                  <a className='mdl-button mdl-js-button mdl-button--primary'>
                  Read More
                  </a>
                  </span>
                </li>
                <hr />

                </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Profile);
