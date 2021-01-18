import React, { Component } from 'react'
import axios from 'axios'

import "../Main/main.css"


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initView: true,//没有输入时
            loading: false,//请求中
            users: null,
            erroeMsg: null
        }
    }
    //数据更新在哪个组件，就在哪个组件发请求，users在main组件只因此就在main请求
    //此时请求需要，search输入的数据，就search传递给父组件，父组件在更新后传递给main

    componentWillReceiveProps(nextProps) {//父组件重传就会调这个
        let { searchname } = nextProps
        // 1.更新状态
        if (!searchname) {
            this.setState({
                initView: true,
                loading: false
            })
            return
        }
        this.setState({
            initView: false,
            loading: true
        })

        let respUrl = `https://api.github.com/search/users?q=${searchname}`
        axios.get(respUrl).then(res => {
            var result = res.data.items;
            result = result.map(item => {
                return {
                    name: item.login,
                    url: item.html_url,
                    avatar_url: item.avatar_url
                }
            })
            //更新状态（成功）
            this.setState({
                users: result,
                loading: false,
            })

        }).catch(error => {
            //更新状态（失败）
            this.setState({
                erroeMsg: error.message,
                loading: false,
            })
        })
    }

    render() {
        let { initView, loading, users, erroeMsg } = this.state;
        if (initView) {
            return <h2>请输入搜索数据</h2>
        } else if (loading) {
            return <h2>请求中，请稍等</h2>
        } else if (erroeMsg) {
            return <h2>{{ erroeMsg }}</h2>
        } else if (users.length === 0) {
            return <h2>没有搜索到，请重新输入！</h2>
        } else {
            return (
                <div className="main-container">
                    {users.map((item, index) => {
                        return <div className="main-list" key={index}>
                            <a href={item.url}>
                                <img src={item.avatar_url} alt="" />
                            </a>
                            <p>{item.name}</p>
                        </div>
                    })}
                </div>
            )
        }

    }
}