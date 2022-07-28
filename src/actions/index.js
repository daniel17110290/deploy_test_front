import axios from "axios";

import URL_SET_DELETE_TEXT from "../constants";

export function getText() {
  return async function (dispatch) {
    var text = await axios.get(`https://test-app-daniel.herokuapp.com`);
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
        ` https://test-app-daniel.herokuapp.com`,
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
      const eliminated = await axios.delete(URL_SET_DELETE_TEXT + `/${id}`);
      return dispatch({
        type: "DELETE_TEXT",
        payload: eliminated.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
}
