import React, { Component } from 'react'

import './about.css'


export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="home-container">
                <header>
                    <h2>About组件内容</h2>
                </header>
                <main>
                    <nav>new</nav>
                </main>
            </div>
        )
    }
}