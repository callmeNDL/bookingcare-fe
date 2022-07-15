import { useState } from "react";
import Menu from "~/components/Menu";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from "react-redux";
import BoxInfo from "./BoxInfo";

const Header = () => {
  const [activeProfile, setActiveProfile] = useState(false)
  const user = useSelector((state) => state.auth.login.currentUser)

  const handleLogin = (username, password) => {
    console.log(username, password);
  }
  return (
    <>
      <div className='bg-main'>
        <div className='container'>
          <div className='header bg-main'>
            <div className='support'>
              <div className='support__hotline'>
                <span className='support__hotline__text'>Hotline đặt khám: </span>
                <span className='support__hotline__phone'>0328 290 432 </span>
              </div>
              <div className='support__center'>
                <a href='#' className='support__center__title'>Trung tâm trợ giúp</a>
              </div>
            </div>
            {user
              ? <div className='user'>
                <span className='user__register' onClick={() => { setActiveProfile(!activeProfile) }}>Hi, {user.HoTen}</span>
                {activeProfile ? <BoxInfo /> : ""}
              </div>
              : <div className='user'>
                <span className='user__register'><ModalRegister /></span>
                <div className='space'></div>
                <div className='user__login'><ModalLogin handleLogin={handleLogin} /></div>
              </div>}

          </div>
          <ToastContainer />
        </div>
      </div>
      <Menu />
    </>

  )
}
export default Header;