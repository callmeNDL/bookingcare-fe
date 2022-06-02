import { ReactComponent as FaceBook } from '../assets/icons/facebook.svg';
import { ReactComponent as Zalo } from '../assets/icons/zalo.svg';
import { ReactComponent as Youtube } from '../assets/icons/youtube.svg';
import { ReactComponent as Intagram } from '../assets/icons/intagram.svg';
import { ReactComponent as LogoWhite } from '../assets/img/white-logo-new.svg';
import Notification from '../assets/img/footer01.png';
import Registered from '../assets/img/footer02.png';



const Footer = () => {
  return (
    <footer>
      <div className='bg-clinic-info'>
        <div className='container'>
          <div className='clinic-info'>
            <div className='clinic-info__logo' ><LogoWhite /></div>
            <div className='clinic-info__list'>
              <ul className='list-item'>
                <li className='item'>CÔNG TY TNHH 1 THÀNH VIÊN ISOFHCARE</li>
                <li className='item'>
                  <h3 className='label'>Địa chỉ:</h3>
                  <span className='info'>Tầng 6, Tòa nhà FORD, 313-315 Trường Chinh, Thanh Xuân Hà Nội</span>
                </li>
                <li className='item'>
                  <h3 className='label'>Hotline:</h3>
                  <span className='info'>0328 290 432</span>
                </li>
                <li className='item'>
                  <h3 className='label'>Email:</h3>
                  <span className='info'>support@ndl0432.com</span>
                </li>
              </ul>
              <ul className='list-item list-item--mobile'>
                <li className='item'>Đặt lịch</li>
                <li className='item'>Bệnh viện</li>
                <li className='item'>Dịch vụ</li>
                <li className='item'>Bác sĩ</li>
              </ul>
              <ul className='list-item list-item--mobile'>
                <li className='item'>Trang chủ</li>
                <li className='item'>Cộng đồng</li>
                <li className='item'>Cẩm nang</li>
                <li className='item'>Trở thành đối tác</li>
              </ul>
              <ul className='list-item list-item--mobile'>
                <li className='item'>Điều khoản sử dụng</li>
                <li className='item'>Chính sách bảo mật</li>
                <li className='item'>Trung tâm trợ giúp</li>
              </ul>
            </div>
            <div className='clinic-info__icon'>
              <img className='img-fluid' src={Notification} alt='icon-notification' />
              <img className='img-fluid' src={Registered} alt='icon-registered' />
            </div>
          </div>
        </div>
      </div>

      <div className='footer bg-footer'>
        <div className="container">
          <div className="footer__right-reserved">
            © 2022 ISOFHCARE. All rights reserved.
          </div>
          <div className="footer__social">
            <div className='footer__social__item'><a href='#'><FaceBook /></a></div>
            <div className='footer__social__item'><a href='#'><Zalo /></a></div>
            <div className='footer__social__item'><a href='#'><Intagram /></a></div>
            <div className='footer__social__item'><a href='#'><Youtube /></a></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;