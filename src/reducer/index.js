const initialState = {
  text: [],
  deleteText: [],
};

function rootReduccer(state = initialState, action) {
  switch (action.type) {
    case "GET_TEXT":
      return {
        ...state,
        text: action.payload,
      };

    case "DELETE_TEXT":
      return {
        ...state,
        deleteText: action.payload,
      };
    default:
      return state;
  }
}

export default rootReduccer;
