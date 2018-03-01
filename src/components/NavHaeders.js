import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../assets/style/NavHeader.css"

const Logo = () => (
  <div>
    <div>
      <div className="logo">
        <a href="#">豆瓣电影</a>
      </div>
    </div>
  </div>
)
const Search = () => (
  <div>
    <div>
      <div className="Nav-Search">
        <input type="text" placeholder="搜索电影、电视剧、综艺、影人"/>
        <input type="button"/>
      </div>
    </div>
  </div>
)
const RouterTest = () => (
  <div>
    <div>
      <Link to="/">影讯&购票</Link> 
      <Link to="/Movies">选电影</Link>
    </div>
  </div>
)
const NavHeader = () => (
  <div>
    <div >
      <Logo />
      <Search />
    </div>
      <RouterTest />
  </div>
)
export default NavHeader;
