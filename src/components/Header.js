import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
    <header>
        <Link to={"/"}>
            <h1 className='header'>ورزش فلان</h1>
        </Link>
        <div className='navs-container'>
            <NavLink to="/" className='nav' activeClassName="is-active" exact={true}>خانه</NavLink>
            <NavLink to="/leagues" className='nav' activeClassName="is-active">لیگ ها</NavLink>
        </div>
    </header>
);

export default Header;