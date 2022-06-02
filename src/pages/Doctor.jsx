import { ReactComponent as IconSearch } from '../assets/icons/search.svg';


function Doctor(params) {
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

    </>
  )
}
export default Doctor;