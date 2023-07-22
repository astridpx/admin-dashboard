import axios from "axios";
import { INewUser } from "../../../../typings";

export const addNewUser = async (Data: INewUser) => {
  const { data } = await axios.post("http://localhost:3000/api/users", {
    ...Data,
  });

  return data;
};

export const getUser = async () => {
  const { data } = await axios.get("http://localhost:3000/api/users");

  return data;
};
