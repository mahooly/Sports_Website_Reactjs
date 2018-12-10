import React from 'react';
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Leagues from "../components/Leagues";
import NewsPage from "../components/NewsPage";
import TeamPage from "../components/TeamPage";
import MatchPage from '../components/MatchPage'
import PlayerPage from '../components/PlayerPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/leagues" component={Leagues} />
                <Route path="/news/:id" component={NewsPage} />
                <Route path="/team/:name" component={TeamPage} />
                <Route path="/match/:id" component={MatchPage} />
                <Route path="/player/:name" component={PlayerPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;