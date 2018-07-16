import React, {Component} from 'react';
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';

function routeEl(){

}



export default class routeComponent extends Component{
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
            }    
        };
    };
    componentWillMount(){
     let routes= this.props['routes'];
        if(routes instanceof Array){
            let route=[];
            routes.forEach((item,index)=>{
               item.prototype=new Object(this.state.default);
               route.push({item});
            })
        };
        return 
    }
    render(){
        return(
            <Router>

            </Router>
        )
    }
} 


// function a(){
//     b.call(this);
//     this.path='',
//     this.components='',
//     this.getComponent=function(){console.log('getComponent')}
// };
// function  b(){
//     this.path='',
//     this.components='',
//     this.getComponent=function(){console.log('getComponent')}
//     this.onEnter=function(){console.log('onEnter')},
//     this.onLeave=function(){console.log('onLeave')}
// };
// var c=function (param) { 
//     for( key in b){
//         if(typeof a[key] == "function"){
//             this.propotype[key]=a[key];
//         }else if(typeof b[key] == "function"){
//             this.propotype[key]=b[key];
//         }else{
//             this[key]=b[key]!=null?b[key]:a[key];
//         }
        
//     }
//  };
// // var d=new c()
// // d.getComponent();
// // d.onEnter();
// // d.onLeave();
// a.propotype=b;
// a.propotype.constructor=a;
// var d=new a();
// console.log(d)

