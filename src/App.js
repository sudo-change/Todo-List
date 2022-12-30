import { useState } from "react";
import styled from "styled-components";
import TodoForm from "./Components/TodoForm";
import Todolist from "./Components/TodoList";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #fffaf0;
  margin: 0px;
  font-family: sans-serif;
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 0px 0px 24px;
  color: #212529;
  font-weight: 500;
`;

// creating unique id
const generateId = () => "_" + Math.random().toString(36).substr(2, 9);

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "This is a sample todo", isCompleted: false },
  ]);
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (event) => {
    // when submitting the form
    // prevent the default action and
    // add the input to the todos, if there is any
    // empty the input field
    event.preventDefault();
    if (!input) return;
    setTodos((todos) =>
      todos.concat({
        id: generateId(),
        text: input,
        isCompleted: false,
      })
    );

    setInput("");
  };

  const markTodo = (id) => {
    // find the todo based on its id and
    // return it by changing the boolean
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <Wrapper>
      <Title>Todo List</Title>
      <TodoForm
        handleSubmit={handleSubmit}
        input={input}
        handleChange={handleChange}
      />
      <Todolist todos={todos} handleDelete={handleDelete} markTodo={markTodo} />
    </Wrapper>
  );
};

export default App;
