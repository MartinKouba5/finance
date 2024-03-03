import React, { useState } from 'react';

const InvestmentCalculator = () => {
  const [initialAmount, setInitialAmount] = useState(0);
  const [monthlyDeposit, setMonthlyDeposit] = useState(0);
  const [annualInterestRate, setAnnualInterestRate] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [futureValue, setFutureValue] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numberOfMonths = investmentDuration * 12;
    const futureValue = initialAmount * Math.pow(1 + monthlyInterestRate, numberOfMonths) 
      + monthlyDeposit * ((Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1) / monthlyInterestRate);
    setFutureValue(futureValue.toFixed(2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <h2>Kalkulačka spoření/investic</h2>
        <label className="form-label">Počáteční částka</label>
        <input type="number" className="form-control" value={initialAmount} onChange={e => setInitialAmount(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Měsíční vklad</label>
        <input type="number" className="form-control" value={monthlyDeposit} onChange={e => setMonthlyDeposit(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Roční úroková sazba (%)</label>
        <input type="number" className="form-control" value={annualInterestRate} onChange={e => setAnnualInterestRate(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Doba trvání spoření/investice (v letech)</label>
        <input type="number" className="form-control" value={investmentDuration} onChange={e => setInvestmentDuration(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Spočítat</button>
      <div className="mt-3">
        <p>Odhadovaná budoucí hodnota: {futureValue}</p>
      </div>
    </form>
  );
};

export default InvestmentCalculator;
