import React,{Fragment} from "react"
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core"

import Form from "./Form"

import {
  Delete as DeleteIcon, 
  Edit as EditIcon, 
}from '@material-ui/icons'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
}

export default ({ 
  muscles,
  editMode,
  exercises,
  category,
  onSelect,
  onDelete,
  onSelectEdit,
  onEdit,
  exercise:{
    id,
    title = "Welcome!",
    description = "Please select in exercise from the list on the left"
  } 
}) =>
  <Grid container spacing={2}>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {
          exercises.map(([group,exercises],key)=>
            !category || category === group
            ? <Fragment key={key}>
              <Typography
                variant="h5"
                style={{textTransform: "capitalize"}}
              >
                {group}
              </Typography>
              <List component="nav" aria-label="secondary mailbox folders">
                {exercises.map(({id,title},key)=>{
                  return <ListItem button key={key}>
                    <ListItemText 
                      primary={title}
                      onClick={()=>onSelect(id)}
                    />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => onSelectEdit(id)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => onDelete(id)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                })}
              </List>
            </Fragment>
            : null
          )
        }

      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {
          editMode 
          ? <Form 
              muscles={muscles}
              onSubmit={onEdit}
            />
          : 
          <Fragment>
            <Typography
              variant="h5"
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              style={{marginTop:20}}
            >
              {description}
            </Typography>
          </Fragment>
        }
      </Paper>
    </Grid>
  </Grid>