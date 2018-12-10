export default (matches, { sortBy }) => {
    return matches.sort((a, b) => {
        if (sortBy === 'date') {
            return a.date > b.date ? 1 : -1;
        }
    });
};
