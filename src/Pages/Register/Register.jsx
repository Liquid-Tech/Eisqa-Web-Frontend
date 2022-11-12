import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { userLogin } from "../../Redux/Actions";
import {
  Button,
  Box,
  Grid,
  Typography,
  TextField,
  InputLabel,
  Divider,
  FormControlLabel,
  Checkbox,
  Stack,
  InputAdornment,
} from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
// import { TextField } from "formik-mui";
import "./register.scss";
// import { useSnackbar } from "notistack";
import register_img from "../../assets/images/register.png";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome-img.png";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { LoadingButton } from "@mui/lab";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  phone: Yup.string()
    .required("Required")
    .test(
      "Is positive?",
      "ERROR: Please Enter Correct Phone Number",
      (value) => value > 0
    ),
  password: Yup.string().required("Required").matches(/.{8,}/, {
    excludeEmptyString: true,
    message: "Must be at least 8 characters long",
  }),
  confermPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not same")
    .required("Required"),
});

const Register = () => {
  //state
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  // const dispatch = useDispatch();
  // const { enqueueSnackbar: notification } = useSnackbar();

  const handleLogin = async (values, setSubmitting) => {
    console.log(values);
    setTimeout(() => {
      // dispatch(userLogin(values));
      // navigate("/admin/statistics");
      // notification("Logged in.");
      setSubmitting(false);
    }, 1500);
  };

  const handleRemberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div>
      <Grid container className="register-page">
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            position: "relative",
            minHeight: "375px",
            backgroundImage: `url(${register_img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <img src={logo} alt="logo" className="logo" />
          <Grid container className="h-100">
            <Grid item xs={12} className="login-info">
              <img src={welcome} alt="logo" />
              <Typography variant="h5" className="typography">
                Welcome to Eisqa
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            minHeight: "100vh",
            marginY: {
              xs: "20px",
              md: 1,
            },
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              width: {
                xs: "600px",
              },
              marginX: {
                xs: 3,
                md: 4,
              },
            }}
          >
            <h4 className="text-center authHeading">Register</h4>
            <Box margin={2} className="text-center">
              <Typography className="register-nav">
                Already have an account?
                <span onClick={() => navigate("/")}> Log In</span>
              </Typography>
            </Box>
            <Box className="text-center my-3">
              <Button className="icons">
                <img src={facebook} className="icons" alt="facebook" />
              </Button>
              <Button className="icons">
                <img src={google} alt="google" />
              </Button>
              <Button className="icons">
                <img src={twitter} className="icons" alt="twitter" />
              </Button>
            </Box>
            <Box>
              <Divider
                sx={{
                  mt: 4,
                  mb: 2,
                  width: { md: "99%", xs: "100%" },
                  ml: "auto",
                  backgroundColor: "#707070",
                }}
              />
            </Box>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                phone: "",
                email: "",
                password: "",
                confermPassword: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                handleLogin(values, setSubmitting);
              }}
              validationSchema={RegisterSchema}
            >
              {({
                submitForm,
                isSubmitting,
                handleChange,
                touched,
                errors,
              }) => (
                <Form>
                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    alignItems="center"
                    spacing={{ md: 2, xs: 0 }}
                  >
                    <Box margin={1} width={"100%"}>
                      <InputLabel className="label mt-2 mt-md-0">
                        First Name
                      </InputLabel>
                      <TextField
                        InputProps={{
                          hiddenLabel: true,
                          disableUnderline: true,
                        }}
                        hiddenLabel
                        margin="dense"
                        variant="filled"
                        name="firstname"
                        type="text"
                        placeholder="First name"
                        fullWidth
                        disableUnderline
                        onChange={handleChange}
                        error={touched.firstname && Boolean(errors.firstname)}
                        helperText={touched.firstname && errors.firstname}
                      />
                    </Box>
                    <Box margin={1} width={"100%"}>
                      <InputLabel className="label mt-2 mt-md-0">
                        Last Name
                      </InputLabel>
                      <TextField
                        InputProps={{
                          hiddenLabel: true,
                          disableUnderline: true,
                        }}
                        hiddenLabel
                        margin="dense"
                        variant="filled"
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        fullWidth
                        disableUnderline
                        onChange={handleChange}
                        error={touched.lastname && Boolean(errors.lastname)}
                        helperText={touched.lastname && errors.lastname}
                      />
                    </Box>
                  </Stack>
                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    alignItems="center"
                    spacing={{ md: 2, xs: 0 }}
                  >
                    <Box margin={1} width={"100%"}>
                      <InputLabel className="label mt-2 mt-md-0">
                        Phone Number
                      </InputLabel>
                      <TextField
                        InputProps={{
                          hiddenLabel: true,
                          disableUnderline: true,
                          inputProps: { min: 0 },
                        }}
                        hiddenLabel
                        margin="dense"
                        variant="filled"
                        name="phone"
                        type="number"
                        placeholder="#00 0000000"
                        fullWidth
                        disableUnderline
                        onChange={handleChange}
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                    </Box>
                    <Box margin={1} width={"100%"}>
                      <InputLabel className="label mt-2 mt-md-0">
                        Email
                      </InputLabel>
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
                  </Stack>
                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    alignItems="center"
                    spacing={{ md: 2, xs: 0 }}
                  >
                    <Box margin={1} width={"100%"}>
                      <InputLabel className="label mt-2 mt-md-0">
                        Password
                      </InputLabel>
                      <TextField
                        InputProps={{
                          hiddenLabel: true,
                          disableUnderline: true,
                          endAdornment: (
                            <InputAdornment
                              position="start"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </InputAdornment>
                          ),
                        }}
                        hiddenLabel
                        margin="dense"
                        variant="filled"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="*****"
                        fullWidth
                        disableUnderline
                        onChange={handleChange}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                      />
                    </Box>
                    <Box margin={1} width={"100%"}>
                      <InputLabel className="label mt-2 mt-md-0">
                        Confirm Password
                      </InputLabel>
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
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </InputAdornment>
                          ),
                        }}
                        hiddenLabel
                        margin="dense"
                        variant="filled"
                        name="confermPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="*****"
                        fullWidth
                        disableUnderline
                        onChange={handleChange}
                        error={
                          touched.confermPassword &&
                          Boolean(errors.confermPassword)
                        }
                        helperText={
                          touched.confermPassword && errors.confermPassword
                        }
                      />
                    </Box>
                  </Stack>

                  <Box margin={1}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankOutlinedIcon />}
                          checkedIcon={
                            <CheckBoxOutlinedIcon sx={{ color: "#1EBF73" }} />
                          }
                          checked={rememberMe}
                          onChange={handleRemberMe}
                        />
                      }
                      sx={{
                        ".MuiFormControlLabel-label": {
                          fontWeight: "100",
                          color: "#707070",
                        },
                      }}
                      label={
                        <label className="m-0 checkbox-label">
                          I agree to all{" "}
                          <span onClick={(e) => e.stopPropagation()}>
                            Terms
                          </span>
                          , <span>Privacy Policy</span> and <span>Fees</span>
                        </label>
                      }
                    />
                  </Box>
                  <Box margin={1} className="text-center">
                    <LoadingButton
                      onClick={submitForm}
                      className="green-btn"
                      size="large"
                      variant="contained"
                      loading={isSubmitting}
                    >
                      Create Account
                    </LoadingButton>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
