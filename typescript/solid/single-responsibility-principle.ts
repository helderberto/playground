abstract class Employee {
  protected workedHours: number;
  protected valuePerHour: number;

  constructor(workedHours: number, valuePerHour: number) {
    this.workedHours = workedHours;
    this.valuePerHour = valuePerHour;
  }

  abstract calculatePay(): number;

  abstract reportHours(): number;

  save(): void {
    console.log('[save] workedHours', this.workedHours);
    console.log('[save] valuePerHour', this.valuePerHour);
  }
}

class HR extends Employee {
  constructor(workedHours: number, valuePerHour: number) {
    super(workedHours, valuePerHour);
  }

  calculatePay(): number {
    return this.workedHours * this.valuePerHour;
  }

  reportHours(): number {
    return this.workedHours;
  }
}

class Accounting extends Employee {
  constructor(workedHours: number, valuePerHour: number) {
    super(workedHours, valuePerHour);
  }

  calculatePay(): number {
    return this.workedHours * this.valuePerHour;
  }

  reportHours(): number {
    return this.workedHours;
  }
}

const hr = new HR(120, 20);
hr.save();

const accounting = new HR(80, 15);
accounting.save();
