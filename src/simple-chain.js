const chainMaker = {
    getLength() {
        return this._link && this._link.length || 0;
    },
    addLink(value) {
        if (!this._link) {
            this._link = [];
        }
        this._link.push(`( ${typeof value === 'undefined' ? '' : `${value} `})`);
        return this;
    },
    removeLink(position) {
        if (!this._link || typeof this._link[position - 1] !== 'string') {
            delete this._link;
            throw new Error('Invalid position!');
        }
        this._link.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        if (this._link) {
            this._link.reverse();
        }
        return this;
    },
    finishChain() {
        let result;
        if (this._link) {
            result = this._link.join('~~');
            delete this._link;
        }
        return result;
    },
};

module.exports = chainMaker;
