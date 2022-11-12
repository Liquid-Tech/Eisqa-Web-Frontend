import React, { useState } from "react";
import {
  Box,
  Divider,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const NewPasswordSchema = Yup.object().shape({
  password: Yup.string().required("Required").matches(/.{8,}/, {
    excludeEmptyString: true,
    message: "Must be at least 8 characters long",
  }),
  confermPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not same")
    .required("Required"),
});

const NewPassword = () => {
  // state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //router
  const navigate = useNavigate();

  const handleNewPassword = async (values, setSubmitting) => {
    console.log(values);
    setTimeout(() => {
      navigate("/");
      setSubmitting(false);
    }, 1500);
  };

  return (
    <Box sx={{ p: { md: 2, xs: 0 } }}>
      <Box margin={1}>
        <h4 className="authHeading">Set a new password</h4>
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
          password: "",
          confermPassword: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleNewPassword(values, setSubmitting);
        }}
        validationSchema={NewPasswordSchema}
      >
        {({ submitForm, isSubmitting, handleChange, touched, errors }) => (
          <Form>
            <Box margin={1}>
              <InputLabel className="label">Enter New Password</InputLabel>
              <TextField
                InputProps={{
                  hiddenLabel: true,
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment
                      position="start"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </InputAdornment>
                  ),
                }}
                hiddenLabel
                margin="dense"
                variant="filled"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                fullWidth
                disableUnderline
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>
            <Box margin={1}>
              <InputLabel className="label">Confirm Password</InputLabel>
              <TextField
                InputProps={{
                  hiddenLabel: true,
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment
                      position="start"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </InputAdornment>
                  ),
                }}
                hiddenLabel
                margin="dense"
                variant="filled"
                name="confermPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                fullWidth
                disableUnderline
                onChange={handleChange}
                error={
                  touched.confermPassword && Boolean(errors.confermPassword)
                }
                helperText={touched.confermPassword && errors.confermPassword}
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
                Submit
              </LoadingButton>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default NewPassword;
