import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default class NavMovies extends Component { 
  render() { 
    return (
      <div>
        <div>
          <Link to={`${match.url}/hot`}>热门</Link> 
          <Link to={`${match.url}/news`}>最新</Link>
        </div>
      </div>
    )
  }
}