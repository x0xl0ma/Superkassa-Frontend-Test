import { CHANGE_BUTTON_STATE } from "./types";

const initialState = {
  isActive: false,
};

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BUTTON_STATE:
      return {
        state,
        isActive: action.isActive,
      };

    default:
      return state;
  }
};

export default buttonReducer;
