
import React from 'react'
import { TodosItem } from "./TodosItem"

export const TodoCont = (props) => {
  return (
    <div className="text-center">
      <h3>My Todos</h3>
      {props.allTodos.length===0? "No todos to show":
        props.allTodos.map((todoObj) => {
            return (
              <>
                <TodosItem PickTodos={todoObj} key={Math.random()} deleteItm={props.deleteItem} />
              </>
            );
          })
        }
    </div>
  )
}
