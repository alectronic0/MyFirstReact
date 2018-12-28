import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    state = {
        username: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('EVENT form submitted', this.state.username)
        axios.get(`https://api.github.com/users/${this.state.username}`)
            .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState({username:''})
            })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.username}
                    onChange={(event) => this.setState({username: event.target.value})}
                    type="text" placeholder="Github username" required/>
                <button type="submit">Add Card</button>
            </form>
        )
    }
}

export default Form;


