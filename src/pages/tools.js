import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import WeatherCard from "./weatherCard";
import Todo from "../components/toDo";

export default function Tools() {
  const todoNameRef = useRef();
  const [data, setData] = useState([]);
  const [toDoList, setToDos] = useState([]);
  const [error, showError] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=44.389355&lon=-79.690331&units=metric&APPID=92ad8d24c25849a4bd4e688a9a31031e`)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, []);

  const handleSubmit = () => {
    const newValue = todoNameRef.current.value;
    if (newValue === "") return;
    console.log(newValue);
    setToDos([...toDoList, { text: newValue, completed: false }]);
    todoNameRef.value = null;
    document.getElementById("textInputField").value = "";
  };

  const removeItem = (index) => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };

  const toggleComplete = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };

  return (
    <>
      <div className="container py-5">
        <h1 className="font-weight-bold header-animated py-4">Todo</h1>
        {toDoList.length === 0 && <p>No to do task available</p>}
        {toDoList.map((toDo, index) => (
          <Todo key={index} toDo={toDo} index={index} toggleTodos={toggleComplete} removeToDo={removeItem} />
        ))}
        <div className="addInputItems">
          <input id="textInputField" className="mx-4" ref={todoNameRef} type="text" />
          <Button variant="primary" className="mx-2" onClick={handleSubmit}>
            Add ToDo
          </Button>
        </div>
      </div>

      <div className="container py-5" style={{ width: "25rem" }}>
        <h1 className="font-weight-bold header-animated py-4">Weather App</h1>
        <div className="align-items-center justify-content-center">
          <WeatherCard weatherData={data} />
        </div>
      </div>
    </>
  );
}
