import { createStore, combineReducers } from 'redux';
import newsReducer from '../reducers/news';

export default () => {
    const store = createStore(
        combineReducers({
            news: newsReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
