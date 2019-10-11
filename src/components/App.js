import React,{ Component } from "react"
import { Header, Footer } from "./Layouts"
import Exercises from "./Exercises"
import {
  muscles,
  exercises
} from "../store"

export default class extends Component {

  state = {
    exercises
  }

  getExercisesByMuscles(){
  
    return Object.entries(this.state.exercises.reduce((exercises,exercise) => {
        const { muscles } = exercise
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles],exercise]
          : [exercise]
        return exercises
      },{})
    )
  }

  render(){
    return <>
      <Header />

      <Exercises 
        exercises={this.getExercisesByMuscles()}
      />

      <Footer 
        muscles={muscles}
      />
    </>
  }

}