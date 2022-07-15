import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/Layout";

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

function App() {

  return (
    <AppLayout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="doctor">
          <Route index element={<Doctor />} />
          <Route path=":doctorID" element={<DoctorDetail />} />
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
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/404" element={<PageNotFound />} />
        {/* <Route path="verify-booking">
          <Route index element={<HisotoryBooking />} />
          <Route path=":maDL" element={<BookingDetail />} />
        </Route> */}
        <Route exact path="/verify-booking/:token&:MaDL" element={<VerifyBooking />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
