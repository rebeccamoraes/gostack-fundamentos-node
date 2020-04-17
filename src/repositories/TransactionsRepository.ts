import Transaction from '../models/Transaction';

interface TransactionTDO {
  title: string,
  value: number,
  type: 'income' | 'outcome',
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const incomes = this.transactions.filter(transaction => transaction.type === 'income');
    let totalIncomes = 0;
    for(let i = 0; i < incomes.length; i++) {
      totalIncomes += incomes[i].value;
    }

    const outcomes = this.transactions.filter(transaction => transaction.type === 'outcome');
    let totalOutcomes = 0;
    for(let i = 0; i < outcomes.length; i++) {
      totalOutcomes += outcomes[i].value;
    }

    const balance: Balance = {
      income: totalIncomes,
      outcome: totalOutcomes,
      total: totalIncomes - totalOutcomes,
    };

    return balance;
  }

  public create({ title, value, type }: TransactionTDO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
