const matchesReducerDefaultState = [];

export default (state = matchesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_FOOTBALL_MATCH' || 'ADD_BASKETBALL_MATCH':
            return [
                ...state,
                action.match
            ];
        case 'REMOVE_FOOTBALL_MATCH' || 'REMOVE_BASKETBALL_MATCH':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_FOOTBALL_MATCH' || 'EDIT_BASKETBALL_MATCH':
            return state.map((match) => {
                if (match.id === action.id) {
                    return {
                        ...match,
                        ...action.updates
                    };
                } else {
                    return match;
                }
            });
        default:
            return state;
    }
};
