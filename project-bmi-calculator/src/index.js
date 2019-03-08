import React from 'react';
import ReactDOM from 'react-dom';


class BmiCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 175

        };
    }


    handleChange = (event) => {
        this.setState({value: event.target.value})
    };

    render() {
        return (
            <div>
                <div>Height: 90 { }
                    <input type="range"
                           min="90" max="245"
                           value={this.state.value}
                           onChange={this.handleChange}
                           step="1"/>  245
                    <b>{this.state.value} cm</b>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <BmiCalculator />,
    document.getElementById('root')
);
