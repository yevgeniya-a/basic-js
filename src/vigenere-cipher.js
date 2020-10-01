class VigenereCipheringMachine {
    constructor(direct) {
        this.direct = typeof direct === 'undefined' ? true : direct;
    }

    encrypt(str, key) {
        return this._process(str, key, true);
    }

    decrypt(str, key) {
        return this._process(str, key, false);
    }

    _process(str, key, encrypt = true) {
        if (!str || !key) {
            throw new Error();
        }
        str = str.toUpperCase();
        key = key.toUpperCase();

        const ALPHABET_LENGTH = 26;
        const CHAR_SHIFT = 65;

        let j = 0;
        const result = str.split('').map(s => {
            const si = s.charCodeAt(0) - CHAR_SHIFT;
            let ki = key.charCodeAt(j % key.length) - CHAR_SHIFT;
            if (!encrypt) {
                ki = -ki + ALPHABET_LENGTH;
            }
            if (si >= 0 && si < ALPHABET_LENGTH) {
                j++;
                return String.fromCharCode(((si + ki) % ALPHABET_LENGTH) + CHAR_SHIFT);
            }
            return s;
        });
        return (this.direct ? result : result.reverse()).join('');
    }
}

module.exports = VigenereCipheringMachine;
