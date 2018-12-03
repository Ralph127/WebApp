import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getFruits, deleteFruit } from '../actions/fruitActions';
import PropTypes from 'prop-types';
import FruitModal from './FruitModal';
import AppNavbar from './AppNavbar';

class FruitsList extends Component {

    componentDidMount(){
        this.props.getFruits();
    }

    onDeleteClick = id => {
        this.props.deleteFruit(id);
    }

    render(){
        const { fruits } = this.props.fruit;

        return(
            <Container>
                <AppNavbar/>
                <h1>Fruit List</h1>
                <FruitModal/>
                    <ListGroup>
                        <TransitionGroup className="Fruit-list">
                            {fruits.map(({_id, name, price, producer}) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
                                        <b>Name</b> {name} {price}
                                        <b> Sold by </b> {producer}                     
                                    </ListGroupItem>
                                    
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
            </Container>
        );
    }
}

FruitsList.propTypes = {
    getFruits: PropTypes.func.isRequired,
    fruit: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    fruit: state.fruit
});

export default connect(mapStateToProps, { getFruits, deleteFruit })(FruitsList);