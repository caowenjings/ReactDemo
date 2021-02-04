import React, { Component } from 'react'
import MyNavLink from '../../components/my-navlink'
import { Switch, Route, Redirect } from "react-router-dom";

import News from './news'
import Message from './message'

import "./home.css"

// 如何编写路由效果： 
// 1.编写子路由组件
// 2.在父路由组件中指定：路由链接<NavLink>，路由route ,引用组件


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="home-container">
                <header>
                    <h2>Home组件内容</h2>
                </header>
                <main>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">news</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                    <div className="main">
                        <Switch>
                            <Route path="/home/news" component={News}></Route>
                            <Route path="/home/message" component={Message}></Route>
                            <Redirect to="/home/news"></Redirect>
                        </Switch>
                    </div>
                </main>
            </div>
        )
    }
}