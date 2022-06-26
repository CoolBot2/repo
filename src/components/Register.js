import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { RegisterUser } from "../redux/Actions";
const Register = () => {
  const { loading, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(RegisterUser());
  // }, []);

  return (
    <div>
      {" "}
      <Form />
    </div>
  );
};

export default Register;
