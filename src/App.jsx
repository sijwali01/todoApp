import "./global.css";
import React, { useState } from "react";
import TodoLists from "./Components/todos/TodoLists";
import TodosForms from "./Components/Forms/TodosForms";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  let [state, setState] = useState({
    title: "",
    todo: "",
    items: [],
    id: uuidv4(),
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    // console.log(name, value);
    // console.log(e.target.value);
    //one
    setState({ ...state, [name]: value });
    //two
    // setState((prev)=> {
    //   return { ...prev, [name]:value}
    // })
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    // toast.success("Task Added")
    // console.log(state);
    try {
      let newItem = {
        title: state.title,
        todo: state.todo,
        id: uuidv4(),
      };
      if (state.title.trim() === "" && state.todo.trim() === "") {
        toast.error("Add Any Task");
      } else {
        toast.success("Task Added");
        let updatedItem = [...state.items, newItem];
        setState({
          items: updatedItem,
          title: "",
          todo: "",
        });
      }
    } catch {
      console.log("error");
    }
    // console.log(state);
  };
  let handleUpdate = (id) => {
    console.log(id);
    let staticItems = state.items.filter((obj) => {
      return obj.id !== id;
    });
    let updateTodo = state.items.find((obj) => {
      return obj.id === id;
    });
    setState({
      items: staticItems,
      title: updateTodo.title,
      todo: updateTodo.todo,
      id: updateTodo.id,
    });
  };
  let handleDelete = (id) => {
    const updatedItems = state.items.filter((items) => items.id !== id);
    setState({ ...state, items: updatedItems });
    toast.success("Task Deleted");
  };
  return (
    <main id="mainWrapper">
      <Toaster />
      <article>
        <header>
          <h1>Todo App</h1>
        </header>
        <section>
          <TodosForms
            title={state.title}
            todo={state.todo}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <TodoLists item={state.items} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
        </section>
      </article>
    </main>
  );
};

export default App;
