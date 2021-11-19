import { Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "@pages/Feed/Feed";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
