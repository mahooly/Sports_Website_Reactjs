export default (teams, { sortBy }) => {
    return teams.sort((a, b) => {
        if (sortBy === 'points') {
            return a.points < b.points ? 1 : -1;
        }
        else if (sortBy === 'name')
        {
            return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
        }
    });
};
