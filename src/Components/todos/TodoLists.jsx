import React from "react";

const TodoLists = ({ item, handleUpdate, handleDelete}) => {
    // console.log(item);
    // console.log(item);
  if (item.length === 0) {
    return <h1>Add Some Task</h1>;
  } else {
    return (
      <main id="listWrapper">
        <h1>Todo list</h1>
        {item.map((obj, i ) => {
          let { title, todo, id } = obj;
          return (
            <article id="todoWrapper" key={i}>
              <h1>{title}</h1>
              <h1>{todo}</h1>
              <section>
                <button onClick={()=>handleUpdate(id)}>Update</button>
                <button onClick={()=>handleDelete(id)}>Delete</button>
              </section>
            </article>
          );
        })}
      </main>
    );
  }
};

export default TodoLists;
