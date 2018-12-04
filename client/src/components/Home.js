import React, { Component } from "react";
import '../App.css'
import AppNavbar from './AppNavbar';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.handleFruits = this.handleFruits.bind(this);
        this.handleVegetables = this.handleVegetables.bind(this);
    }

    handleFruits(event) {
        event.preventDefault();
        this.props.history.push('/fruits');
    }

    handleVegetables(event) {
        event.preventDefault();
        this.props.history.push('/vegetables');
    }

    render() {
        return (
            <div className="Home">
            <AppNavbar/>
                <h1>From Farm To Table</h1>
                <div className="buttons">
                    <form onSubmit={this.handleFruits}>
                        <input className='produceSelect' type='submit' value='Fruits'/>
                    </form>
                    <form onSubmit={this.handleVegetables}>
                        <input className='produceSelect' type='submit' value='Vegetables'/>
                    </form>
                    {/*<button bsStyle="info">Fruits</button>*/}
                    {/*<button>Vegetables</button>*/}

            </div>
        </div>
        );
    }
}