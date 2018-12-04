import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getVegetables, deleteVegetable } from '../actions/vegetableActions';
import PropTypes from 'prop-types';
import VegetableModal from './VegetableModal';
import AppNavbar from './AppNavbar';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Maps from './Maps';

class VegetablesList extends Component {

    componentDidMount(){
        this.props.getVegetables();
    }

    onDeleteClick = id => {
        this.props.deleteVegetable(id);
    }

    render(){
        const { vegetables } = this.props.vegetable;

        return(
            
            <Container>
                <AppNavbar/>
                <h3>Vegetable List</h3>
                <VegetableModal/>
                    <ListGroup>
                        <TransitionGroup className="Vegetable-List">
                            {vegetables.map(({_id, name, price, producer}) => (
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
                    <Maps />
            </Container>
        );
    }
}

VegetablesList.propTypes = {
    getVegetables: PropTypes.func.isRequired,
    vegetable: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    vegetable: state.vegetable
});

export const VegetableExport = connect(mapStateToProps, { getVegetables, deleteVegetable })(VegetablesList);
