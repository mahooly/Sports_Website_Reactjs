import React from 'react';
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Leagues from "../components/Leagues";
import NewsPage from "../components/NewsPage";
import TeamPage from "../components/TeamPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/leagues" component={Leagues} />
                <Route path="/news/:id" component={NewsPage} />
                <Route path="/team/:name" component={TeamPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;