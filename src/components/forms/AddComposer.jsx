import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import {Button, Alert} from "react-bootstrap";
import {createComposer} from "../../services/ApiServices";
import {Redirect} from 'react-router-dom'

export class AddComposer extends Component {
    state = {
        success: '',
        name: '',
        genre: '',
        born_year: '',
        death_year: '',
        description: ''
    }


    handleSubmit = event => {
        event.preventDefault();
        createComposer(
            this.state.name,
            this.state.genre,
            this.state.born_year,
            this.state.death_year,
            this.state.description,
        ).then(response => (this.setState({success: response.data.success})))
    }

    handleName = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleGenre = event => {
        this.setState({
            genre: event.target.value
        })
    }
    handleBornYear = event => {
        this.setState({
            born_year: event.target.value
        })
    }
    handleDeathYear = event => {
        this.setState({
            death_year: event.target.value
        })
    }
    handleDescription = event => {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        const status = this.state.success;
        let message;
        if (status !== '' && status) {
            message = <Redirect to='/'/>;
        }
        if (status !== '' && !status) {
            message = <Alert variant="danger">Required all inputs except death input.</Alert>;
        }
        return (
            <div className="container mt-2">
                {message}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.handleName} type="text" placeholder="Enter Name"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicGenre">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control onChange={this.handleGenre} type="text" placeholder="Enter Genre"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicBornYear">
                        <Form.Label>Born Year</Form.Label>
                        <Form.Control onChange={this.handleBornYear} type="number" placeholder="Enter Born Year"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicDeathYear">
                        <Form.Label>Death Year</Form.Label>
                        <Form.Control onChange={this.handleDeathYear} type="number" placeholder="Enter Death Year"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={this.handleDescription} as="textarea" rows="3" placeholder="Enter Description"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}