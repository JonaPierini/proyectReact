import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;

//Los hijos van a tener estos estilos y en este caso sería JournalPage
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      {/* El main es la etiqueta main de html */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
