import { axiosBase as axios } from "./Config";

export const GetAllPosts = async () => {
  try {
    const response = await axios.get("/post");
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

export const GetPostById = async (id) => {
  try {
    const response = await axios.get(`/post/${id}`);

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

export const CreatePost = async (data) => {
  try {
    let postData;
    let final;
    //let imageData = new FormData();
    //imageData.set(
    //  "archivo",
    //  data.image,
    //  `${data.image.lastModified}-${data.image.name}`
    //);
    postData = {
      name: data.name,
      user: data._usuario,
      description: data.description,
      date: data.date,
      movie:data.movie
      //_imgUsuario: response.data._id,
  };
  console.log(postData);
    await axios.post("/post", postData)
      .then((after) => {
        final = after;
      //  dataToSend = {
      //    _usuario: after.data._id
      //  }
      });

    if (final.status === 200) {
      return final.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const SearchPost = async (data) => {
  try {
    const response = await axios.post("/search", data);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  }
  catch (err) {
    console.log(err);
    return err;
  }
};

export const AdoptPet = async (petId, postData, adoptId, adoptData) => {
  try {
    await axios.put(`/post/${petId}`, postData);

    const res = await axios.put(`/formato_adopcion/${adoptId}`, adoptData);

    if (res.status === 200) {
      return res.data;
    }
    else {
      return null;
    }
  }
  catch (err) {
    console.log(err);
    return err;
  }
};

export const GetPostsByUser = async (id) => {
  try {
    const response = await axios.get(`/post/usuario/${id}`, { headers: {
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
    }});

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}