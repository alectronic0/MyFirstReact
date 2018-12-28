import React, { Component } from 'react';
import './App.css';
import NineGameApp from './nine-game/App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo,fab,fas);

class App extends Component {
    render() {
        return (
            <div>
                <NineGameApp/>
            </div>
        );
    }
}

export default App;
