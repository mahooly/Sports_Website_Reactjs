export default (players, { text }) => {
    return players.filter((player) => player.position === text);
};