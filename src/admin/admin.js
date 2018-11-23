import 'bootstrap/dist/css/bootstrap.min.css'

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserAdmin from './user-admin';

const Admin = () => (
    <div>
        <h1>This is React Admin Page</h1>
       	<ul>
			<li><a href="/admin/user-admin">USER ADMIN</a></li>
			<li><a href="/admin/house-admin">HOUSE ADMIN</a></li>
		</ul>
    </div>
)

export default Admin