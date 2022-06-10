// import controls from "./Components/Controls";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import apiUrl from "../apiUrl"
import { useParams, useNavigate } from "react-router"

const Display = function () {
// const [todo, setTodo] = useState({taskName: "", taskDetails: ""})
// const [taskDisplay, setTaskDisplay] = useState("")
const [interval, setInterval] = useState([])
const [displayTask, setDisplayTask] = useState(false)

const params = useParams()
const navigate = useNavigate();

// API call to fetch times data which contains tasks for certain times of the day
useEffect(() => {
    fetch(apiUrl + `/times`)
        .then(response => response.json())
        .then(data => setInterval(data.times))
        .catch(() => console.log("broken"))
}, [])

// onClick functions to toggle display of task details under task name
const fries = () => {
    setDisplayTask(true)
}
const toggleDisplay = () => {
    setDisplayTask(false)
}

// attempt of making a delete function work
// can delete the task but does not update until refreshing the page
// delete button ends up covering the task details when task name is expanded
let taskDisplay = ""

const mappedDisplay = interval.map((item, index) => {
    const tasks = item.tasks
    const mappedTasks = tasks.map((task, index) => {
        const taskDelete = (event) => {
            fetch(apiUrl + `/todos/` + task._id, {
                method: "DELETE",
            })
            .then(() => navigate('/'))
        }
        if (displayTask !== false) {
            taskDisplay = (
                <div>
                    <li onClick={toggleDisplay}>{task.taskDetails}<button onClick={taskDelete}>Delete</button></li>
                </div>
        )}
    })

// older mappedDisplay before trying to integrate a delete button/feature
// const mappedDisplay = interval.map((item, index) => {
// console.log(item._id)
// const tasks = item.tasks
// let taskDisplay = ""
// if (displayTask !== false) {
//     taskDisplay = (
//         tasks.map(task => <li onClick={toggleDisplay}>{task.taskDetails}</li>)
//     )
// }

    return (
        <div key={index}>
            <h2 >
                {item.timeOfDay}
            </h2>
            <ul key={index} >
                {tasks.map(task => <li type="button" onClick={fries}>{task.taskName}</li>)}
                {taskDisplay}
            </ul>
        </div>
    )
})

return (
    <div>
        {mappedDisplay}
    </div>
    )
}

export default Display;