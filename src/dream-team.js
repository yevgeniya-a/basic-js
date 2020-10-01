module.exports = function createDreamTeam(members) {
    return Array.isArray(members) && members.filter(m => typeof m === 'string')
        .map(m => m.trim()[0].toUpperCase()).sort().join('');
};
