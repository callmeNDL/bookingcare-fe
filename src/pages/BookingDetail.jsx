import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { cancelBooking } from '~/apiServices/bookingServices';
import { toast } from 'react-toastify';
import * as doctorServices from '~/apiServices/doctorServices';

const BookingDetail = () => {
  const [dataBooking, setDataBooking] = useState({});
  const [schedule, setSchedule] = useState({});

  const { maDL } = useParams();

  const navigate = useNavigate();

  const bookings = useSelector((state) => state.history.history)
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleCancelBooking = async () => {
    // console.log(dataBooking);
    const res = await cancelBooking({ MaDL: dataBooking.MaDL });
    if (res.errCode === 0) {
      navigate('/historyBooking');
    }
    else {
      toast.error(res.errMessage)
    }
  }

  const handleGetBooking = () => {
    const booking = bookings.find((item) => item.MaDL === maDL)
    if (!booking) {
      navigate('/404')
    }
    setDataBooking(booking)
  }

  const handleGetSchedule = async () => {
    const schedules = await doctorServices.fetchScheduleDoctor(bookings[0].MaBS, bookings[0].NgayDL)
    const schedule = schedules.find((item) => item.CaKham == bookings[0].CaKham)
    setSchedule(schedule)
  }


  useEffect(() => {
    handleGetBooking()
    handleGetSchedule()
  }, [])

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

            <div className='cancel-box'>
              <div className='cancel-box__title'> Huỷ đăng ký đặt lịch</div>
              <Button variant="contained" size="large" color="error" onClick={handleClickOpen}>
                Huỷ lịch hẹn
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

              >
                <DialogTitle id="alert-dialog-title" sx={{ fontSize: '20px' }}>
                  {"Bạn có đồng ý huỷ lịch hẹn?"}

                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description" sx={{ fontSize: '16px' }}>
                    Lịch hẹn của bạn sẽ bị huỷ khi thực hiện hành động này!
                  </DialogContentText>
                </DialogContent>
                <DialogActions >
                  <Button onClick={handleCancelBooking} sx={{ fontSize: '14px' }}>Đồng ý</Button>
                  <Button onClick={handleClose} sx={{ fontSize: '14px' }} autoFocus>
                    Không đồng ý
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
          <div className='booking-info'>
            <div className='booking-info__wrap'>
              <div className="row mb-3">
                <div className='title col-4'>Người tới khám</div>
                <div className='user-name col-8'>{dataBooking.User?.HoTen}</div>
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
                <div className='user-name col-8'>{dataBooking.Doctor?.HoTen}</div>
              </div>
              <div className="row  mb-3">
                <div className='title col-4'>Dịch vụ</div>
                <div className='text col-8'>Tư vấ khám bệnh bởi bác sĩ {dataBooking.Doctor?.HoTen}</div>
              </div>
              <div className="row  mb-3">
                <div className='title col-4'>Thời gian khám</div>
                <div className='text text--time col-8'>{dataBooking.CaKham === "Ca1" ? "08:00 - 11:00" : "13:00 - 16:00"}<span className='date'>{dataBooking?.NgayDL}</span></div>
              </div>
              <div className="row  mb-3">
                <div className='title col-4'>Thời gian yêu cầu</div>
                <div className='text text--time col-8'>{dataBooking.ThoiGian?.slice(0, 5)}</div>
              </div>
            </div>
            <div className='booking-info__wrap'>
              <div className="row mb-3">
                <div className='title col-4'>Cở sở y tế</div>
                <div className='user-name col-8'>Phòng khám Đa Khoa Y khoa STU</div>
              </div>
              <div className="row mb-3">
                <div className='title col-4'>Khám tại phòng</div>
                <div className='user-name col-8'>{schedule?.MaPhong}</div>
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