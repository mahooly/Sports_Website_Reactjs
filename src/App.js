import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import {Provider} from 'react-redux';
import configureStore from './store/configureStore'
import {addArticle} from "./actions/news";

const store = configureStore();

store.dispatch(addArticle(
    {
        description: 'یه چیزی',
        title: 'بلاه',
        image: '',
        date: 50
    }));
store.dispatch(addArticle(
    {
        description: 'هری کین یک کفش طلا دارد.',
        title: 'هری کین و کفش طلا',
        image: '',
        date: 100
    }));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
