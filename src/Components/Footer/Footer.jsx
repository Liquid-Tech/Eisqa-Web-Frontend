import { Box, Divider, Grid, Typography, IconButton } from "@mui/material";
import logo from "../../assets/images/logo.svg";
import fb_icon from "../../assets/images/facebook.svg";
import twitter_icon from "../../assets/images/twitter.svg";
import linkedin_icon from "../../assets/images/linkdin.svg";
import google_icon from "../../assets/images/google.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <Box className="app-footer">
      <Grid container spacing={6}>
        <Grid item xs={12} md={3.7}>
          <img src={logo} alt="logo" className="logo" />
          <br />
          <Typography className="desc">
            Work with the best freelance talent from around the world on our
            secure flexible and cost-effective platform hiring
          </Typography>
        </Grid>
        <Grid item xs={12} md={8.3} container rowSpacing={2}>
          <Grid item xs={12} md={3} pl={0}>
            <Typography className="nav-title">Our Company</Typography>
            <Typography className="nav-links">Product Services</Typography>
            <Typography className="nav-links">About Us</Typography>
            <Typography className="nav-links">Categories</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className="nav-title">Our Projects</Typography>
            <Typography className="nav-links">Mobile App</Typography>
            <Typography className="nav-links">Landing Page</Typography>
            <Typography className="nav-links">Dashboard</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className="nav-title">Helpful Links</Typography>
            <Typography className="nav-links">Payment Service</Typography>
            <Typography className="nav-links">Terms Condition</Typography>
            <Typography className="nav-links">Privacy and Policy</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className="nav-title">Our Support</Typography>
            <Typography className="nav-links">eisqa@mail.com</Typography>
            <Typography className="nav-links">Wishton Street No. 69</Typography>
            <Typography className="nav-links">456 688 562 208</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "rgb(255 255 255 / 85%)", mt: 3 }} />
      <Box className="bottom">
        <Typography className="copyrights">
          Copyright<span> Eisqa</span> 2021 All Right Reserved
        </Typography>
        <Box pl={2}>
          <IconButton sx={{ p: 0.5 }}>
            <img src={fb_icon} alt="facebook" className="social-icons" />
          </IconButton>
          <IconButton sx={{ p: 0.5 }}>
            <img src={twitter_icon} alt="twitter" className="social-icons" />
          </IconButton>
          <IconButton sx={{ p: 0.5 }}>
            <img src={linkedin_icon} alt="linkedin" className="social-icons" />
          </IconButton>
          <IconButton sx={{ p: 0.5 }}>
            <img src={google_icon} alt="google" className="social-icons" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
