import { Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro => Cualquier path que inicie con auth va devolver el Elemento AuthRoutes */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* JournalApp => Cualquier ruta que sea /cualquierCosa va a dirigir al Elemento JorunalRoutes */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
