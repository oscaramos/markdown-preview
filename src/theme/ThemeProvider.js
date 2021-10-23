import { themes } from "config";
import React from "react";
import { useStore } from "store";

import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";

function CustomThemeProvider({ children }) {
  const { state } = useStore();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(themes[state.theme.mode])}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default CustomThemeProvider;
