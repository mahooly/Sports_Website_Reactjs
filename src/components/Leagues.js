import React from 'react';
import {connect} from 'react-redux';
import LeagueItem from './LeagueItem';
import leagueSelector from '../selectors/leagues';
import LeagueFilter from './LeagueFilter';
import fixed_bg from '../../public/images/img1.jpg';

const bg = {
    backgroundImage: `url(${fixed_bg})`
};

const Leagues = (props) =>  {
    const oldLeagues = props.leagues.filter((league) => !league.isOngoing).sort((a, b) => {
        return a.startDate > b.startDate ? -1 : 1
    });
    const newLeagues = props.leagues.filter((league) => league.isOngoing);
    const football = newLeagues.filter((league) => league.type === 'football');
    const oldFootball = oldLeagues.filter((league) => league.type === 'football');
    const basketball = newLeagues.filter((league) => league.type === 'basketball');
    const oldBasketball = oldLeagues.filter((league) => league.type === 'basketball');
    return (
        <div className='leagues' style={bg}>
            <h3>صفحه لیگ ها</h3>
            <LeagueFilter/>
            {football.length && <h4>لیگ های فوتبال</h4>}
            {football.map((league) => {
                return <LeagueItem key={league.name} league={league}/>
            })}
            {basketball.length && <h4>لیگ های بسکتبال</h4>}
            {basketball.map((league) => {
                return <LeagueItem key={league.name} league={league}/>
            })}
            {oldFootball.length && <h4>لیگ های قدیمی فوتبال</h4>}

            {oldFootball.map((league) => {
                return <LeagueItem key={league.name} league={league}/>
            })}

            {oldBasketball.length && <h4>لیگ های قدیمی بسکتبال</h4>}

            {oldBasketball.map((league) => {
                return <LeagueItem key={league.name} league={league}/>
            })}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        leagues: leagueSelector(state.leagues, state.filters)
    };
};

export default connect(mapStateToProps)(Leagues);