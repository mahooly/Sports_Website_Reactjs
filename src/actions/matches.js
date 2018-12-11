import uuid from 'uuid';

export const addMatch = (
    {
        type = '',
        teamOne = '',
        teamTwo = '',
        scoreOne = '',
        scoreTwo = '',
        statsOne = [],
        statsTwo = [],
        hasCommentary = false,
        league = '',
        date = 0,
        logoOne = '',
        logoTwo = '',
        winOne = 0,
        winTwo = 0
    } = {}
) => ({
    type: 'ADD_MATCH',
    match: {
        id: uuid(),
        type,
        teamOne,
        teamTwo,
        scoreOne,
        scoreTwo,
        statsOne,
        statsTwo,
        hasCommentary,
        league,
        date,
        logoOne,
        logoTwo,
        winOne,
        winTwo
    }
});

export const removeMatch = ({ id } = {}) => ({
    type: 'REMOVE_MATCH',
    id
});

export const editMatch = (id, updates) => ({
    type: 'EDIT_MATCH',
    id,
    updates
});
