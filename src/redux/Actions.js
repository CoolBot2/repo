import axios from "axios";
import { REGISTER_USER } from "./ActionTypes";
export const RegisterUser = (newUser) => async (dispatch) => {
  try {
    const { data } = await axios.post("/user/register", newUser);
    dispatch({
      type: REGISTER_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
