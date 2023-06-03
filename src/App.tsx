import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<div>New</div>} />
      </Routes>
      {/* <footer>footer</footer> */}
    </div>
  );
}

export default App;
