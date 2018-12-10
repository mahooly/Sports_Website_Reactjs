export default (matches, { team, win, score, sortBy}) => {
    return matches.filter((match) => {
        const teamOneMatch = team ? (match.teamOne === team) : true;
        const teamTwoMatch = team ? (match.teamTwo === team) : true;

        return teamOneMatch || teamTwoMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.date < b.date ? 1 : -1;
        }
    });
};
