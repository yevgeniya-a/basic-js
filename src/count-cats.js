module.exports = function countCats(matrix) {
    return matrix.reduce(
        (s, arr) => s + arr.reduce(
            (cats, v) => cats + (v === '^^' ? 1 : 0),
            0
        ),
        0
    );
};
