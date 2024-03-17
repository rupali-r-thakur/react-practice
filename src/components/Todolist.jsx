import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
const getLocalItems=()=>{
  let list=localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'));
  }else{
    return []
  }
}
function Todolist() {
  const [item, setitem] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const inputValue = (e) => {
    setitem(e.target.value);
  };
  const addItem = () => {
    if (!item) {
      alert("please enter item");
    } else {
      const allItem = { id: new Date().getTime().toString(), name: item };
      setItems( [...items, allItem]);
      setitem("");
    }
  };
  const deleteItem = (id) => {
    // console.log(id);
    const updetedItem = items.filter((ele) => {
      return id !== ele.id;
    });
    setItems(updetedItem);
  };
  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(items))
  },[items])
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
                <IoMdAdd />
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
                    <tr key={element.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{element.name} </td>
                      <td>
                        <FaEdit
                          style={{
                            color: "blue",
                            fontSize: "30px",
                            marginRight: "30px",
                            cursor: "pointer",
                          }}
                          
                        />{" "}
                        <MdDelete
                          style={{
                            color: "red",
                            fontSize: "35px",
                            cursor: "pointer",
                          }}
                          onClick={() => deleteItem(element.id)}
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
