import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyScreen from "./Screen/BuyScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuyScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
