import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import "@cloudscape-design/global-styles/index.css"
import '../css/App.css'

import ThemeToggle from './ThemeToggle'

// Website: https://linicho.github.io/

function App() {
  return (
    <div className="app">
      <header>
        <h1>My Website</h1>
        <ThemeToggle />
      </header>
      {/* Rest of your app */}
    </div>
  );
}

export default App
