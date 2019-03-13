import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 175,
            weight: 75
        };
    }

    handleHeightChange = (event) => {
        this.setState({height: event.target.value});
    };
    handleWeightChange = event => {
        this.setState({weight: event.target.value});
    };


    getBmiResult(bmi) {
        let {bmiResult} = this.state;
        if (bmi <= 15) {
            bmiResult = "Very severely underweight";
        } else if ((bmi > 15) && (bmi <= 16)) {
            bmiResult = "Very severely underweight";
        } else if ((bmi > 16) && (bmi <= 18.5)) {
            bmiResult = "Underweight";
        } else if ((bmi > 18.5) && (bmi <= 25)) {
            bmiResult = "Normal (healthy weight)";
        } else if ((bmi > 25) && (bmi <= 30)) {
            bmiResult = "Overweight";
        } else if ((bmi > 30) && (bmi <= 35)) {
            bmiResult = "Obese Class I (Moderately obese)";
        } else if ((bmi > 35) && (bmi <= 40)) {
            bmiResult = "Obese Class II (Severely obese)";
        } else if ((bmi > 40) && (bmi <= 45)) {
            bmiResult = "Obese Class III (Very severely obese)";
        } else if ((bmi > 45) && (bmi <= 50)) {
            bmiResult = "Obese Class IV (Morbidly Obese)";
        } else if ((bmi > 50) && (bmi <= 60)) {
            bmiResult = "Obese Class V (Super Obese)";
        } else if (bmi > 60) {
            bmiResult = "Obese Class VI (Hyper Obese)";
        } else {
            bmiResult = "something went wrong!";
        }
        return bmiResult;
    }

    getBmi(weight, height) {
        return weight / ((height / 100) ** 2);
    }

    render() {
        let {height, weight} = this.state;
        let bmi = this.getBmi(weight, height);
        let bmiResult;
        bmiResult = this.getBmiResult(bmi);


        return (
            <div>
                <Slider title={"Height"} min={90} max={245} value={height} onChange={this.handleHeightChange}
                        units="cm"/>
                <Slider title={"Weight"} min={35} max={200} value={weight} onChange={this.handleWeightChange}
                        units="kg"/>
                <div>BMI: <b>{bmi.toFixed(1)} {bmiResult}</b></div>
            </div>
        );
    }

}

class Slider extends React.Component {
    render() {

        return (
            <div>
                <span>{this.props.title}: {this.props.min}</span>
                <input type="range"
                       title={this.props.title}
                       min={this.props.min}
                       max={this.props.max}
                       value={this.props.value}
                       onChange={this.props.onChange}
                       step="1"/>
                <span>{this.props.max} </span> <b>{this.props.value} {this.props.units}</b>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
