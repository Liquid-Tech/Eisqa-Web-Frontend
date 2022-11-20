import { Box, Chip, Paper, Rating, Typography } from "@mui/material";
import { memo } from "react";
import pin_icon from "../../assets/images/pin.svg";
import "./styles.scss";

const JobCard = ({ data }) => {
  return (
    <Paper elevation={0} className="job-card p-md-5 p-sm-4 p-3">
      <Typography variant="h6" className="title">
        {data?.title}
      </Typography>
      <Typography variant="h6" className="tags">
        {data?.tags}
      </Typography>
      <Typography variant="h6" className="desc">
        {data?.desc}
      </Typography>
      {data?.skills?.map((item, idx) => (
        <Chip size="small" label={item} key={idx} className="skills me-md-3" />
      ))}
      <Typography variant="h6" className="proposals">
        Proposals: <span>{data?.proposals}</span>
      </Typography>
      <Box className="d-flex flex-wrap">
        <Typography variant="body1" className="payment">
          Payment verified |
        </Typography>
        <Rating
          name="rating"
          value={5}
          size="small"
          readOnly
          sx={{
            color: "#FFDD00",
            px: 1,
            "& .MuiSvgIcon-root": { width: "0.7em" },
          }}
        />
        <Typography variant="caption" className="spent">
          <span>$400+</span> spent &nbsp;{" "}
          <img src={pin_icon} alt="location" width="18" className="mb-1" />
          &nbsp; California &nbsp; Connects to apply:<span> 2 connects</span>
        </Typography>
      </Box>
    </Paper>
  );
};

export default memo(JobCard);
