import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from '../components/header/Header';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Kit from '../pages/Kit';
import About from '../pages/About';

import {
    Nav30DataSource
} from '../data/data.source.js';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
        };
    }
    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });
    }
    render() {
        return (
            <Router>
                <div>
                    <Header dataSource={Nav30DataSource} isMobile={this.state.isMobile} />
                    <Route exact path="/" component={Home} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/kit" component={Kit} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

export default App;