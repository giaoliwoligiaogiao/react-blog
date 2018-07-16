import React from 'react';
import {Switch,  Route } from 'react-router-dom';

import Indexview from '../views/index/Indexview';
import Map from '../views/map/map'
export default { 
    IndexRoute:{
        links:[
            {to:'/index',title:"首页"},
            {to:'/map',title:'百度地图'}
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
                component: Map,
            }
        ]
    }
};

// import Child from '../views/index/child';
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
  
//   React.render(<Router routes={routeConfig} />, document.body)