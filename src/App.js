import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import {Provider} from 'react-redux';
import configureStore from './store/configureStore'
import {addArticle} from "./actions/news";
import {addTeam} from "./actions/teams";
import {addMatch} from "./actions/matches";
import {addPlayer} from "./actions/players";
import {addLeague} from "./actions/leagues";
import moment from 'moment';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.dispatch(addArticle(
    {
        description: 'یه چیزی',
        title: 'بلاه',
        image: '',
        date: 50,
        tags: ['همون'],
        text: 'هعی'
    }));
store.dispatch(addArticle(
    {
        description: 'هری کین یک کفش طلا دارد.',
        title: 'هری کین و کفش طلا',
        image: 'https://cdn.vox-cdn.com/thumbor/_6oPObR4h3lpVWMQo1Me-K7Fl4U=/0x0:4689x3165/1200x800/filters:focal(2281x710:3031x1460)/cdn.vox-cdn.com/uploads/chorus_image/image/55406533/686448602.0.jpg',
        date: 100,
        tags: ['هری کین'],
        text: 'هری کین در جام جهانی کفش طلا را گرفت'
    }));

store.dispatch(addTeam({
    name: 'Manchester United',
    type: 'football',
    players: [{name: 'David de Gea', position: 'دروازه بان'}]
}));
store.dispatch(addTeam({
    name: 'Atletico Madrid',
    type: 'football',
    players: [{name: 'Antoine Griezmann', position: 'forward'}]
}));
store.dispatch(addMatch({
    type: 'football',
    teamOne: 'Manchester United',
    teamTwo: 'Atletico Madrid',
    scoreOne: '1',
    scoreTwo: '0',
    league: 'Champions League 2018',
    logoOne: './public/images/5-98x98.png',
    logoTwo: './public/images/6-98x98.png',
    winOne: 1,
    winTwo: 0,
    date: 1234567890
}));
store.dispatch(addMatch({
    type: 'football',
    teamOne: 'Liverpool',
    teamTwo: 'Atletico Madrid',
    scoreOne: '0',
    scoreTwo: '0',
    league: 'Champions League 2018',
    logoOne: './public/images/5-98x98.png',
    logoTwo: './public/images/6-98x98.png',
    winOne: 0,
    winTwo: 0
}));

store.dispatch(addMatch({
    type: 'football',
    teamOne: 'Barcelona',
    teamTwo: 'Atletico Madrid',
    scoreOne: '1',
    scoreTwo: '2',
    league: 'Champions League 2018',
    logoOne: './public/images/5-98x98.png',
    logoTwo: './public/images/6-98x98.png',
    winOne: 0,
    winTwo: 1
}));

store.dispatch(addPlayer({name: 'David de Gea', positions: 'goalKeeper', height: 1.92, teams: ['Manchester United']}));
store.dispatch(addLeague({
    name: 'Champions League 2018',
    isOngoing: true,
    startDate: moment().toDate(),
    type: 'football',
    teams: [{name: 'Manchester United', matches: 12, points: 31}, {name: 'Atletico Madrid', matches: 12, points: 24}]
}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
