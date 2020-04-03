import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AuthProvider, AuthRoute } from "../lib/react-auth"
import "../styles/base.css"
import Auth from "./auth/Auth"
import Home from "./home/Home"
//import ExerciseOptions from "../Exercies/ExerciseOptions.js"
//import ExerciseType from "../Exercies/ExerciseType.js"

export default props => {
  return (
    <AuthProvider>
      <Router>
        <div className="wrapper">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Auth} />
        </div>
      </Router>
    </AuthProvider>
  )
}
