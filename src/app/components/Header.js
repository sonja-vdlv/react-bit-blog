import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <h1>BIT Blog</h1>
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/author'>Author</Link></li>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </header>
        </>
    );
}

export default Header;




