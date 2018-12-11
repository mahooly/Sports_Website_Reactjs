export default (leagues, {text}) => {
    return leagues.filter((league) => {
        return league.name.toLowerCase().includes(text.toLowerCase());
    }).sort((a, b) => {
        return a.startDate < b.startDate ? 1 : -1;
    });
};