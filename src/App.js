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
        date: 1234567890,
        tags: ['منچستر یونایتد', 'اتلتیکو مادرید'],
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
    name: 'منچستر یونایتد',
    type: 'football',
    players: [{name: 'David de Gea', position: 'دروازه بان'}]
}));
store.dispatch(addTeam({
    name: 'اتلتیکو مادرید',
    type: 'football',
    players: [{name: 'Antoine Griezmann', position: 'forward'}]
}));
store.dispatch(addMatch({
    type: 'football',
    teamOne: 'منچستر یونایتد',
    teamTwo: 'اتلتیکو مادرید',
    scoreOne: '1',
    scoreTwo: '0',
    league: 'لیگ قهرمانان 2018',
    logoOne: './public/images/5-98x98.png',
    logoTwo: './public/images/6-98x98.png',
    winOne: 1,
    winTwo: 0,
    date: 1234567890,
    pointOne: 3,
    pointTwo: 1,
    stats: [{first: 1, name: 'گل ها', second: 0}]
}));
store.dispatch(addMatch({
    type: 'football',
    teamOne: 'لیورپول',
    teamTwo: 'اتلتیکو مادرید',
    scoreOne: '0',
    scoreTwo: '0',
    league: 'لیگ قهرمانان 2018',
    logoOne: './public/images/5-98x98.png',
    logoTwo: './public/images/6-98x98.png',
    winOne: 0,
    winTwo: 0,
    pointOne: 2,
    pointTwo: 2,
    date: moment().millisecond()
}));

store.dispatch(addMatch({
    type: 'football',
    teamOne: 'بارسلونا',
    teamTwo: 'اتلتیکو مادرید',
    scoreOne: '1',
    scoreTwo: '2',
    league: 'لیگ قهرمانان 2018',
    logoOne: './public/images/5-98x98.png',
    logoTwo: './public/images/6-98x98.png',
    winOne: 0,
    winTwo: 1,
    pointOne: 1,
    pointTwo: 3
}));

store.dispatch(addPlayer({name: 'David de Gea', positions: 'goalKeeper', height: 1.92, teams: ['منچستر یونایتد']}));
store.dispatch(addLeague({
    name: 'لیگ قهرمانان 2018',
    isOngoing: true,
    startDate: moment().millisecond(),
    type: 'football',
    teams: [{name: 'منچستر یونایتد', matches: 12, points: 31}, {name: 'اتلتیکو مادرید', matches: 12, points: 24}],
    image: 'https://www.freevector.com/uploads/vector/preview/11403/FreeVector-UEFA-Champions-League.jpg'
}));

const jsx = (
    <Provider store={store} className='container'>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
