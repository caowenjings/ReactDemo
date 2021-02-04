import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect
} from "react-router-dom";
//BrowserRouter：路由器
//switch:匹配路由显示组件
//Link：导航 
//navLink：可以自定义样式的导航
//redirect：没有路由匹配时，默认显示的


// 学习用法
export default class SwitchCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Link to="/">Home</Link><br />
                    <Link to="/about">about</Link><br />
                    <NavLink to="/contact" activeClassName="hurray">contact</NavLink>
                    <Redirect to="/contact" />
                    <Switch>
                        <Route path="/about">
                            <p>about</p>
                        </Route>
                        <Route path="/contact/:id">
                            <p>contact</p>
                        </Route>
                        <Route path="/contact">
                            <p>contact idd</p>
                        </Route>
                        <Route path="/">
                            <p>home</p>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}