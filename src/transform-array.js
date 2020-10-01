module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array!');
    }

    const result = [];
    let skip = 0;
    arr.forEach((e, i) => {
        if (skip === 1) {
            skip++;
        } else {
            switch (e) {
                case '--double-next':
                    if (arr.length - 1 > i) {
                        result.push(arr[i + 1]);
                    }
                    break;
                case '--double-prev':
                    if (i > 0 && skip !== 2) {
                        result.push(arr[i - 1]);
                    }
                    break;
                case '--discard-next':
                    skip = 1;
                    break;
                case '--discard-prev':
                    if (i > 0 && skip !== 2) {
                        result.splice(-1, 1);
                    }
                    break;
                default:
                    result.push(e);
                    break;
            }
            if (skip === 2) {
                skip = 0;
            }
        }
    });
    return result;
};
