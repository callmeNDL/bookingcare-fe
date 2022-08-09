import { useState } from "react";
import { Modal, Button, ModalBody } from "react-bootstrap";
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import Login from '../assets/img/login.png';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "~/apiServices/authServices";

const ModalLogin = (props) => {
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowPassWord = () => setShowPassword(!showPassword)
  const isLogin = useSelector((state) => state.auth.login)

  const onSubmit = (data) => {
    loginUser(data, dispatch, navigate);
    if (isLogin.error === false) {
      setShow(false)
    }
  }


  return (
    <div >
      <Button variant="primary" onClick={handleShow}>
        Đăng nhập
      </Button>
      <Modal show={show} onHide={handleClose} contentClassName="modal-login">
        <Modal.Header closeButton>
        </Modal.Header>
        <ModalBody className="login">
          <div className="login__form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="login__form__title">
                <div className="login__form__title__login">Đăng nhập</div>
              </div>
              <div className="login__form__username">
                <input
                  className=""
                  type='text' placeholder="Tên đăng nhập"
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
              <div className="login__form__password">
                <input
                  className="password"
                  type={showPassword ? 'password' : 'text'}
                  placeholder="Mật khẩu"
                  {...register('password', {
                    required: "Không để trống.",
                    minLength: {
                      value: 8,
                      message: "Tối thiểu 8 ký tự"
                    },
                    maxLength: {
                      value: 8,
                      message: "Tối đa 8 ký tự"
                    },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                      message: "Mật khẩu phải gồm chữ thường, in hoa, sô"
                    }
                  })}
                />
                <i className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} onClick={handleShowPassWord}></i>
              </div>
              {errors.password?.message && <p className="error-input-login">{errors.password?.message}</p>}

              <div className="login__form__forgot-password">Quên mật khẩu</div>
              <button type="submit" className="login__form__button">Đăng nhập</button>
            </form>
            <div className="login__form__social">
              <div className="login__form__social__text">
                <hr></hr>
                <span>Hoặc đăng nhập với</span>
                <hr></hr>
              </div>
              <div className="login__form__social__wrap">
                <div className="facebook"><i className="fa-brands fa-facebook-f"></i></div>
                <div className="google"><i className="fa-brands fa-google"></i></div>
              </div>
            </div>
          </div>
          <div className="login__info">
            <Logo />
            <img className="login__info__img" src={Login} alt='img-login' />
            <div className="login__info__hotline">
              <i className="fa-solid fa-phone"></i>
              <span className="text">Hotline:</span>
              <span className="phone">0328 290 432</span>
            </div>
          </div>
        </ModalBody >
      </Modal >
    </div >
  );
}
export default ModalLogin;