import * as request from '~/utis/request';


export const fetchDoctor = async (q) => {
  try {
    const res = await request.get("doctor", {
      params: {
        id: q,

      },
    });
    return res.doctors
  } catch (error) {
    console.log(error);
  }
}

export const fetchScheduleDoctor = async (MaBS, NgayKham) => {
  try {
    const res = await request.get("schedule/get-with-dateBS", {
      params: {
        MaBS: MaBS,
        NgayKham: NgayKham,
      },
    });
    return res.schedules
  } catch (error) {
    console.log(error);
  }
}