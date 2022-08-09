import { useState } from "react";
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import Login from '../assets/img/login.png';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as userServices from '~/apiServices/userServices'
const ChangePassword = () => {

  const [showPasswordOld, setShowPasswordOld] = useState(true);
  const [showPasswordNew, setShowPasswordNew] = useState(true);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);

  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const user = useSelector((state) => state.auth.login.currentUser)
  const resetFrom = () => {
    reset({
      passwordOld: '', passwordNew: '', passwordConfirm: ''
    });
  }


  const onSubmit = async (data) => {
    const dataChangePassword = {
      MaUser: user.MaUser,
      passwordOld: data.passwordOld,
      passwordNew: data.passwordNew
    }
    if (data.passwordNew !== data.passwordConfirm) {
      return toast.error("Mật khẩu xác nhận sai!")
    }

    const res = await userServices.changePasswordUser(dataChangePassword);
    if (res.errCode === 0) {
      toast.success(res.errMessage)
      resetFrom()
    }
  }
  return (
    <div className="container">
      <div className="change-password department">
        <h2 className="change-password__title title">Dổi mật khẩu</h2>
        <div className="change-password__content">
          <div className="login__form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="login__form__password">
                <input
                  className="password"
                  type={showPasswordOld ? 'password' : 'text'}
                  placeholder="Mật khẩu cũ"
                  {...register('passwordOld', {
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
                <i className={showPasswordOld ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} onClick={() => { setShowPasswordOld(!showPasswordOld) }}></i>
              </div>
              {errors.passwordOld?.message && <p className="error-input-login">{errors.passwordOld?.message}</p>}
              <div className="login__form__password">
                <input
                  className="password"
                  type={showPasswordNew ? 'password' : 'text'}
                  placeholder="Mật khẩu mới"
                  {...register('passwordNew', {
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
                <i className={showPasswordNew ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} onClick={() => { setShowPasswordNew(!showPasswordNew) }}></i>
              </div>
              {errors.passwordNew?.message && <p className="error-input-login">{errors.passwordNew?.message}</p>}<div className="login__form__password">
                <input
                  className="password"
                  type={showPasswordConfirm ? 'password' : 'text'}
                  placeholder="Nhập lại mật khẩu mới"
                  {...register('passwordConfirm', {
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
                <i className={showPasswordConfirm ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} onClick={() => { setShowPasswordConfirm(!showPasswordConfirm) }}></i>
              </div>
              {errors.passwordConfirm?.message && <p className="error-input-login">{errors.passwordConfirm?.message}</p>}
              <button type="submit" className="btn-change-password">Đổi mật khẩu</button>
            </form>
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
        </div>
      </div>
    </div>
  )
}

export default ChangePassword