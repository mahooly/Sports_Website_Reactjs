import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>ورزش فلان</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>خانه</NavLink>
        <NavLink to="/leagues" activeClassName="is-active">لیگ ها</NavLink>
    </header>
);

export default Header;