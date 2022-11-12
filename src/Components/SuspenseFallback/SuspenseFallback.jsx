import { CircularProgress, Box } from "@mui/material";

const SuspenseFallback = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 3,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default SuspenseFallback;
