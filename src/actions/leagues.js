import uuid from 'uuid';

export const addLeague = (
    {
        name = '',
        isOngoing = true,
        image = '',
        type = '',
        startDate = 0,
        teams = []
    } = {}
) => ({
    type: 'ADD_LEAGUE',
    league: {
        id: uuid(),
        name,
        isOngoing,
        image,
        type,
        startDate,
        teams
    }
});

export const removeLeague = ({ id } = {}) => ({
    type: 'REMOVE_LEAGUE',
    id
});

export const editLeague = (id, updates) => ({
    type: 'EDIT_LEAGUE',
    id,
    updates
});
