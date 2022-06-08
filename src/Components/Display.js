// import controls from "./Components/Controls";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import apiUrl from "../apiUrl"
import Controls from "./Controls"

const Display = function() {
// const [todo, setTodo] = useState({taskName: "", taskDetails: ""})
const [interval, setInterval] = useState([])

useEffect(() => {
    fetch(`https://fries-api.herokuapp.com/times`)
        .then(response => response.json())
        .then(data => setInterval(data.times))
        .catch(() => console.log("broken"))
}, [])


const mappedDisplay = interval.map((item) => {
    return (
        <div>
            <h2>
                {item.timeOfDay}
            </h2>
            <li>
                {item.tasks}
                { < Controls />}
            </li>

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