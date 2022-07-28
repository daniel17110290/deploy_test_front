import axios from "axios";

export function getText() {
  return async function (dispatch) {
    var text = await axios.get("http://localhost:3001/iecho");
    return dispatch({
      type: "GET_TEXT",
      payload: text.data,
    });
  };
}

export function createText(payload) {
  return async function (dispatch) {
    try {
      const createText = await axios.post(
        "http://localhost:3001/iecho",
        payload
      );
      return createText;
    } catch (e) {
      console.log(e);
    }
  };
}

export function deleteText(id) {
  return async function (dispatch) {
    try {
      const eliminated = await axios.delete(
        `http://localhost:3001/iecho/${id}`
      );
      return dispatch({
        type: "DELETE_TEXT",
        payload: eliminated.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
}
