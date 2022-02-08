abstract class Department {
  static fiscalYear = 2022;

  protected readonly id: string;
  private name: string;
  protected employees: string[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department):void;
  //  {
  //   console.log(`Department (${this.id}): " (${this.name})`);
  // }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
    
  }

  describe() {
      console.log('IT Department - ID: '+ this.id);
  }
}

class AccountingDepartment extends Department {
  private reports: string[];
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
    this.lastReport = reports[0];
  }

  static getInstance(){
    if(AccountingDepartment.instance){
        return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
      console.log('Accounting Department - ID: ', this.id)
  }

  addEmployee(name: string) {
    if (name === "Hyunjoong") {
      return;
    }
    this.employees.push(name);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }
}


const employee1 = Department.createEmployee('Hyunjoong')
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment("d1", ["Hyunjoong"]);

it.addEmployee("Hyunjoong");
it.addEmployee("Max");
it.addEmployee("Manu");

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = "Year End Report";

accounting.addReport("Someting went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Hyunjoong");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
accounting.printReports();
