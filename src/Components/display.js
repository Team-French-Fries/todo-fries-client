import Controls from "./Components/Controls";

//Route for Controls
<Route path="" element={<Controls />} />


// import React,{useState, useEffect} from "react";
// import Todos from "./Todos";
// import { Link } from "react-router-dom";
// import Nav from "./Nav";
// import apiUrl from "../apiUrl";

// const Controls = () => {
//     const [nav, setNav] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:3000/todos")
//             .then(response => response.json())
//             .then(data => setNav(data.nav))
//     }, [])

//     const navDisplay = nav.map((nav, index) => (
//         <li key={index}>{nav.taskName}: {nav.taskDetails}: {nav.overview} </li>
//     ))

//     return (
//         <div>
//             <ul>
//                 {navDisplay}
//             </ul>
//         </div>
//     )
// }

// export default Controls;