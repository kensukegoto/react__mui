import React,{Fragment} from "react"
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

  const ranges = [
    {
      value: '0-20',
      label: '0 to 20',
    },
    {
      value: '21-50',
      label: '21 to 50',
    },
    {
      value: '51-100',
      label: '51 to 100',
    },
  ];

  return <Fragment>
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
            fullWidth
          />
          <TextField
            select
            label="Muscles"
            value={exercise.muscles}
            onChange={handleChange('muscles')}
            fullWidth
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
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  </Fragment>
}