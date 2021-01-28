import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

//自定义封装navLink组件 
export default class MyNavLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            //{...this.props} 将外部传入所有属性传递给组件navLink
            <NavLink {...this.props} activeClassName='activeClass'></NavLink>
        )
    }
}