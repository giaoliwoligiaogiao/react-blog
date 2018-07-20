import React, {Component} from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Indexview from '../../views/index/Indexview';
import Index from '../../views/index/index'
function routeElFunction(routeArr){
    if(routeArr instanceof Array){
        let routeElArr=[];
        routeArr.forEach((item,index)=>{
            let routeEl=null,defaultObj={
                path:'',
                component:'',
                getComponent:function(){console.log('getComponent')},
                onEnter:function(){console.log('onEnter')},
                onLeave:function(){console.log('onLeave')}
            };
            item=Object.assign({},defaultObj,item)
            // debugger;
        //    console.log('12312321', item.component);
        routeEl = <Route key={index}  path={item['path']||null}  component={item['component']||null} onEnter={item['onEnter']} onLeave={item['onLeave']} getComponent={item['getComponent']} ></Route>;
        routeElArr.push(routeEl);
            // if(item['childRoutes']&&item['childRoutes'] instanceof Array && item['childRoutes'].length>0){
            //     let childrens=routeElFunction(item['childRoutes']);
            //     // routeEl =<Route key={index} {...item}  >{childrens}</Route>
            //     routeEl =<Route key={index} path={item['path']||null}  component={item['component']||null} onEnter={item['onEnter']}  onLeave={item['onLeave']} getComponent={item['getComponent']}> <div>{childrens}</div></Route>;
            // }else{
            //     routeEl = <Route key={index}  path={item['path']||null}  component={item['component']||null} onEnter={item['onEnter']} onLeave={item['onLeave']} getComponent={item['getComponent']} ></Route>;
            //     // routeEl =<Route key={index} {...item}  ></Route>
            // }
            // // console.log('aaaaaaaaaaaaaaa', routeEl);
            // routeElArr.push(routeEl);
        })
        console.log(routeElArr);
        return routeElArr
    }
}

export default class RouteComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            routes:[],
            defaults:{
                path:'',
                components:'',
                getComponent:null,
                onEnter:null,
                onLeave:null
            },
            routeArr:[]    
        };
    };
    render(){
        let routes= this.props['routes'];
        if(routes instanceof Array){
           this.state.routeArr=routeElFunction(routes);
        }
        return (
            <Router>
                <div>
                <Switch>
                    {this.state.routeArr}
                    <Route path="/" component={Index} exact/>
                </Switch>
                </div>
            </Router>
        )
    }
} 


