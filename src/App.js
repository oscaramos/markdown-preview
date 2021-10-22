import withErrorHandler from "errorHandling";
import { App as ErrorBoundaryFallback } from "errorHandling/Fallbacks";
import { ConfirmProvider } from "material-ui-confirm";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "store";
import { ThemeProvider } from "theme";

import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";

import Layout from "sections/Layout";

function App() {
  return (
    <StoreProvider>
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
    </StoreProvider>
  );
}

export default withErrorHandler(App, ErrorBoundaryFallback);
