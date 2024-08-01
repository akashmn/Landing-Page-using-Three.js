import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./LandingPage"

const Routing = () => {
  return (
    <div className="">
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing