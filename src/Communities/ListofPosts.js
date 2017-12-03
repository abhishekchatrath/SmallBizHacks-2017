import React from 'react';
import './Post.css'
import './list.css'

import Chip from 'material-ui/Chip';

class PostList extends React.Component {

    render() {
        return (
          <div className="Post">
                <header className="mdl-layout__header postheader">
                    SUPPLIER
                </header>

            <div className="mdl-grid major Profilepic">
                <div className="mdl-cell mdl-cell--4-col userdetail" style={{marginLeft: '-6em'}}>
                    <div className="useinfo" style={{textAlign: 'left'}}>
                      <h5> FILTERS </h5>
                      <div style={{backgroundColor: '#EAE6E6', height :'20em'}}>
                        <label>
                        <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input" checked />
                        <span className="mdl-checkbox__label">Newer</span>
                        </label>
                        <br />
                        <label>
                        <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input" checked />
                        <span className="mdl-checkbox__label">Older</span>
                        </label>
                        <br />
                        <label>
                        <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input" checked />
                        <span className="mdl-checkbox__label">Trending</span>
                        </label>
                        </div>
                    </div>
                </div>

                <div className="mdl-cell mdl-cell--8-col content">
                    <div style={{width: '56em'}}>
                    <div className="demo-card-square mdl-card mdl-shadow--0dp nominheight">
                    <div className="mdl-card__title" style={{display: 'block'}}>
                    <h2 className="mdl-card__title-text">Text Goes Here</h2>
                    <span style={{display: 'flex'}}> <Chip label="Barbershop" style={{margin: '5px 5px 5px 5px'}}/>
                    <Chip label="Garage" style={{margin: '5px 5px 5px 5px'}}/>
                    <Chip label="Brewery" style={{margin: '5px 5px 5px 5px'}}/> </span>
                    </div>
                      <div className="mdl-card__supporting-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenan convallis.
                      </div>
                      <div className="mdl-card__actions mdl-card--border" style={{textAlign: 'right', color: 'black'}}>
                      <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="http://localhost:3000/communities/post">
                        Read More
                      </a>
                      </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        );
    };
}

export default PostList;
