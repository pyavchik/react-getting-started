import React from 'react';
import ReactDOM from 'react-dom';


class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        };
    }


    handleChange = (event) => {
        this.setState({value: event.target.value})
    };

    render() {
        return (
            <div>
                <div>{this.props.title}: {this.props.min}
                    <input type="range"
                           min={this.props.min} max={this.props.max}
                           value={this.state.value}
                           onChange={this.handleChange}
                           step="1"/>  {this.props.max}
                    <b>{this.state.value} {this.props.units}</b>
                </div>
            </div>
        );
    }
}

function BMI() {
    return (
        <div>
            BMI {11.4} {"Underweight"}
        </div>
    )

}

function App() {
    return (
        <div>
            <Slider title="Height" min={90} max={245} units="cm" value={175}/>
            <Slider title = "Weight" min={35} max={200} units="kg" value={75}/>
            <BMI title="BMI" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
