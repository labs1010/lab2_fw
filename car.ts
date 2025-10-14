abstract class Car {
  constructor(protected brand: string, public model: string, private year: number) {}

  abstract showInfo(): void;

  protected getCarAge(): number {
    return new Date().getFullYear() - this.year;
  }
}

class BMW extends Car {
  constructor(model: string, year: number, private isElectric: boolean) {
    super("BMW", model, year);
  }

  showInfo(): void {
    console.log(`${this.brand} ${this.model} (${this.getCarAge()} років), електро: ${this.isElectric}`);
  }
}

class Tesla extends Car {
  constructor(model: string, year: number, private batteryCapacity: number) {
    super("Tesla", model, year);
  }

  showInfo(): void {
    console.log(`${this.brand} ${this.model} (${this.getCarAge()} років), батарея: ${this.batteryCapacity} кВт·год`);
  }
}

// Тест
const cars: Car[] = [new BMW("X5", 2020, false), new Tesla("Model 3", 2023, 75)];
cars.forEach(c => c.showInfo());