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
import { putVegetable } from '../actions/vegetableActions';

class VegetablePutModal extends Component {
      
    state = {
        modal: false,
        id : this.props.id,
        name: this.props.name,
        price: this.props.price,
        producer:this.props.producer
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };


    onSubmit = e => {
        e.preventDefault();

        const newVegetable = {
            name : this.state.name,
            price : '$' + this.state.price,
            producer: this.state.producer
        }

        //put fruit via putFruit action
        this.props.putVegetable(this.state.id, newVegetable);

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
                    <ModalHeader toggle={this.toggle}>Update Vegetable List</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="vegetable">{this.state.name}</Label>
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
                                Update Vegetable
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

export default connect(mapStateToProps, { putVegetable })(VegetablePutModal);