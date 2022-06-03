import { useState } from 'react';
import Calendar from 'react-calendar';

const DoctorDetail = () => {
  const [date, setDate] = useState(new Date());

  const doctor = {
    MaBS: 'BS01',
    MaKhoa: 'RHM',
    HoTen: 'PGS.TS.  Phạm Thị Bích Đào',
    CMND: '123456789',
    NgaySinh: '25/07/2000',
    DiaChi: 'QuyNhon',
    GioiTinh: 0,
    SDT: '0328290432',
    ChuyenNganh: 'Chuyên khoa Tai Mũi Họng',
    HinhAnh: 'https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/test_b6fdadb7_445d_4a6a_ac5c_0ad3c31cdd67.png',
    Email: 'phambichthao@gmail.com',
  }

  return (
    <div className="doctor-detail-wrap bg-gray2">
      <div className="container">
        <div className="doctor-detail">
          <div className="doctor-detail__info">
            <img src={doctor.HinhAnh} className="img-fluid doctor-detail__info__img" alt={'avatar '.concat(doctor.HoTen)} />
            <div className="doctor__info">
              <h1 href='#' className='doctor__info__name' >{doctor.HoTen}</h1>
              <div className='doctor__info__hospital'>Bệnh viện Hữu Nghị Việt Đức</div>
              <div className='doctor__info__specializations'>{doctor.ChuyenNganh}</div>
            </div>
          </div>
          <div className="doctor-detail__calendar">
            <div className='calendar-work'>
              <h3 className='calendar-work__title'>Lịch khám</h3>
              <ul className='calendar-work__list'>
                <li className='btn-select-date-time'>8:30</li>
                <li className='btn-select-date-time'>9:30</li>
                <li className='btn-select-date-time'>10:30</li>
                <li className='btn-select-date-time'>1:30</li>
                <li className='btn-select-date-time'>2:30</li>
              </ul>
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