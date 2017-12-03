import React, { Component } from 'react';
import './Post.css';

import dudeone from './B&WDude.jpg';
import dudetwo from './MaddieAsADude.jpg';
import dudethree from './OnPointBeard.jpg';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (



      <div className="Post">
            <header className="mdl-layout__header postheader">
                SUPPLIER
            </header>

        <div className="mdl-grid major Profilepic">
            <div className="mdl-cell mdl-cell--4-col userdetail">
                <div className="useinfo">
                    <img className="profilepic" src='https://static.pexels.com/photos/220453/pexels-photo-220453.jpeg' alt='' width="100" />
                    <div className="userfield">
                        {this.props.username}
                    </div>
                    <div className="userfield">
                        {this.props.job}
                    </div>
                </div>
            </div>
            <div className="mdl-cell mdl-cell--8-col content">
                <div className="contentDiv">
                    <div className="contenttittle">
                        MY SUPPLIER COND ME
                    </div>
                    <div className="contentbody">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vul
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                    </div>



            </div>
            <h5> COMMENTS </h5>
            <div className='CommentsContainer'>

            <div className='ProfilePicContainer'>
            <input type="image" src={dudeone} className="CircleButton"/>
            </div>

              <div className='CommentsContent'>
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vul
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              </p>
              </div>
              <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect ActivatedButton">
                <i className="material-icons">star_rate</i>
                </button>
            </div>

            <div className='CommentsContainer'>

            <div className='ProfilePicContainer'>
            <input type="image" src={dudetwo} className="CircleButton"/>
            </div>

              <div className='CommentsContent'>
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vul
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              </p>
              </div>
              <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect ActivatedButton">
                <i className="material-icons">star_rate</i>
                </button>
            </div>

            <div className='CommentsContainer'>

            <div className='ProfilePicContainer'>
            <input type="image" src={dudethree} className="CircleButton"/>
            </div>

              <div className='CommentsContent'>
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vul
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              </p>
              </div>
              <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect ActivatedButton">
                <i className="material-icons">star_rate</i>
                </button>
            </div>

            <div className="InputContainer">

            <form className='FormContainer'>
            <div className="mdl-textfield mdl-js-textfield">
            <textarea className="mdl-textfield__input" type="text" rows= "2" cols='67' id="sample5" placeholder="Comments"></textarea>
            </div>
            <div className='Button'>
            <button className='ActualButton'>
              <i className="material-icons">add</i>
            </button>
            </div>
            </form>

            </div>

        </div>

    </div>
   </div>
    )
  }
}

export default Post;
