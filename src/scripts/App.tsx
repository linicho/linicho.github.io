import "@cloudscape-design/global-styles/index.css"
import '../css/App.css'

import HeaderBar from './Header'
import { Header } from '@cloudscape-design/components';
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
