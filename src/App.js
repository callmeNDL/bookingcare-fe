import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/Layout";
import * as doctorServices from '~/apiServices/doctorServices';

import Home from "./pages/Home";
import Hospital from "./pages/Hospital";
import Search from "./pages/Search";
import Doctor from "./pages/Doctor";
import DoctorDetail from "./pages/DoctorDetail";
import PageNotFound from "./pages/PageNotFound";
import Booking from "./pages/booking/Booking";
import Profile from "./pages/profile/Profile";
import UserDetail from "./pages/user/UserDetail";
import HisotoryBooking from "./pages/HisotoryBooking";
import BookingDetail from "./pages/BookingDetail";
import VerifyBooking from "./pages/VerifyBooking";
import HistoryMedical from "./pages/medical/HistoryMedical";
import HandBook from "./pages/handBook/HandBook";
import Department from "./pages/department/Department";
import DepartmentDetail from "./pages/department/DepartmentDetail";
import ChangePassword from "./components/ChangePassword";

function App() {

  return (
    <AppLayout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="doctor">
          <Route index element={<Doctor />} />
          <Route path=":doctorID" element={<DoctorDetail />} />
        </Route>
        <Route path="cam-nang">
          <Route index element={<HandBook />} />
        </Route>
        <Route path="department">
          <Route index element={<Department />} />
          <Route path=":departmentID" element={<DepartmentDetail />} />
        </Route>
        <Route path="thong-tin-ca-nhan">
          <Route index element={<Profile />} />
          <Route path=":userID" element={<UserDetail />} />
        </Route>
        <Route path="historyBooking">
          <Route index element={<HisotoryBooking />} />
          <Route path=":maDL" element={<BookingDetail />} />
        </Route>
        <Route exact path="/hospital" element={<Hospital />} />
        <Route exact path="/change-password" element={<ChangePassword />} />

        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/ho-so-suc-khoe" element={<HistoryMedical />} />
        <Route exact path="/404" element={<PageNotFound />} />
        <Route exact path="/verify-booking/:token&:MaDL" element={<VerifyBooking />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
