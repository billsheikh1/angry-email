import './App.css';
import React from 'react';

function App() {

  const [showCCAndBCC, setShowCCAndBCC] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const toggle = () => setShowCCAndBCC(!showCCAndBCC);

  const clear = () => {
    setMessage('');
  }

  const discard = () => {
    clear();
  }

  const send = () => {
    clear();
    alert('Email sent.');
  }

  const changeText = (event) => {
    setMessage(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Angry Email</h1>
      </header>
      <div className="App-body">
        <div className="Email tile is-ancestor">
          <div className="tile is-vertical is-10">
            <div className="tile Email-section">
              <span className="Email-header">
                <label htmlFor="Email-to">To: </label>
              </span>
              <span className="Email-message">
                <input type="email" className="Email-to" size="50"></input>
                <button className="Email-show-button" onClick={toggle}>
                  {showCCAndBCC ? 'Hide ' : 'Show '}CC, BCC</button>
              </span>
            </div>

             { showCCAndBCC &&

            <><div className="tile Email-section">
                <span className="Email-header">
                  <label htmlFor="Email-cc">CC: </label>
                </span>
                <span className="Email-message">
                  <input type="email" className="Email-cc" size="50"></input>
                </span>
              </div><div className="tile Email-section">
                  <span className="Email-header">
                    <label htmlFor="Email-bcc">BCC: </label>
                  </span>
                  <span className="Email-message">
                    <input type="email" className="Email-bcc" size="50"></input>
                  </span>
                </div></>
            }
            <div className="tile Email-section">
              <span className="Email-header">
                <label htmlFor="Email-body">Message</label>
              </span>
              <span className="Email-message">
                <textarea className="Email-body" cols="50" rows="4" value={message} onChange={changeText}></textarea>
              </span>
            </div>
            <div className="tile Email-section">
              <span className="Email-discard-button">
                <button onClick={discard}>Discard</button>
              </span>
              <span className="Email-send-button">
                <button className="Email-send-button" onClick={send}>Send</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
