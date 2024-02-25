
import { Container, Typography } from "@mui/material";
import TodoList from "./components/TodoList";
import './index.css';

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Todo App
      </Typography>
      <TodoList />
    </Container>
  );
};

export default App;