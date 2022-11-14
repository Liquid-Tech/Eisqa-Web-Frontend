import React, { useState, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../../Redux/Actions";
import { AccountCircle, LogoutOutlined, Menu } from "@mui/icons-material";
import {
  IconButton,
  Box,
  Drawer,
  Tooltip,
  Avatar,
  Typography,
  Menu as MuiMenu,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Tabs,
  Badge,
  Tab,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DummyUserImage from "../../assets/images/avatar.png";
import notification from "../../assets/images/notification-1.png";
import settings from "../../assets/images/settings.png";
import { sellerdHeaderNav } from "../../routes";
import "./sellerheader.scss";

// Nav Tab Links
const LinkTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
};

// avator badge
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 8,
    top: 35,
    backgroundColor: "#1ebf73",
    height: "9px",
    minWidth: "9px",
  },
}));

// lazy loading
const SideBar = lazy(() => import("../Sidebar/SideBar"));

const Header = ({ drawerWidth }) => {
  // state
  const navigate = useNavigate();
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [tabNav, setTabNav] = useState(0);
  const menu = Boolean(anchorEl);

  // redux
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(userLogout());
    navigate("/");
  };

  const handleSidebarDrawerOpen = () => {
    setSidebarMenu(true);
  };

  const handleSidebarDrawerClose = () => {
    setSidebarMenu(false);
  };

  const handleOpenMenu = (element) => {
    setAnchorEl(element);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setTabNav(newValue);
    navigate(event.target.name);
  };

  return (
    <Box className="seller-header-box">
      <Box className="header-title-btn">
        <Tooltip title="Menu" arrow={true} placement="right">
          <IconButton
            sx={{
              color: "white",
              display: {
                xs: "block",
                lg: "none",
              },
            }}
            onClick={handleSidebarDrawerOpen}
          >
            <Menu />
          </IconButton>
        </Tooltip>
        <Box className="user-box">
          <StyledBadge
            variant="dot"
            onClick={() => {
              navigate("/user-profile");
              setTabNav("");
            }}
          >
            <Avatar src={DummyUserImage} className="pointer" />
          </StyledBadge>
          <Typography
            className="user-name pointer"
            onClick={() => {
              navigate("/user-profile");
              setTabNav("");
            }}
          >
            Annie Where
          </Typography>
        </Box>
      </Box>
      <Box
        className="seller-navs"
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        <Tabs
          value={tabNav}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          {sellerdHeaderNav?.map((route) => (
            <LinkTab
              key={route.path}
              label={route.name}
              disableRipple={true}
              name={route.path}
            />
          ))}
        </Tabs>
      </Box>
      <Box className="nav-icons">
        <IconButton aria-label="notification" size="small">
          <img src={notification} alt="notification" />
        </IconButton>
        <IconButton
          aria-label="settings"
          size="small"
          onClick={(e) => handleOpenMenu(e.currentTarget)}
        >
          <img src={settings} alt="settings" />
        </IconButton>
        <MuiMenu
          id="basic-menu"
          anchorEl={anchorEl}
          open={menu}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            sx: { width: 150, maxWidth: "100%" },
          }}
        >
          <MenuList dense>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <AccountCircle fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </MenuList>
        </MuiMenu>
      </Box>
      <Drawer
        open={sidebarMenu}
        variant="temporary"
        onClose={handleSidebarDrawerClose}
        sx={{ zIndex: 1300 }}
      >
        <SideBar
          handleSidebarDrawerClose={handleSidebarDrawerClose}
          drawerWidth={drawerWidth}
          headerSidebar={true}
        />
      </Drawer>
    </Box>
  );
};

export default Header;
