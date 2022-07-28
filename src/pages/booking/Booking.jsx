import { useEffect, useState, } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as doctorServices from '~/apiServices/doctorServices';
import * as bookingServices from '~/apiServices/bookingServices';
import { useNavigate } from "react-router-dom";
import LoopIcon from '@mui/icons-material/Loop';
import ClipLoader from "react-spinners/ClipLoader";


const Booking = () => {
  const [booking, setBooking] = useState({});
  const [doctor, setDoctor] = useState({});
  const [decs, setDecs] = useState("");
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("talet");

  let navigate = useNavigate();

  const data = useSelector((state) => state.booking)
  const user = useSelector((state) => state.auth.login.currentUser)

  const fetchApi = async (id) => {
    const result = await doctorServices.fetchDoctor(id);
    setDoctor(result);
  }

  useEffect(() => {
    setBooking(data);
    fetchApi(data.doctor)
  }, [data]);

  const handleBooking = async () => {
    if (decs.length <= 0) {
      return toast.error("Nhập triệu chứng bệnh của bạn")
    } else {
      setLoading(true)
      var uid = Number((new Date().getTime()).toString().slice(-6));
      let caKham = "";
      if (booking.CaKham === "08:00 - 11:00") {
        caKham = "Ca1"
      } else {
        caKham = "Ca2"
      }
      const dataCreateBooking = {
        datasenMail: {
          email: user.email,
          dataSend: {
            patientName: user.HoTen,
            time: `${booking.CaKham}- Ngày -${booking.date}`,
            doctorName: doctor.HoTen,
            redirectLink: ""
          }
        },
        dataBooking: {
          "MaDL": uid,
          "MaUser": user.MaUser,
          "MaBS": doctor.MaBS,
          "ThoiGian": booking.timeSelect,
          "NgayDL": booking.date,
          "TinhTrangBN": decs,
          "CaKham": caKham,
          "TrangThai": "new"
        }
      }
      const res = await bookingServices.handleBooking(dataCreateBooking);
      if (res.errCode === 0) {
        toast.success("Đặt lịch thành công");
        toast.success("Kiểm tra mail của bạn để xác nhận đặt lịch");
        setLoading(false)
        navigate('/historyBooking')
      }
      else {
        setLoading(false)
        toast.error(res.errMessage);
      }
    }
  }

  return (
    <>
      <div className="container">

        <div className="booking">
          <div className="booking__title">Thông tin đặt khám</div>
          <div className='booking__user'>
            <img className='img-fluid img-user' src={user ? user?.HinhAnh : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt='avatar'></img>
            <div>
              <div className='booking__user__title'>Người tới khám</div>
              <h4 className='booking__user__username'>{user ? user.HoTen : ""}</h4>
              <div className={user ? 'booking__user__info--success' : 'booking__user__info--warning'}>{user ? "Đã đầy đủ thông tin" : "Hãy đăng nhập để thực hiện đặt lịch"}</div>
            </div>
          </div>
          <div className='booking__info'>
            <div className='booking__info__time'>
              <span className='title'>Giờ hẹn: </span>
              <div className='date-time'>
                <div className='time'>{booking.CaKham}</div>
                <div className='date'>{booking.date}</div>
              </div>
              <div className='time-select title'>Thời gian mong muốn:<span className='time-select__value'>{booking?.timeSelect}</span></div>
            </div>
            <div className='booking__info__doctor'>
              <img className='img-fluid img-user' src={doctor.HinhAnh ? `${doctor.HinhAnh}` : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt='avatar'></img>
              <div>
                <div className='doctor__title'>Khám theo yêu cầu</div>
                <h4 className='doctor__username'>{doctor.HoTen}</h4>
                <div className='doctor__info'>{doctor.ChuyenNganh}</div>
              </div>
            </div>
          </div>
          <div className='booking__decs'>
            <div className="booking__decs__title">Triệu chứng *</div>
            <textarea name="booking-decs" placeholder="Mô tả triệu chứng... " value={decs} onChange={(e) => setDecs(e.target.value)} />
          </div>
          <div className='booking__button'>
            {loading ? <ClipLoader className='btn-booking' color={color} loading={loading} size={50} /> : <button className='btn-booking' onClick={handleBooking}>{loading && <LoopIcon className='icon' />} ĐẶT KHÁM</button>}
            {/* <button className="btn-booking btn-booking--fail" onClick={handleBooking}>HUỶ</button> */}
          </div>
        </div>
      </div>

    </>
  )
}
export default Booking;