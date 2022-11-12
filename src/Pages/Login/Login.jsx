import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { userLogin } from "../../Redux/Actions";
import {
  Paper,
  Button,
  Box,
  Grid,
  Typography,
  TextField,
  InputLabel,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
// import { TextField } from "formik-mui";
import "./login.scss";
// import { useSnackbar } from "notistack";
import login_img from "../../assets/images/login.png";
import logo from "../../assets/images/logo.png";
import hour_glass from "../../assets/images/hourglass.png";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { LoadingButton } from "@mui/lab";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string().required("Required").matches(/.{8,}/, {
    excludeEmptyString: true,
    message: "Must be at least 8 characters long",
  }),
});

const Login = () => {
  //state
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  // const dispatch = useDispatch();
  // const { enqueueSnackbar: notification } = useSnackbar();

  useEffect(() => {
    checkUser(); // if user exists, user cannot access login page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkUser = () => {
    if (user) {
      navigate("/admin/statistics");
    }
  };

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
      <Grid container className="authPage">
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            position: "relative",
            minHeight: "375px",
            backgroundImage: `url(${login_img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <img src={logo} alt="logo" className="logo" />
          <Grid container className="h-100">
            <Grid item xs={12} className="login-info">
              <img src={hour_glass} alt="logo" />
              <Typography variant="h5" className="typography">
                We can serve you Better
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
              xs: "25px",
              md: 0,
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
                xs: 2,
                md: 4,
              },
            }}
          >
            <Paper sx={{ p: { md: 2, xs: 0 } }} elevation={0}>
              <h4 className="text-center authHeading">Sign in to Eisqa</h4>
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
              <Divider
                sx={{
                  my: 2,
                  width: { md: "97%", xs: "75%" },
                  mx: "auto",
                  "&::before, &::after": {
                    borderColor: "#707070",
                  },
                }}
              >
                <p className="divider-text">or Email</p>
              </Divider>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                  handleLogin(values, setSubmitting);
                }}
                validationSchema={LoginSchema}
              >
                {({
                  submitForm,
                  isSubmitting,
                  handleChange,
                  touched,
                  errors,
                }) => (
                  <Form>
                    <Box margin={1}>
                      <InputLabel className="label">Email</InputLabel>
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
                      <InputLabel className="label">Password</InputLabel>
                      <TextField
                        InputProps={{
                          hiddenLabel: true,
                          disableUnderline: true,
                        }}
                        hiddenLabel
                        margin="dense"
                        variant="filled"
                        name="password"
                        type="password"
                        placeholder="Password"
                        fullWidth
                        disableUnderline
                        onChange={handleChange}
                        error={touched.password && Boolean(errors.password)}
                        helperText={
                          touched.password && Boolean(errors.password)
                            ? errors.password
                            : "Must be at least 8 characters long"
                        }
                      />
                    </Box>
                    <Box
                      margin={1}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<RadioButtonUncheckedIcon />}
                            checkedIcon={
                              <CheckCircleIcon sx={{ color: "#1EBF73" }} />
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
                        label="Remember me"
                      />
                      <Typography
                        component={Button}
                        variant="subtitle2"
                        onClick={()=> navigate("/forgot-password")}
                        sx={{
                          fontSize: "16px",
                          fontWeight: "100",
                          p: 0,
                          color: "#1EBF73",
                          ml: "auto",
                          textTransform: "capitalize",
                        }}
                      >
                        Forgot Password?
                      </Typography>
                    </Box>
                    <Box margin={1} className="text-center">
                      <LoadingButton
                        onClick={submitForm}
                        className="green-btn"
                        size="large"
                        variant="contained"
                        loading={isSubmitting}
                      >
                        Sign in
                      </LoadingButton>
                    </Box>
                    <Box margin={2} className="text-center">
                      <Typography className="register-nav">
                        Don’t have an account?
                        <span onClick={() => navigate("/register")}>
                          {" "}
                          Register
                        </span>
                      </Typography>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
