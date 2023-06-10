import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/home.component";
import Header from "./components/header/header.component";
import PortfolioViewPage from "./pages/portfolio-view/portolio-view.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<PortfolioViewPage />} />
      </Routes>
      {/* <footer>footer</footer> */}
    </div>
  );
}

export default App;
