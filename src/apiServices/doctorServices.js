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