import {
  Box,
  Drawer,
  Divider,
  Typography,
  Avatar,
  Badge,
  styled,
  Button,
  IconButton,
  Grid,
  Chip,
  Paper,
} from "@mui/material";
import userImg from "../../../assets/images/avatar.svg";
import edit_icon from "../../../assets/images/edit.svg";
import calendar_1 from "../../../assets/images/calendar-1.svg";
import add_icon from "../../../assets/images/add.svg";
import add_btn from "../../../assets/images/add-1.png";
import "./styles.scss";
import { useState } from "react";
import GigCard from "../../../Components/Cards/GigCard";
import { gigs } from "../../../Shared/dummyData";

// right Sidebar Width
const drawerWidth = 320;

// avator badge
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 21,
    top: 111,
    backgroundColor: "#1ebf73",
    height: "13px",
    minWidth: "13px",
    borderRadius: "50%",
  },
}));
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Typography className="desc">
      {isReadMore ? text?.slice(0, 250) : text}
      {text?.length > 250 && (
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...more" : " ...less"}
        </span>
      )}
    </Typography>
  );
};

const UserProfile = () => {
  const [toggleBtn, setToggleBtn] = useState("drafts");

  return (
    <Box className="user-profile-page">
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          height: "auto",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            borderRight: "0px",
            position: "relative",
          },
        }}
      >
        <Box className="right-sidebar-1">
          <Box className="user-detail">
            <StyledBadge variant="dot">
              <Avatar src={userImg} className="img" />
            </StyledBadge>
            <Typography variant="inherit" className="name">
              Annie Where
            </Typography>
            <Box>
              <IconButton aria-label="edit">
                <img src={edit_icon} alt="edit-icon" className="edit-icon" />
              </IconButton>
            </Box>
            <Button variant="contained" size="small" className="btn">
              Preview Fiverr Profile
            </Button>
          </Box>
          <Divider
            sx={{ border: "1px solid rgba(0, 0, 0, 0.2)", mt: 4, mb: 2 }}
          />
          <Box className="user-detail-2">
            <Typography variant="inherit" className="label">
              From
            </Typography>
            <Typography variant="inherit" className="detail">
              Spain
            </Typography>
          </Box>
          <Box className="user-detail-2">
            <Typography variant="inherit" className="label">
              Member since
            </Typography>
            <Typography variant="inherit" className="detail">
              March 2020
            </Typography>
          </Box>
          <Box className="user-detail-2">
            <Typography variant="inherit" className="label">
              Response time
            </Typography>
            <Typography variant="inherit" className="detail">
              2 Hours
            </Typography>
          </Box>
          <Divider
            sx={{ border: "1px solid rgba(0, 0, 0, 0.2)", mt: 3, mb: 3 }}
          />
          <Box className="user-detail-3">
            <Typography variant="inherit" className="label">
              <img src={calendar_1} alt="calendar" /> Available
            </Typography>
            <Button variant="contained" size="small" className="btn">
              Set Availability
            </Button>
          </Box>
        </Box>
        <Box className="right-sidebar-2">
          <Box className="user-detail-1">
            <Typography variant="inherit" className="label">
              Description
            </Typography>
            <Typography variant="inherit" className="detail">
              Edit Description
            </Typography>
          </Box>
          <ReadMore>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            cursus consequat leo, non suscipit ligula dapibus a. Nulla ultrices
            odio orci, eget rutrum turpis dapibus vestibulum. Duis suscipit urna
            at lectus aliquet gravida. Sed sollicitudin id neque ac pretium .
            Nulla ultrices odio orci, eget rutrum turpis dapibus vestibulum.
            Duis suscipit urna at lectus aliquet gravida. Sed sollicitudin id
            neque ac pretium
          </ReadMore>
          <Divider
            sx={{ border: "1px solid rgba(0, 0, 0, 0.2)", mt: 3, mb: 3 }}
          />
          <Box className="user-detail-1 mb-1">
            <Typography variant="inherit" className="label">
              Language
            </Typography>
            <Typography variant="inherit" className="detail">
              Add New +
            </Typography>
          </Box>
          <Typography className="lang">
            English<span> - Basic</span>
          </Typography>
          <Divider
            sx={{ border: "1px solid rgba(0, 0, 0, 0.2)", mt: 3, mb: 3 }}
          />
          <Typography variant="inherit" className="test-heading">
            Test Takens
          </Typography>
          <Typography variant="inherit" className="test-detail">
            Test your skills, earn more trust - <span>Learn more</span>
          </Typography>
          <Box width="100%" display="flex">
            <Button
              variant="outlined"
              size="small"
              className="btn "
              color="green"
            >
              Take a Test
            </Button>
          </Box>
          <Divider sx={{ border: "1px solid rgba(0, 0, 0, 0.2)", my: 3 }} />
          <Box className="linked-accounts">
            <Typography variant="inherit" className="heading">
              Linked Accounts
            </Typography>
            <Grid container rowSpacing={1} columnSpacing={9} mt={1}>
              {[
                "Facebook",
                "Github",
                "Google",
                "Vimeo",
                "Dribble",
                "Twitter",
                "Stack Overflow",
              ].map((item) => (
                <Grid item xs={6} key={item}>
                  <Typography variant="inherit" className="accounts">
                    <img src={add_icon} alt="add-icon" /> {item}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Divider sx={{ border: "1px solid rgba(0, 0, 0, 0.2)", my: 3 }} />
          <Box className="user-detail-1 mb-3">
            <Typography variant="inherit" className="label">
              Skills
            </Typography>
            <Typography variant="inherit" className="detail">
              Add New
            </Typography>
          </Box>
          <Box className="skils-container">
            {["Logo Design", "Animation", "Graphic Design"].map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                size="small"
                className="skill"
              />
            ))}
          </Box>
          <Divider sx={{ border: "1px solid rgba(0, 0, 0, 0.2)", my: 3 }} />
          <Box className="user-detail-1 mb-1">
            <Typography variant="inherit" className="label">
              Education
            </Typography>
            <Typography variant="inherit" className="detail">
              Add New +
            </Typography>
          </Box>
          <Typography variant="inherit" className="add-detail">
            Add your Education.
          </Typography>
          <Divider sx={{ border: "1px solid rgba(0, 0, 0, 0.2)", my: 3 }} />
          <Box className="user-detail-1 mb-1">
            <Typography variant="inherit" className="label">
              Certification
            </Typography>
            <Typography variant="inherit" className="detail">
              Add New +
            </Typography>
          </Box>
          <Typography variant="inherit" className="add-detail">
            Add your Certification.
          </Typography>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }} className="main">
        <Grid
          container
          sx={{ p: { md: 5, xs: 3 } }}
          rowSpacing={2}
          columnSpacing={5}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "end" },
            }}
          >
            <Button
              variant={toggleBtn === "activeGigs" ? "contained" : "outlined"}
              className={
                toggleBtn === "activeGigs"
                  ? "active-btn toggle-btn"
                  : "toggle-btn"
              }
              onClick={() => setToggleBtn("activeGigs")}
            >
              Active Gigs
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <Button
              variant={toggleBtn === "drafts" ? "contained" : "outlined"}
              className={
                toggleBtn === "drafts" ? "active-btn toggle-btn" : "toggle-btn"
              }
              onClick={() => setToggleBtn("drafts")}
            >
              Drafts
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ p: { md: 5, xs: 3 } }}>
          {gigs.map((gig) => (
            <Grid item laptop={4} md={6} xs={12} key={gig} className="align-text-bottom">
              <GigCard data={gig} />
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          className="d-flex justify-content-center"
          sx={{ px: { md: 4, xs: 3 } }}
        >
          <Paper elevation={0} className="new-gig p-5">
            <img src={add_btn} alt="add" />
            <Typography
              variant="body1"
              className="poppins"
              sx={{ color: "#fff", my: 2 }}
            >
              Create a New Gig
            </Typography>
          </Paper>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserProfile;
