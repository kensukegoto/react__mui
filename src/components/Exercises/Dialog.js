import React,{Fragment} from "react"
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  MenuItem
} from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add'

export default props =>{

  const [open,setOpen] = React.useState(false)
  const [exercise, setExercise] = React.useState({
    title: "",
    description: "",
    muscles: ""
  });

  const handleChange = name => event => {
    setExercise({ ...exercise, [name]: event.target.value });
  };

  const handleClickOpen = () =>{
    setOpen(true)
  }
  const handleClose = () =>{
    setOpen(false)
  }

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
    setOpen(false)
  }

  const useStyles = makeStyles(theme => ({
    FormControl: {
      width: 500
    }
  }))

  const classes = useStyles();

  return <Fragment>
    {console.log(123)}
    <Fab color="default" size="small" onClick={handleClickOpen}>
      <AddIcon />
    </Fab>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out the form below
        </DialogContentText>
        <form>
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
        </form>
      </DialogContent>
      <DialogActions>
        <Button 
          color="primary"
          onClick={handleSubmit}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  </Fragment>
}