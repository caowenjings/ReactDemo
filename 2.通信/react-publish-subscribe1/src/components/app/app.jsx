import React, { Component } from 'react';
import PubSub from 'pubsub-js'

import './app.css'

import CommentList from "../comment-list/comment-list"
import CommentAdd from "../comment-add/comment-add"

//组件通信： 发布订阅的用法

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                { name: 'Jock', content: "非常好" },
                { name: 'Tom', content: "very Good ! " }
            ]
        }
    }
    // 添加评论
    AddComment = (comment) => {
        let { comments } = this.state;
        comments.unshift(comment);
        this.setState({ comments })
    }
    componentDidMount() {
        //订阅消息“DeleteComment“,变化时可做操作了 
        PubSub.subscribe('DeleteComment', (msg, index) => {
            let { comments } = this.state;
            comments.splice(index, 1);
            this.setState({ comments })
        })
    }
    render() {
        let { comments } = this.state
        return (
            <div className="app-contaner">
                <header>
                    <h2>请发表对react的评论</h2>
                </header>
                <main>
                    <div className="container">
                        <div className="row">
                            <CommentAdd AddComment={this.AddComment}></CommentAdd>
                            <CommentList comments={comments}></CommentList>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}