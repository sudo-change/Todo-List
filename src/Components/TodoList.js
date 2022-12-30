import styled from "styled-components";

const TodoList = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-bottom: 0px;
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TodoText = styled.div`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  ${(props) => props.isCompleted && "text-decoration: line-through;"}
`;

const TodoButtons = styled.div``;

const TodoButton = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 16px;
  background-color: white;
  :hover:hover {
    background-color: currentColor;
    color: white;
    transition: 0.7s;
  }
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
`;

const Todolist = ({ todos, handleDelete, markTodo }) => {
  return (
    <TodoList>
      {todos.map((todo) => (
        <TodoItem key={todo.id}>
          <TodoText isCompleted={todo.isCompleted}>{todo.text}</TodoText>
          <TodoButtons>
            <TodoButton
              onClick={() => markTodo(todo.id)}
              style={{ color: "#28a745" }}
            >
              ✓
            </TodoButton>
            <TodoButton
              onClick={() => handleDelete(todo.id)}
              style={{ color: "#dc3545" }}
            >
              ✕
            </TodoButton>
          </TodoButtons>
        </TodoItem>
      ))}
    </TodoList>
  );
};

export default Todolist;
