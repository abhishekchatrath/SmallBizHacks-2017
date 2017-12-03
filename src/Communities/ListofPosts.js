import React from 'react';
import './Post.css'
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import './list.css'

import Chip from 'material-ui/Chip';

class AddPostForm extends React.Component {
  handleRequestClose = () => {
    this.props.onRequestClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onRequestClose(value);
  };

  render() {
    const { classes, onRequestClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <DialogTitle>NEW POST</DialogTitle>
            <div className='textareacontainer mdl-grid'>
            <div className='mdl-cell mdl-cell--12-col'>
            <textarea rows='20' cols='100'></textarea>
            </div>
            </div>
            <div className='mdl-grid'>
            <div className='RadioButtonContainer mdl-cell mdl-cell--4-col'>
              <input type='radio' />Lorem
              <br />
              <input type='radio' />Lorem
              <br />
              <input type='radio' />Lorem
            </div>
            <div className='TagsContainer mdl-cell mdl-cell--4-col'>
            <span style={{display: 'flex'}}> <Chip label="Lorem" style={{margin: '5px 5px 5px 5px'}}/>
            <Chip label="Lorem" style={{margin: '5px 5px 5px 5px'}}/>
            <Chip label="Lorem" style={{margin: '5px 5px 5px 5px'}}/> </span>
            </div>
          </div>

          <div className='mdl-grid'>
          <div>
          <button className="ActualButton" onClick={this.handleRequestClose}>
            <i className="material-icons">add</i>
          </button>
          </div>
          </div>


      </Dialog>
    );
  }
}


class PostList extends React.Component {

  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = value => {
    this.setState({open: false });
  };


    render() {
        return (
          <div className="Post">
                <header className="mdl-layout__header postheader">
                    SUPPLIER
                </header>



            <div className="mdl-grid major checkboxcontainer">
                <div className="mdl-cell mdl-cell--4-col userdetail" style={{marginLeft: '-6em'}}>
                    <div className="useinfo" style={{textAlign: 'left'}}>
                      <h5> FILTERS </h5>
                      <div style={{backgroundColor: '#EAE6E6', height :'20em', marginTop: '9%'}}>
                        <div className="towrap">
                        <span className='checkmarks'>
                        <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input" checked />
                        <span className="mdl-checkbox__label">Newer</span>
                        </span>
                        <br />
                        <label className='checkmarks'>
                        <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input" checked />
                        <span className="mdl-checkbox__label">Older</span>
                        </label>
                        <br />
                        <label className='checkmarks'>
                        <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input" checked />
                        <span className="mdl-checkbox__label">Trending</span>
                        </label>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="mdl-cell mdl-cell--8-col content">
                <div className='AddPostButtonContainer'>

                <button className="ActualButton" onClick={this.handleClickOpen}>
                  <i className="material-icons">add</i>
                </button>
                </div>

                    <div style={{width: '56em', marginBottom: '3em'}}>
                    <div className="demo-card-square mdl-card mdl-shadow--0dp nominheight">
                    <div className="mdl-card__title" style={{display: 'block'}}>
                    <h2 className="mdl-card__title-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas facilisis pulvinar.</h2>
                    <span className='spansandstuff' style={{display: 'flex'}}> <Chip label="Lorem" style={{margin: '5px 5px 5px 5px'}}/>
                    <Chip label="Lorem" style={{margin: '5px 5px 5px 5px'}}/>
                    <Chip label="Lorem" style={{margin: '5px 5px 5px 5px'}}/> </span>
                    </div>
                      <div className="mdl-card__supporting-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas facilisis pulvinar. Mauris felis dolor, maximus eget odio nec, ullamcorper commodo nulla. Phasellus fringilla sem eu enim ullamcorper dignissim. Sed auctor erat quis justo elementum pharetra eu a est. Duis ac nisi nisl.
                      </div>
                      <div className="mdl-card__actions mdl-card--border" style={{textAlign: 'right', color: 'black'}}>
                      <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="http://localhost:3000/communities/post">
                        Read More
                      </a>
                      </div>
                      </div>
                    </div>

                    <div style={{width: '56em', marginBottom: '3em'}}>
                    <div className="demo-card-square mdl-card mdl-shadow--0dp nominheight">
                    <div className="mdl-card__title" style={{display: 'block'}}>
                    <h2 className="mdl-card__title-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas facilisis pulvinar.</h2>
                    <span className='spansandstuff' style={{display: 'flex'}}> <Chip label="Lorem" style={{margin: '5px 5px 5px 5px'}}/>
                    <Chip label="Lorem" style={{margin: '5px 5px 5px 5px'}}/>
                    <Chip label="Lorem" style={{margin: '5px 5px 5px 5px'}}/> </span>
                    </div>
                      <div className="mdl-card__supporting-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas facilisis pulvinar. Mauris felis dolor, maximus eget odio nec, ullamcorper commodo nulla. Phasellus fringilla sem eu enim ullamcorper dignissim. Sed auctor erat quis justo elementum pharetra eu a est. Duis ac nisi nisl.
                      </div>
                      <div className="mdl-card__actions mdl-card--border" style={{textAlign: 'right', color: 'black'}}>
                      <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="http://localhost:3000/communities/post">
                        Read More
                      </a>
                      </div>
                      </div>
                    </div>

                    <div style={{width: '56em', marginBottom: '3em'}}>
                    <div className="demo-card-square mdl-card mdl-shadow--0dp nominheight">
                    <div className="mdl-card__title" style={{display: 'block'}}>
                    <h2 className="mdl-card__title-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas facilisis pulvinar.</h2>
                    <span className='spansandstuff' style={{display: 'flex'}}> <Chip label="Lorem" style={{margin: '5px 5px 5px 5px'}}/>
                    <Chip label="Lorem" style={{margin: '5px 5px 5px 5px'}}/>
                    <Chip label="Lorem" style={{margin: '5px 5px 5px 5px'}}/> </span>
                    </div>
                      <div className="mdl-card__supporting-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas facilisis pulvinar. Mauris felis dolor, maximus eget odio nec, ullamcorper commodo nulla. Phasellus fringilla sem eu enim ullamcorper dignissim. Sed auctor erat quis justo elementum pharetra eu a est. Duis ac nisi nisl.
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
            <AddPostForm
            selectedValue={this.state.selectedValue}
            open={this.state.open}
          onRequestClose={this.handleRequestClose}
        />
          </div>
        );
    };
}

export default PostList;
