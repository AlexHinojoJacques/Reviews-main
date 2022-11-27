import { axiosBase as axios } from "./Config";

export const GetAllUsers = async () => {
  try {
    const response = await axios.get("/usuario");

    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const CreateUser = async (data) => {
  try {
    let userData;
    let dataToSend;
    
    //let imageData = new FormData();
    let final;
    //imageData.set(
    //  "archivo",
    //  data.image,
    //  `${data.image.lastModified}-${data.image.name}`
    //);

        
    userData = {
        name: data.name,
        user: data.user,
        pass: data.pass,
        bio: data.email
        //_imgUsuario: response.data._id,
    };
    await axios.post("/usuario", userData)
    .then((after) => {
      final = after;
    //  dataToSend = {
    //    _usuario: after.data._id
    //  }
    }
    );

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

export const GetById = async (id) => {
  try {
    const response = await axios.get(`/usuario/${id}`);

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

export const LogInService = async (data) => {
  try {
    const userData = {
      user: data.user,
      pass: data.pass,
    };

    const response = await axios.post("/login", userData);

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