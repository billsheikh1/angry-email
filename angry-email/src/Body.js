export default function Body({message, changeText}) {

    return (
        <div className="tile Email-section">
              <span className="Email-header">
                <label htmlFor="Email-body">Message</label>
              </span>
              <span className="Email-message">
                <textarea className="Email-body" cols="50" rows="4" value={message} onChange={changeText}></textarea>
              </span>
            </div>
    )
};