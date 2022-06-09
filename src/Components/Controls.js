import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import apiUrl from '../apiUrl'

export default function Controls() {

const [newTaskName, setNewTaskName] = useState("")
const [newTaskDetails, setNewTaskDetails] = useState("")
const [interval, setInterval] = useState("Morning")

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
        setUpdatedTask(data.todo._id)
    })
    // const handleChange = (event) => {
    //     set
    // }
    let ApiId
    const ApiIds = {
        morning: "629fc9c0e3d9fb6f10ba289b",
        afternoon: "62a228ba563b748c039ce415",
        evening: "62a271c183aa4732ce87b522"
    }
    let ApiTime
    const ApiTimes = {
        morning: "Morning",
        afternoon: "Afternoon",
        evening: "Evening"

    }
    if (interval === "Morning") {
        ApiId = ApiIds.morning
        ApiTime = ApiTimes.morning
    } else if ( interval === "Afternoon") {
        ApiId = ApiIds.afternoon
        ApiTime = ApiTimes.afternoon
    } else if ( interval === "Evening") {
        ApiId = ApiIds.evening
        ApiTime = ApiTimes.evening
    }
    let patchobject = {
        timeOfDay: ApiTime,
        tasks: [
        ]
    }

    fetch(apiUrl + `/times/` + ApiId, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patchobject)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success Times: ", data)
    })
    setNewTaskName("")
    setNewTaskDetails("")

}

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input value={newTaskName} placeholder="Add Task" type="text" onChange={handleName}/>
            <input value={newTaskDetails} placeholder="Add Details" type="text" onChange={handleDetails}/>
            <select value={interval} onChange={(e) => (setInterval(e.target.value), console.log(e.target.value))}>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
            </select>
            <input type="submit" value="Add a Task" />
        </form>
    </div>
  )
}