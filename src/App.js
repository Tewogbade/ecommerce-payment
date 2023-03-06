import "./App.css";
import Pay from "./Pay";
// import Success from "./Success";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pay" element={<Pay />} />
          {/* <Route path="/success" element={<Success />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
