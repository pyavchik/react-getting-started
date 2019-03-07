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
                <button type="button" onClick={minusClick}>-{props.min}</button>
                <button type="button" onClick={plusClick}>+{props.max}</button>
                <button type="button" onClick={resetClick}>Reset</button>
            </div>
        );
}

function minusClick() {

    console.log('minusClick');
}

function plusClick() {

    console.log('plusClick');
}

function resetClick() {

    console.log('resetClick');
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


