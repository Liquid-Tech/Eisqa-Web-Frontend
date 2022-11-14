import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Container } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { sellerdRoutes } from "./routes";

// Components
import SellerHeader from "./Components/SellerHeader/SellerHeader";
import SuspenseFallback from "./Components/SuspenseFallback/SuspenseFallback";
import ErrorFallback from "./Components/ErrorFallback/ErrorFallback";

// lazy loading
const Login = lazy(() => import("./Pages/Login/Login"));
const Register = lazy(() => import("./Pages/Register/Register"));
const ForgotPassword = lazy(() =>
  import("./Pages/ForgotPassword/ForgotPassword")
);

const App = () => {
  // state
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

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
          {/* Main content (Header / Main Content / Footer) */}
          <Box minHeight="100vh">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={SuspenseFallback}>
                <SellerHeader drawerWidth={240} />
              </Suspense>
              <Container className="layout-container" maxWidth="xl">
                <Suspense fallback={SuspenseFallback}>
                  <Routes>
                    {sellerdRoutes.map((item) => {
                      return (
                        <Route
                          key={item.path}
                          path={item.path}
                          element={item.component}
                        />
                      );
                    })}
                  </Routes>
                </Suspense>
              </Container>
            </ErrorBoundary>
          </Box>
        </>
      )}
    </div>
  );
};

export default App;
