import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Info from './pages/Info';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/info" element={<Info />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
