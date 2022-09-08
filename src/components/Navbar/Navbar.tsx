import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import CustomDialog from "../CustomDialog/CustomDialog";
import FavoriteTable from "./FavoriteTable/FavoriteTable";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Happiness
          </Typography>
          <Button variant="contained" onClick={handleClick}>
            Open favorites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
