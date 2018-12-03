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
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const newFruit = {
            name: this.state.name
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
                                onChange={this.onChange}/>
                                <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                block
                                >
                                Add Fruit</Button>
                            </FormGroup>
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