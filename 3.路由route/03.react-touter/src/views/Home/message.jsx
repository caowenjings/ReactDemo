import React, { Component } from 'react'

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
    render() {
        let { messageArr } = this.state
        return (
            <ul>
                {messageArr.map((item, index) => {
                    return (
                        <li>  <a href="">{item.text}</a></li>
                    )
                })}
            </ul>
        )
    }
}