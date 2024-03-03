import React, { useState } from 'react';

const VATCalculator = () => {
  const [price, setPrice] = useState(0);
  const [vatRate, setVatRate] = useState(21);
  const [total, setTotal] = useState(0);
  const [difference, setDifference] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const vatAmount = price * vatRate / 100;
    setTotal(price + vatAmount);
    setDifference(vatAmount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <h2>DPH kalkulačka</h2>

        <label className="form-label">Cena bez DPH</label>
        <input type="number" className="form-control" value={price} onChange={e => setPrice(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Sazba DPH</label>
        <select className="form-select" value={vatRate} onChange={e => setVatRate(e.target.value)}>
          <option value="21">21%</option>
          <option value="15">15%</option>
          <option value="10">10%</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Vypočítat</button>
      <div className="mt-3">
        <p>Celková cena s DPH: {total},-</p>
        <p>Rozdíl: {difference},-</p>
      </div>
    </form>
  );
};

export default VATCalculator;
