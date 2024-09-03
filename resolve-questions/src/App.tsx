import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Fibonacci from "./pages/Fibonacci";
import LetterAFrenquency from "./pages/LetterAFrenquency";
import Sum from "./pages/Sum";

import "./App.css";
import DiscorverLogic from "./pages/DiscorverLogic";
import SwitchQuestion from "./pages/SwitchQuestion";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/1" element={<Fibonacci />} />
          <Route path="/2" element={<LetterAFrenquency />} />
          <Route path="/3" element={<Sum />} />
          <Route path="/4" element={<DiscorverLogic />} />
          <Route path="/5" element={<SwitchQuestion />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
