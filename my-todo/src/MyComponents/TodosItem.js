
import React from 'react'
export const TodosItem = ({ PickTodos, deleteItm }) => {
    let card = {
        width: "170vh",
        margin: "40px auto"
    }
    return (

        <div className="card text-center " style={card} >
            <div className="card-header">
                {PickTodos.todoTitle}
            </div>
            <div className="card-body">
                <p className="card-text">{PickTodos.todoDesc}</p>
                <button class="btn btn-sm btn-danger" onClick={() => deleteItm(PickTodos.sno)}>Delete</button>
            </div>
            <div className="card-footer text-muted">
                {PickTodos.todoDate}<br/>
                {PickTodos.todoTime}
            </div>

        </div>

    )
}
