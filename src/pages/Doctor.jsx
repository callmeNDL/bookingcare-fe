import { ReactComponent as IconSearch } from '../assets/icons/search.svg';
import IconBooking from '~/assets/icons/booking.png'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import * as doctorServices from '~/apiServices/doctorServices';
import { Link } from 'react-router-dom';
import queryString from 'query-string'
const Doctor = () => {
  const [countPage, setCountPage] = useState(1);
  const [doctors, setDoctors] = useState([]);
  const [textSearch, setTextSearch] = useState("");

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };



  const fetchDoctor = async () => {
    const result = await doctorServices.fetchDoctorWithPage(page);
    setDoctors(result);
    let total = Math.floor(result.totalRow / 8);
    if (result.totalRow % 8 > 0) {
      total++;
    }
    setCountPage(total)
  }

  const handleSearch = async (e) => {
    setTextSearch(e.target.value)
  }

  const handleActionSearch = async () => {
    const paramsString = queryString.stringify(textSearch)
    // const res = await doctorServices.searchDoctor(paramsString);
    console.log(paramsString);
  }

  useEffect(() => {
    fetchDoctor()
  }, [page])

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
                <input className='' type="text" placeholder='Tìm bác sĩ' onChange={(e) => handleSearch(e)} />
              </div>
              <button className='doctor-search__box__button' onClick={handleActionSearch}>Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray2'>
        <div className='container'>
          <div className='doctors'>
            {
              doctors.data?.map((item) => {
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
          <div className='pagination'>
            <Stack spacing={2}>
              <Pagination count={countPage} page={page} onChange={handleChange} size="large" />
            </Stack>
          </div>
        </div>
      </div>
    </>
  )
}
export default Doctor;