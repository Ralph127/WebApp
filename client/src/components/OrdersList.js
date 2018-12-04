import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, ListGroupItemText } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getOrders, deleteOrder } from '../actions/orderActions';
import PropTypes from 'prop-types';
import OrderModal from './OrderModal';
import OrderPutModal from './OrderPutModal';
import AppNavbar from './AppNavbar';
import Maps from './Maps';


  
class OrdersList extends Component {
 

    componentDidMount(){
        this.props.getOrders();
    }

    onDeleteClick = id => {
        this.props.deleteOrder(id);
    }

    render(){
        const { orders } = this.props.order;

        return(
            <Container>
                <AppNavbar/>
                <h1>Orders List</h1>
                <OrderModal/>
                    <ListGroup>
                        <TransitionGroup className="Order-list">
                            {orders.map(({_id, name, price, quantity, producer, text}) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}>Delete</Button>

                                            <OrderPutModal id={_id} name={name} price={price} quantity={quantity} producer={producer} text={text}/>    
                                        
                                        <b>Name</b> {name} {price}
                                        <ListGroupItemText>
                                            <b> Sold by </b> {producer}
                                            <b>quantity </b> {quantity}
                                            <b>text</b> {text}
                                            </ListGroupItemText>
                                                             
                                    </ListGroupItem>
                                    
                                    
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                    <Maps /> 
            </Container>
        );
    }
}

OrdersList.propTypes = {
    getOrders: PropTypes.func.isRequired,
    order: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    order: state.order
});

export const OrderExport = connect(mapStateToProps, { getOrders, deleteOrder })(OrdersList);

