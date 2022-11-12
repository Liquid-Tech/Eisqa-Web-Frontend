import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Container, Drawer, Paper } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { routes } from "./routes";

// Components
import Sidebar from "./Components/Sidebar/SideBar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SuspenseFallback from "./Components/SuspenseFallback/SuspenseFallback";
import ErrorFallback from "./Components/ErrorFallback/ErrorFallback";

// lazy loading
const Login = lazy(() => import("./Pages/Login/Login"));
const Register = lazy(() => import("./Pages/Register/Register"));
const ForgotPassword = lazy(() => import("./Pages/ForgotPassword/ForgotPassword"));

const App = () => {
  // state
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  // sidebar width
  const [drawerWidth, setDrawerWidth] = useState(240);

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkUser = () => {
    if (!user) {
      navigate("/");
    }
  };

  return (
    <div>
      <Suspense fallback={SuspenseFallback}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Suspense>
      {user && (
        <>
          {/* Sidebar */}
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={SuspenseFallback}>
                <Sidebar
                  drawerWidth={drawerWidth}
                  setDrawerWidth={setDrawerWidth}
                />
              </Suspense>
            </ErrorBoundary>
          </Drawer>
          {/* Main content (Header / Main Content / Footer) */}
          <Box
            sx={{
              paddingLeft: {
                xs: 0,
                md: `${drawerWidth}px`,
              },
              transition: "padding-left 200ms",
            }}
            minHeight="100vh"
          >
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={SuspenseFallback}>
                <Header drawerWidth={240} />
              </Suspense>
              <Container className="layout-container" maxWidth="xl">
                <Paper className="layout-card">
                  <Suspense fallback={SuspenseFallback}>
                    <Routes>
                      {routes.map((item) => {
                        return (
                          <Route path={item.path} element={item.component} />
                        );
                      })}
                    </Routes>
                  </Suspense>
                </Paper>
              </Container>
              <Footer />
            </ErrorBoundary>
          </Box>
        </>
      )}
    </div>
  );
};

export default App;
