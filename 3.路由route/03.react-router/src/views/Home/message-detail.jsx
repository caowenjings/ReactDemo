import React, { Component } from 'react'

export default class MseeageDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageArr: [
                { id: 1, text: 'messsage01', contant: '哇呜呜呜' },
                { id: 2, text: 'messsage02', contant: '我爱中国' },
                { id: 3, text: 'messsage03', contant: '加油努力' },
            ]
        }
    }
    render() {
        let { id } = this.props.match.params;
        let { messageArr } = this.state;
        let message = messageArr.find(item => {
            return item.id == id
        })
        return (
            <div>
                <li>ID：{message.id}</li>
                <li>Title：{message.text}</li>
                <li>Content：{message.contant}</li>
            </div>
        )
    }
}