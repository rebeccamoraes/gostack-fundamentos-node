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
    // TODO
  }

  public create({ title, value, type }: TransactionTDO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
