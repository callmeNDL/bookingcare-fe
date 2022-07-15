import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useParams } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css'
import * as doctorServices from '~/apiServices/doctorServices';
import IconBooking from '~/assets/icons/booking.png'
import * as source from '~/source'
import { useDispatch } from 'react-redux';
import { addBooking } from '~/redux/bookingSlide';
import { useNavigate } from "react-router-dom";

const DoctorDetail = () => {
  const [date, setDate] = useState(new Date());
  const { doctorID } = useParams();
  const [dataDoctor, setDataDoctor] = useState([]);
  const [dataSchedule, setDataSchedule] = useState([]);
  const [booking, setBooking] = useState(false);
  const [login, setLogin] = useState(false);
  const [bookingTime, setBookingTime] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleActive = (time) => {
    setBooking(true)
    setBookingTime(time);
  }

  const handleBooking = () => {
    const bookingData = {
      doctor: dataDoctor.id,
      date: date.toISOString().substring(0, 10),
      time: bookingTime,
    }
    dispatch(addBooking(bookingData))
    navigate('/booking')
  }

  useEffect(() => {
    const fetchApi = async () => {
      const result = await doctorServices.fetchDoctor(doctorID);
      if (result) {
        setDataDoctor(result);
        const schedule = await doctorServices.fetchScheduleDoctor(result.MaBS);
        console.log(schedule);
        setDataSchedule(schedule)
      } else {
        navigate(`/404`);
      }
    }
    fetchApi();
  }, [])



  return (
    <div className="doctor-detail-wrap bg-gray2">
      <div className="container">
        <div className="doctor-detail">
          <div className="doctor-detail__info">
            <img src={dataDoctor.HinhAnh} className="img-fluid doctor-detail__info__img" alt={'avatar '.concat(dataDoctor.HoTen)} />
            <ul className="doctor__info">
              <li href='#' className='doctor__info__name' >{dataDoctor.HoTen}</li>
              <li className='doctor__info__hospital'>Bệnh viện Hữu Nghị Việt Đức</li>
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
                {booking ? <button className="doctor__button calendar-work__btn link" onClick={handleBooking}>
                  <img className='booking-img' src={IconBooking} alt='icon-booking' />
                  <span className='booking-text'>{`Đặt khám ${bookingTime}`}</span>
                </button>
                  : ""}


              </div>
            </div>
            <Calendar onChange={setDate} value={date} />
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
      </div>
    </div>
  )
}

export default DoctorDetail;