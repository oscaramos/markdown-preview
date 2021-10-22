import React from "react";
import { ConfirmProvider } from "material-ui-confirm";

import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

import withErrorHandler from "errorHandling";
import { App as ErrorBoundaryFallback } from "errorHandling/Fallbacks";

import Layout from "sections/Layout";
import { ThemeProvider } from "theme";
import { StoreProvider } from "store";

import { BrowserRouter as Router } from "react-router-dom";

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
