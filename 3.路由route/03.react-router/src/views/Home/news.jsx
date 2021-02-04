import React, { Component } from 'react'

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsArr: [
                'news001',
                'news002',
                'news003',
                'news004'
            ]
        }
    }
    render() {
        let { newsArr } = this.state
        return (
            <ul>
                { newsArr.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        )
    }
}