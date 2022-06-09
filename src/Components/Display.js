// import controls from "./Components/Controls";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import apiUrl from "../apiUrl"
import Controls from "./Controls"

const Display = function() {
// const [todo, setTodo] = useState({taskName: "", taskDetails: ""})
const [interval, setInterval] = useState([])
const [displayedDetails, setDisplayedDetails] = useState("")

useEffect(() => {
    fetch(apiUrl + `/times`)
        .then(response => response.json())
        .then(data => setInterval(data.times))
        .catch(() => console.log("broken"))
}, [])

const fries = (event) => {
    console.log("Fries!")
    
}

const mappedDisplay = interval.map((item, index) => {
const tasks = item.tasks
    return (
        <div key={index}>
            <h2 >
                {item.timeOfDay}
            </h2>
            <ul key={index}>
                {tasks.map(task => <li type="button" onClick={fries}>{task.taskName}</li>)}
                {tasks.map(task => <li>{task.taskDetails}</li>)}
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