import React from "react"

import {
  Button,
  TextField,
  MenuItem
} from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles';


export default props => {

  const [exercise, setExercise] = React.useState({
    title: "",
    description: "",
    muscles: ""
  });

  const handleChange = name => event => {
    setExercise({ ...exercise, [name]: event.target.value });
  };

  const handleSubmit = () =>{
    props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g,"-")
    })
    setExercise({
      title: "",
      description: "",
      muscles: ""
    })
    props.setOpen(false)
  }

  const useStyles = makeStyles(theme => ({
    FormControl: {
      width: 500
    }
  }))
  
  const classes = useStyles();

  return <form>
    <TextField
      label="Title"
      value={exercise.title}
      onChange={handleChange('title')}
      margin="normal"
      className={classes.FormControl}
    />
    <TextField
      select
      label="Muscles"
      value={exercise.muscles}
      onChange={handleChange('muscles')}
      className={classes.FormControl}
    >
    
      {props.muscles.map((val,key) => (
        <MenuItem key={key} value={val}>
          {val}
        </MenuItem>
      ))}
    </TextField>
    <TextField
      label="Description"
      multiline
      rows="4"
      value={exercise.description}
      onChange={handleChange('description')}
      margin="normal"
      className={classes.FormControl}
    />
    <br />
    <Button 
      color="primary"
      onClick={handleSubmit}
    >
      Create
    </Button>
  </form>
}