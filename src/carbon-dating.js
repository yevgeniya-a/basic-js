const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_2_APPRX = 0.693;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string') {
        return false;
    }
    const n = Number.parseFloat(sampleActivity);
    if (!Number.isNaN(n) && n <= MODERN_ACTIVITY && n > 0) {
        return Math.ceil(HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / n) / LOG_2_APPRX);
    }
    return false;
};
