import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";

export default function GigCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: "0px 32px 70px 0px #0000000A" }}>
      <CardMedia
        component="img"
        alt={data.userName}
        height="160"
        image={data.gigImg}
      />
      <CardHeader
        sx={{
          px: 1,
          ".MuiCardHeader-avatar": {
            marginRight: "10px",
          },
          ".MuiCardHeader-title": {
            fontFamily: "Poppins !important",
          },
          ".MuiCardHeader-subheader": {
            fontSize: "12px",
            fontFamily: "Poppins !important",
          },
        }}
        className="poppins"
        avatar={<Avatar src={data.userImage} alt={data.userName} />}
        action={
          <Box sx={{ display: "flex", alignItems: "baseline", m: 1 }}>
            <Typography
              sx={{ fontSize: "12px", color: "#FFDD00", fontWeight: "500" }}
              className="poppins"
            >
              <StarIcon fontSize="inherit" />
              {data.rating}
            </Typography>
            &nbsp;
            <Typography
              sx={{ fontSize: "11px" }}
              color="text.secondary"
              className="poppins"
            >
              {`(${data.comments})`}
            </Typography>
          </Box>
        }
        title={data.userName}
        subheader={data.level}
      />
      <CardContent sx={{ p: 1, pt: 0 }}>
        <Typography variant="body2" color="text.secondary" className="poppins">
          {data.gigDesc}
        </Typography>
      </CardContent>
      <CardActions sx={{ borderTop: "1px solid #707070", p: 1 }}>
        <Typography variant="body2" color="text.secondary" className="poppins">
          <span style={{ color: "#1EBF73" }}>{data.price}$</span> /starting
        </Typography>
        <IconButton aria-label="menu" sx={{ ml: "auto", p: "4px" }}>
          <MenuIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="add to favorites"
          sx={{ ml: "0px !important", p: "4px" }}
        >
          <FavoriteIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
