const newsReducerDefaultState = [];

export default (state = newsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return [
                ...state,
                action.article
            ];
        case 'REMOVE_ARTICLE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_ARTICLE':
            return state.map((article) => {
                if (article.id === action.id) {
                    return {
                        ...article,
                        ...action.updates
                    };
                } else {
                    return article;
                };
            });
        default:
            return state;
    }
};
