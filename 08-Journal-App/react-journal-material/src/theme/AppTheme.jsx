import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { purpleTheme } from "./";

//Higher orden component => componente que tiene componentes hijos. En Este caso AppTheme es el HOC y devuelvo hijos {children}
// Si no embolvemos la aplicación de esta forma no va a funcionar el material
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};
