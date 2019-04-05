import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import About from './About';
import Author from './Author';
import Home from '../pages/Home/Home'
import PostDetails from '../pages/PostDetails/PostDetails';


const Main = () => {
    return (
        <main>
            <Switch>
                <Route path='/posts/2' component={PostDetails} />
                <Route path='/about' component={About} />
                <Route path='/author' component={Author} />
                <Route path='/' component={Home} />
            </Switch>
        </main>
    );
}

export default Main;