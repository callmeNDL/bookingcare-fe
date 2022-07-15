import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const BookingDetail = () => {
  const [dataBooking, setDataBooking] = useState({});
  const { maDL } = useParams();

  const navigate = useNavigate();

  const bookings = useSelector((state) => state.history.history)

  const handleGetBooking = () => {
    const booking = bookings.find((item) => item.MaDL === maDL)
    if (!booking) {
      navigate('/404')
    }
    setDataBooking(booking)
  }

  useEffect(() => {
    handleGetBooking()
  }, [maDL])

  console.log(dataBooking);

  return (
    <div className="container">
      <div className="booking-detail">
        <div className='history-booking__title'>
          <div className='title'>
            <HistoryToggleOffIcon className='icon' />
            LỊCH SỬ ĐẶT LỊCH
          </div>
        </div>
        <div className='booking-detail__content'>
          <div className='code-box'>
            <h2> Mã code đặt lịch khám</h2>
            <div className='code'>
              <div className='code__tile'>Mã đặt khám:</div>
              <div className='code__text'>{maDL}</div>
            </div>
          </div>
          <div className='booking-info'>
            <div className='booking-info__wrap'>
              <div className="row mb-3">
                <div className='title col-4'>Người tới khám</div>
                <div className='user-name col-8'>{dataBooking.userData?.HoTen}</div>
              </div>
              <div className="row  mb-3">
                <div className='title col-4'>Trạng thái</div>
                <div className={`text col-8 status status--${dataBooking?.TrangThai}`}>{dataBooking?.TrangThai}</div>
              </div>
              <div className="row  mb-3">
                <div className='title col-4'>Triệu chứng</div>
                <div className='text col-8'>{dataBooking?.TinhTrangBN}</div>
              </div>
            </div>
            <div className='booking-info__wrap'>
              <div className="row mb-3">
                <div className='title col-4'>Bác sĩ</div>
                <div className='user-name col-8'>{dataBooking.doctorData?.HoTen}</div>
              </div>
              <div className="row  mb-3">
                <div className='title col-4'>Dịch vụ</div>
                <div className='text col-8'>Tư vấ khám bệnh bởi bác sĩ {dataBooking.doctorData?.HoTen}</div>
              </div>
              <div className="row  mb-3">
                <div className='title col-4'>Thời gian khám</div>
                <div className='text text--time col-8'>{dataBooking.ThoiGian?.slice(0, 5)} {dataBooking?.NgayDL}</div>
              </div>
            </div>
            <div className='booking-info__wrap'>
              <div className="row mb-3">
                <div className='title col-4'>Cở sở y tế</div>
                <div className='user-name col-8'>PHÒNG KHÁM ĐA KHOA Y KHOA HÀ NỘI</div>
              </div>
              <div className="row  mb-3">
                <div className='title col-4'>Địa chỉ</div>
                <div className='text col-8'>180 Cao Lỗ, Phường 4, Quận 8, Tp. Hồ Chí Minh</div>
              </div>
              <div className="row  mb-3">
                <div className='title col-4'>Nơi làm thủ tục</div>
                <div className='text col-8'>180 Cao Lỗ, Phường 4, Quận 8, Tp. Hồ Chí Minh</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingDetail