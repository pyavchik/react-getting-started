import React from 'react';
import ReactDOM from 'react-dom';


class Cart extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <p> Your cart is empty </p>
                </div>
                <div>
                    <span>Total: $0</span>
                    <button type="button" onClick={this.buyClick} disabled>Checkout</button>
                </div>
            </div>

        );
    }
}

class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            stock: this.props.stock,
            emptyStock: false
        };
    }
    buyClick = () => {
        this.setState(({ selected, stock }) => ({
            selected: selected + 1,
            stock: stock - 1,
        }));
    };

    render() {
        return (
            <div>
                <span> {this.props.title} – $</span>
                <span> {this.props.price}</span>
                <button type="button" onClick={this.buyClick} disabled={!this.state.stock > 0}>Buy</button>
                <span> ({this.state.selected} selected, {this.state.stock} in stock)</span>
            </div>

        );
    }
}

function App() {
    return (
        <div>
            <h3>Cart</h3>
            <Cart title={"Apple"} price={10} selectedCount={0} inStockCount={12}/>
            <hr/>
            <h3>Inventory</h3>
            <Inventory title={"Apple"} price={10} selected={0} stock={12}/>
            <Inventory title={"Melon"} price={20} selected={0} stock={5}/>
            <Inventory title={"Orange"} price={8} selected={0} stock={20}/>

        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
