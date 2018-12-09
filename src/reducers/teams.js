const teamsReducerDefaultState = [];

export default (state = teamsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TEAM':
            return [
                ...state,
                action.team
            ];
        case 'REMOVE_TEAM':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_TEAM':
            return state.map((team) => {
                if (team.id === action.id) {
                    return {
                        ...team,
                        ...action.updates
                    };
                } else {
                    return team;
                };
            });
        default:
            return state;
    }
};
