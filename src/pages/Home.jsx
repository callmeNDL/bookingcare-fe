import Banner from '~/assets/img/banner.png';
import Experience01 from '~/assets/img/experience-remote-booking.png';
import Experience02 from '~/assets/img/experience-top-doctor.png';
import Experience03 from '~/assets/img/experience-right.png';
import Experience04 from '~/assets/img/experience-price.png';
import BannerSearch from '~/assets/img/banner-search.svg';
import { ReactComponent as IconNext } from '../assets/icons/icon-next.svg';
import * as doctorServices from '~/apiServices/doctorServices';
import Slider from "react-slick";
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import ModalBooking from '~/components/ModalBooking';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  const getDoctor = async () => {
    const res = await doctorServices.fetchDoctorWithPage(1);
    setDoctors(res.data)
  }
  useEffect(() => {
    getDoctor()
  }, [])

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
          <ModalBooking />
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
        <img className='search__banner img-fluid' src={BannerSearch} alt='banner-searhc' />
        <div className='search__top'>
          <div className='search__top__title'>
            <h2>Bác sĩ nổi bật</h2>
            <div className='seen-all' onClick={() => { navigate('/doctor') }}>
              <h3>Xem tất cả</h3>
              <IconNext />
            </div>
          </div>
          <div className='search__top__slider'>
            <Slider {...settings}>
              {doctors?.map((item) => {
                return <div className='slider-item' key={item.id}>
                  <img className='slider-item__img' src={item.HinhAnh} alt="slider-img" />
                  <h3 className="slider-item__desc">{item.HoTen}</h3>
                  <div className="slider-item__info">{item.ChuyenNganh}</div>
                </div>
              })}
            </Slider>
          </div>
        </div>
      </div>

      <div className='technique-wrap'>
        <div className='container'>
          <div className='technique '>
            <div className='technique__title department'>
              <h2 >Đội ngủ bác sĩ</h2>
              <p className=''>Chuyên môn vững vàng; Dịch vụ chuyên nghiệp</p>
            </div>
            <div className='technique__list'>
              <div className='item'>
                <div className='item__title'>Giàu kinh nghiệm</div>
                <div className='item__content'>Tất cả các bác sĩ đều có chứng chỉ hành nghề đã xác thực, vững vàng về chuyên môn, phong phú về kinh nghiệm và tận tâm trong công việc.</div>
              </div>
              <div className='item'>
                <div className='item__title'>100% HÀI LÒNG</div>
                <div className='item__content'>Bạn được mời chấm điểm và góp ý sau mỗi lần khám. Nếu chưa hài lòng, Wellcare tài trợ một lần khám khác cùng chuyên khoa, cho dù với mức phí cao hơn</div>
              </div>
              <div className='item'>
                <div className='item__title'>Y HỌC CHỨNG CỨ</div>
                <div className='item__content'>Bác sĩ thực hành Y học chứng cứ, không lạm dụng thuốc và xét nghiệm. Ưu tiên tư vấn các phương pháp điều trị an toàn, tránh xâm lấn.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='disc'>
        <div className='container'>
          <div className='disc-wrap'>
            <p>ISOFHCARE - Nền tảng đặt lịch khám online hàng đầu với các bệnh viện, phòng khám uy tín trên cả nước chọn dịch vụ Khám sản phụ khoa, khám tiêu hóa, khám cơ xương khớp, khám sức khỏe tổng quát, Khám nhi.</p>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Home;