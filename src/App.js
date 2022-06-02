import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/Layout";

import Home from "./pages/Home";
import New from "./pages/New";
import Search from "./pages/Search";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new" element={<New />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
