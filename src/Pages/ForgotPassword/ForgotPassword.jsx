import React, { lazy, useState } from "react";
import { Box, Grid } from "@mui/material";
import "./forgotpassword.scss";
import lock from "../../assets/images/lock.png";
import logo from "../../assets/images/logo.png";
import smoke from "../../assets/images/smoke.png";

const Verify = lazy(() => import("./Verify"));
const Otp = lazy(() => import("./Otp"));
const NewPassword = lazy(() => import("./NewPassword"));

const ForgotPassword = () => {
  //state
  const [toggle, setToggle] = useState("verify");

  return (
    <div>
      <Grid container className="forgot-password-page">
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            position: "relative",
            minHeight: "375px",
            backgroundImage: `url(${smoke})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <img src={logo} alt="logo" className="logo" />
          <Grid container className="h-100">
            <Grid item xs={12} className="login-info">
              <img src={lock} alt="logo" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            minHeight: { md: "100vh", xs: "100%" },
            marginY: {
              xs: "40px",
              md: 0,
            },
          }}
          display="flex"
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
            {toggle === "verify" && (
              <Verify setToggle={(val) => setToggle(val)} />
            )}
            {toggle === "otp" && <Otp setToggle={(val) => setToggle(val)} />}
            {toggle === "newpassword" && <NewPassword />}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgotPassword;
