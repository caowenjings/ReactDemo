import React, { Component } from 'react';

import './app.css'

import Search from "../search/search"
import Main from "../Main/main"


//发布-订阅模式
/*
发布---订阅模式又叫观察者模式：
    它定义了对象间的一种一对多的关系，让多个观察者对象同时监听某一个主题对象，
    当一个对象发生改变时，所有依赖于它的对象都将得到通知。

 // 发布消息：PubSub.publish(名称, 参数)
 // 订阅消息：PubSub.subscribe(名称,(msg,data)=>{})
*/

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Search></Search>
                <Main></Main>
            </div>
        )
    }
}