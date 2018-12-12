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
        description: 'من یونایتد فصل بعد قصد دارد برای جذب دو ستاره اتلتیکو مادرید اقدام کند.',
        title: '2 ستاره اتلتیکو در تیررس منچستریونایتد',
        image: '',
        date: 1234567890,
        tags: ['منچستر یونایتد', 'اتلتیکو مادرید'],
        text: 'یونایتد تابستان امسال تلاش زیادی کرد تا گریزمان را از اتلتیکو به خدمت بگیرد و تقریبا همه چیز هم نهایی شده بود؛ ولی رد فرجام خواهی اتلتیکو و پابرجا ماندن محرومیت این باشگاه از خرید بازیکن سبب شد گریزمان قید جدایی را بزند.\n' +
            '\n' +
            'پس از آن بود که شیاطین سرخ برای جذب موراتا و لوکاکو اقدام کردند و در نهایت موفق به جذب لوکاکو شدند. طبق ادعای دیلی استار، یونایتد سال بعد به طور حتم تلاش دوباره ای را برای جذب گریزمان آغاز خواهد کرد و به نظر می رسد این بار بتواند او را به خدمت بگیرد؛ اما گریزمان تنها ستاره ای از اتلتیکو نیست که مد نظر مورینیو قرار دارد.\n' +
            '\n' +
            'طبق ادعای این منبع، مورینیو از مسئولان یونایتد خواسته تا سائول نیگز، ستاره جوان و ملی پوش اتلتیکو را نیز به دقت زیر نظر داشته باشند و شرایط جذبش را فراهم کنند. رقم فسخ سائول 150 میلیون یورو است و آقای خاص معتقد است که او می تواند بهترین جانشین برای مایکل کریک باشد.\n' +
            '\n' +
            'در صورت شکست در جذب نیگز، یونایتد به سراغ راجا ناینگولان، ستاره بلژیکی رم خواهد رفت.',
        type: 'فوتبال'
    }));
