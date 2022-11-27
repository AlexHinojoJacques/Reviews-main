import { axiosBase as axios } from "./Config";

export const CreateFollowUp = async (data, img) => {
  try {
    let dataToSend;
    let imageData = new FormData();
    imageData.set("archivo", img, `${img.lastModified}-${img.name}`);

    await axios
      .post("/imagen", imageData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        dataToSend = {
          _imgFU: response.data._id,
          bio: data.bio,
          _adopcion: data._adopcion,
          date: data.date
        };
      });

    const res = await axios.post("/follow_up", dataToSend);

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

export const GetAllFollowUps = async () => {
  try {
    const response = await axios.get("/follow_up");

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

export const GetFollowUpById = async (id) => {
  try {
    const response = await axios.get(`/follow_up/${id}`);

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