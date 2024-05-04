import React, { useState } from "react";
import axios from "axios";
import "./emailbox.scss";
import EkilieAlert from "../../components/EkilieAlert";
import Loader from "../../components/loader/Loader";

const Emailbox = () => {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      // Logging the message to check if it's set correctly
      console.log("Message:", message);
      setIsSending(true)

      const response = await axios.post(
        "https://console.ekilie.com/api/email-sender.php",
        {
          emailText: message,
          emailSubject: subject
        },
        {
          headers: {
            'Content-Type': 'application/json', // Setting the content type to JSON
          },
        })

      if (response.data.message) {
        setIsSent(true);
        setSuccessMessage(response.data.message);
        setIsSending(false)
        setMessage(''); 
        setSubject('')
      } else {
        console.error("Error sending email");
        setIsSent(true);
        setSuccessMessage("Error sending email");
        setIsSending(false)
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSent(true);
      setIsSending(false)
      setSuccessMessage("Something went wrong. Try again");
    }
  };

  return (
    <div className="Emailbox">
      <div className="main-container">
        <form onSubmit={handleSubmit}>
          <p title="ekilie's emailbox">    
            <div style={{
            display:'inline-flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'flex-start'}}>  emailbox </div>
          </p>
          {isSent && (
            <EkilieAlert 
            setIsSent={setIsSent} 
            isSent={isSent}
            successMessage={successMessage}
            />
          )}
          <input 
          type="text" 
          name="subject" 
          id="subject" 
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}/>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            cols="20"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">{isSending ? <Loader text="sending..."/> : 'Send'}</button>
        </form>
      </div>
    </div>
  );
};

export default Emailbox;
