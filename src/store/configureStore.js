import { createStore, combineReducers } from 'redux';
import newsReducer from '../reducers/news';
import teamsReducer from '../reducers/teams';
import matchesReducer from '../reducers/matches';
import playersReducer from '../reducers/players';
import leaguesReducer from '../reducers/leagues';
import filtersReducer from '../reducers/filters';
export default () => {
    const store = createStore(
        combineReducers({
            news: newsReducer,
            teams: teamsReducer,
            matches: matchesReducer,
            players: playersReducer,
            leagues : leaguesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
