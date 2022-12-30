import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 80%;
  height: 30px;
  font-size: 16px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 15px;
  margin-top: 5px;
  padding: 6px 12px;
`;

const TodoForm = ({ handleSubmit, input, handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="inputField">
          <b>Add Todo</b>
        </Label>

        <Input
          type="text"
          id="inputField"
          value={input}
          placeholder="Add a New Todo"
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default TodoForm;
