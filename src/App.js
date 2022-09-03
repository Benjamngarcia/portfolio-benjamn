import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";


// const routesDir = () => {
//   let routes = useRoutes([
//     { path: "/", element: <Component1 /> },
//     { path: "component2", element: <Component2 /> },
//     // ...
//   ]);
//   return routes;
// };

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
