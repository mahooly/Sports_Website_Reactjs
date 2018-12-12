export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const setYearFilter = (year = '') => ({
    type: 'SET_YEAR_FILTER',
    year
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const sortByPoints = () => ({
    type: 'SORT_BY_POINTS'
});

export const sortByName = () => ({
    type: 'SORT_BY_NAME'
});

export const sortByWin = () => ({
    type: 'SORT_BY_WIN'
});