store.dispatch(addArticle(
    {
        description: 'هری کین یک کفش طلا دارد.',
        title: 'هری کین و کفش طلا',
        image: 'https://cdn.vox-cdn.com/thumbor/_6oPObR4h3lpVWMQo1Me-K7Fl4U=/0x0:4689x3165/1200x800/filters:focal(2281x710:3031x1460)/cdn.vox-cdn.com/uploads/chorus_image/image/55406533/686448602.0.jpg',
        date: 100,
        tags: ['هری کین'],
        text: 'هری کین در جام جهانی کفش طلا را گرفت',
        type: 'فوتبال'
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
    players: [{name: 'رودریگو', position: 'مهاجم', image: 'http://localhost:8080/images/220px-Valenciacf.svg.png'}, {name: 'دنیس چریشف', position: 'هافبک', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0eGHNt5cCT-9nGw9hVe-aUxMl0rcM4JL3vEUQhFVm0cQqy0rJ'}]
}));
store.dispatch(addTeam({
    name: 'آرسنال',
    type: 'football',
    players: [{name: 'آلکساندر لاکازت', position: 'مهاجم', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhCeLTFxWaCqDIqLPyL98WK2Q3iGl0YXuBHf4C9XqPYvNqD7c'}, {name: 'آرون رمزی', position: 'هافبک', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FP0qOK-tFL9dYnj8XjNk_oEtzQUE8D1b0yi2vPx5a8iIoVZTrg'}],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDTpIlwQ9j-QMdFLRX6UABw34zu71CPWXlgGmjGs0-3PJ_qcC'
}));
store.dispatch(addTeam({
    name: 'بارسلونا',
    type: 'football',
    logo: 'http://localhost:8080/images/5-98x98.png'
}));
store.dispatch(addTeam({
    name: 'اتلتیکو مادرید',
    type: 'football',
    logo: 'http://localhost:8080/images/6-98x98.png'
}));
store.dispatch(addMatch({
    type: 'football',
    teamOne: 'منچستر یونایتد',
    teamTwo: 'والنسیا',
    scoreOne: '',
    scoreTwo: '',
    league: 'لیگ قهرمانان 2018',
    logoOne: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTCyJO9pUjFjg9nwzRfg8-l8DSzATV4Wariqcr3lVuMn4NOgxRA',
    logoTwo: 'http://localhost:8080/images/220px-Valenciacf.svg.png',
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
    date: moment('2018-12-12 18:30').valueOf(),
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
    logoOne: 'http://localhost:8080/images/5-98x98.png',
    logoTwo: 'http://localhost:8080/images/6-98x98.png',
    winOne: 0,
    winTwo: 1,
    pointOne: 1,
    pointTwo: 3
}));

store.dispatch(addPlayer({name: 'داوید دخیا', height: 1.92, weight: 82, nationality: 'اسپانیایی', teams: [{name:'منچستر یونایتد', position: 'دروازه بان', number: 1}], image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/22/16/de-gea-cl-2.jpg?w968h681'}));
store.dispatch(addPlayer({name: 'جسی لینگارد', height: 1.75, weight: 65, nationality: 'انگلیسی', teams: [{name:'منچستر یونایتد', position: 'هافبک', number: 14}], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOsN7Y_yc5rJt7Aa02rs-q5IejiTFvsMklg0YpRB_PfxqsbAC', stats: [{name: 'پریمیر لیگ 2018', stats: [{name: ' بازی ها', value: '12'}, {name: 'گل ها', value: '1'}, {name: 'کارت زرد', value: '0'}, {name: 'کارت قرمز', value: '0'}]}]}));
store.dispatch(addLeague({
    name: 'لیگ قهرمانان 2018',
    isOngoing: true,
    startDate: moment().millisecond(),
    type: 'football',
    teams: [{name: 'منچستر یونایتد', matches: 12, points: 31}, {name: 'اتلتیکو مادرید', matches: 12, points: 24}],
    logo: 'https://static.vecteezy.com/system/resources/previews/000/064/610/non_2x/uefa-champions-league-vector.jpg',
    bg_image: 'http://localhost:8080/images/img-03_003.jpg'
}));
store.dispatch(addTeam({
    name: 'لس آنجلس لیکرز',
    type: 'basketball',
    players: [{name: 'لبران جیمز', position: 'فوروارد', image: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png'}, {name: 'برندن اینگرام', position: 'فوروارد', image: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627742.png'}],
    logo: 'http://mena-en.global.nba.com/media/img/teams/00/logos/LAL_logo.svg'
}));
store.dispatch(addPlayer({name: 'لبران جیمز', height: 2.03, weight: 113.4, teams: [{name:'لس آنجلس لیکرز', position: 'فوروارد', number: 23}], image: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png'}));
store.dispatch(addPlayer({name: 'برندن اینگرام', height: 2.06, weight: 86.2, teams: [{name:'لس آنجلس لیکرز', position: 'فوروارد', number: 14}], image: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627742.png'}));
store.dispatch(addTeam({
    name: 'میامی هیت',
    type: 'basketball',
    players: [{name: 'حسن وایت ساید', position: 'سنتر', image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202355.png'}, {name: 'دواین وید', position: 'گارد', image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2548.png'}],
    logo: 'http://mena-en.global.nba.com/media/img/teams/00/logos/MIA_logo.svg'
}));
store.dispatch(addPlayer({name: 'حسن وایت ساید', height: 2.13, weight: 120.2, teams: [{name:'میامی هیت', position: 'سنتر', number: 21}], image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202355.png'}));
store.dispatch(addPlayer({name: 'دواین وید', height: 1.93, weight: 99.8, teams: [{name:'میامی هیت', position: 'گارد', number: 3}], image: 'http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2548.png'}));
store.dispatch(addMatch({
    type: 'basketball',
    teamOne: 'لس آنجلس لیکرز',
    teamTwo: 'میامی هیت',
    scoreOne: '105',
    scoreTwo: '108',
    league: 'NBA',
    logoOne: 'http://mena-en.global.nba.com/media/img/teams/00/logos/LAL_logo.svg',
    logoTwo: 'http://mena-en.global.nba.com/media/img/teams/00/logos/MIA_logo.svg',
    winOne: 0,
    winTwo: 1,
    pointOne: 105,
    pointTwo: 108,
    date: moment('2018-12-12 4:30').valueOf(),
    stats: [{first: 43.8, name: 'درصد پرتاب سه امتیازی', second: 42.4}, {first: 46, name: 'ریباند', second: 50}],
    events: [{time: '0', first: 'شروع بازی', second: 'شروع بازی'}, {time: '15', second: 'پرتاب دو امتیازی از لنس استیونسون'}],
    playersOne: [{name: 'لبران جیمز', position: 'فوروارد'}, {name: 'برندن اینگرام', position: 'فوروارد'}],
    playersTwo: [{name: 'حسن وایت ساید', position: 'سنتر'}, {name: 'دواین وید', position: 'گارد'}],
}));
store.dispatch(addLeague({
    name: 'NBA',
    isOngoing: true,
    startDate: moment().valueOf(),
    type: 'basketball',
    teams: [{name: 'لس آنجلس لیکرز', matches: 12, points: 113.1}, {name: 'میامی هیت', matches: 10, points: 108.1}],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEivMFwW4quseIOUDmtS4dy-qEeWBLU1QQP9sbqBVi15iajTqotK60ziU'
}));
const jsx = (
    <Provider store={store} className='container'>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
