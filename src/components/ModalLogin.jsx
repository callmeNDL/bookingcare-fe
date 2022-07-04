import { useState } from "react";
import { Modal, Button, ModalBody } from "react-bootstrap";
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import Login from '../assets/img/login.png';


const ModalLogin = () => {
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowPassWord = () => setShowPassword(!showPassword)


  return (
    <div className="">
      <Button variant="primary" onClick={handleShow}>
        login
      </Button>
      <Modal show={show} onHide={handleClose} contentClassName="modal-login">
        <Modal.Header closeButton>
        </Modal.Header>
        <ModalBody className="login">
          <div className="login__form">
            <div className="login__form__title">
              <div className="login__form__title__login">Đăng nhập</div>
              <div className="login__form__title__register">Đăng ký</div>
            </div>
            <div className="login__form__username">
              <input className="" type='text' placeholder="Tên đăng nhập" />
            </div>
            <div className="login__form__password">
              <input className="password" type={showPassword ? 'password' : 'text'} placeholder="Mật khẩu" />
              <i class={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} onClick={handleShowPassWord}></i>
            </div>
            <div class="login__form__forgot-password">Quên mật khẩu</div>
            <button type="submit" class="login__form__button">Đăng nhập</button>
            <div className="login__form__social">
              <div className="login__form__social__text">
                <hr></hr>
                <span>Hoặc đăng nhập với</span>
                <hr></hr>
              </div>
              <div className="login__form__social__wrap">
                <div className="facebook"><i class="fa-brands fa-facebook-f"></i></div>
                <div className="google"><i class="fa-brands fa-google"></i></div>
              </div>
            </div>
          </div>
          <div className="login__info">
            <Logo />
            <img className="login__info__img" src={Login} alt='img-login' />
            <div className="login__info__hotline">
              <i class="fa-solid fa-phone"></i>
              <span className="text">Hotline:</span>
              <span className="phone">0328 290 432</span>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default ModalLogin;