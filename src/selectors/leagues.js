export default (leagues, {text, year}) => {
    return leagues.filter((league) => {
        const leagueName = text ? league.name.toLowerCase().includes(text.toLowerCase()) : true;
        const leagueYear = year ? league.startDate === year : true;
        return leagueName && leagueYear;
    }).sort((a, b) => {
        return a.startDate < b.startDate ? 1 : -1;
    });
};