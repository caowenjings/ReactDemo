import React, { Component } from 'react';

import './app.css'
import {
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";


import About from '../About/about'
import Home from '../Home/home'
import MyNavLink from '../../components/my-navlink'


//组件通信： 发布订阅的用法

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="app-contaner">
                <header>
                    <h2>React Router Demo</h2>
                </header>
                <div className="main">
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                <MyNavLink className="list-group-item" to="/home">Home</MyNavLink>
                                <MyNavLink className="list-group-item" to="/about">About</MyNavLink>

                                {/* <NavLink className="list-group-item" to="/home">Home</NavLink>
                                <NavLink className="list-group-item" to="/about">About</NavLink> */}
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <Switch>
                                        <Route path="/home" component={Home}></Route>
                                        <Route path="/about" component={About}></Route>
                                    </Switch>
                                    <Redirect to="/home"></Redirect>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}