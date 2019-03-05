import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    render() {
        return (
            <div>
               {this.props.title}
               <button>{this.props.min}</button>
               <button>{this.props.max}</button>
               <button>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter title="Counter A" min={-1} max={+1}/> , document.getElementById('root'));
ReactDOM.render(<Counter title="Counter B" min={-1} max={+1}/> , document.getElementById('root2'));

