import { ReactComponent as IconSearch } from '../assets/icons/search.svg';
import IconBooking from '~/assets/icons/booking.png'
import { useEffect, useState, startTransition } from 'react';
import * as doctorServices from '~/apiServices/doctorServices';
import { Link } from 'react-router-dom';
const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorSearch, setDoctorSearch] = useState([]);

  const [textSearch, setTextSearch] = useState('');
  const [filterText, setFilterText] = useState('');

  const [visible, setVisible] = useState(8);

  const fetchDoctor = async () => {
    const result = await doctorServices.fetchDoctor("ALL");
    setDoctors(result);
  }

  const handleSearch = async (e) => {
    setTextSearch(e.target.value)
    startTransition(() => {
      setFilterText(e.target.value);
      const result = doctors.filter((item) => item.HoTen.includes(filterText));
      setDoctorSearch(result)
    })
  }

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 8);
  }

  useEffect(() => {
    fetchDoctor()
  }, [])

  return (
    <>
      <div className="banner-doctor bg-azure">
        <div className="container">
          <div className="doctor-search">
            <div className="doctor-search__title">
              <h1>Đặt khám trước qua ISOFHCARE</h1>
              <p>Để được tiếp đón ưu tiên viện hoặc được tư vấn với bác sĩ giỏi ngay tại nhà</p>
            </div>
            <div className="doctor-search__box">
              <div className='doctor-search__box__input'>
                <IconSearch />
                <input
                  className=''
                  type="text"
                  placeholder='Nhập tên bác sĩ'
                  value={textSearch}
                  onChange={(e) => handleSearch(e)}

                />
              </div>
              <button className='doctor-search__box__button' >Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray2'>
        <div className='container'>
          <div className='doctors'>
            {
              doctorSearch.length !== 0 && filterText !== ''
                ? doctorSearch?.slice(0, visible).map((item) => {
                  return <div className='doctor' key={item.MaBS}>
                    <img className='doctor__img img-fluid' src={item.HinhAnh} alt={item.HoTen} />
                    <div className='doctor__info'>
                      <div className='doctor__info__name' >{item.HoTen}</div>
                      <div className='doctor__info__hospital'>Phòng khám Đa Khoa Y khoa STU</div>
                      <div className='doctor__info__specializations'>{item.ChuyenNganh}</div>
                    </div>
                    <Link to={`${item.id}`} className=" doctor__button link">
                      <img className='booking-img' src={IconBooking} alt='icon-booking' />
                      <span className='booking-text'>Đặt khám</span>
                    </Link>
                  </div>
                })
                : doctors?.slice(0, visible).map((item) => {
                  return <div className='doctor' key={item.MaBS}>
                    <img className='doctor__img img-fluid' src={item.HinhAnh} alt={item.HoTen} />
                    <div className='doctor__info'>
                      <div className='doctor__info__name' >{item.HoTen}</div>
                      <div className='doctor__info__hospital'>Phòng khám Đa Khoa Y khoa STU</div>
                      <div className='doctor__info__specializations'>{item.ChuyenNganh}</div>
                    </div>
                    <Link to={`${item.id}`} className=" doctor__button link">
                      <img className='booking-img' src={IconBooking} alt='icon-booking' />
                      <span className='booking-text'>Đặt khám</span>
                    </Link>
                  </div>
                })
            }
          </div>
          <div className='show-more'>
            {
              doctors.length >= visible && <button className='doctor__button show-more__button' onClick={showMoreItems}>Show more</button>
            }

          </div>
        </div>
      </div>

    </>
  )
}
export default Doctor;