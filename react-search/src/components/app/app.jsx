import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './app.css'

import Search from "../search/search"
import Main from "../Main/main"


// 1.拆分组件：拆分组件，抽取组件（按层次）
// 2.实现静态组件：使用组件实现静态页面效果（只有静态界面，没有动态数据与交互）
// 3.实现动态组件：
//   3.1实现初始化数据，动态显示
//   3.2交互功能（从绑定事件监听开始）


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchname: ''
        }
    }
    static propTypes = {
        searchname: PropTypes.string.isRequired,
    }
    setSearchName = (value) => {
        let { searchname } = this.state;
        searchname = value;
        this.setState({ searchname })
    }
    clearSearchName = () => {
        let { searchname } = this.state;
        searchname = '';
        this.setState({ searchname })
    }
    render() {
        let { searchname } = this.state;
        return (
            <div>
                <Search setSearchName={this.setSearchName}></Search>
                <Main searchname={searchname} clearSearchName={this.clearSearchName}></Main>
            </div>
        )
    }
}