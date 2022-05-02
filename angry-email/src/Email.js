import React, { useState } from 'react';

export default function Email() {
    const [showCCAndBCC, setShowCCAndBCC] = useState(false);

    const toggle = () => setShowCCAndBCC(!showCCAndBCC);

    return (
        <> <div className="tile Email-section">
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
            </>
    );
}