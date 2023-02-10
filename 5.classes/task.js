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
// 2 дз
                class Library {
                    constructor(name) {
                      this.name = name;
                      this.books = [];
                    }
                    
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (const book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }
  giveBookByName(bookName) {
    const book = this.findBookBy('name', bookName);
    if (book) {
      this.books = this.books.filter(b => b !== book);
      return book;
    }
    return null;
  }
}
const library = new Library('My Library');
library.addBook({ name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', state: 35 });
library.addBook({ name: 'To Kill a Mockingbird', author: 'Harper Lee', state: 40 });

const gatsby = library.findBookBy('name', 'The Great Gatsby');
console.log(gatsby);


const mockingbird = library.giveBookByName('To Kill a Mockingbird');
console.log(mockingbird);


//3 zad
class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(subject, mark) {
        if (mark < 2 || mark > 5) {
            return;
        }

        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject]) return 0;
    
        const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks[subject].length;
      }
    
      getAverage() {
        if (!Object.keys(this.marks).length) return 0;
    
        let sum = 0;
        let totalMarks = 0;
    
        for (const subject in this.marks) {
          sum += this.marks[subject].reduce((acc, mark) => acc + mark, 0);
          totalMarks += this.marks[subject].length;
        }
    
        return sum / totalMarks;
      }
    }
