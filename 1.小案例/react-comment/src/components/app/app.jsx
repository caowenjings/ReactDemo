import React, { Component } from 'react';
import './app.css'

import CommentList from "../comment-list/comment-list"
import CommentAdd from "../comment-add/comment-add"


// 1.拆分组件：拆分组件，抽取组件（按层次）
// 2.实现静态组件：使用组件实现静态页面效果（只有静态界面，没有动态数据与交互）
// 3.实现动态组件：
//   3.1实现初始化数据，动态显示
//   3.2交互功能（从绑定事件监听开始）


// <!--
// dependencies:开发环境依赖
// devDependencies:打包环境依赖
// SPA单页面应用：只有一个生成节点
// index.js:入口文件（引入文件）
// APP.js:
// package.json:描述当前项目的详细信息，
//           1.引用依赖包的信息
//           2.标识：项目的内容名称
//           3.运行命令
// README.md:说明文件

// -->

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
    // 删除评论
    DeleteComment = (index) => {
        let { comments } = this.state;
        comments.splice(index, 1);
        this.setState({ comments })
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
                            <CommentList comments={comments} DeleteComment={this.DeleteComment}></CommentList>
                        </div>
                    </div>

                </main>

            </div>
        )
    }
}