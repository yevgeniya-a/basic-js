module.exports = function repeater(str, options) {
    const formString = (str, sep, repeatTimes = 1) =>
        new Array(repeatTimes)
            .fill(String(str))
            .join(sep);
    const additionalString = typeof options.addition !== 'undefined'
        ? formString(
            options.addition,
            options.additionSeparator || '|',
            options.additionRepeatTimes)
        : '';
    const resultString = `${String(str)}${additionalString}`;
    return formString(
        resultString,
        options.separator || '+',
        options.repeatTimes
    );
};
