
import React , {useState} from 'react';


export const AddTodos = (props) => {
    const[title , setTitle] = useState("");
    const[desc , setDesc]  = useState("");
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    

    const submit = (e)=>{
        let id = Math.random();

        e.preventDefault();
        if(title==="" || desc===""){
            alert("description and Title can not be blank");
        }
        else{
        props.addItem(title , desc , currDate ,currTime , id);
        setTitle("");
        setDesc("");
        }
    }

const form={
    width:"170vh",
    margin:"40px auto",
}
    return (
        <div>
            <h3 className='text-center'>Add a todo</h3>
     
        <form style={form} onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="Text" className="form-label">Todo title </label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} 
                className="form-control" id="Text" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="Text" className="form-label">Todo description</label>
                <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}
                className="form-control" id="Text" />
            </div>
            <button type="submit" className="btn btn-success">ADD</button><hr/>
        </form>
        </div>
    )
}
