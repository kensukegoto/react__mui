import React,{ Component } from "react"
import { Header, Footer } from "./Layouts"
import Exercises from "./Exercises"
import {
  muscles,
  exercises
} from "../store"

export default class extends Component {

  state = {
    exercises,
    category: "",
    exercise : {}
  }

  getExercisesByMuscles(){

    const initExercises = muscles.reduce((exercises,category)=>({
      ...exercises,
      [category]: []
    }),{})
  
    return Object.entries(
      this.state.exercises.reduce((exercises,exercise) => {
        const { muscles } = exercise
        exercises[muscles] = [...exercises[muscles],exercise]

        return exercises
      },initExercises)
    )
  }

  // 選択（カテゴリー）
  handleCategorySelect = category => 
    this.setState({
      category
    })
  

  // 選択（エクササイズ）
  handleExerciseSelect = id => 
    this.setState(({exercises})=>({
      exercise: exercises.find(ex => ex.id === id)
    }))

  // 編集
  handleExerciseSelectEdit = id => 
    this.setState(({exercises})=>({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))

  handleExerciseCreate = exercise => 
    this.setState(({exercises})=>({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  

  handleExerciseDelete = id => 
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }))
  

  render(){

    const exercises = this.getExercisesByMuscles(),
      { category,exercise,editMode } = this.state

    return <>
      <Header 
        muscles={muscles}
        onExerciseCreate={this.handleExerciseCreate}
      />

      <Exercises 
        category={category}
        exercise={exercise}
        exercises={exercises}
        onSelect={this.handleExerciseSelect}
        onDelete={this.handleExerciseDelete}
        editMode={editMode}
        onSelectEdit={this.handleExerciseSelectEdit}
      />

      <Footer 
        category={category}
        muscles={muscles}
        onSelect={this.handleCategorySelect}
      />
    </>
  }

}