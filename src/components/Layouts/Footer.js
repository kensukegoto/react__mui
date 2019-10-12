import React from "react";

import {
  Paper,
  Tabs,
  Tab
} from '@material-ui/core/';


export default ({ muscles,category,onSelect }) => {

  const index = category
  ? muscles.findIndex(group => group === category) + 1
  : 0

  const [value, setValue] = React.useState(index);

  const handleChange = (event, newValue) => {
   
    onSelect(
      newValue === 0
      ? ""
      : muscles[newValue - 1]
    )
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