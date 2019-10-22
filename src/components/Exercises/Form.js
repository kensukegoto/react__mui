import React,{useEffect} from "react"

import {
  Button,
  TextField,
  MenuItem
} from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles';


export default props => {

  const [exercise, setExercise] = React.useState(getInitState());

  function getInitState (){
    const { exercise } = props
    return exercise ? exercise : {
      title: "",
      description: "",
      muscles: ""
    }
  }

  useEffect(()=>{
    console.log("This callback is for name only")
    setExercise(getInitState())
  },[props])


  const handleChange = name => event => {
    setExercise({ ...exercise, [name]: event.target.value });
  };

  const handleSubmit = () =>{
    // イベント追加
    props.onSubmit({
      ...exercise, // 入力した内容
      id: exercise.id ? exercise.id : exercise.title.toLocaleLowerCase().replace(/ /g,"-") // IDを作成
    })
    // 追加後はステートを空にする
    setExercise({
      title: "",
      description: "",
      muscles: ""
    })
    // モーダルは閉じる
    if(props.setOpen) props.setOpen(false)
    
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
      variant="contained" 
      color="primary"
      onClick={handleSubmit}
    >
      Create
    </Button>
  </form>
}