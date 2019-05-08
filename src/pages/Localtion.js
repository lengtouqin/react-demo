import React from 'react';
import {  Link } from "react-router-dom";
import '../styles/localtion.scss'
class Local extends React.Component{
    render() {
        return (
        <div className="top">
                    <div className="left">
                        <img src="https://gw.alicdn.com/tfs/TB1mKkzl9zqK1RjSZFpXXakSXXa-50-50.svg" alt=""></img>
                        <Link to="/city">请选择你的城市</Link>
                    </div>
                    <div className="right">
                        <li>正在热映</li>
                        <li>即将上映</li>
                    </div>
                    </div>
        )
    }
}
export default Local;