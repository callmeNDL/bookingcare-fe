import { ReactComponent as Logo } from '../assets/img/logo.svg';
import { ReactComponent as MenuMobile } from '../assets/icons/menu.svg';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Setting } from '../assets/icons/setting.svg';

import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Header from './Header';


const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveMenu = () => {
    setIsActive(true)
  }
  const handleCloseMenu = () => {
    setIsActive(false)
  }


  return (
    <div className='container'>
      <div className='menu-wrap'>
        <Logo />
        <ul className="menu">
          <li className='menu__item'>Trang chủ</li>
          <li className='menu__item'>Đặt lịch</li>
          <li className='menu__item'>Cộng đồng</li>
          <li className='menu__item'>Cẩm nang</li>
          <li className='menu__item'>Chuyên khoa</li>
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
                <div className='user'>
                  <span className='user__register'>Đăng ký</span>
                  <div className='space'></div>
                  <span className='user__login'>Đăng nhập</span>
                </div>
                <ul className="menu">
                  <li className='menu__item'>Trang chủ</li>
                  <li className='menu__item'>Đặt lịch</li>
                  <li className='menu__item'>Cộng đồng</li>
                  <li className='menu__item'>Cẩm nang</li>
                  <li className='menu__item'>Chuyên khoa</li>
                </ul>
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