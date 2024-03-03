// CurrencyRow.js
import React from 'react'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props

  return (
    <div className="row">
      <div className="col">
        <input type="number" className="form-control" value={amount} onChange={onChangeAmount} />
      </div>
      <div className="col">
        <select className="form-select" value={selectedCurrency} onChange={onChangeCurrency}>
          {currencyOptions && currencyOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
