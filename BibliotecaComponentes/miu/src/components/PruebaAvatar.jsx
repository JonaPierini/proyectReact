import { Avatar, Stack } from "@mui/material";
import React from "react";
import pepe from "../../public/static/images/avatar3.jpg";
import pepeDos from "../assets/avatar1.jpg";

export const PruebaAvatar = () => {
  return (
    <div>
      <Stack  direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="../public/static/images/avatar2.jpg" />
        {/* Otra de las formas es insertar las imagens dentro de assest */}
        <Avatar alt="Travis Howard" src="../src/assets/avatar1.jpg" />
        <Avatar alt="Cindy Baker" src={pepe} />
        <Avatar alt="Cindy Baker" src={pepeDos} />
      </Stack>
    </div>
  );
};
