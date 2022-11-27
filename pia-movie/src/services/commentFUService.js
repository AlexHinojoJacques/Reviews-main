import { axiosBase as axios } from "./Config";

export const CreateCommentFU = async (data) => {
  try {
    const res = await axios.post("/comentarioFU", data);

    if (res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const GetCommentsFromFollowUp = async (id) => {
    try {
      const response = await axios.get(`/comentarioFU/FU/${id}`);
  
      if (response.status === 200) {
        return response.data;
      } else {
        return null;
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };