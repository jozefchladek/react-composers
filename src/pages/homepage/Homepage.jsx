import React, {Component} from "react";
import Card from 'react-bootstrap/Card';
import {getComposers} from '../../services/ApiServices';
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export class Homepage extends Component {
    state = {
        composers: []
    }

    componentDidMount = () => {
        getComposers().then(res => (this.setState({composers: res.data})))
    }

    listComposers = () => {
        return this.state.composers.map(composer => (
            <Card className="m-2" key={composer.id} style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{composer.name}</Card.Title>
                    <Card.Text>
                        {composer.description}
                    </Card.Text>

                    <Button variant="outline-success">
                        <NavLink to={"/composer/detail/" + composer.id}>View more</NavLink>
                    </Button>
                </Card.Body>
            </Card>
        ))
    }


    render() {
        return (
            <section className="container d-flex flex-wrap">
                {this.listComposers()}
            </section>
        )
    }
}
