import { Navigate, Route, Routes } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";

export const JournalRoutes = () => {
  return (
    <Routes>
      {/* Si pones / va a mostrar JorunalPage */}
      <Route path="/" element={<JournalPage />} />

      {/* Cualquier ruta que no sea / ; ejemplo => /cualquierCosa va a navegar a JornalPage */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
