import React, { Component } from "react";
import "../assets/style/Headers.css"
export default class NavHeader extends Component { 
  render() { 
    return (
      <header>
			<ul class="header-l">
				<li>豆瓣</li>
				<li>读书</li>
				<li>电影</li>
				<li>音乐</li>
				<li>同城</li>
				<li>小组</li>
				<li>阅读</li>
				<li>FM</li>
				<li>时间</li>
				<li>市集</li>
				<li>更多</li>
			</ul>
			<ul class="header-r">
				<li>下载豆瓣客户端</li>
				<li>登录</li>
				<li>注册</li>
			</ul>
		</header>
    )
  }
}