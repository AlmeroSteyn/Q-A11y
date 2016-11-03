import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import A11yFailDetail from './components/A11yFailDetail';
import A11yFailMaster from './components/A11yFailMaster';
import A11yPassDetail from './components/A11yPassDetail';
import A11yPassMaster from './components/A11yPassMaster'


import App from './App';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={A11yPassMaster}/>
            <Route path="pass" component={A11yPassMaster}/>
            <Route path="pass/detail" component={A11yPassDetail}/>
            <Route path="fail" component={A11yFailMaster}/>
            <Route path="fail/detail" component={A11yFailDetail}/>
        </Route>
    </Router>
);

export default router;
