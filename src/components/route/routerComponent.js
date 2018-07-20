import React, { Component} from 'react';
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Indexview from '../../views/index/Indexview';

function Links(props) {
    // debugger;
    // console.log(props);
    let links;
     if(!props || !(props instanceof Array)){
        let linkKey=parseInt(Math.random()*100+Math.random()*1000);
        links=<li key={linkKey}><Route to={props.to}  >{props.title}</Route></li>;
    }else{
        links=[]
        props.forEach((item,index)=>{
            // let {...cItem} =item;
            // console.log(item);
            let linkKey= `${index}`;
            links.push(<li key={linkKey}><Link  to={item.to}  >{item.title}</Link></li>)
        })
    }
    // console.log(links);
    return links;
}
function Routes(props) {
    // console.log(props);
    let route;
    if(props&& !(props instanceof Array)){
        let roud=parseInt(Math.random()*100+Math.random()*1000);
        route=<Route key={roud} {...props}  ></Route>
    }else{
        route=[];
        props.forEach((item,index)=>{
            let {...cItem} =item;
            // console.log(cItem);
            let a= `${index}`;
            route.push(<Route key={a} {...cItem}  ></Route>)
        })
    }
    return route
 }

class UlRoute extends Component{
    constructor(props){
        super(props);
        // console.log(props);
    }
    render(){
        let liArr=Links(this.props.links)
        let routeArr=Routes(this.props.routes)
        let CName=this.props.name||'';
        let TopName=this.props.TopName||'';
        // console.log(CName);
        return (
            <Router>
             <div className={TopName||''}>
                <ul className={CName||""} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} onClick={this.props.onClick}>
                {liArr}
                </ul>
                <Switch>  
                    {routeArr}
                    <Route path="/" component={Indexview} />
                </Switch>
                </div>
            </Router>
        )
    }

}



export default UlRoute;