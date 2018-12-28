import React, { Component } from 'react';
import Form from "./components/Form";
import {CardList} from "./components/CardList";

class GithubApp extends Component {
    state = {
        cards:[]
    };

    addNewCardInfo = (cardInfo) => {
        this.setState(prevState => ({cards: prevState.cards.concat(cardInfo)}))
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCardInfo}/>
                <CardList cards={this.state.cards}/>
            </div>
        );
    }
}

export default GithubApp;
