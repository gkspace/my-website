import React from "react";
import ToDoItems from "./ToDoItems";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);

  function HandleChange(event) {
     console.log(event.target.value);
    setInputText(event.target.value);
  }

  function HandleClick() {
    console.log("clicked");
    setItems((prevItems)=>{
        return [...prevItems, inputText];
    })
    setInputText("");
  }

  function deleteItem(id){
    console.log("deleted");
    setItems((prevItems)=>{
        return prevItems.filter((item, index)=>{
            return index !== id;
        })
    })
  } 

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={HandleChange} type="text" value={inputText}/>
        <button>
          <span onClick={HandleClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
            {items.map((todoItem,index)=>{ 
                return (
                  <ToDoItems 
                  key={index} 
                  id={index} 
                  text={todoItem} 
                  onChecked={deleteItem} / >
                  );
            })}
        </ul> 
      </div>
    </div>
  );
}

export default App;
