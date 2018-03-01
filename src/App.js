import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";//路由引入
import Headers from "./components/Headers";// 头部
import NavHeader from "./components/NavHaeders";// 航栏
import BuyTicket from "./components/BuyTicket";// 购票页面
import Movies from "./components/Movies";// 电影页面

import "./assets/style/App.css";// 样式
//导出
class App extends Component { 

  render() { 
    return (
        <Router>
          <div>
            <Headers></Headers>
            <NavHeader></NavHeader>
            <Route exact path="/" component={BuyTicket} />
            <Route path="/Movies" component={Movies}/>
          </div>
        </Router>
    )
  }
}

export default App;