import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate, } from "react-router-dom";
import * as userServices from '~/apiServices/userServices';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const UserDetail = () => {
  const [file, setFile] = useState("");
  const user = useSelector((state) => state.auth.login.currentUser);
  const { register, handleSubmit, formState: { errors }, } = useForm({ defaultValues: user });
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(user);
  const onSubmit = async (data) => {
    try {
      setUpdate(true);
      let urlHinhAnh = '';
      if (file.length !== 0) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "rl8qs3p5");
        await axios.post("https://api.cloudinary.com/v1_1/nguyen-duc-long/image/upload", formData).then((response) => {
          urlHinhAnh = response.data.secure_url;
        });
      }
      if (urlHinhAnh.length !== 0) {
        data.HinhAnh = urlHinhAnh;
      }
      await userServices.updateUser(data, dispatch, navigate);
      setUpdate(false);
    } catch (error) {
      setUpdate(false);
      toast.error(error.data)
    }
  };

  return (
    <div className="container">
      <div className='screen-loading'></div>
      <div className="user-detail">
        <ol className="list-link">
          <li>
            <a className="link" href="/">Trang chủ</a>
            <span className="separator">/</span>
          </li>
          <li>
            <span className="link">
              <a href="/thong-tin-ca-nhan">Thông tin cá nhân</a>
            </span><span className="separator">/</span>
          </li>
          <li>
            <span className="link--active">
              <a>Sửa thông tin cá nhân</a>
            </span>
          </li>
        </ol>
        <div className="user-detail__info">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="title">Sửa thông tin cá nhân</h1>
            <div className="upload">
              <span className="img-detail">
                {!file
                  ? <div className="left ">
                    <img
                      className="img-avatar"
                      src={
                        user?.HinhAnh
                          ? user?.HinhAnh
                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                      alt="avatar"
                    />
                  </div>
                  : <div className="left img-avatar">
                    <img
                      className="img-avatar"
                      src={
                        file
                          ? URL.createObjectURL(file)
                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                      alt="avatar"
                    />
                  </div>}
              </span>
              <div className="upload-img-input">
                <label htmlFor="file">
                  Image: <AddAPhotoIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="detail-info">
                <div className="item-info">
                  <div className="item-name">Tên đăng nhập</div>
                  <div className="item-value item-disable">{user.username}</div>
                </div>
                <div className="item-info">
                  <div className="item-name">Họ và tên</div>
                  <input type="text" className="item-value"
                    {...register('HoTen',
                      {
                        required: "Không bỏ trống.",
                        maxLength: {
                          value: 30,
                          message: "Ho ten có tối đa 30 ký tự"
                        },
                      }
                    )}
                  />
                </div>
                {errors.HoTen?.message && <p className="error-input-login err-user">{errors.HoTen?.message}</p>}
                <div className="item-info">
                  <div className="item-name">Số điện thoại</div>
                  <input
                    type="text"
                    className="item-value item-disable"
                    {...register('SDT')}
                  />
                </div>
                <div className="item-info">
                  <div className="item-name">Email</div>
                  <input type="text" className="item-value"
                    {...register('email',
                      {
                        required: "Không bỏ trống.",
                        minLength: {
                          value: 6,
                          message: "Tên nhập có tối thiểu 6 ký tự"
                        },
                        pattern: {
                          value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Nhập đúng địng dạng long0432@gmail.com"
                        }
                      }
                    )} />
                </div>
                {errors.email?.message && <p className="error-input-login err-user">{errors.email?.message}</p>}

                <div className="item-info">
                  <div className="item-name">Ngày sinh</div>
                  <input type="date" className='item-info-date' {...register('NgaySinh', { required: "Không bỏ trống." })} />
                </div>
                {errors.NgaySinh?.message && <p className="error-input-login err-user">{errors.NgaySinh?.message}</p>}
                <div className="item-info">
                  <div className="item-name">Giới tính</div>
                  <div className='item-gioitinh'>
                    <select className='select-gioitinh' {...register('GioiTinh', { required: "Không bỏ trống." })}>
                      <option className='option-gioitinh' value="true">Nam</option>
                      <option className='option-gioitinh' value="false">Nữ</option>
                    </select>
                  </div>
                </div>
                {errors.GioiTinh?.message && <p className="error-input-login err-user">{errors.GioiTinh?.message}</p>}

                <div className="item-info">
                  <div className="item-name">Số CMND</div>
                  <input className="item-value item-disable" {...register('CMND', { required: "Không bỏ trống." })} />
                </div>
                <div className="item-info">
                  <div className="item-name">Địa chỉ</div>
                  <input type="text" className="item-value" {...register('DiaChi',
                    {
                      required: "Không bỏ trống.",
                      minLength: {
                        value: 6,
                        message: "Tối thiểu 6 ký tự"
                      },
                      maxLength: {
                        value: 255,
                        message: "Tối đa 255 ký tự"
                      }
                    })}
                  />
                </div>
                {errors.DiaChi?.message && <p className="error-input-login err-user">{errors.DiaChi?.message}</p>}
              </div>
            </div>
            <div className="wrapper-btn">
              <button text="Lưu lại" type="submit" className={update ? "green-btn green-btn--disable" : "green-btn"} >
                <span>Lưu lại</span>
              </button>
              <button type="button" className="ant-btn ant-btn-round ant-btn--default" onClick={() => { navigate('/thong-tin-ca-nhan') }}>
                <span>Hủy</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserDetail;