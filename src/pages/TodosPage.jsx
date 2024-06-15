import React, { useContext } from 'react';
import AddTodoForm from '../components/AddTodoForm';
import TodoItem from '../components/TodoItem.jsx';
import readTodosRequest from '../api/readTodosRequest.js';
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader.js';
import { AuthContext } from '../context/Contexts.js';
import { Navigate } from 'react-router-dom';

const TodosPage = () => {
  const [currentUser, setCurrentUser] = useContext(AuthContext);
  const { isLoading, data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: readTodosRequest,
  });

  return (
    <>
      {currentUser ? (
        <>
          <AddTodoForm />
          <div className="py-2">
            {isLoading ? (
              <ClipLoader size={50} />
            ) : (
              <ul>
                {/* {todos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} />
            ))} */}
                {todos
                  .filter((todo) => {
                    return todo.userId === currentUser;
                  })
                  .map((todo) => (
                    <TodoItem key={todo._id} todo={todo} />
                  ))}
              </ul>
            )}
          </div>
        </>
      ) : (
        <div>
          <Navigate to="/loginpage" replace={true} />
        </div>
      )}
    </>
  );
};

export default TodosPage;
