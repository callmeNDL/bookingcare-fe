
import { useEffect, useState } from "react";
import { Modal, Button, ModalBody } from "react-bootstrap";
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import Login from '../assets/img/login.png';
import { useForm } from 'react-hook-form';
import { registerUser } from "~/apiServices/authServices";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const ModalRegister = (props) => {
  const [show, setShow] = useState(props.isActive);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let isRegister = useSelector((state) => state.auth.register)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (data) => {
    data.HinhAnh = "https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-580x440.png	"
    const res = await registerUser(data, dispatch, navigate)

    if (!res.data.errCode === 0) {
      handleClose();
    }
  }
  var uid = Number((new Date().getTime()).toString().slice(-6));
  if (uid < 99999) {
    uid = uid + 100000
  }


  return (
    <div className="">
      <div variant="primary" onClick={handleShow}>
        Đăng ký
      </div>
      <Modal show={show} onHide={handleClose} contentClassName="modal-login">
        <Modal.Header closeButton>
        </Modal.Header>
        <ModalBody className="login">
          <div className="login__form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="login__form__title">
                <div className="login__form__title__login">Thông tin đăng nhập</div>
              </div>
              <div className="input-box--disable">
                <input
                  className=""
                  type='text' placeholder="Tên đăng nhập"
                  value="BN"
                  {...register('MaChucVu')}
                />
              </div>
              <div className="input-box--disable">
                <input
                  className=""
                  type='text' placeholder="Tên đăng nhập"
                  value={uid}
                  {...register('MaUser')}
                />
              </div>
              <div className="input-box--disable">
                <label className="register__label">Hinh Anh</label>
                <input
                  className="register__input"
                  type='text'
                  value={null}
                  {...register('HinhAnh')}
                />
              </div>
              <div className="input-box">
                <label className="register__label">Họ và tên</label>
                <input
                  className="register__input"
                  type='text'
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
              {errors.HoTen?.message && <p className="error-input-login">{errors.HoTen?.message}</p>}
              <div className="input-box">
                <label className="register__label">CMND</label>
                <input
                  className="register__input"
                  type='number'
                  {...register('CMND',
                    {
                      required: "Không bỏ trống.",
                      minLength: {
                        value: 9,
                        message: "CMND có tối thiểu 9 ký tự"
                      },
                      pattern: {
                        value: /^[0-9]{9}/,
                        message: "Không nhập ký tự đặt biệt"
                      }
                    }
                  )}
                />
              </div>
              {errors.CMND?.message && <p className="error-input-login">{errors.CMND?.message}</p>}
              <div className="input-box">
                <label className="register__label">Ngày sinh</label>
                <input
                  className="register__input"
                  type='date'
                  {...register('NgaySinh',
                    {
                      required: "Không bỏ trống.",
                    }
                  )}
                />
              </div>
              {errors.NgaySinh?.message && <p className="error-input-login">{errors.NgaySinh?.message}</p>}
              <div className="input-box">
                <label className="register__label">Số điện thoại</label>
                <input
                  className="register__input"
                  type='text' placeholder="032 829 0432"
                  {...register('SDT',
                    {
                      required: "Không bỏ trống.",
                      maxLength: {
                        value: 10,
                        message: "SDT có tối đa 10 ký tự"
                      },
                      pattern: {
                        value: /^[0-9]{10}/,
                        message: "Chỉ nhập số vd(0328290432)"
                      }
                    }
                  )}
                />
              </div>
              {errors.SDT?.message && <p className="error-input-login">{errors.SDT?.message}</p>}

              <div className="input-box input-box--radio">
                <label htmlFor="register__label">
                  <input
                    type="radio"
                    name="GioiTinh"
                    value="1"
                    checked
                    {...register("GioiTinh")}
                  />
                  Nam
                </label>
                <label htmlFor="register__label">
                  <input
                    type="radio"
                    name="GioiTinh"
                    value="0"
                    {...register("GioiTinh")}
                  />
                  Nữ
                </label>
              </div>
              <div className="input-box">
                <label className="register__label">Địa chỉ</label>
                <input
                  className="register__input"
                  type='text'
                  {...register('DiaChi',
                    {
                      required: "Không bỏ trống.",
                      minLength: {
                        value: 6,
                        message: "Tối thiểu 6 ký tự"
                      },
                    }
                  )}
                />
              </div>
              {errors.DiaChi?.message && <p className="error-input-login">{errors.DiaChi?.message}</p>}
              <div className="input-box">
                <label className="register__label">Email</label>
                <input
                  className="register__input"
                  type='email'
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
                  )}
                />
              </div>
              {errors.email?.message && <p className="error-input-login">{errors.email?.message}</p>}
              <div className="input-box">
                <label className="register__label">Tên đăng nhập</label>
                <input
                  className="register__input"
                  type='text'
                  {...register('username',
                    {
                      required: "Không bỏ trống.",
                      minLength: {
                        value: 6,
                        message: "Tên nhập có tối thiểu 6 ký tự"
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/,
                        message: "Không nhập ký tự đặt biệt"
                      }
                    }
                  )}
                />
              </div>
              {errors.username?.message && <p className="error-input-login">{errors.username?.message}</p>}
              <div className="input-box">
                <label className="register__label">Mật khẩu</label>
                <input
                  className="register__input"
                  type="text"
                  {...register('password', {
                    required: "Không bỏ trống",
                    minLength: {
                      value: 6,
                      message: "Mật khẩu tối thiểu 6 ký tự"
                    }
                  })}
                />
              </div>
              {errors.password?.message && <p className="error-input-login">{errors.password?.message}</p>}
              <button type="submit" className="login__form__button">Đăng ký</button>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default ModalRegister;