import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Child from "./child";
import "./App.css";

class App extends Component {

  render() {

    const routes = [
      {
        path: '/',
        exact: true,
        sidebar: () => <div>杜甫</div>,
      },
      {
        path: "/libai",
        sidebar: () => <div>李白</div>,
      },
      {
        path: "/taotao",
        sidebar: () => <div>陶渊明</div>,
      }
    ]

    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">古诗一</Link>
            </li>
            <li>
              <Link to="/libai">古诗二</Link>
            </li>
            <li>
              <Link to="/taotao">古诗三</Link>
            </li>
            <li style={{fontWeight:800}}>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} exact={route.exact} component={route.sidebar} />
              ))}
            </li>
          </ul>
          <Route
              exact    //严格模式,如果不加上exact的话,点击/:id,也会把{Child} 也显示 出来
              path="/"
              render={() => <div className="main" dangerouslySetInnerHTML={{__html: "<div><p>岱宗夫如何，齐鲁青未了。</p><p>造化钟神秀，阴阳割昏晓。</p><p>荡胸生曾云，决眦入归鸟。</p><p>会当凌绝顶，一览众山小。</p></div>"}}></div>}
            />
          <Route path="/:id" component={Child} />
        </div>
      </Router>
    );
  }
}

export default App;
