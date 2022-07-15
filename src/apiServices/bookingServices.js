import * as request from '~/utis/request';
import { addHistoryStart, addHistorySuccess, addHistoryFailed } from '~/redux/historyBooking'

export const handleBooking = async (data) => {
  try {
    const res = await request.post("booking/create-booking", data);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const hanldeSenMail = async (data) => {
  try {
    const res = await request.post("senMail/send", data);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const fetchBooking = async (idBooking) => {
  try {
    const res = await request.get("booking", {
      params: {
        id: idBooking,
      },
    });
    return res.booking

  } catch (error) {
    console.log(error);
  }
}

export const fetchHistoryBooking = async (MaUser, dispatch) => {
  dispatch(addHistoryStart())
  try {
    const res = await request.get("booking/by-user", {
      params: {
        MaUser: MaUser,
      },
    });
    console.log("check api", res);
    if (res.errCode === 0) {
      dispatch(addHistorySuccess(res.bookings))
    }
    return res;
  } catch (error) {
    dispatch(addHistoryFailed())
  }
}

export const verifyBooking = async (data) => {
  try {
    const res = await request.post("booking/verify-booking", data);
    return res;
  } catch (error) {
    console.log(error);
  }
}

