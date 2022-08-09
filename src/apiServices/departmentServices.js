import { toast } from 'react-toastify';
import * as request from '~/utis/request';
import { addDepartment, } from '~/redux/departmentSlide';

export const fetchDepartment = async (dispatch) => {
  try {
    const res = await request.get("department", {
      params: {
        id: "ALL",
      },
    });
    if (res.errCode === 0) {
      dispatch(addDepartment(res.departments))
      return res.departments
    }
    toast.error(res.errMessage)
  } catch (error) {
    console.log(error);
  }
}

export const fetchDoctorWithMaKhoa = async (MaKhoa) => {
  try {
    const res = await request.get("department/doctor-with-department", {
      params: {
        MaKhoa: MaKhoa,
      },
    });
    if (res.errCode === 0) {
      return res.doctors
    } else {
      toast.error("Lỗi tải danh sach bac sĩ của khoa")
    }
    toast.error(res.errMessage)
  } catch (error) {
    console.log(error);
  }
}

