import React, { Component } from 'react'

import PropTypes from 'prop-types'

import './commentItem.css'

import './commentItem.css'
export default class CommentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    static peeopTypes = {
        comment: PropTypes.object.isRequired,
        DeleteComment: PropTypes.func.isRequired,
    }

    //从app 传递到list ，list再传递到item的方法 
    //index 是从list获取传递过来的 
    handleDelete = () => {
        let { index, comment } = this.props

        if (window.confirm(`你确定删除${comment.name}的评论吗？`))
            return this.props.DeleteComment(index);

    }

    render() {
        let { comment } = this.props
        return (
            <div className="list-group-item">
                <div className="handle">
                    <p>{comment.name}说：</p>
                    <button onClick={this.handleDelete}>删除</button>
                </div>
                <p className="contant">{comment.content}</p>
            </div>
        )
    }
}