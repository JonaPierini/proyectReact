import { Routes, Route} from "react-router-dom";
import {  Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Dashboard } from "./components/Dashboard";
import { NoMatch } from "./components/NoMatch";


export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
          <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}


