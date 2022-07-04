import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/Layout";

import Home from "./pages/Home";
import Hospital from "./pages/Hospital";
import Search from "./pages/Search";
import Doctor from "./pages/Doctor";
import DoctorDetail from "./pages/DoctorDetail";

function App() {

  return (
    <AppLayout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/doctor" element={<Doctor />} />
        <Route exact path="/doctor-detail" element={<DoctorDetail />} />
        <Route exact path="/hospital" element={<Hospital />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
