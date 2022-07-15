import ImgErr from '~/assets/img/img-error.png'

const PageNotFound = (props) => {

  return (
    <div className="container">
      <div className="page-err">
        <img src={ImgErr} alt="img-error" />
        <h1>Không tìm thấy trang !</h1>
        <div className='back-to-home'>
          <p>Nội dung tìm kiếm không tồn tại hoặc đã bị xoá. Trở về trang chủ</p>
          <a href="/" >Trang chủ</a>
        </div>
      </div>
    </div>
  )
}
export default PageNotFound;