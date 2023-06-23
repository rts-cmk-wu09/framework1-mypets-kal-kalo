import {  NavLink } from "react-router-dom"

export default function Guide() {
    return (
      <div className="home">
        <h2>Welcome</h2>
        <p>Here is a Guide on how to use the app</p>
        <NavLink to="pets">Skip</NavLink>
      </div>
    )
  }
  