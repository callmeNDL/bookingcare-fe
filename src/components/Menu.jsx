import { ReactComponent as Logo } from '../assets/img/logo.svg';
import { ReactComponent as MenuMobile } from '../assets/icons/menu.svg';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Setting } from '../assets/icons/setting.svg';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "~/apiServices/authServices";
import { useDispatch } from 'react-redux';
import ModalLogin from './ModalLogin';
import ModalRegister from './ModalRegister';
const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const user = useSelector((state) => state.auth.login.currentUser);


  const handleActiveMenu = () => {
    setIsActive(true)
  }
  const handleCloseMenu = () => {
    setIsActive(false)
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(user);


  return (
    <div className='container'>
      <div className='menu-wrap'>
        <Logo />
        <ul className="menu">
          <Link to="/" className='menu__link'>
            <li className='menu__link__item'>Trang chủ</li>
          </Link>
          <Link to="/doctor" className='menu__link'>
            <li className='menu__link__item'>Bác sĩ</li>
          </Link>
          <Link to="/hospital" className='menu__link'>
            <li className='menu__link__item'>Bệnh viện</li>
          </Link>
          <Link to="/department" className='menu__link'>
            <li className='menu__link__item'>Chuyên khoa</li>
          </Link>
        </ul>
        <div className='menu__mobile'>
          <div className={!isActive ? 'menu__mobile__icon' : 'menu__mobile__icon--close'}>
            <MenuMobile onClick={handleActiveMenu} />
          </div>
          <div className={isActive ? 'menu__mobile__mask--active' : 'menu__mobile__mask'}></div>
          <div className={!isActive ? 'modal-menu' : 'modal-menu--active'}>
            <Modal.Dialog className='modal-menu__wrap'>
              <Modal.Header closeButton onClick={handleCloseMenu}>
              </Modal.Header>
              <Modal.Body>
                {!user
                  ? <>
                    <div className='user'>
                      <span className='user__register'><ModalRegister /></span>
                      <div className='space'></div>
                      <span className='user__login'><ModalLogin /></span>

                    </div>
                    <ul className="menu">
                      <li className='menu__item'><Link to='/' className='link'>Trang chủ</Link></li>
                      <li className='menu__item'><Link to='/doctor' className='link'>Bác sĩ</Link></li>
                      <li className='menu__item'><Link to='/hospital' className='link'>Bệnh viện</Link></li>
                      <li className='menu__item'><Link to='/department' className='link'>Chuyên khoa</Link></li>
                    </ul>
                  </>
                  : <>
                    <div className='user'>
                      <span className='user__register user__register--mobile'>Hi {user?.HoTen}</span>
                    </div>
                    <div className='menu'>
                      <li className='menu__item'><Link to='/' className='link'>Trang chủ</Link></li>
                      <li className='menu__item'><Link to='/doctor' className='link'>Bác sĩ</Link></li>
                      <li className='menu__item'><Link to='/hospital' className='link'>Bệnh viện</Link></li>
                      <li className='menu__item'><Link to='/department' className='link'>Chuyên khoa</Link></li>
                      <li className='menu__item'><Link to='/thong-tin-ca-nhan' className='link'>Thông tin cá nhân</Link></li>
                      <li className='menu__item'><Link to='/historyBooking' className='link'>Lịch sử khám bệnh</Link></li>
                      <li className='menu__item'><Link to='/ho-so-suc-khoe' className='link'>Hô sơ sức khoẻ</Link></li>
                      <li className='menu__item link' onClick={() => { logout(dispatch, navigate) }}>Đăng xuất</li>
                    </div>
                  </>
                }


                <div className='support'>
                  <div className='support__hotline'>
                    <Phone />
                    <span className='support__hotline__text'>Hotline đặt khám: </span>
                    <span className='support__hotline__phone'>0328 290 432 </span>
                  </div>
                  <div className='support__center'>
                    <Setting />
                    <a href='#' className='support__center__title'>Trung tâm trợ giúp</a>
                  </div>
                </div>
              </Modal.Body>
            </Modal.Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Menu;