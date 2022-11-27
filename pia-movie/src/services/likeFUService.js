import { axiosBase as axios } from "./Config";

export const UpsertLikeFU = async (data) => {
  try {
    const res = await axios.put("/likeFU", data);

    if (res) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const GetLikesFromUserFU = async (data) => {
  try {
    const dataToSend = {
      _usuario: data,
    };

    const res = await axios.post("/likeFU/usuario", dataToSend);

    if (res) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};