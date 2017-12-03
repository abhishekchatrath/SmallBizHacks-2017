import React from 'react';
import Tabs, {Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

class Community extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            generalChannels: [],
            specializedChannels: [],
        };
    }

    handleChange = (e, value) => {
        this.setState({value});
    };

    render() {
        return (
            <div className="Community">
                <Paper>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="General" />
                        <Tab label="Specialized" />
                    </Tabs>
                </Paper>
            </div>
        );
    };

}

export default Community;