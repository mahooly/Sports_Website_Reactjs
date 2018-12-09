import uuid from 'uuid';

export const addTeam = (
    {
        name = '',
        type = '',
        logo = '',
        players = [],
        coachingStaff = []
    } = {}
) => ({
    type: 'ADD_TEAM',
    team: {
        id: uuid(),
        name,
        type,
        logo,
        players,
        coachingStaff
    }
});

export const removeTeam = ({ id } = {}) => ({
    type: 'REMOVE_TEAM',
    id
});

export const editTeam = (id, updates) => ({
    type: 'EDIT_TEAM',
    id,
    updates
});
