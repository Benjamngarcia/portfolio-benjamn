import { Routes, Route } from 'react-router-dom'
import { About } from './components/Portfolio/About';
import { Home } from "./components/Portfolio/Home";
import { Portfolio } from './components/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Portfolio/>}/>
      </Routes>
    </div>

  );
}

export default App;
