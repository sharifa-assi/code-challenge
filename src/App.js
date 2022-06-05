import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
