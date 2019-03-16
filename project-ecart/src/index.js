import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render() {
        return (
            <div>
                <div>
                    <h3>Cart</h3>
                    <div>
                        <p>
                            <i>Your cart is empty.</i>
                        </p>
                    </div>
                    <div>Total: $0
                        <button disabled="">Checkout</button>
                    </div>
                </div>
                <hr/>
                <div>
                    <h3>Inventory</h3>
                    <div>
                        <div>Apple – $10
                            <button>Buy</button> (0 selected, 12 in stock)
                        </div>
                        <div>Melon – $20
                            <button>Buy</button> (0 selected, 5 in stock)
                        </div>
                        <div>Orange – $8
                            <button>Buy</button> (0 selected, 20 in stock)
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
