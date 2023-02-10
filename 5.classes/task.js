class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        if (this.state < 100) {
            this.state *= 1.5;
        }
    }
    set state(value) {
        if (value <= 0 || value >= 100) {
            console.log("Invalid value for state, it must be between 0 and 100");
        } else {
            this._state = value;
        }
    }
    get state() {
        return this._state;
    }