import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as userServices from '~/apiServices/userServices';

function Profile() {
  let navigate = useNavigate();

  const [setting, setSetting] = useState(false);
  function MouseOver() {
    setSetting(true)
  }
  const user = useSelector((state) => state.auth.login.currentUser);

  return (
    <div className="container">
      <div className="profile" >
        <ol className="list-link">
          <li>
            <a className="link" href="/">Trang chủ</a>
            <span className="separator">/</span>
          </li>
          <li>
            <span className="link link--active">
              <a href="/thong-tin-ca-nhan">Thông tin cá nhân</a>
            </span>
          </li>
        </ol>
        <h2 className="profile__title">Thông tin cá nhân</h2>
        <div className="profile__content">
          <div className="profile__content__general">
            <img className="img-profile" src={`${user?.HinhAnh}`} alt="avatar" />
            <div className="name-profile">
              <p>{user?.HoTen}</p>
              <div className='setting'>
                <SettingsIcon className="icon" onMouseOver={MouseOver} />
                {setting ? <div className='dropdown-setting' onClick={() => { navigate('/thong-tin-ca-nhan/a') }}>
                  Sửa thông tin
                </div> : ""}
              </div>
            </div>
          </div>
          <div className="detail-info">
            <div className="item-info">
              <div className="item-name">Tên đăng nhập</div>
              <div className="item-value">{user?.username}</div>
            </div>
            <div className="item-info">
              <div className="item-name">Họ và tên</div>
              <div className="item-value">{user?.HoTen}</div>
            </div>
            <div className="item-info">
              <div className="item-name">Số điện thoại</div>
              <div className="item-value">{`0${user?.SDT}`}</div>
            </div>
            <div className="item-info">
              <div className="item-name">Email</div>
              <div className="item-value">{user?.email}</div>
            </div><div className="item-info">
              <div className="item-name">Ngày sinh</div>
              <div className="item-value">{user?.NgaySinh}</div>
            </div>
            <div className="item-info">
              <div className="item-name">Giới tính</div>
              {user?.GioiTinh === true ? <div className="item-value">Nam</div> : <div className="item-value">Nữ</div>}
            </div>
            <div className="item-info">
              <div className="item-name">Số CMND</div>
              <div className="item-value">{user?.CMND}</div>
            </div>
            <div className="item-info">
              <div className="item-name">Địa chỉ</div>
              <div className="item-value">{user?.DiaChi}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile;
