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
    players: [{name: 'داوید دخیا', position: 'دروازه بان', image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/22/16/de-gea-cl-2.jpg?w968h681'}, {name: 'جسی لینگارد', position: 'هافبک', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOsN7Y_yc5rJt7Aa02rs-q5IejiTFvsMklg0YpRB_PfxqsbAC'}],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTCyJO9pUjFjg9nwzRfg8-l8DSzATV4Wariqcr3lVuMn4NOgxRA'
}));
store.dispatch(addTeam({
    name: 'والنسیا',
    type: 'football',
    players: [{name: 'رودریگو', position: 'مهاجم', image: 'https://files.laliga.es/player-photo/6/18/2700/256x256_008329_000011_049_1_002_000_000.jpg'}, {name: 'دنیس چریشف', position: 'هافبک', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0eGHNt5cCT-9nGw9hVe-aUxMl0rcM4JL3vEUQhFVm0cQqy0rJ'}]
}));
store.dispatch(addTeam({
    name: 'آرسنال',
    type: 'football',
    players: [{name: 'آلکساندر لاکازت', position: 'مهاجم', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhCeLTFxWaCqDIqLPyL98WK2Q3iGl0YXuBHf4C9XqPYvNqD7c'}, {name: 'آرون رمزی', position: 'هافبک', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FP0qOK-tFL9dYnj8XjNk_oEtzQUE8D1b0yi2vPx5a8iIoVZTrg'}],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDTpIlwQ9j-QMdFLRX6UABw34zu71CPWXlgGmjGs0-3PJ_qcC'
}));
store.dispatch(addMatch({
    type: 'football',
    teamOne: 'منچستر یونایتد',
    teamTwo: 'والنسیا',
    scoreOne: '',
    scoreTwo: '',
    league: 'لیگ قهرمانان 2018',
    logoOne: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTCyJO9pUjFjg9nwzRfg8-l8DSzATV4Wariqcr3lVuMn4NOgxRA',
    logoTwo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/220px-Valenciacf.svg.png',
    winOne: 0,
    winTwo: 0,
    date: moment("2018-12-12 23:30", "YYYY-MM-DD HH:mm").valueOf(),
    pointOne: 3,
    pointTwo: 1,
}));
store.dispatch(addMatch({
    type: 'football',
    teamOne: 'منچستر یونایتد',
    teamTwo: 'آرسنال',
    scoreOne: '2',
    scoreTwo: '2',
    league: 'پریمیر لیگ 2018',
    logoOne: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTCyJO9pUjFjg9nwzRfg8-l8DSzATV4Wariqcr3lVuMn4NOgxRA',
    logoTwo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDTpIlwQ9j-QMdFLRX6UABw34zu71CPWXlgGmjGs0-3PJ_qcC',
    winOne: 0,
    winTwo: 0,
    pointOne: 2,
    pointTwo: 2,
    date: moment('2018-12-5 23:30').valueOf(),
    stats: [{first: 44, name: 'درصد مالکیت توپ', second: 56}, {first: 7, name: 'موقعیت گل', second: 4}, {first: 447, second: 545, name: 'تعداد پاس ها'}],
    events: [{time: '0', first: 'شروع بازی', second: 'شروع بازی'}, {time: '26', second: 'گل!'}],
    playersOne: [{name: 'داوید دخیا', position: 'دروازه بان'}, {name: 'جسی لینگارد', position: 'هافبک', change: '60'}, {name: 'مارکوس رشفورد', position: 'مهاجم'}],
    playersTwo: [{name: 'آرون رمزی', position: 'هافبک'}, {name: 'راب هولدینگ', position: 'دفاع'}, {name: 'هکتور بلرین', position: 'هافبک'}],
    subOne: [{name: 'پل پوگبا', position: 'هافبک'}],
    subTwo: [{name: 'آلکساندر لاکازت', position: 'مهاجم'}]
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

store.dispatch(addPlayer({name: 'داوید دخیا', height: 1.92, weight: 82, teams: [{name:'منچستر یونایتد', position: 'دروازه بان', number: 1}]}));
store.dispatch(addPlayer({name: 'جسی لینگارد', height: 1.75, weight: 65, teams: [{name:'منچستر یونایتد', position: 'هافبک', number: 14}], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOsN7Y_yc5rJt7Aa02rs-q5IejiTFvsMklg0YpRB_PfxqsbAC', stats: [{name: 'پریمیر لیگ 2018', stats: [{name: ' بازی ها', value: '12'}, {name: 'گل ها', value: '1'}, {name: 'کارت زرد', value: '0'}]}]}));
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
