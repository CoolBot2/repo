import { REGISTER_USER } from "./ActionTypes";

const init = { loading: true, user: null };

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return { ...state, loading: false, user: payload };

    default:
      return state;
  }
};
export default reducer;
