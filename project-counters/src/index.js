import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    addClick = (value) => {
        this.setState(({ count }) => ({
            count: count + value
        }));
    };

    plusClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };

    minusClick = () => {
        this.setState(({ count }) => ({
            count: count -1
        }));
    };

    resetClick = () => {
        this.setState(() => ({
            count: 0
        }));
    };

    render() {
        return (
            <div>
                <span> {this.props.title} </span>
                <span> {this.state.count} </span>
                <button type="button" onClick={this.addClick}> -{this.props.min} </button>
                <button type="button" onClick={this.plusClick}> +{this.props.max} </button>
                <button type="button" onClick={this.resetClick}> Reset</button>
            </div>
        );

    }
}

function App() {
    return (
        <div>
            <Counter title="CounterA " min={1} max={1}/>
            <Counter title="CounterB " min={1} max={1}/>
        </div>
    );
}

ReactDOM.render(
    <App />,

    document.getElementById('root')
);
