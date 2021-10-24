import withErrorHandler from "errorHandling";
import { App as ErrorBoundaryFallback } from "errorHandling/Fallbacks";
import { ConfirmProvider } from "material-ui-confirm";
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider, useStore } from "store";
import { ThemeProvider } from "theme";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";

import Layout from "sections/Layout";

function App() {
  const theme = useTheme();
  const { actions } = useStore();

  useEffect(() => {
    actions.documents.initialize();
  }, [actions]);

  return (
    <Box
      display="flex"
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <CssBaseline />
      <Router>
        <Layout />
      </Router>
    </Box>
  );
}

function AppWithProviders() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <ConfirmProvider>
          <App />
        </ConfirmProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default withErrorHandler(AppWithProviders, ErrorBoundaryFallback);
