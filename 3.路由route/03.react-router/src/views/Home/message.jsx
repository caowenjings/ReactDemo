import React, { Component } from 'react'
import { Link, Route } from "react-router-dom";
import MseeageDetail from './message-detail'

import './home.css'

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageArr: []
        }
    }
    //模仿ajax请求
    componentDidMount() {
        setTimeout(() => {
            let messageArr = [
                { id: 1, text: 'messsage01' },
                { id: 2, text: 'messsage02' },
                { id: 3, text: 'messsage03' }
            ]

            this.setState({ messageArr })
        }, 1000)

    }
    showDetail(id) {

        // this.props.history.push({ pathname: "/query?id" + index });
        this.props.history.push(`/home/message/messageDtail/${id}`);

    }
    showDetailRepalce(id) {
        this.props.history.replace(`/home/message/messageDtail/${id}`);
    }
    goback = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }
    jump = () => {
        window.location = "http://www.baidu.com/"
    }
    render() {
        let { messageArr } = this.state
        return (
            <div>
                <ul>
                    {messageArr.map((item, index) => {
                        return (
                            <li key={index} className="message-item">
                                <Link to={`/home/message/messageDtail/${item.id}`}>{item.text}</Link>
                                <button onClick={() => { this.showDetail(item.id) }}>push 查看详情</button>
                                <button onClick={() => { this.showDetailRepalce(item.id) }}>repacle 查看详情</button>
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    <li className="message-item"><button onClick={this.goback}>回退</button></li>
                    <li className="message-item"><button onClick={this.forward}>前进</button></li>
                    <li className="message-item"><button onClick={this.jump}>页面跳转</button></li>
                </ul>
                <main>
                    {/* :xxx 是一种标识，也是一种占位符 */}
                    <Route path="/home/message/messageDtail/:id" component={MseeageDetail}></Route>
                </main>
            </div>
        )
    }
}

// 1.query传参数
//  <Route path='/query' component={Query}/>
// <Link to={{ path : ' /query' , query : { name : 'sunny' }}}></Link> 

/*
非路由链接  区别就是：点击时是否发请求
<Link to={`/home/message/messageDtail/${item.id}`}>{item.text}</Link>
路由链接
 <a href={`/ home / message / messageDtail / ${item.id}`}>{item.text}</a>
 */