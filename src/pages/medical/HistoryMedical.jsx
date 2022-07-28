import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as bookingServices from '~/apiServices/bookingServices';
import { useNavigate } from "react-router-dom";
import { times } from '~/source';


function HistoryMedical() {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [listBooking, setListBooking] = useState([]);
  const [isAcitve, setIsActive] = useState(true);

  let navigate = useNavigate();
  const dispatch = useDispatch();


  function formatDate(input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0].substring(), // get only two digits
      month = datePart[1], day = datePart[2];
    return day + '/' + month + '/' + year;
  }

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();

    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }


  const handleGetHistory = async () => {
    const history = await bookingServices.fetchHistoryBooking(user.MaUser, dispatch)
    setListBooking(history.bookings);
  }


  useEffect(() => {
    setIsActive(false)
    handleGetHistory();
  }, [])

  console.log(listBooking);

  return (
    <div className='container'>
      <div className='histories'>
        <div className='profile-wrap '>
          <img src={user?.HinhAnh} alt="img avatar" />
          <div className='profile-user'>
            <div className='profile-user__name'>{user?.HoTen}</div>
            <div className='profile-user__age'>{formatDate(user?.NgaySinh)} - {getAge(user?.NgaySinh)}tuổi</div>
          </div>
        </div>
        {/* <div className={isAcitve ? "histories__info--disable" : "histories__info"}>
          <img src="https://ivie.vn/_next/static/not-ehealth.svg" alt="empty" />
          <p>Bạn chưa có hồ sơ sức khỏe từ PHÒNG KHÁM ĐA KHOA Y KHOA STU, <br />phòng khám đối tác của ISOFHCARE.</p>
        </div> */}

        <div className='list-medical'>
          {listBooking.map((item) => {
            if (item.MedicalExamination) {
              return (
                <div className='item'>
                  <div className='time-box'>
                    <div className='date'>{item.MedicalExamination?.NgayKham.substring(8, 10)}</div>
                    <div className='month-year'>{item.MedicalExamination?.NgayKham.substring(0, 7)}</div>
                    {times.map((time) => {
                      if (time.key === item.MedicalExamination?.CaKham) {
                        return <div className='time' key={time.key}>{time.value}</div>
                      }
                    })}

                  </div>
                  <div className='info'>
                    <div className='info__medical'>
                      <div className="name">{item.MedicalExamination?.TenPK}</div>
                      <div className='line'></div>
                      <div className='code'>Mã phiếu khám: <p>{item.MedicalExamination?.MaPK}</p></div>
                      <div className='code'>Phòng khám: <p>{item.MedicalExamination?.MaPhong}</p></div>
                      <div className='time-select'>Khung giờ dự kiến: <p>{item.MedicalExamination?.ThoiGianKham === '00:00:00' ? "Không đặt trước" : item.MedicalExamination?.ThoiGianKham.substring(0, 5)}</p></div>
                    </div>
                    <div className='info__user'>
                      <div className="name">{item.User?.HoTen}</div>
                      <div className='code'>{`Mã bệnh nhân: ${item.User?.MaUser}`}</div>
                    </div>
                    <div className='info__decs'>{item.MedicalExamination.KetQua.length !== 0 ? "Đã hoàn thành khám bệnh" : "Chưa hoàn thành khám bệnh"}</div>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default HistoryMedical