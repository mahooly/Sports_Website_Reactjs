const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date'
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
            case 'SET_YEAR_FILTER':
            return {
                ...state,
                year: action.year
            };
        case 'SORT_BY_POINTS':
            return {
                ...state,
                sortBy: 'points'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_NAME':
            return {
                ...state,
                sortBy: 'name'
            };
        case 'SORT_BY_WIN':
            return {
                ...state,
                sortBy: 'win'
            };
        default:
            return state;
    }
};
