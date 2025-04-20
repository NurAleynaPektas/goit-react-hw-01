import React from 'react';
import transactionCss from './Transaction.module.css';

const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <table className={transactionCss.deneme}>
      <thead>
        <tr className={transactionCss.title}>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id.toUpperCase()}>
            <td>{item.type.toUpperCase()}</td>
            <td>{item.amount.toUpperCase()}</td>
            <td>{item.currency.toUpperCase()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
