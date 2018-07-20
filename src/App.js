import React, { Component } from 'react';

import './App.css';
// import Routes from './config/router';
// import {Link,BrowserRouter as Router,Route} from 'react-router-dom';
import Index from './views/index/index'
import ROUTE from './config/router'
class App extends Component {
  render() {
    console.log(<ROUTE/>);
    return  (
      <ROUTE/>
   )
  }
}

export default App;
   // <Index/>
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