import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getText, createText, deleteText } from "../actions";
import Card from "./Card";

export default function Home() {
  const back = {
    backgroundColor: "#DED8D7",
    height: "100vh",
  };

  const headerText = {
    color: "red",
    fontWeight: "bold",
  };
  const dispatch = useDispatch();

  const allText = useSelector((state) => state.text);
  console.log(allText, "estos son los textos");

  const { id } = useParams();

  useEffect(() => {
    dispatch(getText());
  }, [dispatch]);

  const [input, setInput] = useState({
    text: "",
  });

  const separate = input.text.split("");
  const numbers = [];

  for (let i = 0; i <= separate.length; i++) {
    if (isNaN(separate[i]) || separate[i] === " ") {
      continue;
    } else {
      numbers.push(separate[i]);
    }
  }

  if (numbers.length !== 0) {
    alert("text only can be letters");
    setInput({
      text: "",
    });
  }

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createText(input));
    alert("text created succesful");
    dispatch(getText());
    setInput({
      text: "",
    });
  }

  function handleDelete(e, id) {
    dispatch(deleteText(id));
    alert("text deleted succesful");
    dispatch(getText());
  }

  return (
    <div className="container" style={back}>
      {/* <br />{" "} */}
      <nav
        className="navbar navbar-expand-lg mb-4"
        style={{ background: "red" }}
      >
        <div
          className="container-fluid collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="d-flex col-12"
            role="search"
          >
            <div className="mx-auto col-8">
              <input
                className="form-control"
                bgcolor="white"
                type="text"
                placeholder="Write your text"
                value={input.text}
                name="text"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <button
                type="submit"
                class="btn btn-primary"
                disabled={input.text === "" || numbers.length !== 0}
              >
                send
              </button>
            </div>
          </form>
        </div>
      </nav>
      <div className="card w-75 mx-auto">
        <h1 className="card-tittle d-flex justify-content-first">Results:</h1>
        <div className="mx-3">
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th style={headerText} scope="col">
                  Text
                </th>
                <th style={headerText} scope="col">
                  Delete
                </th>
              </tr>
            </thead>

            {allText?.map((el) => (
              <tbody key={el.id}>
                <tr>
                  <td>
                    <Card text={el.text} />{" "}
                  </td>

                  <td>
                    <button
                      onClick={(e) => handleDelete(e, el.id)}
                      type="button"
                      class="btn btn-primary btn-sm"
                    >
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        {/* <ul class="list-group" bgcolor="red">
          {allText?.map((el) => (
            <li class="list-group-item list-group-item-primary " key={el.id}>
              <Card text={el.text} />{" "}
              <button
                onClick={(e) => handleDelete(e, el.id)}
                type="button"
                class="btn btn-primary btn-sm"
              >
                X
              </button>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
