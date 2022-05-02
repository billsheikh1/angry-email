import './App.css';
import React, { useState } from 'react';
import Body from './Body';
import Button from './Button';
import Email from './Email';

function App() {

  const [message, setMessage] = useState('');

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
           
            <Email></Email>

            <Body message={message} changeText={changeText}></Body>

            <div className="tile Email-section">
              
              <span>
                <Button message="Discard" clickFunction={discard}></Button>
              </span>

              <span className="Email-send-button">
                <Button message="Send" clickFunction={send}></Button>
              </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
