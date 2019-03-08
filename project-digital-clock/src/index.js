import React from 'react';
import ReactDOM from 'react-dom';

class DigitalClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dateTime: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            dateTime: new Date()
        });
    }

    render() {
        return (
            <div>

                <span>{this.state.dateTime.toLocaleTimeString()}</span>
            </div>
        );
    }
}


ReactDOM.render(<DigitalClock />, document.getElementById('root'));

