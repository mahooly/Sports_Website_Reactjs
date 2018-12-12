import uuid from 'uuid';

export const addComment = (
    {
        name = '',
        text = '',
        articleID = '',
        date = 0,
    } = {}
) => ({
    type: 'ADD_COMMENT',
    comment: {
        id: uuid(),
        name,
        date,
        articleID,
        text
    }
});

export const removeComment = ({ id } = {}) => ({
    type: 'REMOVE_COMMENT',
    id
});

export const editComment = (id, updates) => ({
    type: 'EDIT_COMMENT',
    id,
    updates
});
