import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import React from 'react'
export default function RootLayout() {
  const [context, setContext] = React.useState(0);
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>
        <nav>
          <h1>Pets Finder</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="pets">Pets</NavLink>
        </nav>
      </header>
      <main>
        {/* Outlet missing props? */}
        <Outlet context={[context, setContext]} />
      </main>
    </div>
  )
}
