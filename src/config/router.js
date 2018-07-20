import React from 'react';
import {Switch,  Route } from 'react-router-dom';

import RouteComponent from '../components/route/route'


import UlRoute from '../components/route/routerComponent';
import Indexview from '../views/index/Indexview';
import Maps from '../views/map/map'
import Girlroute from '../views/girl/girlNav'


// const routeConfig =[
//     { path: '/index', component: Indexview },
//     { path: '/map',component: Maps }
//   ]
//   export default class ROUTE extends React.Component{
//       render(){
//           console.log( <RouteComponent  routes={routeConfig} ></RouteComponent>)
//           return (
//               <div>
//               <RouteComponent  routes={routeConfig} ></RouteComponent>
//               </div>
//           )
//       }
//   }





const routeConfig = { 
    IndexRoute:{
        links:[
            {to:'/index',title:"首页"},
            {to:'/map',title:'百度地图'},
            {to:'/girlfriend',title:'女友专用'}
        ],
        routes:[
            {
                path: '/index',
                component: Indexview,
                indexRoute: { path:'/', component: Indexview },
                exact:true
            },
            {
                path: '/map',
                component: Maps,
            },
            {
                path: '/girlfriend',
                component: Girlroute,
            }
        ]
    }
};

  export default class ROUTE extends React.Component{
      constructor(props){
          super(props);
          this.handleClick=this.handleClick.bind(this);
      }
      handleClick(e){
        // if(e.target.tagName.toLowerCase()='a'){
            e.target.className='on';
        // }
      }
      render(){
          let routeConfigs=routeConfig['IndexRoute'];
        //   console.log( <RouteComponent  routes={routeConfig} ></RouteComponent>)
          return (
              <div className={'bigBox'}>
                <UlRoute onClick={this.handleClick} links={routeConfigs.links} routes={routeConfigs.routes} name={"indexNav"} TopName={'topRouteBox'}></UlRoute>
              </div>
          )
      }
  }
//   const routeConfig =[
    
//             { path: '/index',
//               component: Indexview,
//             //   indexRoute: { component: Dashboard },
//               childRoutes: [
//                 { path: '/index', component: Indexview },
//                 { path: '/map',
//                   component: Maps,
//                 //   childRoutes: [
//                 //     { path: '/messages/:id', component: Message },
//                 //     { path: 'messages/:id',
//                 //       onEnter: function (nextState, replaceState) {
//                 //         replaceState(null, '/messages/' + nextState.params.id)
//                 //       }
//                 //     }
//                 //   ]
//                 }
//               ]
//             }
          
// ]


// import Child from '../views/index/child';
// import default from './../../../reactExample/testapp/src/config';
// import routeComponent from './../components/route/route';
// export default [
// <Switch>
//     <Route  exact={true} path="/" component={Index}></Route>,
// </Switch>
// ];

// const routeConfig = [
//     { path: '/',
//       component: App,
//       indexRoute: { component: Dashboard },
//       childRoutes: [
//         { path: 'about', component: About },
//         { path: 'inbox',
//           component: Inbox,
//           childRoutes: [
//             { path: '/messages/:id', component: Message },
//             { path: 'messages/:id',
//               onEnter: function (nextState, replaceState) {
//                 replaceState(null, '/messages/' + nextState.params.id)
//               }
//             }
//           ]
//         }
//       ]
//     }
//   ]
  
//   React.render(<Router routes={routeConfig} />, document.body).