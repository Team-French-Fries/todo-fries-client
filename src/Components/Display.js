// import controls from "./Components/Controls";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import apiUrl from "../apiUrl"
import Controls from "./Controls"

const Display = function() {
// const [todo, setTodo] = useState({taskName: "", taskDetails: ""})
const [interval, setInterval] = useState([])
const [displayTask, setDisplayTask] = useState(false)
// const [taskDisplay, setTaskDisplay] = useState("")

useEffect(() => {
    fetch(apiUrl + `/times`)
        .then(response => response.json())
        .then(data => setInterval(data.times))
        .catch(() => console.log("broken"))
}, [])
console.log(interval)
const fries = () => {
    setDisplayTask(true)
}
const toggleDisplay = () => {
    setDisplayTask(false)
}


const mappedDisplay = interval.map((item, index) => {
    console.log(item._id)
const tasks = item.tasks
let taskDisplay = ""
if (displayTask !== false) {
    taskDisplay = (
        tasks.map(task => <li onClick={toggleDisplay}>{task.taskDetails}</li>)
    )
}

    return (
        <div key={index}>
            <h2 >
                {item.timeOfDay}
            </h2>
            <ul key={index} >
                {tasks.map(task => <li type="button" onClick={fries}>{task.taskName}</li>)}
                {taskDisplay}
            </ul>
                { < Controls />}
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
//{/* <Route path="" element={<Controls />} /> */}