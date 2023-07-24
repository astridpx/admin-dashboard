import Axios from "axios";
import { INewUser, IUserEdit } from "../../../../typings";

const axios = Axios.create({
  baseURL: "http://localhost:3000",
});

export const addNewUser = async (Data: INewUser) => {
  const { data } = await axios.post("/api/users", {
    ...Data,
  });

  return data;
};

export const getUser = async () => {
  const { data } = await axios.get("/api/users");

  return data;
};

export const UpdateUser = async (Data: IUserEdit, id: any) => {
  const { data } = await axios.put(`/api/users/${id}`, {
    ...Data,
  });

  return data;
};

export const DeleteUser = async (id: any) => {
  const { data } = await axios.delete(`/api/users/${id}`);

  return data;
};
