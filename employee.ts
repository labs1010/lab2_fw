interface Payable {
  pay(): void;
}

abstract class Employee {
  constructor(public name: string, public age: number, public salary: number) {}
  abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
  getAnnualBonus(): number {
    return this.salary * 0.1;
  }
  pay(): void {
    console.log(`${this.name} отримав зарплату ${this.salary}`);
  }
}

class Manager extends Employee implements Payable {
  getAnnualBonus(): number {
    return this.salary * 0.2;
  }
  pay(): void {
    console.log(`${this.name} отримав зарплату ${this.salary}`);
  }
}

// Масив співробітників
const employees: Employee[] = [
  new Developer("Іван", 25, 3000),
  new Manager("Оксана", 35, 5000)
];

const totalBonus = employees.reduce((sum, e) => sum + e.getAnnualBonus(), 0);
console.log(`Загальний бонус: ${totalBonus}`);