import uuid from 'uuid';

export const addArticle = (
    {
        description = '',
        title = '',
        image = '',
        date = 0
    } = {}
) => ({
    type: 'ADD_ARTICLE',
    article: {
        id: uuid(),
        description,
        title,
        image,
        date
    }
});

export const removeArticle = ({ id } = {}) => ({
    type: 'REMOVE_ARTICLE',
    id
});

export const editArticle = (id, updates) => ({
    type: 'EDIT_ARTICLE',
    id,
    updates
});
