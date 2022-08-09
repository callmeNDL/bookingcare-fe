import React, { useEffect, useState } from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import * as departmentServices from '~/apiServices/departmentServices';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Department = ({ }) => {
  const [department, setDepartment] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const fetchDepartment = async () => {
    const res = await departmentServices.fetchDepartment(dispatch);
    setDepartment(res)
  }

  useEffect(() => {
    fetchDepartment()
  }, [])


  return (
    <div className='container'>
      <div className="user-detail">
        <ol className="list-link">
          <li>
            <a className="link" href="/">Trang chủ</a>
            <span className="separator">/</span>
          </li>
          <li>
            <span className="link--active">
              <a>Chuyên khoa</a>
            </span>
          </li>
        </ol>
      </div>
      <div className='department'>
        <div className='department__title'></div>
        <div className='department__content bg-light'>
          <div className='department__content__title title title--xl'>Tất cả</div>
          <div className='department__content__list'>
            {
              department.map((item) => {
                return <div className='department-item'>
                  <div className='department-item__title title title--m' onClick={() => { navigate(`${item.id}`) }}>
                    {item.TenKhoa}
                    <ArrowForwardIosOutlinedIcon className='icon' />
                  </div>
                  <div className='department-item__desc'>{item.MoTa}</div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Department