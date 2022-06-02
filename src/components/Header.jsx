import Menu from "~/components/Menu";

const Header = () => {
  return (
    <>
      <div className='bg-main'>
        <div className='container'>
          <div className='top bg-main'>
            <div className='support'>
              <div className='support__hotline'>
                <span className='support__hotline__text'>Hotline đặt khám: </span>
                <span className='support__hotline__phone'>0328 290 432 </span>
              </div>
              <div className='support__center'>
                <a href='#' className='support__center__title'>Trung tâm trợ giúp</a>
              </div>
            </div>
            <div className='user'>
              <span className='user__register'>Đăng ký</span>
              <div className='space'></div>
              <span className='user__login'>Đăng nhập</span>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </>

  )
}
export default Header;