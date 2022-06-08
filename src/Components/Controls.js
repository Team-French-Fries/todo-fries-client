import React from 'react'
import { useState } from 'react'

export default function Controls() {

const [addTask, setAddTask] = useState("")

const handleChange = (event) => {
    setAddTask(event.target.value)
}
const handleSubmit = () => {

}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="Add Task" type="text" onChange={handleChange}/>
            <input type="submit" value="Add a Task" />
        </form>
    </div>
  )
}