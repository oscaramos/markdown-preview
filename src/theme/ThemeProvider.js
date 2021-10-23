import { ThemeProvider } from "@mui/styles";
import { themes } from "config";
import React from "react";
import { useStore } from "store";

import { createTheme, StyledEngineProvider } from "@mui/material/styles";

function CustomThemeProvider({ children }) {
  const {
    state: { theme },
  } = useStore();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(themes[theme.mode])}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default CustomThemeProvider;
