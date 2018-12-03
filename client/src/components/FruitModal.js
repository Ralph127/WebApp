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
import { addFruit } from '../actions/fruitActions';

class FruitModal extends Component {
    state = {
        modal: false,
        name: '',
        price: '',
        producer: ''
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
        const newFruit = {
            name: this.state.name,
            price : '$' + this.state.price,
            producer: this.state.producer
        }

        //Add fruit via addFruit action
        this.props.addFruit(newFruit);

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
                Add Fruit
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >               
                    <ModalHeader toggle={this.toggle}>Add to Fruit List</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="fruit">Fruit</Label>
                                <Input
                                type="text"
                                name="name"
                                id="fruit"
                                placeholder="Add Fruit Item"
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
                                <Label for="producer">Produced by</Label>
                                <Input
                                type="text"
                                price="producer"
                                id="producer"
                                placeholder="Produced by"
                                value={this.state.producer}
                                onChange={e => this.setState({producer: e.target.value})}/>
                            </FormGroup>

                                <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                block
                                >
                                Add Fruit
                                </Button>
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    fruit: state.fruit
})

export default connect(mapStateToProps, { addFruit })(FruitModal);