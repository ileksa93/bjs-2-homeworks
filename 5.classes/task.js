class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
        if (this.state > 100) {
          this.state = 100;
        }
      }
      set state(value) {
        if (value < 0) {
          this._state = 0;
        } else if (value > 100) {
          this._state = 100;
        } else {
          this._state = value;
        }
      }
      
      get state() {
        return this._state;
      }
    }
    class Magazine extends PrintEditionItem {
        constructor(name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.type = "magazine";
        }
      }
      class Book extends PrintEditionItem {
        constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
        }
        }
        class NovelBook extends Book {
            constructor(name, releaseDate, pagesCount, author) {
            super(name, releaseDate, pagesCount, author);
            this.type = "novel";
            }
            }
            class FantasticBook extends Book {
                constructor(name, releaseDate, pagesCount, author) {
                super(name, releaseDate, pagesCount, author);
                this.type = "fantastic";
                }
            }
            class DetectiveBook extends Book {
                constructor(name, releaseDate, pagesCount, author) {
                super(name, releaseDate, pagesCount, author);
                this.type = "detective";
                }
                }
