import React from "react";

import {
  Paper,
  Tabs,
  Tab
} from '@material-ui/core/';


export default ({ muscles }) => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 return (
  <Paper>
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="ALL" />
      {muscles.map((group,key) => 
        <Tab label={group} key={key} />
      )}

    </Tabs>
  </Paper>
 )
}