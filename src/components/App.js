import React, { useState } from "react";
import "../styles/App.css";

function ToDo(props) {
  const getInput = (valu, id) => {
    // console.log(id);
    if (id === 0) {
      props.setinput1(valu);
    } else {
      props.setinput2(valu);
    }
  };

  return (
    <>
      {props.todoarr.map((items, id) => {
        return (
          <tr>
            <td>
              <p>{items.id}</p>
            </td>
            <td>
              <input
                onChange={(e) => getInput(e.target.value, id)}
                value={id == 0 ? props.input1 : props.input2}
              />
            </td>

            <td>
              <p>{items.createdAt}</p>
            </td>
          </tr>
        );
      })}
    </>
  );
}

function App() {
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");

  // console.log(input1 + " " + input2);

  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "20:30",
      input: input1,
    },
    {
      id: "todo2",
      createdAt: "18:00",
      input: input2,
    },
  ]);

  // console.log(todos);

  const Reverch = () => {
    const [val1, val2] = todos;
    const newArra = [val2, val1];

    newArra[0]["input"] = input1;
    newArra[1]["input"] = input1;

    setinput1(input2);
    setinput2(input1);
    setTodos(newArra);
  };

  return (
    <div id="main">
      <button
        onClick={() => {
          Reverch();
        }}
      >
        Reverse
      </button>
      <table>
        <tbody>
          <ToDo
            todoarr={todos}
            setinput1={setinput1}
            input1={input1}
            input2={input2}
            setinput2={setinput2}
          />
        </tbody>
      </table>
    </div>
  );
}

export default App;
