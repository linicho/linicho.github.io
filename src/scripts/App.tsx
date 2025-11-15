import "@cloudscape-design/global-styles/index.css"
import '../css/App.css'

import HeaderBar from './Header'
import HomePage from "./HomePage";

// Website: https://linicho.github.io/

function App() {
  return (
    <div className="app">
      <HeaderBar />
      <HomePage />
    </div>
  );
}

export default App
