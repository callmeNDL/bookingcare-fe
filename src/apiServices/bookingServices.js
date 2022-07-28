import * as request from '~/utis/request';
import { addHistoryStart, addHistorySuccess, addHistoryFailed } from '~/redux/historyBooking'

export const handleBooking = async (data) => {
  try {
    const res = await request.post("booking/create-bookingUser", data);
    console.log(res);
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
    if (res.errCode === 0) {
      dispatch(addHistorySuccess(res.bookings))
    }
    return res;
  } catch (error) {
    dispatch(addHistoryFailed())
  }
}

export const verifyBookings = async (data) => {
  try {
    const res = await request.post("booking/verify-booking", data);
    console.log("check call api");
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const cancelBooking = async (data) => {

  try {
    const res = await request.put("booking/cancel-booking", data);
    return res
  } catch (error) {
    console.log(error);
  }
}