import { ADD_COMMENT } from "./action.Types";

const inicialState = { name: "Kenzie", comments: [] };

const userReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return action.updatedUser;
    default:
      return state;
  }
};

export default userReducer;
