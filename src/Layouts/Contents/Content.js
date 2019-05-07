import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Homepage from '../../containers/Homepage/Homepage';
import Testimony from '../../containers/Testimony/Testimony';
import Blog from '../../containers/Blog/Blog';
import './Content.css';

const content = () => {

    return(
    <div className="layout">
        <header>
            <nav className="topnav">
                <NavLink
                    exact
                    to="/homepage"
                    activeClassName="active">Homepage</NavLink>
                <NavLink to={{
                    pathname: "/testimony"
                }}>Testimony</NavLink>
                <NavLink to={{
                    pathname: "/blog"
                }}>Blog</NavLink>
            </nav>
        </header>
        <div className='center'>
                <Switch>
                    <Route path="/homepage" component={Homepage}/>
                    <Route path="/testimony" component={Testimony}/>
                    <Route path="/blog" component={Blog}/>
                    <Route render={() => <h1>Not found</h1>}/>
                </Switch>
        </div>
    </div>
    )
}

export default content;