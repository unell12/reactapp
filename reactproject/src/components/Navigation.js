import React from "react";
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to=/*{{pathname: '/about', state: {forNavigation: true}}}*/"/about">About page</Link>
        </div>
    );
}

export default Navigation