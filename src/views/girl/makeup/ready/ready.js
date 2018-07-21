import React from 'react';
const goods = [{
        index: 0,
        pre: 8,
        next: 1,
        up: false,
        down: 3,
        content: '123131312',
        title: '粉底'
    }, {
        index: 1,
        pre: 0,
        next: 2,
        up: false,
        down: 4,
        content: '123131312',
        title: '遮瑕膏'
    },
    {
        index: 2,
        pre: 1,
        next: 3,
        up: false,
        down: 5,
        content: '123131312',
        title: '腮红'
    }, {
        index: 3,
        pre: 2,
        next: 4,
        up: 0,
        down: 6,
        content: '123131312',
        title: '睫毛膏'
    }, {
        index: 4,
        pre: 3,
        next: 5,
        up: 1,
        down: 7,
        content: '123131312',
        title: '眼线笔'
    }, {
        index: 5,
        pre: 4,
        next: 6,
        up: 2,
        down: 8,
        content: '123131312',
        title: '眼影'
    }, {
        index: 6,
        pre: 5,
        next: 7,
        up: 3,
        down: false,
        content: '123131312',
        title: '眉笔'
    }, {
        index: 7,
        pre: 6,
        next: 8,
        up: 4,
        down: false,
        content: '123131312',
        title: '唇彩'
    }, {
        index: 8,
        pre: 7,
        next: 0,
        up: 5,
        down: false,
        content: '123131312',
        title: '化妆刷'
    }
]

export default class Ready extends React.Component {
    constructor() {
        super();
        console.log('Map');
    }
    render() {
        let li=goods.map((item,index)=>{
            console.log(index,item)
        })
        return ( 
            <div className = {''} >
            <ul >
                <li></li> 
            </ul> 
            </div>
        )
    }
}