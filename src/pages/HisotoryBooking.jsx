import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as bookingServices from '~/apiServices/bookingServices';
import { useNavigate } from "react-router-dom";

const HisotoryBooking = () => {
  const user = useSelector((state) => state.auth.login?.currentUser)
  const [listBooking, setListBooking] = useState([]);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGetHistory = async () => {
    const history = await bookingServices.fetchHistoryBooking(user.MaUser, dispatch)
    setListBooking(history.bookings);
  }

  useEffect(() => {
    handleGetHistory();
  }, [])

  console.log(listBooking);


  return (
    <div className='container'>
      <div className='history-booking'>
        <div className='history-booking__title'>
          <div className='title'>
            <HistoryToggleOffIcon className='icon' />
            LỊCH SỬ ĐẶT LỊCH
          </div>
        </div>
        <div className='history-booking__content'>
          <div className={listBooking.length === 0 ? 'history-none' : 'history-none history-none--disable'}>
            <img className='img-fluid' src='https://isofhcare.com/_next/static/img_none.png' alt='img-no-history' />
            <p>Bạn chưa có lịch hẹn nào với bác sĩ</p>
            <button className='btn-history doctor__button' >
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGeSURBVHgB3VXtUcMwDFV6DJANCBOQDTATUCZomKDdoNmgZQLYgHaCsEFhgmSDdAMj06dDVR3SpP/67nSK9WHJshQTXQuSPgPvfcpszuSYMqVqmLZMmyRJGhoLDrDy52GFZAYHyNUmH0xTpgyUY/2ubOqgo6Fgp6LPEUHrQYHYaMk0pwEIpWLaIVDVZ1zAcIf1FNkJLSBfGLlDIDnRQu87MXGW4K/gOR06SkguNzVyxx22Z/4C/Yw6TiEXXStZCdkatU9VeTLIA0rl00KWx06SgX9HctiHWUC2FDhmYx+x3aoqnAQR4RddhgY8iwWJQTLtGrRbOgOTSAbaUU41s/0fOooOv5qAT6W6p+MEj5xOLh5yPdWtalvB2tiLzlEMqjOckZdmYwlYGrsilihFNtMZV7pMqmXXHf6SSPFfkNyfolXzUdq5UL5vXaew3eXAN0x3dLjQEKCg7sTCYFawCZf9aG1uOnx/h42dG6ylhWX9xLrQeQ/YPIXuufcBM+Vq1Xemsq4jJa38kLfE//15JVBh9PLPqsAdjYUf88pdPX4AVkVhoJ7NOBsAAAAASUVORK5CYII=' alt='icon-booking' />
              Đặt khám
            </button>
          </div>
          {
            listBooking.map((item) => {
              return <div
                className='list-booking'
              >
                <div className='item' key={item.id} onClick={() => {
                  navigate(`/historyBooking/${item.MaDL}`)
                }}>
                  <div className='time'>
                    <div className='date'>{item.NgayDL.slice(-2)}</div>
                    <div className='month-year'>{item.NgayDL.slice(0, 7)} {item?.CaKham === "Ca1" ? "Sáng" : "Chiều"}</div>
                  </div>
                  <div className='info'>
                    <div className='user-name'>{item.User?.HoTen}</div>
                    <span className='info-doctor'>Được thăm khám bởi bác sĩ {item.Doctor?.HoTen}</span>
                    <div className='hospital-name'>Phòng khám Đa Khoa Y khoa STU</div>
                  </div>
                  <div className='status-box'>
                    <span className={`status status--${item.TrangThai}`}>{item.TrangThai}</span>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default HisotoryBooking