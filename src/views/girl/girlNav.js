import React from 'react';

import UlRoute from '../../components/route/routerComponent';
import Makeup from './makeup/makeup'

import './girlCommon.css';
const routeConfig = { 
    IndexRoute:{
        links:[
            // {to:'/girl/makeup',title:"化妆路由"},
            {to:'/girlfriend/makeup',title:"化妆路由"},
            {to:'/girlfriend/makeup',title:"化妆步骤"},
            {to:'/girlfriend/makeup',title:"化妆用品"},
            {to:'/girlfriend/makeup',title:"化妆网站"},
        ],
        routes:[
            {
                path: '/girlfriend/makeup',
                component:Makeup
                // exact:true
            },
            {
                path: '/girlfriend',
                component:Makeup
                // exact:true
            }
        ]
    }
};

  export default class Girlroute extends React.Component{
    constructor(props){
        super(props);
        this.state={
            NavClass:''
        };
        this.leave=this.leave.bind(this);
        this.activer=this.activer.bind(this);
    }
    handleClick(){
        
    }
    activer(e){
        // console.log(e.target.className.toLowerCase());
        // if(e.target.className.toLowerCase()=='girlNav'||e.target.tagName.toLowerCase()=='li'){
            // console.log(e.target)
            this.setState({NavClass:'on'})
        // }
     }
     leave(){
        this.setState({NavClass:''})
     }
    render(){
          let routeConfigs=routeConfig['IndexRoute'];
        //   console.log( <RouteComponent  routes={routeConfig} ></RouteComponent>)
          return (
              <div className={'girlBox'} >
                <UlRoute  onMouseLeave={this.leave}  onMouseEnter={ this.activer}  links={routeConfigs.links} routes={routeConfigs.routes} name={"girlNav " +this.state.NavClass} TopName={'girlRouteBox'}></UlRoute>
              </div>
          )
      }
  }

//  export default class Girl extends React.Component{
//     constructor(){
//         super();
//         console.log('Map');
//     }
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
