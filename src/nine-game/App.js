import React, { Component } from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'

const Star = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random() * 9);
    return (
        <div className="col-5">
            {_.range(numberOfStars).map(i => <FontAwesomeIcon icon="star" key={i}/>)}
        </div>
    )
};

const Button = (props) => {
    return (
        <div className="col-2">
            <button>=</button>
        </div>
    )
};

const Answer = (props) => {
    return (
        <div className="col-5">
            ...
        </div>
    )
};

const Numbers = (props) => {

    return (
        <div className="card text-center">
            <div>
                {Numbers.List.map(n => <span className="used" key={n}>{n}</span>)}
            </div>
        </div>
    )
};
Numbers.List = _.range(1,10)

class Game extends Component {
    render() {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr/>
                <div className="row">
                    <Star/>
                    <Button/>
                    <Answer/>
                </div>
                <br/>
                <Numbers/>
            </div>
        )
    }
}



class NineGameApp extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <Game />
            </div>
        );
    }
}

export default NineGameApp;
