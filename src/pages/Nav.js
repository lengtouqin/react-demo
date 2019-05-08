import React from 'react';
import {  NavLink } from "react-router-dom";
import '../styles/foot.scss';
class Nav extends React.Component{
    render(){
        return (
                <div className="foot">
                    <NavLink to="/index" activeClassName="selected">
                        <i className="iconfont icon-yingyuan"></i>
                        <span>热映</span>
                    </NavLink>
                    <NavLink to="/cinima" activeClassName="selected">
                        <i className="iconfont icon-yingyuan1"></i>
                        <span>影院</span>
                    </NavLink>
                    <NavLink to="/center" activeClassName="selected">
                        <i className="iconfont icon-taopiaopiao1"></i>
                        <span>我的</span>
                    </NavLink>
                </div>
        )
    }
}
export default Nav