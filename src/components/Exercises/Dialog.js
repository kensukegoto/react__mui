import React,{Fragment} from "react"

import {
  Fab,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add'
import Form from "./Form"

export default props =>{

  const [open,setOpen] = React.useState(false)
  const { muscles,onCreate } = props


  const handleClickOpen = () =>{
    setOpen(true)
  }
  const handleClose = () =>{
    setOpen(false)
  }

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
        <Form 
          muscles={muscles}
          onSubmit={onCreate}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  </Fragment>
}