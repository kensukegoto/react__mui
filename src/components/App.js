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

    // 各カテゴリー（shoulder,chest...）毎にエクササイズを入れるための空の配列を作成
    const initExercises = muscles.reduce((exercises,category)=>({
      ...exercises,
      [category]: []
    }),{})
  
    return Object.entries(
      this.state.exercises.reduce((exercises,exercise) => {
        const { muscles } = exercise
        // 対象の部位のエクササイズの配列を取り出し、さらに新しいエクササイズを追加
        exercises[muscles] = [...exercises[muscles],exercise]

        return exercises
      },initExercises)
    )
  }

  handleCategorySelected = category => 
    this.setState({
      category
    })
  
  handleExerciseSelected = id => 
    this.setState(({exercises})=>({
      exercise: exercises.find(ex => ex.id === id)
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
  

  handleExerciseSelectEdit = id => 
    this.setState(({exercises})=>({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))

  handleExerciseEdit = exercise => {
    this.setState(({exercises})=>{
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ]
    })
  }

  render(){

    const exercises = this.getExercisesByMuscles(),
      { category,exercise,editMode } = this.state

    return <>
      <Header 
        muscles={muscles}
        onExerciseCreate={this.handleExerciseCreate}
      />

      <Exercises 
        editMode={editMode}
        category={category}
        exercise={exercise}
        exercises={exercises}
        muscles={muscles}
        onSelect={this.handleExerciseSelected}
        onDelete={this.handleExerciseDelete}
        onSelectEdit={this.handleExerciseSelectEdit}
        onEdit={this.handleExerciseEdit}
      />

      <Footer 
        category={category}
        muscles={muscles}
        onSelect={this.handleCategorySelected}
      />
    </>
  }

}