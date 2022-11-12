import { createRef } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/createStore";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material/styles";
import { theme, snackBarPlacement } from "./theme/themeConfig";
import { SnackbarProvider } from "notistack";
import { StyledEngineProvider } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css"; // css file
import "bootstrap/dist/js/bootstrap.min.js"; // js file
import "./index.scss";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const container = document.getElementById("root");
const root = createRoot(container);

// notistack
const notistackRef = createRef();

const closeNotistack = (key) => {
  notistackRef.current.closeSnackbar(key);
};

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <SnackbarProvider
              ref={notistackRef}
              anchorOrigin={snackBarPlacement}
              autoHideDuration={3000}
              variant="success"
              maxSnack={1}
              action={(key) => (
                <>
                  <IconButton size="small" onClick={() => closeNotistack(key)}>
                    <Close sx={{ color: "white" }} />
                  </IconButton>
                </>
              )}
            >
              <App />
            </SnackbarProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
