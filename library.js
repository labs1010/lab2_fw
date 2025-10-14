class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isBorrowed = false;
    }
    borrow() {
        this.isBorrowed = true;
    }
}
class Magazine {
    constructor(title, author, issueNumber) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
        this.isBorrowed = false;
    }
    borrow() {
        this.isBorrowed = true;
    }
}
class DVD {
    constructor(title, author, duration) {
        this.title = title;
        this.author = author;
        this.duration = duration;
        this.isBorrowed = false;
    }
    borrow() {
        this.isBorrowed = true;
    }
}
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    findItemByName(name) {
        return this.items.find(i => i.title === name);
    }
    listAvailable() {
        console.log("Доступні елементи:");
        this.items.filter(i => !i.isBorrowed).forEach(i => console.log(`${i.title} — ${i.author}`));
    }
}
const lib = new Library();
const book = new Book("Війна і мир", "Толстой", 1200);
const dvd = new DVD("Інтерстеллар", "Нолан", 169);
lib.addItem(book);
lib.addItem(dvd);
book.borrow();
lib.listAvailable();
