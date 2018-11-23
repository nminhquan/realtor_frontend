import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './home';
import HouseAdmin from './admin/house-admin';
import UserAdmin from './admin/user-admin';
import Admin from './admin/admin';

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/admin/user-admin" component={UserAdmin} />
            <Route path="/admin/house-admin" component={HouseAdmin} />
        </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
