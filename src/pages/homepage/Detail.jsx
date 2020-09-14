import React, {Component} from "react";
import {getComposerDetail} from "../../services/ApiServices";

export class Detail extends Component {
    state = {
        composer: []
    }

    componentDidMount = () => {
        const id = this.props.location.pathname.split('/')[3];
        getComposerDetail(id).then(result => (this.setState({composer: result.data})))
    }

    showComposer = () => {
        return (
            <div className="text-center" key={this.state.composer.id}>
                <h3>{this.state.composer.name}</h3>
                <p className="border-bottom">
                    <strong>{this.state.composer.born_year} - </strong>
                    <strong>{this.state.composer.born_death || ''}</strong>
                </p>
                <p>{this.state.composer.description}</p>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                {this.showComposer()}
            </div>
        )
    }
}