import { NavLink, useLocation } from "react-router-dom";
import { sellerdHeaderNav } from "../../routes";
import { useDispatch } from "react-redux";
import { setSidebarKey } from "../../Redux/Actions/sidebarKey";
import { Box, List, ListItemText, ListItemButton, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import logo from "../../assets/images/logo-2.svg";
import "./styles.scss";

const drawer = Object.freeze({
  open: 240,
  closed: 80,
});

const SideBar = ({
  drawerWidth,
  handleSidebarDrawerClose,
  headerSidebar,
  setDrawerWidth,
}) => {
  const location = useLocation();
  const dispatch = useDispatch();
  // const [filterRoutes, setFilterRoutes] = useState([]);
  // const role = useSelector((state) => state.user.role);

  // useEffect(() => {
  //   let arr = [];
  //   if (role !== "super") {
  //     arr = routes.filter((item) => item.layout !== "super");
  //   } else {
  //     arr = routes;
  //   }
  //   setFilterRoutes(arr);
  // }, [role]);

  const handleListItemClick = (value) => {
    dispatch(setSidebarKey(value));
    if (headerSidebar) {
      handleSidebarDrawerClose();
    }
  };

  const toggleDrawer = () => {
    if (drawerWidth === drawer.closed) {
      setDrawerWidth(drawer.open);
    } else {
      setDrawerWidth(drawer.closed);
    }
  };

  return (
    <Box sx={{ width: drawerWidth }} className="sidebar">
      <Box className="logo-box">
        <img src={logo} alt="logo" />
      </Box>
      <Box className="links-box">
        <List>
          {sellerdHeaderNav.map((route) => (
            <NavLink to={route.path} className="navLink">
              <ListItemButton
                button
                sx={{
                  "&.Mui-selected svg": {
                    fill: "#2F4983",
                  },
                }}
                className="list-item"
                key={route.path}
                onClick={() => handleListItemClick(route.path)}
                selected={location.pathname === route.path}
              >
                {drawerWidth === drawer.open && (
                  <ListItemText
                    primary={route.name}
                    secondary={route?.description ?? ""}
                  />
                )}
              </ListItemButton>
            </NavLink>
          ))}
        </List>
      </Box>
      {!headerSidebar && (
        <Box className="drawer-toggle-btn">
          <Button
            onClick={toggleDrawer}
            fullWidth
            color="primary"
            variant="contained"
          >
            {drawerWidth === drawer.open ? (
              <ArrowBackIos style={{ fontSize: 14 }} />
            ) : (
              <ArrowForwardIos style={{ fontSize: 14 }} />
            )}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SideBar;
