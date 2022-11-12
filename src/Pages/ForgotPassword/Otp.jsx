import React, { useState } from "react";
import {
  Box,
  Divider,
  InputLabel,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import OtpInput from "react18-input-otp";

const Otp = ({ setToggle }) => {
  //state
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // handleChange
  const handleChange = (enteredOtp) => {
    console.log(enteredOtp, "enteredOtp", enteredOtp.length);
    setOtp(enteredOtp);
    if (enteredOtp.length > 3) {
      setError("");
    }
  };

  // handleSubmit
  const handleVerify = async () => {
    if (otp.length < 4) {
      setError("Please Enter Correct Code");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setToggle("newpassword");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Box sx={{ p: { md: 2, xs: 0 } }}>
      <Box margin={1}>
        <h4 className="authHeading">Reset your password</h4>
      </Box>
      <Box margin={1}>
        <Typography variant="subtitle2" className="tag-line">
          The verification code has been sent to your email
        </Typography>
      </Box>
      <Box margin={1}>
        <Divider
          sx={{
            my: 4,
            backgroundColor: "#707070",
            height: "1px",
          }}
        />
      </Box>

      <Box margin={1}>
        <InputLabel className="label">Enter Verification Code</InputLabel>
        <Box marginY={3}>
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            inputStyle="otp-input"
            containerStyle="w-100"
          />
          {error && <p className="input-error">{error}</p>}
        </Box>
      </Box>
      <Box margin={1}>
        <Typography variant="body2" className="resend">
          If you didn’t receive a code! <span>Resend</span>
        </Typography>
      </Box>
      <Box margin={1}>
        <LoadingButton
          onClick={handleVerify}
          className="green-btn"
          size="large"
          variant="contained"
          loading={isSubmitting}
        >
          Verify
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default Otp;
