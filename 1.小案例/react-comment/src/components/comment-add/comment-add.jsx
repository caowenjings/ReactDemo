import React, { Component } from 'react'

import './commentAdd.css'



export default class CommentAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            content: ''
        }
    }

    handelSubmit = () => {
        let { name, content } = this.state
        // 收集数据
        const comment = {
            name: name,
            content: content
        }
        // 更新数据
        this.props.AddComment(comment)
        this.setState({
            name: '',
            content: ''
        })
    }

    handleName = (event) => {
        let { name } = this.state;
        name = event.target.value;
        this.setState({ name })
    }
    handleConent = (event) => {
        let { content } = this.state;
        content = event.target.value;
        this.setState({ content })
    }

    render() {
        let { name, content } = this.state

        return (
            <div className="col-md-4">
                <div className="form-group">
                    <label>用户名：</label><br />
                    <input type="text" className="form-control" placeholder="请输入用户名" value={name} onChange={this.handleName} />
                </div>
                <div className="form-group">
                    <label>评论内容：</label>
                    <textarea placeholder="请输入评论内容" rows="6" cols="20" value={content} onChange={this.handleConent}></textarea>
                </div>
                <button onClick={this.handelSubmit}>提交</button>
            </div>
        )
    }
}