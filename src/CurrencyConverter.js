import React, { useState, useEffect } from 'react';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

const CurrencyConverter = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState();
  const [targetCurrency, setTargetCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInBaseCurrency, setAmountInBaseCurrency] = useState(true);

  let baseAmount, targetAmount;
  if (amountInBaseCurrency) {
    baseAmount = amount;
    targetAmount = amount * exchangeRate;
  } else {
    targetAmount = amount;
    baseAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(`${BASE_URL}/EUR`)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setBaseCurrency(data.base);
        setTargetCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (baseCurrency != null && targetCurrency != null) {
      fetch(`${BASE_URL}/${baseCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[targetCurrency]));
    }
  }, [baseCurrency, targetCurrency]);

  function handleBaseAmountChange(e) {
    setAmount(e.target.value);
    setAmountInBaseCurrency(true);
  }

  function handleTargetAmountChange(e) {
    setAmount(e.target.value);
    setAmountInBaseCurrency(false);
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <h2 className="mb-3">Převod měny</h2>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={baseCurrency}
        onChangeCurrency={e => setBaseCurrency(e.target.value)}
        onChangeAmount={handleBaseAmountChange}
        amount={baseAmount}
      />
      <div className="equals text-center my-2">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={targetCurrency}
        onChangeCurrency={e => setTargetCurrency(e.target.value)}
        onChangeAmount={handleTargetAmountChange}
        amount={targetAmount}
      />
    </form>
  );
};

export default CurrencyConverter;