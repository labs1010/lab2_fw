interface Animal {
  name: string;
  move(): void;
  sound?(): void; 
  speed?: number; 
}

class Cat implements Animal {
  constructor(public name: string, public speed: number = 10) {}
  move(): void {
    console.log(`${this.name} біжить зі швидкістю ${this.speed} км/год`);
  }
  sound(): void {
    console.log(`${this.name} каже: Мяу!`);
  }
}

class Bird implements Animal {
  constructor(public name: string, public speed: number = 20) {}
  move(): void {
    console.log(`${this.name} летить зі швидкістю ${this.speed} км/год`);
  }
}

class Fish implements Animal {
  constructor(public name: string, public speed: number = 5) {}
  move(): void {
    console.log(`${this.name} пливе зі швидкістю ${this.speed} км/год`);
  }
}

const animals: Animal[] = [new Cat("Кіт"), new Bird("Сокіл"), new Fish("Карась")];
animals.forEach(a => a.move());