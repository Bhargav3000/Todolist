import Create from "./Create";
import { useState } from "react";
function Home() {
    const [list, setList] = useState([]);
    const addItem = (item) => {
      setList([...list, item]);
    };
   
    function handleClick(item){
      setList(list.filter((x)=>x !== item));
    }
    return (
      
      <div className="home">
        <h1>To-do List</h1>
        <Create onAddItem={addItem} />
        <div className="list">
        {list.length === 0 ? (
          <div>
            <h2>No Tasks</h2>
          </div>
        ) : (
          list.map((x) => (
            <div className="list-item" key={x}>
              <li>{x} <button className="delete" onClick={()=>handleClick(x)}>Delete</button></li>
            </div>
          ))
        )}
      </div>
      </div>
      
    );
  }

  export default Home;