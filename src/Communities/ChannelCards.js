import React from 'react';
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import history from '../history.js'
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import './ChannelCards.css';

class ChannelCards extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            channels: props.channels
        };
    }

    getChannelCards = () => {

        const { classes } = this.props;

        return this.state.channels.map((channel) => {
            const card = (
                <div key={channel.id} onClick={()=>{let path='/communities/list';
                history.push(path)}}> 
                    <Card className={classes.card}>
                        <div style={ {height: 10, width: "auto"} }></div>
                        <CardMedia 
                            className={classes.media}
                            image={channel.imagelink}
                            title={channel.channelname}/>
                        <CardContent>
                            <Typography type="headline" component="h2">
                                {channel.channelname}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            );
            return card;
        });
    };

    render() {
        return (
            <div className="ChannelCards">
                {this.getChannelCards()}
            </div>
        );
    };
}

ChannelCards.propTypes = {
    channels: PropTypes.array.isRequired,
};


const styles = {
    card: {
    //   maxWidth: 345,
      width: 400,
      margin: 20,
    },
    media: {
      height: 200,
      margin: 30,
    //   paddingTop: 10,
    //   marginTop: 30,
    },
};

export default withStyles(styles)(ChannelCards);