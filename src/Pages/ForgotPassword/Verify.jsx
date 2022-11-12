import React from "react";
import {
  Box,
  Button,
  Divider,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const VerifySchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
});

const Verify = ({ setToggle }) => {
  const handleVerify = async (values, setSubmitting) => {
    console.log(values);
    setTimeout(() => {
      setToggle("otp");
      setSubmitting(false);
    }, 1500);
  };

  return (
    <Box sx={{ p: { md: 2, xs: 0 } }}>
      <Box margin={1}>
        <h4 className="authHeading">Reset your password</h4>
      </Box>
      <Box margin={1}>
        <Typography variant="subtitle2" className="tag-line">
          Enter your email to receive the verification code
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

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleVerify(values, setSubmitting);
        }}
        validationSchema={VerifySchema}
      >
        {({ submitForm, isSubmitting, handleChange, touched, errors }) => (
          <Form>
            <Box margin={1}>
              <InputLabel className="label">Enter Your Email</InputLabel>
              <TextField
                InputProps={{
                  hiddenLabel: true,
                  disableUnderline: true,
                }}
                hiddenLabel
                margin="dense"
                variant="filled"
                name="email"
                type="email"
                placeholder="john@gmail.com"
                fullWidth
                disableUnderline
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Box>
            <Box margin={1}>
              <LoadingButton
                onClick={submitForm}
                className="green-btn"
                size="large"
                variant="contained"
                loading={isSubmitting}
              >
                Send
              </LoadingButton>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Verify;
