import { axiosBase as axios } from "./Config";

export const CreateComment = async (data) => {
  try {
    let commentData = {
      _usuario: data.user,
      _post: data.post,
      texto: data.text,
      date: data.date,
    };
    const res = await axios.post("/comentario", commentData);

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

export const GetCommentsFromPost = async (id) => {
  try {
    const response = await axios.get(`/comentario/post/${id}`);

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