interface BankAccount {
  money: number,
  deposit: (value: number) => void;
}

interface Myself {
  name: string;
  bankAccount: BankAccount;
  hobbies: string[]
}



let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number) {
    this.money += value;
  }
};

let myself: Myself  = {
  name: "John",
  bankAccount: bankAccount,
  hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
