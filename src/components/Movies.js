import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";//路由引入

import NavMovies from "./NavMovies"

export default class Movies extends React.Component { 
  render() { 
    return (
      <div>
        <h1>选电影</h1>
        <NavMovies/>
      </div>
    )
  }
}
