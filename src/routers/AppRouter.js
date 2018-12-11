import React from 'react';
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Leagues from "../components/Leagues";
import NewsPage from "../components/NewsPage";
import TeamPage from "../components/TeamPage";
import MatchPage from '../components/MatchPage';
import PlayerPage from '../components/PlayerPage';
import LeaguePage from '../components/LeaguePage';
import Login from "../components/Login";
import Register from "../components/Register";

const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/leagues" component={Leagues} />
                <Route path="/news/:id" component={NewsPage} />
                <Route path="/team/:name" component={TeamPage} />
                <Route path="/match/:id" component={MatchPage} />
                <Route path="/player/:name" component={PlayerPage} />
                <Route path="/league/:name" component={LeaguePage} />
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;