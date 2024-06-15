import { useState } from 'react';
import { X, Pencil } from 'lucide-react';
import { useMutation, useQueryClient } from 'react-query';
import updateTodoRequest from '../api/updateTodoRequest';
import deleteTodoRequest from '../api/deleteTodoRequest';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'oklch(var(--b1))',
    borderRadius: '0.5rem',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(70, 70, 70, 0.5)',
  },
};

Modal.setAppElement(document.getElementById('root'));

const TodoItem = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(todo.text);

  const queryClient = useQueryClient();

  const { mutate: updateTodo } = useMutation({
    mutationFn: (todo) => updateTodoRequest(todo),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const { mutate: deleteTodo } = useMutation({
    mutationFn: (todo) => deleteTodoRequest(todo),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <>
      <li>
        <div className="container py-4 px-1 flex justify-between max-w-md mx-auto">
          <div className="pt-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                updateTodo({
                  ...todo,
                  completed: !todo.completed,
                })
              }
              className="checkbox"
            />
          </div>
          <div className="px-3 my-auto max-w-52">
            <p className="truncate">{todo.text}</p>
          </div>
          <div className="flex">
            <button
              onClick={() => setIsOpen(true)}
              className="btn btn-ghost btn-circle"
            >
              <Pencil />
            </button>
            <Modal isOpen={isOpen} style={customStyles}>
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn btn-ghost btn-circle"
                  type="button"
                >
                  <X />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!text) return;
                  updateTodo({ ...todo, text: text });
                  setIsOpen(false);
                }}
              >
                <div className="flex p-3">
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="update todo"
                    className="input input-bordered mr-1 w-3/4"
                  />
                  <button className="btn ml-1 w-1/4" type="submit">
                    update
                  </button>
                </div>
              </form>
            </Modal>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-ghost btn-circle text-red-500"
            >
              <X />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
