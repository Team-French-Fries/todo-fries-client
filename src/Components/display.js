import Controls from "./Components/Controls";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import apiUrl from "../ApiUrl"

//Route for Controls
<Route path="" element={<Controls />} />

const display = function() {
const [todo, setTodo] = useState({taskName: "", taskDetails: ""})



    
return (
    <div>
        <form onSubmit={null}>
            <input type="text" onChange={null} />
            <input type="text" onChange={null} />
            <input/>
        </form>
    </div>
        )
}

export default Display;
