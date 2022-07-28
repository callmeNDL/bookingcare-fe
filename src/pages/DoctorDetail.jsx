import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css'
import * as doctorServices from '~/apiServices/doctorServices';
import IconBooking from '~/assets/icons/booking.png'
import * as source from '~/source'
import { useDispatch } from 'react-redux';
import { addBooking } from '~/redux/bookingSlide';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const DoctorDetail = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const { doctorID } = useParams();
  const [dataDoctor, setDataDoctor] = useState([]);
  const [dataSchedule, setDataSchedule] = useState([]);
  const [booking, setBooking] = useState(false);
  const [bookingTime, setBookingTime] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [timeSelect, setTimeSelect] = useState('0');

  const handleChange = (event) => {
    setTimeSelect(event.target.value);
  };

  const handleActive = (time) => {
    setBooking(true)
    setBookingTime(time);

  }
  const handleAccess = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleBooking = () => {
    let timeCurrent = new Date();
    if (date.toISOString().substring(0, 10) < timeCurrent.toISOString().substring(0, 10)) {
      setOpen(false);
      return toast.error("Chỉ được đặt lịch trước thời gian hiện tại")
    } else if (date.toISOString().substring(0, 10) <= timeCurrent.toISOString().substring(0, 10)) {
      if (bookingTime) {
        if (bookingTime.substring(8, 13) <= timeCurrent.toLocaleTimeString()) {
          setOpen(false);
          return toast.error("Chỉ được đặt lịch trước thời gian hiện tại", { autoClose: 1000, });
        } else if (bookingTime.substring(0, 5) <= timeCurrent.toLocaleTimeString() && timeCurrent.toLocaleTimeString() <= bookingTime.substring(8, 13)) {
          return toast.error(`Đặt trước ${bookingTime}`, { autoClose: 1000, });

        } else {
          if (timeSelect !== '0') {
            console.log(timeSelect.substring(0, 2));
            console.log(date.getHours());
            if (timeSelect.substring(0, 2) > date.getHours()) {
              toast.success("Thời gian hợp lệ")
              const bookingData = {
                doctor: dataDoctor.id,
                date: date.toISOString().substring(0, 10),
                CaKham: bookingTime,
                timeSelect: timeSelect
              }
              dispatch(addBooking(bookingData))
              navigate('/booking')
            }
            else {
              setOpen(false);
              toast.error("Thời gian không hợp lệ")
            }
          } else {
            const bookingData = {
              doctor: dataDoctor.id,
              date: date.toISOString().substring(0, 10),
              CaKham: bookingTime,
              timeSelect: timeSelect
            }
            dispatch(addBooking(bookingData))
            navigate('/booking')
          }
        }
      }
    } else {
      const bookingData = {
        doctor: dataDoctor.id,
        date: date.toISOString().substring(0, 10),
        CaKham: bookingTime,
        timeSelect: timeSelect
      }
      dispatch(addBooking(bookingData))
      navigate('/booking')
    }

  }


  useEffect(() => {
    setBooking(false)
    setBookingTime("")
    setTimeSelect('0')
    const fetchApi = async () => {
      const result = await doctorServices.fetchDoctor(doctorID);
      if (result) {
        setDataDoctor(result);
        let dateWork = date.toISOString().substring(0, 10);
        const schedule = await doctorServices.fetchScheduleDoctor(result.MaBS, dateWork);
        setDataSchedule(schedule)
      } else {
        navigate(`/404`);
      }
    }
    fetchApi();
  }, [date])

  useEffect(() => {
    setOpen(false);
    setTimeSelect('0')
  }, [bookingTime])

  return (
    <div className="doctor-detail-wrap bg-gray2">
      <div className="container">
        <div className="doctor-detail">
          <div className="doctor-detail__info">
            <img src={dataDoctor.HinhAnh} className="img-fluid doctor-detail__info__img" alt={'avatar '.concat(dataDoctor.HoTen)} />
            <ul className="doctor__info">
              <li href='#' className='doctor__info__name' >{dataDoctor.HoTen}</li>
              <li className='doctor__info__hospital'>Phòng khám Đa Khoa Y khoa STU</li>
              <li className='doctor__info__item doctor__info__specializations'>
                <span className='title'>Chuyên Ngành:</span>{dataDoctor.ChuyenNganh}
              </li>
              <li className='doctor__info__item'><span className='title'>Email:</span>{dataDoctor.email}</li>
              <li className='doctor__info__item'><span className='title'>Số điện thoại:</span>0{dataDoctor.SDT}</li>
            </ul>
          </div>
          <div className="doctor-detail__calendar">
            <div className='calendar-work'>
              <h3 className='calendar-work__title'>Lịch khám</h3>
              <ul className='calendar-work__list'>
                {dataSchedule.map((item) => {
                  return source.times.map((time) => {
                    if (item.CaKham === time.key) {
                      return <li
                        onClick={() => { handleActive(time.value) }}
                        className={time.value === bookingTime ? 'btn-select-date-time--active' : 'btn-select-date-time'}
                        key={time.key}>{time.value}
                      </li>
                    }
                  })
                })}
              </ul>
              <div>
                {booking ? <button className="doctor__button calendar-work__btn link" onClick={handleAccess}>
                  <img className='booking-img' src={IconBooking} alt='icon-booking' />
                  <span className='booking-text'>{`Đặt khám ${bookingTime}`}</span>
                </button>
                  : ""}
              </div>
            </div>
            <div className='date'>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Thời gian làm việc"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              {bookingTime && <div className='select-time'>
                <Box sx={{ maxWidth: 200, marginTop: '10px', fontSize: '14px' }} >
                  <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label"><div className='title-select'>Chọn giờ yêu cầu</div></InputLabel>
                    <Select
                      sx={{ fontSize: '14px' }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={timeSelect}
                      label="Chọn khung giờ yêu cầu"
                      onChange={handleChange}
                    >
                      {bookingTime === '08:00 - 11:00' && <MenuItem className='item' value='08:00'>08:00</MenuItem>}
                      {bookingTime === '08:00 - 11:00' && <MenuItem className='item' value='09:00'>09:00</MenuItem>}
                      {bookingTime === '08:00 - 11:00' && <MenuItem className='item' value='10:00'>10:00</MenuItem>}
                      {bookingTime === '08:00 - 11:00' && <MenuItem className='item' value='11:00'>11:00</MenuItem>}
                      {bookingTime === '13:00 - 16:00' && <MenuItem className='item' value='13:00'>13:00</MenuItem>}
                      {bookingTime === '13:00 - 16:00' && <MenuItem className='item' value='14:00'>14:00</MenuItem>}
                      {bookingTime === '13:00 - 16:00' && <MenuItem className='item' value='15:00'>15:00</MenuItem>}
                      {bookingTime === '13:00 - 16:00' && <MenuItem className='item' value='16:00'>16:00</MenuItem>}
                    </Select>
                  </FormControl>
                </Box>
              </div>}


            </div>

          </div>
          <div className="doctor-detail__exp">
            <h4 className='doctor-detail__exp__title'>Kinh nghiệm khám chữa bệnh</h4>
            <ul className='list_exp'>
              <li className='list_exp__item__title'>BS.PGS.TS</li>
              <li className='list_exp__item'>Bác sĩ nội trú</li>
              <li className='list_exp__item'>25 năm trong chuyên ngành Tai Mũi Họng</li>
              <li className='list_exp__item'>Chữa các bệnh vùng Tai- Mũi - Hong:</li>
              <li className='list_exp__item'>Các rối loạn giọng sau phẫu thuật</li>
            </ul>
          </div>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{ fontSize: '20px' }}>
            {"Xác nhận chọn lịch khám?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" sx={{ fontSize: '16px' }}>
              {console.log(timeSelect)}
              {timeSelect !== '0' ? "Bạn đồng ý với việc bạn sẽ đi khám đúng giờ đã chọn!" : "Bạn không chọn giờ yêu đồng nghĩ với việc bạn sẽ đi khám trước ca khám 30ph!"}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleBooking} sx={{ fontSize: '14px' }}>Đồng ý</Button>
            <Button onClick={handleClose} sx={{ fontSize: '14px' }} autoFocus>
              Không đồng ý
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div >
  )
}

export default DoctorDetail;