import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as bookingServices from '../apiServices/bookingServices'
const VerifyBooking = () => {
  const [verify, setVerify] = useState({});
  const { token, MaDL } = useParams();

  const resultVerify = async (token, MaDL) => {
    let data = { token, MaDL };
    let result = await bookingServices.verifyBooking(data)
    setVerify(result)
    return result;
  }

  useEffect(() => {
    resultVerify(token, MaDL)
  }, [token, MaDL])

  console.log(verify);
  return (
    <div className='container'>
      <div className='title-verily'>{verify?.errMessage}</div>
    </div>
  )
}

export default VerifyBooking