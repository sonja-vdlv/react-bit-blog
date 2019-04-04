import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import About from './About';
import Author from './Author';
import Home from '../pages/Home/Home'


const Main = () => {
    return (
        <main>
            <Switch>
                <Route path='/about' component={About}></Route>
                <Route path='/author' component={Author}></Route>
                <Route path='/' component={Home}></Route>
            </Switch>
        </main>
    );
}

export default Main;