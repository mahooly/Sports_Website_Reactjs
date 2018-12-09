import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
    <header>
        <Link to={"/"}>
            <h1>ورزش فلان</h1>
        </Link>
        <NavLink to="/" activeClassName="is-active" exact={true}>خانه</NavLink>
        <NavLink to="/leagues" activeClassName="is-active">لیگ ها</NavLink>
    </header>
);

export default Header;