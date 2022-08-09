import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { logout } from "~/apiServices/authServices";
import { useDispatch } from 'react-redux';
import ChangePassword from './ChangePassword';

const BoxInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <ul className='box-info'>
      <li className='info-item' onClick={() => { navigate('/thong-tin-ca-nhan') }}><PersonOutlineIcon className='icon' />Thông tin cá nhân</li>
      <li className='info-item' onClick={() => { navigate('/historyBooking') }}><CalendarMonthIcon className='icon' />Lịch sử đặt khám</li>
      <li className='info-item' onClick={() => { navigate('/ho-so-suc-khoe') }}><ContactPageIcon className='icon' />Hồ sơ sức khoẻ</li>
      <li className='info-item' onClick={() => { navigate('/change-password') }}><LockIcon className='icon' />Dổi mật khẩu</li>
      <li className='info-item' onClick={() => { logout(dispatch, navigate) }}><LogoutIcon className='icon' />Đăng xuất</li>
    </ul>
  )
}

export default BoxInfo