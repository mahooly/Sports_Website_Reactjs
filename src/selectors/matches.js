import moment from 'moment';

export default (matches, text, { sortBy, year}) => {
    return matches.filter((match) => {
        const matchOne = match.teamOne.toLowerCase() === text.toLowerCase();
        const matchTwo = match.teamTwo.toLowerCase() === text.toLowerCase();
        const matchLeague = match.league.toLowerCase() === text.toLowerCase();
        const matchYear = year ? moment(match.date).year() === Number(year) : true;
        return matchOne || matchTwo || (matchLeague && matchYear);
    }).sort((a, b) => {

        if (sortBy === 'date') {
            return a.date < b.date ? 1 : -1;
        }

        else if (sortBy === 'win') {
            if (((a.teamOne === text) && a.winOne) || ((a.teamTwo === text) && a.winTwo))
            {
                return -1;
            }
            else if (((b.teamOne === text) && b.winOne) || ((b.teamTwo === text) && b.winTwo))
            {
                return 1;
            }
            else if (!a.winOne && !a.winTwo)
            {
                return -1;
            }
            else
            {
                return 1;
            }

        }

        else if (sortBy === 'points')
        {
            if ((a.teamOne === text))
            {
                if (b.teamOne === text)
                {
                    return a.pointOne > b.pointOne ? -1 : 1;
                }
                else if (b.teamTwo === text)
                {
                    return a.pointOne > b.pointTwo ? -1 : 1;
                }
            }
            else {
                if (b.teamOne === text)
                {
                    return a.pointTwo > b.pointOne ? -1 : 1;
                }
                else if (b.teamTwo === text)
                {
                    return a.pointTwo > b.pointTwo ? -1 : 1;
                }
            }
        }
        else {
            return 0;
        }
    });
};
