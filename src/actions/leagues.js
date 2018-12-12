import uuid from 'uuid';

export const addLeague = (
    {
        name = '',
        isOngoing = true,
        bg_image = '',
        type = '',
        startDate = 0,
        teams = [],
        logo = ''
    } = {}
) => ({
    type: 'ADD_LEAGUE',
    league: {
        id: uuid(),
        name,
        isOngoing,
        bg_image,
        type,
        startDate,
        teams,
        logo
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
