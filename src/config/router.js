import React from 'react';
import { Route } from 'react-router-dom';

import TopicList from '../views/topic-list';
import TopicDetail from '../views/topic-detail';


export default ()=>[
    <Route path="/" component={TopicList} exact></Route>,
    <Route path="/detail" component={TopicDetail}></Route>
]