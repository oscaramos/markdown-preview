import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import withErrorHandler from "errorHandling";
import { App as ErrorBoundaryFallback } from "errorHandling/Fallbacks";
import { ConfirmProvider } from "material-ui-confirm";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "store";
import { ThemeProvider } from "theme";

import Layout from "sections/Layout";


function App() {
  return (
    <StoreProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <ConfirmProvider>
            <Box display="flex">
              <CssBaseline />
              <Router>
                <Layout />
              </Router>
            </Box>
          </ConfirmProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </StoreProvider>
  );
}

export default withErrorHandler(App, ErrorBoundaryFallback);
