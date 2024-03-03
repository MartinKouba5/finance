// FinancialSummary.js
import React from 'react';

const FinancialSummary = ({ income, expenses, balance }) => {
  return (
    <div>
      <h2>Přehled</h2>
      <table>
        <tbody>
          <tr>
            <td>Total Income:</td>
            <td>{income} Kč</td>
          </tr>
          <tr>
            <td>Total Expenses:</td>
            <td>{expenses} Kč</td>
          </tr>
          <tr>
            <td>Zůstatek:</td>
            <td>{balance} Kč</td>
          </tr>
        </tbody>
      </table>
      {/* Další informace o finančním stavu */}
    </div>
  );
}

export default FinancialSummary;
