import { Outlet } from "react-router-dom"
import React from 'react'
export default function PetsLayout() {
  const [context, setContext] = React.useState(0);

  return (
    <div className="pets-layout">
      <h2>Pets</h2>
      <Outlet context={[context, setContext]} />
    </div>
  )
}
