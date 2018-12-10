import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
    <header>
        <Link to={"/"}>
            <h1>ورزش فلان</h1>
        </Link>
        <NavLink to="/" activeClassName="is-active" exact={true}>خانه</NavLink>
        <NavLink to="/leagues" activeClassName="is-active">لیگ ها</NavLink>
        <NavLink to="/login" activeClassName="is-active">ورود</NavLink>
        <NavLink to="/register" activeClassName="is-active">ثبت نام</NavLink>
    </header>
);

export default Header;