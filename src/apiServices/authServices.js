
import axios from "axios";
import { toast } from "react-toastify";
import { loginFailed, loginSuccess, loginStart, registerStart, registerSuccess, registerFailed, logoutStart, logoutFailed, logoutSuccess } from "~/redux/authSlide";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8001/auth/login-user", user);
    if (res.data.errCode === 0) {
      dispatch(loginSuccess(res.data.user));
      toast.success('Đăng nhập thành công!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/')
    } else {
      dispatch(loginFailed());
      toast.error(res.data.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }


  } catch (error) {
    dispatch(loginFailed());
    toast.error("Đăng nhập thất bại", {
      autoClose: 1000,

    });
  }
}

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("http://localhost:8001/api/user/create-user", user);
    if (res.data.errCode === 1) {
      dispatch(registerFailed(res.data.errMessage));
      toast.error(res.data.errMessage, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      dispatch(registerSuccess());
      toast.success("Đã đăng ký thành công", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    return res;
  } catch (error) {
    dispatch(registerFailed());
  }
}

export const logout = async (dispatch, navigate) => {
  dispatch(logoutStart());
  try {
    console.log("Aa");
    dispatch(logoutSuccess());
    navigate('/')
  } catch (error) {
    dispatch(loginFailed());
  }
}