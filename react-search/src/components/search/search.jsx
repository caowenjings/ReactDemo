import React, { Component } from 'react'


import './search.css'


export default class Search extends Component {
    constructor(props) {
        super(props);
    }

    handleSearch = () => {
        this.props.setSearchName(this.serachinput.value);
    }

    render() {
        return (
            <div>
                <header>
                    <h1> Search Github Users</h1>
                    <div className="search">
                        <input type="text" ref={input => this.serachinput = input} />
                        <button onClick={this.handleSearch}>search</button>
                    </div>
                </header>

            </div>
        )


    }
}
