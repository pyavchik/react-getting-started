import React from 'react';
import ReactDOM from 'react-dom';


class BmiCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: { min: 90, max: 245 , actual: 175},
        };
    }



    render() {
        return (
            <div>
                <div>Height: 90 <input type="range"  min={this.state.value.min} max={this.state.value.max}  /> 245 <b>151 cm</b></div>
                <div>Weight: 35 <input type="range" min={this.state.value.min} max={this.state.value.max} /> 200 <b>75 kg</b></div>
                <span>BMI:</span>
                <b>32.9 Obese</b>
            </div>
        );
    }
}


ReactDOM.render(
    <BmiCalculator />,
    document.getElementById('root')
);
