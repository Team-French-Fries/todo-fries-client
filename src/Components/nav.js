import { Routes, Route, Link } from "react-router-dom";
// import Display from "./Components/Display";

function Nav() {


    return (
        <div className="Nav">
            <nav className="nav">
                <Link to="/"><span className="Overview">Overview</span></Link>
                <Link to="/display"><span className="Display">Tasks</span></Link>
            </nav>
            <main>
            </main>
        </div>
    )
}
export default Nav