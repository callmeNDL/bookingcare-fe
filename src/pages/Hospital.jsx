import clinic from '~/assets/img/clinic.png';
import IconClinic from '~/assets/icons/icon-clinic.png';
import location from '~/assets/icons/location.png';
import clock from '~/assets/icons/clock.png';
import strikethrough from '~/assets/icons/strikethrough.png';



function Hospital(params) {
  return (
    <>
      <div className="hospital">
        <div className="container">
          <div className="hospital-content">
            <img src={clinic} className="img-fluid hospital-content__img" alt="..." />
            <div className='hospital-content__info'>
              <div className='hospital-content__info__title'>
                <img src={IconClinic} className="img-fluid" alt="..." />
                <h1 class="name">Phòng khám Đa Khoa Y khoa Hà Nội</h1>
              </div>
              <div className='hospital-content__info__location'>
                <img src={location} className="img-fluid" alt="icon-location" />
                Tòa nhà CT4B - CT4C, Khu Đô Thị Xa La, Phúc La, Hà Đông, Thành phố Hà Nội
              </div>
              <div className='hospital-content__info__working-time'>
                <img src={clock} className="img-fluid" alt="clock" />
                Đã hết giờ làm việc (07:30 - 12:00, 13:30 - 17:00)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='hospital-info'>
        <div className='container'>
          <div className='hospital-info__title'>
            <h1 className='name'>Thông tin cơ sở y tế</h1>
            <img className='' src={strikethrough} alt="icon-strikethrough" />
          </div>
          <div className='hospital-info__content'>
            <div className='hospital-info__content__title'>Giới thiệu chung</div>
            <div className='hospital-desc'>
              <p>Phòng khám Y Khoa Hà Nội là đơn vị khám chữa bệnh uy tín và chất lượng hàng đầu tại Hà Nội được trang bị đầy đủ hệ thống thiết bị y tế hiện đại. Đặc biệt, các thiết bị chẩn đoán hình ảnh và xét nghiệm chuyên sâu, hiện đại tương đương các phòng khám tiên tiến trên Thế giới như: máy chụp cắt lớp vi tính 128 dãy và máy chụp cộng hưởng từ 1.5Tesla, hệ thống siêu âm Doppler màu, siêu âm 4D, siêu âm tim, máy Xquang số hóa,…&nbsp;</p>
              <p>Đây còn là nơi quy tụ đội ngũ bác sĩ giỏi từ các bệnh viện lớn, bệnh viện tuyến trung ương, như bệnh viện Bạch Mai, bệnh viện Đại học Y Hà Nội, bệnh viện Việt Đức, viện tim mạch TW,… Người bệnh khi tới khám sẽ được thăm khám, tư vấn bởi các bác sĩ giỏi chuyên môn, giàu kinh nghiệm và được bác sĩ tư vấn phương án điều trị thích hợp từ những giai đoạn đầu tiên.</p>
              <p>Với mong muốn phục vụ người dân toàn diện, ngoài những thế mạnh về tầm soát, phát hiên ung thư sớm, phòng khám Y khoa Hà Nội còn hướng tới mô hình khám chữa bệnh chuyên khoa như:</p>
              <p>Nhằm cung cấp các dịch vụ tư vấn, khám bệnh một cách hiệu quả nhất, đáp ứng nhu cầu thường xuyên của khách hàng, Phòng khám Y khoa Hà Nội tập trung vào các chuyên khoa:</p>
              <p>Nhằm cung cấp các dịch vụ tư vấn, khám bệnh một cách hiệu quả nhất, đáp ứng nhu cầu thường xuyên của khách hàng, Phòng khám Y khoa Hà Nội tập trung vào các chuyên khoa:</p>
              <p>- Chẩn đoán hình ảnh</p>
              <p>- U bướu</p>
              <p>- Tim mạch</p>
              <p>- Nội soi tiêu hoá</p>
              <p>- Nội khoa</p>
              <p>- Tai – Mũi – Họng</p>
              <p>- Sản phụ khoa</p>
              <p>Để được tư vấn. đặt lịch khám bệnh, tầm soát ung thư hoặc xét nghiệm Covid-19, khách hàng vui lòng liên hệ đến tổng đài 1900390432 để đặt lịch khám chủ động.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hospital;