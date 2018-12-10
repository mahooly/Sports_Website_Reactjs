const leaguesReducerDefaultState = [];

export default (state = leaguesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_LEAGUE':
            return [
                ...state,
                action.league
            ];
        case 'REMOVE_LEAGUE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_LEAGUE':
            return state.map((league) => {
                if (league.id === action.id) {
                    return {
                        ...league,
                        ...action.updates
                    };
                } else {
                    return league;
                }
            });
        default:
            return state;
    }
};
