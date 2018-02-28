import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavHeader from "./components/NavHaeders";
import "./assets/style/App.css";
//导出
class App extends Component { 
  constructor(props) { 
    super(props)
    console.log("初始化／构造器函数");
  }
  componentWillMount() {
    console.log("组件将要挂载");
  }
  componentWillReceiveProps() { 
    console.log("将要接受属性");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("是否更新");
  }
  render() { 
    return (
      <Fragment>
        <NavHeader></NavHeader>
        <h1>xixixixixix</h1>
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
  </Router>
      </Fragment>
    )
  }
  componentDidMount() {
    console.log("组件已经挂载");
  }
  componentWillUnmount() {
    console.log("组件将要卸载");
  }
}
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);


export default App;