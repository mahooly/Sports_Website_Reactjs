import React from 'react';
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Leagues from "../components/Leagues";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/leagues" component={Leagues} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;