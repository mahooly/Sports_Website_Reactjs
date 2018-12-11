import uuid from 'uuid';

export const addMatch = (
    {
        type = '',
        teamOne = '',
        teamTwo = '',
        scoreOne = '',
        scoreTwo = '',
        stats = [],
        hasCommentary = false,
        league = '',
        date = 0,
        logoOne = '',
        logoTwo = '',
        winOne = 0,
        winTwo = 0,
        pointOne = 0,
        pointTwo = 0,
        playersOne = [],
        playersTwo = [],
        subOne = [],
        subTwo = [],
        events = []
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
        stats,
        hasCommentary,
        league,
        date,
        logoOne,
        logoTwo,
        winOne,
        winTwo,
        pointOne,
        pointTwo,
        playersOne,
        playersTwo,
        subOne,
        subTwo,
        events
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
