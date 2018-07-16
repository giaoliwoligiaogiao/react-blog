import React from 'react';
// import {Link,BrowserRouter as Router,Route} from 'react-router-dom';
// import Child from './child';
import UlRoute from '../../components/route/routerComponent';
import routeObj, { IndexRoute }  from '../../config/router';
import './index.css'
class Index extends React.Component{
    constructor(){
        super();
        // console.log(IndexRoute);
        console.log(routeObj);
        this.state={
            links:[...routeObj.IndexRoute['links']],
            routes:[...routeObj.IndexRoute['routes']],
            CName:'indexNav'
        }
    }
    render() {
        return (
            <div className="indexBox">
                <UlRoute links={this.state.links} routes={this.state.routes} name={this.state.CName}></UlRoute>
            </div>
            // <div>
            //     this is topic
            //     <Router>
            //         <div>
            //         <ul>
            //             <li><Link to="/index/child">tst </Link></li>
            //         </ul> 
            //         <hr/>
            //             <Route   path="/index/child" component={Child}></Route>,
            //         </div>
            //     </Router>
            // </div>
        )
    }
}
export default Index