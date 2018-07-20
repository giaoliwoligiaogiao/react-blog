import React from 'react';
import UlRoute from '../../../components/route/routerComponent';

import './markup.css'
import '../../../static/css/animateByself.css'
import Ready from '../makeup/ready/ready'

const routeConfig = { 
    IndexRoute:{
        links:[
           {to:'/girlfriend/makeup/ready',title:"准备装备"},
           {to:'/girlfriend/makeup/ready',title:"洁面"},
           {to:'/girlfriend/makeup/ready',title:"化妆水"},
           {to:'/girlfriend/makeup/ready',title:"乳液"},
           {to:'/girlfriend/makeup/ready',title:"隔离"},
           {to:'/girlfriend/makeup/ready',title:"BB霜"},
           {to:'/girlfriend/makeup/ready',title:"遮瑕膏"},
           {to:'/girlfriend/makeup/ready',title:"散粉"},
           {to:'/girlfriend/makeup/ready',title:"画眉"},
           {to:'/girlfriend/makeup/ready',title:"眼影"},
           {to:'/girlfriend/makeup/ready',title:"睫毛膏"},
           {to:'/girlfriend/makeup/ready',title:"腮红"},
           {to:'/girlfriend/makeup/ready',title:"唇部"}
         ],
        routes:[
            {
                path: '/girlfriend/makeup/ready',
                component:Ready
            }
        ]
    }
};
 export default class Makeup extends React.Component{
    constructor(){
        super();
        console.log('Map');
    }
    render() {
        let routeConfigs=routeConfig['IndexRoute'];
        return (
            <div className={'stepBox'}>
            <div>
                <h2 className={'title'}>化妆步骤</h2>  
                <UlRoute links={routeConfigs.links} routes={routeConfigs.routes} name={"step "} TopName={'stepBox'}></UlRoute>
               {/*
                 <ul className={'step'}>
                    <li>准备装备</li> 
                    <li>洁面</li>  
                    <li>化妆水</li>  
                    <li>乳液</li>  
                    <li>隔离</li>  
                    <li>BB霜</li>  
                    <li>遮瑕膏</li>  
                    <li>散粉</li>     
                    <li>画眉</li>    
                    <li>眼影</li>    
                    <li>睫毛膏</li>    
                    <li>腮红</li>    
                    <li>唇部</li>    
                </ul> */}
            </div>
               <div className={'contentBox'}>
                <div className={'preBox'}> 上一个</div>
                <div className={'showBox'}></div>
                <div className={'NextBox'}>下一个</div>  
                </div>   
            </div>
        )
    }
}
