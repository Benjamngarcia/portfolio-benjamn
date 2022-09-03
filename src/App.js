import { Routes, Route } from 'react-router-dom'
import { About } from './components/About';
import { Blog } from './components/Blog';
import { Home } from "./components/Home";
import { Portfolio } from './components/Portfolio';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </div>

  );
}

export default App;
