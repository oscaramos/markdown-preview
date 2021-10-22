import { StyledEngineProvider } from "@mui/material/styles";
import { createTheme, adaptV4Theme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import { themes } from "config";
import React from "react";
import { useStore } from "store";

function CustomThemeProvider({ children }) {
  const {
    state: { theme },
  } = useStore();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(adaptV4Theme(themes[theme.mode]))}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default CustomThemeProvider;
