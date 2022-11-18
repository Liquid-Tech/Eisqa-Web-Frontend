import { useState } from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  InputAdornment,
  ButtonBase,
  Typography,
  IconButton,
  Tooltip,
  styled,
  tooltipClasses,
  Divider,
} from "@mui/material";
import search_icon from "../../../assets/images/search-Icon-1.svg";
import swap_icon from "../../../assets/images/swap.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import "./styles.scss";
import JobCard from "../../../Components/Cards/JobCard";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.green.main,
    color: "#fff",
    boxShadow: theme.shadows[1],
    fontSize: 12,
    fontWeight: 500,
  },
  [`& .${tooltipClasses.arrow}`]: {
    backgroundColor: "#fff",
    color: theme.palette.green.main,
    fontSize: 22,
  },
}));

const FindJob = () => {
  // state
  const [toggleBtn, setToggleBtn] = useState("search");

  // toggle between search and saved jobs
  const handleToggleBtn = (type) => {
    setToggleBtn(type);
  };

  return (
    <Box className="find-job-page">
      <Grid
        container
        sx={{ p: { md: 5, xs: 3 }, mt: { md: 3, xs: 0 } }}
        rowSpacing={2}
        columnSpacing={{ md: 5, xs: 1 }}
      >
        <Grid item xs={6} className="d-flex justify-content-end">
          <Button
            variant={toggleBtn === "search" ? "contained" : "outlined"}
            className={
              toggleBtn === "search" ? "active-btn toggle-btn" : "toggle-btn"
            }
            onClick={() => handleToggleBtn("search")}
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={6} className="d-flex justify-content-start">
          <Button
            variant={toggleBtn === "savedJob" ? "contained" : "outlined"}
            className={
              toggleBtn === "savedJob" ? "active-btn toggle-btn" : "toggle-btn"
            }
            onClick={() => handleToggleBtn("savedJob")}
          >
            Saved Jobs
          </Button>
        </Grid>
        <Grid item xs={12} className="search-box">
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={search_icon} alt="" width="50%" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  component={ButtonBase}
                  sx={{
                    backgroundColor: "#1ebf73",
                    color: "#fff",
                    padding: "22.5px 5%",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: "7px",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: "7px",
                  }}
                  onClick={() => console.log("Hello ??")}
                >
                  Search
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className="heading">
            <span>12,456 </span>jobs found
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box className="filters">
            <Button endIcon={<ExpandMoreIcon color="green" />}>Filters</Button>
            <Box className="sort-by">
              <Typography variant="caption" className="text">
                Sort By
              </Typography>
              <LightTooltip
                title={
                  <Box className="d-flex flex-column p-1">
                    <Box py={1}>
                      <NorthIcon fontSize="small" /> Sort Descending
                    </Box>
                    <Divider
                      sx={{
                        bgcolor: "#fff",
                        height: 3,
                      }}
                    />
                    <Box py={1}>
                      <SouthIcon fontSize="small" /> Sort Ascending
                    </Box>
                  </Box>
                }
                arrow
                placement="bottom-end"
              >
                <IconButton aria-label="swap_icon">
                  <img src={swap_icon} alt="swap_icon" width="25px" />
                </IconButton>
              </LightTooltip>
            </Box>
          </Box>
          {JobData.map((item, idx) => (
            <JobCard key={idx} data={item} />
          ))}
        </Grid>
        <Grid item xs={12} className="text-center">
          <Button
            variant="outlined"
            className="poppins fw-semibold"
            sx={{
              textTransform: "none",
              color: "rgba(112, 112, 112, 0.65)",
              borderColor: "rgba(112, 112, 112, 0.65)",
              borderRadius: "8px",
            }}
          >
            View More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FindJob;

const JobData = [
  {
    title: "Minimalistic Website & App Design/Development",
    tags: "Fixed price-Entry level-Est. Budget :25$-Posted 4 minutes ago",
    desc: "We want an extremely minimalistic and easy to use website and mobile app for an online B2B ordering app. This project is for both design and dev, but if you're great at either one of them, feel free to apply as well with your portfolio.",
    skills: ["Design", "Mobile Design", "Design", "Mobile Design", "Graphics"],
    proposals: "Less than 5",
  },
  {
    title: "App Design/Development",
    tags: "Fixed price-Entry level-Est. Budget :25$-Posted 4 minutes ago",
    desc: "We want an extremely minimalistic and easy to use website and mobile app for an online B2B ordering app. This project is for both design and dev, but if you're great at either one of them, feel free to apply as well with your portfolio.",
    skills: ["Design", "Mobile Design", "Design", "Mobile Design", "Graphics"],
    proposals: "Less than 5",
  },
  {
    title: "Minimalistic Website Development",
    tags: "Fixed price-Entry level-Est. Budget :25$-Posted 4 minutes ago",
    desc: "We want an extremely minimalistic and easy to use website and mobile app for an online B2B ordering app. This project is for both design and dev, but if you're great at either one of them, feel free to apply as well with your portfolio.",
    skills: ["Design", "Mobile Design", "Design", "Mobile Design", "Graphics"],
    proposals: "Less than 5",
  },
];
