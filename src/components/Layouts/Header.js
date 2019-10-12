import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialogs/Create"

export default ({muscles}) => 

  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{flex: 1}}>
        Exercise Database
      </Typography>
      <CreateDialog muscles={muscles} />
    </Toolbar>
  </AppBar>


