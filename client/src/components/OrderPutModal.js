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
import { putOrder } from '../actions/orderActions';

class OrderPutModal extends Component {
      
    state = {
        modal: false,
        id : this.props.id,
        name: this.props.name,
        price: this.props.price,
        quantity: this.props.quantity,
        producer:this.props.producer,
        text: this.props.text
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };


    onSubmit = e => {
        e.preventDefault();

        const newOrder = {
            name: this.state.name,
            price : '$' + this.state.price,
            quantity: this.state.quantity,
            producer: this.state.producer,
            text: this.state.text
        }

        //put fruit via putFruit action
        this.props.putOrder(this.state.id, newOrder);

        //close modal
        this.toggle();
    }

    render(){
        return(
            <div>
                <Button  
                size="sm"
                color="info"
                onClick={this.toggle}
                > Update
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >               
                    <ModalHeader toggle={this.toggle}>Update Order List</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="fruit">{this.state.name}</Label>
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
                                price="quantity"
                                id="quantity"
                                placeholder="Add Quantity"
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
                                <Label for="text">Comments</Label>
                                <Input
                                type="text"
                                price="comments"
                                id="comments"
                                placeholder="comments"
                                value={this.state.text}
                                onChange={e => this.setState({text: e.target.value})}/>
                            </FormGroup>

                                <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                block
                                >
                                Update Order
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

export default connect(mapStateToProps, { putOrder })(OrderPutModal);