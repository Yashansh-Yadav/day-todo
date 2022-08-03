//import logo from './logo.svg';
import './App.css';
import { Header } from './MyComponents/Header';
import { TodoCont } from './MyComponents/TodoCont';
import { Foooter } from './MyComponents/Foooter';
import { AddTodos } from './MyComponents/AddTodos';
import { About } from './MyComponents/About';
import Axios from 'axios';

import React, { useState , useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    //Adding todos in useState hook...............
  const [todosItem, settodoItems] = useState([])
  
  // geting data from database..............
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      settodoItems(response.data);
      console.log(response.data);
    })
  },[])

// Geting data from user input and posting is to data base.................
 const addTodo = (title, desc, date, time ,id) => { 
    
    Axios.post("http://localhost:3001/api/insert",{
      todoTitle:title, 
      todoDesc:desc,
      todoDate:date,
      todoTime:time,
      todoId :id,
    }).then(()=>{
      alert('successfull insert');
    });
    console.log("item added ", title, desc, date, time , id);

        // const sno = todosItem.length + 1;
    //  const getTodo = {
    //   sno: sno,
    //   title: title,
    //   desc: desc,
    //   date: date,
    //   time: time,
    // }
    // settodoItems([...todosItem, getTodo]);
    // console.log("item added ", title, desc, date, time);
  };

// deleting todos on click ...............

  // const deleteTodo = (PickTodo) => {
  //   settodoItems(todosItem.filter((e) => {
  //     return e !== PickTodo;
  //   }))
  //  console.log("I am delete", PickTodo);
  // }

  const deleteTodo=(PickTodo)=>{
    Axios.delete(`http://localhost:3001/api/delete/${PickTodo}`);
    console.log("I am delete", PickTodo);
  };

  return (

    // singel page switch in window using react router dom ..............

    <Router>
      <Header title="My Todo List" />
      <Routes>
        <Route path="/" element={
          <>
            <AddTodos addItem={addTodo} />
            <TodoCont allTodos={todosItem} deleteItem={deleteTodo} />
          </>
        }/>
         <Route path="/about" element={<About />}/>
        </Routes>
      <Foooter />
    </Router>
  );
}

export default App;
