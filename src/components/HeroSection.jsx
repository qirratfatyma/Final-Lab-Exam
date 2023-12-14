import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import img from "../assets/img/img.png";

const HeroSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [lookingToInvest, setLookingToInvest] = useState('');

  const handleCheckboxChange = () => {
    // Update this function according to your needs
    setLookingToInvest(!lookingToInvest);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const spanStyle = {
    color: '#333399',
  };

  return (
    <div className="hero-section">
      <h1>
        <br></br>
        <b> Request <span style={spanStyle}>Callback</span></b>
      </h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="form-col">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input type="tel" id="mobileNumber" name="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
              <label htmlFor="lookingToInvest">Looking to Invest:</label>
              {/* Use a dropdown/select for lookingToInvest */}
              <select
                id="lookingToInvest"
                name="lookingToInvest"
                value={lookingToInvest}
                onChange={(e) => setLookingToInvest(e.target.value)}
                required
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="form-checkbox">
            <input type="checkbox" id="authorizeCheckbox" name="authorizeCheckbox" required />
            <label htmlFor="authorizeCheckbox">I authorize Estee Advisors Pvt. Ltd. to contact me. This will override registry on the NDNC. As per SEBI guide Lines, minimum investment required is of ₹50 Lakhs.</label>
          </div>

          <button type="submit" className="form-button">
            Request Callback
          </button>
        </form>
      </div>

      <div className="red-column">
        <div className="red-background">
          <img src={img} alt="Your Image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
