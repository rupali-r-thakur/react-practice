import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
function Todolist() {
  const [item, setitem] = useState("");
  const [items, setItems] = useState([]);
  const inputValue = (e) => {
    setitem(e.target.value);
  };
  const addItem = () => {
    if (item !== "") {
      setItems(() => {
        return [...items, item];
      });
      setitem("");
    }
  };
  const deleteItem = (id) => {
    // console.log(id);
    const updetedItem = items.filter((ele, ind) => {
      return id !== ind;
    });
    setItems(updetedItem);
  };
  return (
    <>
      <div className="container-fuild">
        <div className="container">
          <div className="input-group mb-3 my-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your item"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={inputValue}
              value={item}
            />
            <button
              className="btn btn-primary text-light"
              type="button"
              id="button-addon2"
              onClick={addItem}
            >
              ADD
            </button>
          </div>{" "}
          <div className="display">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">list</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((element, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{element} </td>
                      <td>
                        <MdDelete
                          style={{
                            color: "red",
                            fontSize: "35px",
                            cursor: "pointer",
                          }}
                          onClick={() => deleteItem(index)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todolist;
