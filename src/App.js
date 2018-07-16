import React, { Component } from 'react';

import './App.css';
// import Routes from './config/router';
// import {Link,BrowserRouter as Router,Route} from 'react-router-dom';
import Index from './views/index/index'

class App extends Component {
  render() {
    console.log(<Index/>);
    return  (
      <Index/>
    //   <Router>
    //     <div>
    //       <ul>
    //         <li><Link to="/">主页</Link></li>
    //         // <li><Link to="/index">index</Link></li>
    //         // <li><Link to="/topicDetail">topicDetail</Link></li>
    //       </ul> 
    //       <hr/>
    //       // <Route  exact path="/" component={Index}></Route>,
    //       // <Route path="/index" component={Index} ></Route>
    //       {Routes}
    //     </div>
    // </Router>
  )
  }
}

export default App;
