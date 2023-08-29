import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/home.component";
import Header from "./components/header/header.component";
import PortfolioViewPage from "./pages/portfolio-view/portolio-view.component";
import AssetDetailPage from "./pages/asset-detail/asset-detail.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio/:id" element={<PortfolioViewPage />} />
        <Route
          path="/asset/:assetId/:portfolioId"
          element={<AssetDetailPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
