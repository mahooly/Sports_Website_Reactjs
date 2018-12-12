export default (players, { text }) => {
    return players.filter((player) => text ? player.position.includes(text) : true);
};