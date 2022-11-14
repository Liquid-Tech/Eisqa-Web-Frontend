import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardHeader,
  Avatar,
} from "@mui/material";

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
        sx={{ px: 1 }}
        avatar={<Avatar src={data.userImage} alt={data.userName} />}
        action={
          <Typography variant="body2" color="text.secondary" px={2}>
            {data.rating}
          </Typography>
        }
        title={data.userName}
        subheader={data.level}
      />
      <CardContent sx={{ p: 1, pt: 0 }}>
        <Typography variant="body2" color="text.secondary">
          {data.gigDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          {data.price}$/starting
        </Typography>
      </CardActions>
    </Card>
  );
}
