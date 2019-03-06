import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    let min = 1;
    let max = 1;
    return (
        <div>
            <Counter title="CounterA " min={min} max={max}/>
            <Counter title="CounterB " min={min} max={max}/>
        </div>
    );
}

function Counter(props) {
    return (
            <div>
                <span>{props.title}</span>
                <span>0</span>
                <button onClick={minusClick}>-{props.min}</button>
                <button onClick={plusClick}>+{props.max}</button>
                <button onClick={resetClick}>Reset</button>
            </div>
        );
}

function minusClick(e) {
    e.preventDefault();
    console.log('minusClick');
}

function plusClick(e) {
    e.preventDefault();
    console.log('plusClick');
}

function resetClick(e) {
    e.preventDefault();
    console.log('resetClick');
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


