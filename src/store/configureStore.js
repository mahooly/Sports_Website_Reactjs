import { createStore, combineReducers } from 'redux';
import newsReducer from '../reducers/news';
import teamsReducer from '../reducers/teams'

export default () => {
    const store = createStore(
        combineReducers({
            news: newsReducer,
            teams: teamsReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
