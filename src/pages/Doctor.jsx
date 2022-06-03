import { ReactComponent as IconSearch } from '../assets/icons/search.svg';
import IconBooking from '~/assets/icons/booking.png'
import { Pagination } from 'react-bootstrap';

const Doctor = () => {

  const doctors = [
    {
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
    },
    {
      MaBS: 'BS02',
      MaKhoa: 'RHM',
      HoTen: 'PGS.TS.  Nguyễn Quang',
      CMND: '123456789',
      NgaySinh: '25/07/2000',
      DiaChi: 'QuyNhon',
      GioiTinh: 0,
      SDT: '0328290432',
      ChuyenNganh: 'Chuyên khoa Tai Mũi Họng',
      HinhAnh: 'https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/bac-si-noi-tiet-le-phong-isofhcare-jpg_9362f80f_b921_470f_b164_5d118f523c7e.png',
      Email: 'phambichthao@gmail.com',
    },
    {
      MaBS: 'BS03',
      MaKhoa: 'RHM',
      HoTen: 'PGS.TS.  Nguyễn Quang',
      CMND: '123456789',
      NgaySinh: '25/07/2000',
      DiaChi: 'QuyNhon',
      GioiTinh: 0,
      SDT: '0328290432',
      ChuyenNganh: 'Chuyên khoa Tai Mũi Họng',
      HinhAnh: 'https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/test_b6fdadb7_445d_4a6a_ac5c_0ad3c31cdd67.png',
      Email: 'phambichthao@gmail.com',
    },
    {
      MaBS: 'BS04',
      MaKhoa: 'RHM',
      HoTen: 'PGS.TS.  Nguyễn Quang',
      CMND: '123456789',
      NgaySinh: '25/07/2000',
      DiaChi: 'QuyNhon',
      GioiTinh: 0,
      SDT: '0328290432',
      ChuyenNganh: 'Chuyên khoa Tai Mũi Họng',
      HinhAnh: 'https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/test_b6fdadb7_445d_4a6a_ac5c_0ad3c31cdd67.png',
      Email: 'phambichthao@gmail.com',
    },
    {
      MaBS: 'BS05',
      MaKhoa: 'RHM',
      HoTen: 'PGS.TS.  Nguyễn Quang',
      CMND: '123456789',
      NgaySinh: '25/07/2000',
      DiaChi: 'QuyNhon',
      GioiTinh: 0,
      SDT: '0328290432',
      ChuyenNganh: 'Chuyên khoa Tai Mũi Họng',
      HinhAnh: 'https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/test_b6fdadb7_445d_4a6a_ac5c_0ad3c31cdd67.png',
      Email: 'phambichthao@gmail.com',
    },
    {
      MaBS: 'BS06',
      MaKhoa: 'RHM',
      HoTen: 'PGS.TS.  Nguyễn Quang',
      CMND: '123456789',
      NgaySinh: '25/07/2000',
      DiaChi: 'QuyNhon',
      GioiTinh: 0,
      SDT: '0328290432',
      ChuyenNganh: 'Chuyên khoa Tai Mũi Họng',
      HinhAnh: 'https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/test_b6fdadb7_445d_4a6a_ac5c_0ad3c31cdd67.png',
      Email: 'phambichthao@gmail.com',
    },
  ]

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
              doctors.map((item) => {
                return <div className='doctor' key={item.MaBS}>
                  <img className='doctor__img img-fluid' src={item.HinhAnh} alt={item.HoTen} />
                  <div className='doctor__info'>
                    <a href='#' className='doctor__info__name' >{item.HoTen}</a>
                    <div className='doctor__info__hospital'>Bệnh viện Hữu Nghị Việt Đức</div>
                    <div className='doctor__info__specializations'>{item.ChuyenNganh}</div>
                  </div>
                  <div className='doctor__button'>
                    <img className='booking-img' src={IconBooking} alt='icon-booking' />
                    <span className='booking-text'>Đặt khám</span>
                  </div>
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
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{15}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </>
  )
}
export default Doctor;