// import controls from "./Components/Controls";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import apiUrl from "../apiUrl"

const Display = function() {
const [todo, setTodo] = useState({taskName: "", taskDetails: ""})

return (
    <div>
        <form onSubmit={null}>
            <input/>
        </form>
    </div>
        )
}

export default Display;
//{/* <Route path="" element={<Controls />} /> */}