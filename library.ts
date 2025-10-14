interface LibraryItem {
  title: string;
  author: string;
  borrow(): void;
  isBorrowed?: boolean;
}

class Book implements LibraryItem {
  isBorrowed = false;
  constructor(public title: string, public author: string, public pages: number) {}
  borrow(): void {
    this.isBorrowed = true;
  }
}

class Magazine implements LibraryItem {
  isBorrowed = false;
  constructor(public title: string, public author: string, public issueNumber: number) {}
  borrow(): void {
    this.isBorrowed = true;
  }
}

class DVD implements LibraryItem {
  isBorrowed = false;
  constructor(public title: string, public author: string, public duration: number) {}
  borrow(): void {
    this.isBorrowed = true;
  }
}

class Library {
  private items: LibraryItem[] = [];

  addItem(item: LibraryItem): void {
    this.items.push(item);
  }

  findItemByName(name: string): LibraryItem | undefined {
    return this.items.find(i => i.title === name);
  }

  listAvailable(): void {
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