import { useState, useEffect } from "react";
import './App.css';


function App() {

  const[input, setInput] = useState('');
  const[items, setItems] = useState(JSON.parse(localStorage.getItem('todo-items')) || []);

  // useEffect( () => {
    
  // }, [input]);

  useEffect( () => {
    localStorage.setItem('todo-items', JSON.stringify(items));    
  }, [items]);

  return (
    <div id="app">
      <h1>App to-do 🗒️</h1>
      <div className="container">
        <form>
          <h2>Add Item</h2>
          <input 
            type="text"
            id="title"
            placeholder="Title"
            className="form-control"
            autoComplete="off"
            onChange={ (e) => {
              setInput(e.target.value)
            }}
            value={input}
            />
          <button
            type='button'
            onClick={ ( e) => {              
              if(!input) {
                alert('No empty fields fool!!')
                return;
              }
              if (items.includes(input)) {
                alert("Item already on the list!!")
                setInput('');
                return;
              }
              const newItems = [...items, input]
              // console.log("newitems: ", newItems);
              setItems(newItems);
              setInput('');

              }
            }
          
          >
            Add Chore
          </button>
          <button 
              type='button'
              onClick={ () => {
                setItems([]);
                }
              }
          > 
          X Delete chores                     
          </button>
        </form>

        <div className="items">
          <h2>My Items</h2>
          <ol>
            {
              items.map( (item,i) => {
                return <li key={`item-${i}`}>
                    <h3>
                      {item}
                    </h3>
                    <button 
                    className="delete"
                    onClick={ () => {
                      const newItems = items.filter( (item, indexOfItem) => {
                        return (i !== indexOfItem);
                      })
                      setItems(newItems);
                    }}
                    >                      
                    </button>
                </li>
              })
            }
          </ol>
        </div>
      </div>

    </div>
  );
}

export default App;
