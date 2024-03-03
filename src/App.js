import React, { useState } from 'react';
import Navbar from './navbar'; // Import komponenty Navbar
import IncomeExpenseTracker from './IncomeExpenseTracker';
import VATCalculator from './VATCalculator'; // Import komponenty VATCalculator
import CurrencyConverter from './CurrencyConverter';
import InvestmentCalculator from './InvestmentCalculator'; // Import komponenty InvestmentCalculator

const App = () => {
  const [balance, setBalance] = useState(0);

  const handleRecordAdded = (record) => {
    setBalance(balance + record.amount);
  };

  return (
    <div>
      <Navbar balance={balance} /> {/* Použití komponenty Navbar s předaným zůstatkem na účtu */}
      <h1>Správce Financí</h1>

      <div className='section' class='obsah'>
        <div id='prijmyavydaje'>
        <IncomeExpenseTracker onRecordAdded={handleRecordAdded} balance={balance} />

        </div>
<br></br>
        <div id='dph' class='obsah'>
          <VATCalculator /> {/* Použití komponenty VATCalculator */}
        </div>
<br></br>
        <div id='mena' class='obsah'> 
          <CurrencyConverter /> {/* Použití komponenty VATCalculator */}
        </div>
<br></br>
        <div id='investicekalk' class='obsah'>
          <InvestmentCalculator /> {/* Použití komponenty InvestmentCalculator */}
        </div>
      </div>
    </div>
  );
}

export default App;
