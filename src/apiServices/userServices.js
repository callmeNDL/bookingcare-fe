import * as request from '~/utis/request';
import { updateStart, updateSuccess, updateFailed } from "~/redux/authSlide";
import { toast } from 'react-toastify';

export const updateUser = async (data, dispatch, navigate) => {
  dispatch(updateStart());
  try {
    const res = await request.put("user/update-user", data);
    if (res.errCode === 0) {
      dispatch(updateSuccess(data))
      navigate('/thong-tin-ca-nhan')
      return res
    } else {
      dispatch(updateFailed())
      toast.error("Cập nhật thất bại")
      return res
    }
  } catch (error) {
    console.log(error);
  }
}

export const changePasswordUser = async (data, navigate) => {
  try {
    const res = await request.post("user/change-password-user", data);
    if (res.errCode === 1) {
      return toast.error(res.errMessage)
    } else {
      return res
    }
  } catch (error) {
    console.log(error);
  }
}