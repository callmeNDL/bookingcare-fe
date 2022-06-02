import { ReactComponent as Logo } from '../assets/img/logo.svg';
import { ReactComponent as menu } from '../assets/icons/menu.svg';

const Menu = () => {
  return (
    <div className='container'>
      <div className='bottom'>
        <Logo />
        <ul className='menu'>
          <li className='menu__item'>Trang chủ</li>
          <li className='menu__item'>Đặt lịch</li>
          <li className='menu__item'>Cộng đồng</li>
          <li className='menu__item'>Cẩm nang</li>
          <li className='menu__item'>Chuyên khoa</li>
        </ul>
      </div>
    </div>
  )
}
export default Menu;