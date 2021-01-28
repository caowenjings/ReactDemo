import React, { Component } from 'react'

import PropTypes from 'prop-types'

import './commentList.css'

import CommentItem from "../comment-item/comment-item"

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    static propTypes = {
        comments: PropTypes.array.isRequired,
    }
    render() {
        let { comments } = this.props;
        //动态显示提示文字
        let display = comments.length === 0 ? 'block' : 'none'
        return (
            <div className="col-md-8">
                <p>评论回复：</p>
                <h5 style={{ display: display }}>暂无评论，点击添加评论！！！</h5>
                <ul>
                    {comments.map((item, index) => {
                        return <CommentItem comment={item} key={index} index={index} />
                    })}
                </ul>
            </div >
        )
    }
}
