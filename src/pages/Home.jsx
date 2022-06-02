import Banner from '~/assets/img/banner.png';
import Experience01 from '~/assets/img/experience-remote-booking.png';
import Experience02 from '~/assets/img/experience-top-doctor.png';
import Experience03 from '~/assets/img/experience-right.png';
import Experience04 from '~/assets/img/experience-price.png';
import BannerSearch from '~/assets/img/banner-search.svg';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as IconNext } from '../assets/icons/icon-next.svg';
import SliderImg from '~/assets/img/slider-img.png';


import Slider from "react-slick";
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css';



const Home = () => {

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };


  return (
    <div>
      <div className="banner">
        <img className="banner__img img-fluid" src={Banner} alt="banner-home-page" />
        <div className="banner__content">
          <div className="title"><h1>Người tiêu dùng thông thái <br />Hãy khám bệnh thông minh</h1></div>
          <div className="desc">
            <h3>Bạn là người tiêu dùng thông thái, bạn yêu gia đình hơn chính bản thân mình. Hãy cùng ISOFHCARE chăm sóc sức khỏe cho bản thân và gia đình để mỗi ngày bên nhau là một ngày ý nghĩa.</h3>
          </div>
          <button className="button">Đặt khám ngay</button>
        </div>
      </div>

      <div className="experience-wrap">
        <div className="container">
          <div className="experience">
            <h2 className="experience__title">Trải nghiệm khám bệnh hiện đại <br /> cùng ISOFHCARE</h2>
            <div className="experience__list">
              <div className="experience__list__item">
                <img src={Experience01} alt="remote-medical-booking" />
                <div className="title"><h3 className="title01">Đặt khám từ xa</h3></div>
                <div className="desc">Bác sĩ của ISOFHCARE luôn sẵn sàng tư vấn và chăm sóc sức khỏe cho bạn mọi lúc mọi nơi qua video & chat</div>
              </div>
              <div className="experience__list__item">
                <img src={Experience02} alt="remote-medical-booking" />
                <div className="title"><h3 className="title02">Đội ngũ chuyên gia<br />và cơ sở y tế hàng đầu </h3></div>
                <div className="desc">Dễ dàng kết nối với các bác sĩ ưu tú, tận tâm, có chuyên môn cao đến từ các BV tuyến trung ương & phòng khám uy tín</div>
              </div>
              <div className="experience__list__item">
                <img src={Experience03} alt="remote-medical-booking" />
                <div className="title"><h3 className="title03">Tiếp đón ưu tiên <br /> với nhiều quyền lợi đặc biệt</h3></div>
                <div className="desc">Đặt khám hẹn trước tại các bệnh viện trung ương, phòng khám hàng đầu cùng nhiều đặc quyền dành riêng cho bạn và gia đình</div>
              </div>
              <div className="experience__list__item">
                <img src={Experience04} alt="remote-medical-booking" />
                <div className="title"><h3 className="title04">Giá khám bằng giá <br />tại cơ sở ý tế</h3></div>
                <div className="desc">Không những vậy còn giúp bạn tiết kiệm thời gian và các chi phí phát sinh khác</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='search'>
        <div className='search__box'>
          <input className='search__box__input' placeholder='Tìm triệu chứng, chuyên khoa, tên bệnh viện, phòng khám' type='text' name="search-text" />
          <button className='search__box__button'>Tìm kiếm <span className='btn-search'><Search /></span></button>
        </div>
        <ul className='search__list'>
          <li className='search__list__item'>Tìm kiếm phổ biến:</li>
          <li className='search__list__item'>Khám Tai Mũi Họng</li>
          <li className='search__list__item'>Khám sản phụ khoa</li>
          <li className='search__list__item'>Nội soi tiêu hóa</li>
          <li className='search__list__item'>Siêu âm 2D</li>
        </ul>
        <img className='search__banner img-fluid' src={BannerSearch} alt='banner-searhc' />
        <div className='search__top'>
          <div className='search__top__title'>
            <h2>Dịch vụ nổi bật</h2>
            <div className='seen-all'>
              <h3>Xem tất cả</h3>
              <IconNext />
            </div>

          </div>
          <div className='search__top__slider'>
            <Slider {...settings}>
              <div className='slider-item'>
                <img className='slider-item__img' src={SliderImg} alt="slider-img" />
                <h3 className="slider-item__desc">Xét nghiệm ADN Tự nguyện tại Trung tâm Healthcare</h3>
                <div className="slider-item__info">BỆNH VIỆN ĐA KHOA BẢO SƠN</div>
              </div>
              <div className='slider-item'>
                <img className='slider-item__img' src={SliderImg} alt="slider-img" />
                <h3 className="slider-item__desc">Xét nghiệm ADN Tự nguyện tại Trung tâm Healthcare</h3>
                <div className="slider-item__info">BỆNH VIỆN ĐA KHOA BẢO SƠN</div>
              </div>
              <div className='slider-item'>
                <img className='slider-item__img' src={SliderImg} alt="slider-img" />
                <h3 className="slider-item__desc">Xét nghiệm ADN Tự nguyện tại Trung tâm Healthcare</h3>
                <div className="slider-item__info">BỆNH VIỆN ĐA KHOA BẢO SƠN</div>
              </div>
              <div className='slider-item'>
                <img className='slider-item__img' src={SliderImg} alt="slider-img" />
                <h3 className="slider-item__desc">Xét nghiệm ADN Tự nguyện tại Trung tâm HealthcareXét nghiệm ADN Tự nguyện tại Trung tâm HealthcareXét nghiệm ADN Tự nguyện tại Trung tâm HealthcareXét nghiệm ADN Tự nguyện tại Trung tâm Healthcare</h3>
                <div className="slider-item__info">BỆNH VIỆN ĐA KHOA BẢO SƠN</div>
              </div>
              <div className='slider-item'>
                <img className='slider-item__img' src={SliderImg} alt="slider-img" />
                <h3 className="slider-item__desc">Xét nghiệm ADN Tự nguyện tại Trung tâm Healthcare</h3>
                <div className="slider-item__info">BỆNH VIỆN ĐA KHOA BẢO SƠN</div>
              </div>
              <div className='slider-item'>
                <img className='slider-item__img' src={SliderImg} alt="slider-img" />
                <h3 className="slider-item__desc">Xét nghiệm ADN Tự nguyện tại Trung tâm Healthcare</h3>
                <div className="slider-item__info">BỆNH VIỆN ĐA KHOA BẢO SƠN</div>
              </div>
              <div className='slider-item'>
                <img className='slider-item__img' src={SliderImg} alt="slider-img" />
                <h3 className="slider-item__desc">Xét nghiệm ADN Tự nguyện tại Trung tâm Healthcare</h3>
                <div className="slider-item__info">BỆNH VIỆN ĐA KHOA BẢO SƠN</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Home;