import uuid from 'uuid';

export const addPlayer = (
    {
        name = '',
        positions = [],
        teams = [],
        age = 0,
        height = 0,
        weight = 0,
        nationality = '',
        stats = [],
        image = ''
    } = {}
) => ({
    type: 'ADD_PLAYER',
    player: {
        id: uuid(),
        name,
        positions,
        teams,
        age,
        height,
        weight,
        nationality,
        stats,
        image
    }
});

export const removePlayer = ({ id } = {}) => ({
    type: 'REMOVE_PLAYER',
    id
});

export const editPlayer = (id, updates) => ({
    type: 'EDIT_PLAYER',
    id,
    updates
});
