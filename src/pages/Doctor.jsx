import { ReactComponent as IconSearch } from '../assets/icons/search.svg';
import IconBooking from '~/assets/icons/booking.png'
import { Pagination } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import * as doctorServices from '~/apiServices/doctorServices';
import { Link } from 'react-router-dom';
const Doctor = (props) => {
  const [allDoctor, setAllDoctor] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await doctorServices.fetchDoctor("ALL");
      setAllDoctor(result);
    }
    fetchApi();

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
                <input className='' type="text" placeholder='Tìm bác sĩ' />
              </div>
              <button className='doctor-search__box__button'>Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray2'>
        <div className='container'>
          <div className='doctors'>
            {
              allDoctor.map((item) => {
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
        </div>
      </div>
      <div className='pagination-wrap bg-gray2'>
        <div className='container'>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </>
  )
}
export default Doctor;