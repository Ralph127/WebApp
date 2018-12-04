import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    Form,
    ModalBody,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addOrder } from '../actions/orderActions';

class OrderModal extends Component {
    state = {
        modal: false,
        name: '',
        price: '',
        quantity: '',
        producer: '',
        text: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };


    onSubmit = e => {
        e.preventDefault();

        console.log(`Name: ${this.state.name}`);
        console.log(`Price: ${this.state.price}`);
        console.log(`Producer: ${this.state.producer}`);
        const newOrder = {
            name: this.state.name,
            price : '$' + this.state.price,
            quantity: this.state.quantity,
            producer: this.state.producer,
            text: this.state.text
        }
        console.log("order happened");
        //Add fruit via addFruit action
        this.props.addOrder(newOrder);

        //close modal
        this.toggle();
    }

    render(){

        return(
            <div>
                <Button 
                color="dark" 
                style={{marginBottem: '2rem'}}
                onClick={this.toggle}
                >
                Add Order
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >               
                    <ModalHeader toggle={this.toggle}>Create an order</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="order">Order</Label>
                                <Input
                                type="text"
                                name="name"
                                id="order"
                                placeholder="Add Order Item"
                                value={this.state.name}
                                onChange={e => this.setState({name: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="price">Price</Label>
                                <Input
                                type="text"
                                price="price"
                                id="price"
                                placeholder="Add Price"
                                value={this.state.price}
                                onChange={e => this.setState({price: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="quantity">Quantity</Label>
                                <Input
                                type="text"
                                price="price"
                                id="price"
                                placeholder="Add Price"
                                value={this.state.quantity}
                                onChange={e => this.setState({quantity: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="producer">Produced by</Label>
                                <Input
                                type="text"
                                price="producer"
                                id="producer"
                                placeholder="Produced by"
                                value={this.state.producer}
                                onChange={e => this.setState({producer: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="test">Comments</Label>
                                <Input
                                type="textarea"
                                price="textarea"
                                id="textarea"
                                placeholder="Comments"
                                value={this.state.text}
                                onChange={e => this.setState({text: e.target.value})}/>
                            </FormGroup>

                                <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                block
                                >
                                Add Order
                                </Button>
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    order: state.order
})

export default connect(mapStateToProps, { addOrder })(OrderModal);