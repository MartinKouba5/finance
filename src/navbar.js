import React, { useState } from 'react';

const LoginModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

const Navbar = ({ balance }) => {
  const [showModal, setShowModal] = useState(false);

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/income">Příjmy a výdaje</a> {}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#dph">Výpočet DPH</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#mena">Převod Měn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#investicekalk">Kalkulačka spoření a investic</a>
          </li>
        </ul>
        <span className="navbar-text">
          <button onClick={() => setShowModal(true)}>
            <i className="fas fa-user"></i>
          </button>
          Zůstatek: {balance} Kč
        </span>
        {showModal && <LoginModal />}
      </div>
    </nav>
  );
}

export default Navbar;
