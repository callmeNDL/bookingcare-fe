import { ReactComponent as FaceBook } from '../assets/icons/facebook.svg';
import { ReactComponent as Zalo } from '../assets/icons/zalo.svg';
import { ReactComponent as Youtube } from '../assets/icons/youtube.svg';
import { ReactComponent as Intagram } from '../assets/icons/intagram.svg';

const Footer = () => {
  return (
    <div className='bg-footer'>
      <div className="container">
        <div className='footer'>
          <div className="footer__right-reserved">
            © 2022 ISOFHCARE. All rights reserved.
          </div>
          <div className="footer__social">
            <div className='footer__social__item'><a href='#'><FaceBook /></a></div>
            <div className='footer__social__item'><a href='#'><Zalo /></a></div>
            <div className='footer__social__item'><a href='#'><Intagram /></a></div>
            <div className='footer__social__item'><a href='#'><Youtube /></a></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;