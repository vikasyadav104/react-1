import { useState, useEffect } from 'react'
//here useState is used to store the data that changes overtime and here useEffect is used to store the data in local storage

import { TodoProvider } from './context/index';
//here we are importing todo provider from context so TodoForm and TodoItem can use the data that we are storing in the provider

import TodoForm from './component/TodoForm';
//TodoForm is used to add the todo

import TodoItem from './component/TodoItems';
//TodoItem is used to show the todo and also edit and delete the todo

import { useTodo } from './context/TodoContext';
//useless here

import './App.css'

function App() {

  const [todos, setTodos] = useState([]);
  //here we make an array of objects to store todos and setTodos is used to update them

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);

    //here we are using setTodos to add the new todo to the existing todo list
    //todo is coming from TodoForm
    //Date.now() is used to generate a unique id
    //...todo copies todo and completed properties into the new object
    //if we don't use ...todo then only id will be stored and todo/completed will be lost
    //...prev keeps all existing todos and adds the new todo at the top
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? todo : prevTodo
      )
    );

    //updateTodo is used to update a specific todo

    /*
    Example:

    [
      {
        id: 1,
        todo: "Learn React",
        completed: false
      },
      {
        id: 2,
        todo: "Learn JavaScript",
        completed: false
      }
    ]

    If we want to update the todo with id = 1,
    we pass id and updated todo object.

    map() iterates through every todo.
    If id matches, return updated todo.
    Otherwise keep the old todo.

    Finally a new array is returned and state gets updated.
    */
  };

  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    );

    /*
    This helps delete the todo with matching id.

    filter() keeps only those todos
    whose id is NOT equal to the given id.
    */
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id
          ? {
              ...prevtodo,
              completed: !prevtodo.completed,
            }
          : prevtodo
      )
    );

    /*
    This is used to toggle the completed status.

    map() iterates through every todo.

    If id matches:
      copy the old todo
      change completed to opposite value

    false -> true
    true -> false

    If id doesn't match:
      keep old todo as it is
    */
  };

  //local storage

  useEffect(() => {
    const todos = JSON.parse(
      localStorage.getItem('todos')
    );

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //Runs once when app loads
  //Loads saved todos from localStorage
  //JSON.parse converts string back into JavaScript array

  useEffect(() => {
    localStorage.setItem(
      'todos',
      JSON.stringify(todos)
    );
  }, [todos]);

  //Runs whenever todos change
  //JSON.stringify converts JavaScript array into string
  //Stores latest todos in localStorage

  
  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleCompleted,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">

          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            {/* TodoForm is used to add new todos */}
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3">

            {/* map() loops through every todo and renders TodoItem */}

            {todos.map((todo) => (
              <div
                key={todo.id}
                className="w-full"
              >
                <TodoItem todo={todo} />
              </div>
            ))}

          </div>

        </div>
      </div>
    </TodoProvider>
  );
}

export default App;