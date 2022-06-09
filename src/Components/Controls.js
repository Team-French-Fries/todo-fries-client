import React from 'react'
import { useState } from 'react'
import apiUrl from '../apiUrl'

export default function Controls() {

const [todo, setTodo] = useState({taskName: "", taskDetails: ""})
const [taskList, setTaskList] = useState([])


const handleChange = (event) => {
    setTodo({...taskList, [event.target.name]: event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault()
    let object = {
        taskName: "",
        taskDetails: ""
    }
    fetch(apiUrl + `/todos`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
    .then(response => response.json({
        taskName: "fries",
        taskDetails: "Extra Salt"
    }))
    .then(data => {
        console.log("Success:", data)
    })
    setTaskList({taskName: "", taskDetails: ""})

}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={todo.taskName} placeholder="Add Task" type="text" onChange={handleChange}/>
            <input value={todo.taskDetails} placeholder="Add Details" type="text" onChange={handleChange}/>
            <input type="submit" value="Add a Task" />
        </form>
    </div>
  )
}