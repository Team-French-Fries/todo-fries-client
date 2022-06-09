import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import apiUrl from '../apiUrl'

export default function Controls() {

const [newTaskName, setNewTaskName] = useState("")
const [newTaskDetails, setNewTaskDetails] = useState("")

const [updatedTask, setUpdatedTask] = useState()

const handleName = (event) => {
    setNewTaskName(event.target.value)
}
const handleDetails = (event) => {
    setNewTaskDetails(event.target.value)
}

const handleSubmit = (event) => {
    event.preventDefault()
    let object = {
        taskName: newTaskName,
        taskDetails: newTaskDetails
    }
    fetch(apiUrl + `/todos`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data)
        console.log(data.todo._id)
    })
    // const handleChange = (event) => {
    //     set
    // }

    fetch(apiUrl + `/times`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
    setNewTaskName("")
    setNewTaskDetails("")

}

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input value={newTaskName} placeholder="Add Task" type="text" onChange={handleName}/>
            <input value={newTaskDetails} placeholder="Add Details" type="text" onChange={handleDetails}/>
            <input type="submit" value="Add a Task" />
        </form>
    </div>
  )
}