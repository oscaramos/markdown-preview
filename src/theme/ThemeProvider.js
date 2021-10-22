import { ThemeProvider } from "@material-ui/styles";
import { themes } from "config";
import React from "react";
import { useStore } from "store";

import { createMuiTheme } from "@material-ui/core/styles";

function CustomThemeProvider({ children }) {
  const {
    state: { theme },
  } = useStore();

  return (
    <ThemeProvider theme={createMuiTheme(themes[theme.mode])}>
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
