import Banner from '~/assets/img/banner.png';
import Experience01 from '~/assets/img/experience-remote-booking.png';
import Experience02 from '~/assets/img/experience-top-doctor.png';
import Experience03 from '~/assets/img/experience-right.png';
import Experience04 from '~/assets/img/experience-price.png';


function Home(params) {
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
    </div>
  )
}
export default Home;