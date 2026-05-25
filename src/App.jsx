import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WorkdayHCM from "./pages/WorkdayHCM";
import WorkdayFinance from "./pages/WorkdayFinance";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workday-hcm" element={<WorkdayHCM />} />
        <Route path="/workday-finance" element={<WorkdayFinance />} />
      </Routes>
    </Router>
  );
}

export default App;