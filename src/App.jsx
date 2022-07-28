import "./App.css";
import { Test } from "./pages/Test";
import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
import { Rank } from "./pages/Rank";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/rank" element={<Rank />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
