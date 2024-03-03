import React, { useState } from 'react';

const IncomeExpenseTracker = ({ onRecordAdded, balance }) => {
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({ type: 'income', category: '', amount: '' });

  const handleChange = (e) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = newRecord.type === 'expense' ? -Math.abs(newRecord.amount) : Math.abs(newRecord.amount);
    const record = { ...newRecord, amount };
    setRecords([...records, record]);
    onRecordAdded(record);
    setNewRecord({ type: 'income', category: '', amount: '' });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label className="form-label">Typ:</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" id="income" value="income" checked={newRecord.type === 'income'} onChange={handleChange} />
            <label className="form-check-label" for="income">
              Příjem
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" id="expense" value="expense" checked={newRecord.type === 'expense'} onChange={handleChange} />
            <label className="form-check-label" for="expense">
              Výdaj
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Kategorie:</label>
          <input type="text" name="category" value={newRecord.category} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Částka:</label>
          <input type="number" name="amount" value={newRecord.amount} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Přidat</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Kategorie</th>
            <th scope="col">Částka</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className={`${record.type === 'income' ? 'text-success' : 'text-danger'}`}>
              <td>{record.category}</td>
              <td>{`${record.amount} Kč`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="font-weight-bold">Celkový zůstatek: {balance} Kč</p>


    </div>
  );
};

export default IncomeExpenseTracker;
