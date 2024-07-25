import React, { useState, useRef } from "react";
import './css/otp.css'

function otp() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [color, setColor] = useState("gray");
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    console.log(value)
    if (e.key === "Backspace") {
       
        handleBackspace(e, index);
        return;
      }

    // console.log(value);
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];

      if (newOtp[index] === "") {
        newOtp[index] = value;
      } else if (index < 3 && newOtp[index] !== "") {
        newOtp[index + 1] = e.key;
        inputRefs.current[index +1].focus();
      }

      setOtp(newOtp);

      if (index < 3 && value) {
        inputRefs.current[index + 1].focus();
      }

      if (newOtp.join("") === "1234") {
        setColor("green");
      } else if (newOtp.includes("")) {
        setColor("gray");
      } else {
        setColor("red");
      }
    }
  };

  const handleBackspace = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);
    setColor("gray");
    console.log("delete");
    if (e.key === "Backspace" && index > 0) {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join("") === "1234") {
      alert("OTP is correct");
    } else {
      alert("OTP is incorrect");
    }
  };
  return (
    <>
    <div className="mainOtpContainer">
      <h1 className="headerText">Chai aur Code</h1>
      <div className="otpContainer">
        <h2>Mobile Phone Verification</h2>
        <p>Enter the 4-digit verification code that was sent to your phone number.</p>
        <div>
        <form onSubmit={handleSubmit}>
      <div className="otp-inputs">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleChange(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            className={`otp-input otp-input-${color}`}
          />
        ))}
      </div>
      <button type="submit" className={`submit-button submit-button-${color}`}>
      Verify Account
      </button>
    </form>
    <p className="resendButton">Didn’t receive code? <span>Resend </span></p>
        </div>
      </div>
    </div>
    </>
  );
}

export default otp;
