import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Users from '../Users/Users';
import Courses from '../Courses/Courses';
import './Udemy.css';

class Udemy extends Component {
    render(){
        return(
            <div>
                <header className="Udemy">
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/users" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Users</NavLink></li>
                            <li><NavLink to="/courses" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Courses</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/users" component={Users}/>
                    <Route path="/courses" component={Courses}/>
                </Switch>
            </div>
        )
    }
}

export default Udemy;
