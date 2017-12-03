import React from 'react';
import Tabs, {Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import backImg from '../assets/images/communities_background.jpeg'

import './community.css';

class Community extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "General",
            generalChannels: [],
            specializedChannels: [],
        };
    }

    handleChange = (e, value) => {
        this.setState({value});
    };

    componentWillMount = () => {
        // getGeneralChannels();
        fetch("http://172.46.3.18:6001/api/GetChannels?category=General")
        .then((res) => res.json())
        .then((res) => {
            const channels = Object.entries(res)
                .filter((channel) => channel[0] < 9)
                .map((channel) => {
                    return channel[1].channelname;
                });
            this.setState({generalChannels: channels});
        });

        // getSpecializedChannels();
        fetch("http://172.46.3.18:6001/api/GetChannels?category=Specialized")
        .then((res) => res.json())
        .then((res) => {
            const channels = Object.entries(res)
                .filter((channel) => channel[0] < 9)
                .map((channel) => {
                    return channel[1].channelname;
                });
            this.setState({specializedChannels: channels});
        });
    };

    render() {
        const {value} = this.state;
        const general = this.state.generalChannels;
        const specialized = this.state.specializedChannels;
        // console.log(general);
        // console.log(specialized);
        return (
            <div className="Community">
                
                <div className="back-img">
                    {/* <img className="back-img" src={backImg} /> */}
                </div>
                
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    fullWidth
                >
                    <Tab label="General" value="General" />
                    <Tab label="Specialized" value="Specialized"/>
                </Tabs>
                
                {value === "General" && <div>{general}</div>}
                {value === "Specialized" && <div>{specialized}</div>}

            </div>
        );
    };

}


export default Community;
