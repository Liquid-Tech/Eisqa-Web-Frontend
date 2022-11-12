import { Box } from "@mui/material";
import { projectName } from "../../theme/themeConfig";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        borderTop: "1px solid #F4F5F7",
        backgroundColor: "#e5e5e5",
      }}
      paddingY={3}
      className="text-dark fw-bold"
    >
      {projectName} @ DEVELO IT
    </Box>
  );
};

export default Footer;
