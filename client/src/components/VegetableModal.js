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
import { addVegetable } from '../actions/vegetableActions';

class VegetableModal extends Component {
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
        console.log(`Price: ${this.state.price}`)
        const newVegetable = {
            name: this.state.name,
            price : '$' + this.state.price,
            producer : this.state.producer
        }

        //Add vegetable via addVegetable action
        this.props.addVegetable(newVegetable);

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
                Add Vegetable
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >               
                    <ModalHeader toggle={this.toggle}>Add to Vegetable List</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="vegetable">Vegetable</Label>
                                <Input
                                type="text"
                                name="name"
                                id="vegetable"
                                placeholder="Add vegetable Item"
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
                                Add Vegetable
                                </Button>
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    vegetable: state.vegetable
})

export default connect(mapStateToProps, { addVegetable })(VegetableModal);