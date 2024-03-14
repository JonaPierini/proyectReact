import React from "react";
import Button from '@mui/material/Button';

export const PruebaButton = ({title}) => {
  return (
    <div>
      <Button variant="contained">{title}</Button>
    </div>
  );
};
