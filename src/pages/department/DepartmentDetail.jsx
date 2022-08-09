import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import * as departmentServices from '~/apiServices/departmentServices';
import { useEffect, useState } from "react";
const DepartmentDetail = () => {
  const [doctors, setDoctors] = useState([]);
  const [departmentDesc, setDepartmentDesc,] = useState([]);
  const { departmentID } = useParams();
  const navigate = useNavigate();

  const departments = useSelector((state) => state.department.department);
  const currentDepartment = departments.find((item) => item.id === parseInt(departmentID))

  const getDoctorWithDepartment = async () => {
    const res = await departmentServices.fetchDoctorWithMaKhoa(currentDepartment.MaKhoa);
    setDoctors(res)
  }


  useEffect(() => {
    setDepartmentDesc(currentDepartment.MoTa?.split("+"));
    getDoctorWithDepartment();
  }, [departmentID])

  return (
    <div className="container">
      <div className="user-detail">
        <ol className="list-link">
          <li>
            <a className="link" href="/">Trang chủ</a>
            <span className="separator">/</span>
          </li>
          <li>
            <span className="link">
              <a href="/department">Chuyên Khoa</a>
            </span><span className="separator">/</span>
          </li>
          <li>
            <span className="link--active">
              <a>Chi tiết chuyên khoa {currentDepartment?.TenKhoa}</a>
            </span>
          </li>
        </ol>
      </div>
      <div className="department-detail department">
        <h1 className="department-detail__title title">{currentDepartment?.TenKhoa}</h1>
        <div className="department-detail__content">
          <div className="department-detail__content__left">
            {departmentDesc.map((item, index) => {
              return <div className="desc" key={index}>{item}</div>
            })}
            <div className="department-doctor department">
              <div className="department-doctor__title title title--xl">Danh sách bác sĩ khoa {currentDepartment?.TenKhoa}</div>
              <div className="department-doctor__list">
                {doctors?.map((item) => {
                  return <div className="item" key={item.id}>
                    <img src={item.HinhAnh} alt="img-doctor" />
                    <div className="item-info">
                      <div className="item-info__name">{item.HoTen}</div>
                      <div className="item-info__desc">{item.ChuyenNganh}</div>
                    </div>
                    <div className="item-info__button" onClick={() => { navigate(`/doctor/${item.id}`) }}><WysiwygIcon className="icon" /> <p>Đặt khám</p></div>
                  </div>
                })}
              </div>
            </div>
          </div>
          <div className="department-detail__content__right department">
            <h1 className="title title--xl">Chuyên khoa khoác</h1>
            <div className="list-department">
              {departments.map((item) => {
                return <div className="item" key={item.id} onClick={() => { navigate(`/department/${item.id}`) }}>{item.TenKhoa}</div>
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DepartmentDetail