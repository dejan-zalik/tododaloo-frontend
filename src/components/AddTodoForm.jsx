import React, { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useState } from 'react';
import createTodoRequest from '../api/createTodoRequest';
import { AuthContext } from '../context/Contexts';

const AddTodoForm = () => {
  const [text, setText] = useState('');
  const [currentUser, setCurrentUser] = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { mutate: addTodo } = useMutation(
    (newTodo) => createTodoRequest(newTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text) return;
        addTodo({ text: text, userId: currentUser });
        setText('');
      }}
      className="px-2 max-w-md mx-auto"
    >
      <div className="flex justify-between">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="add todo"
          className="input input-bordered w-full mr-1"
        />
        <button className="btn ml-1 w-24">add</button>
      </div>
    </form>
    // <>
    //   <div className="px-6 max-w-md mx-auto">
    //     <button
    //       className="btn"
    //       onClick={() => document.getElementById('my_modal_1').showModal()}
    //     >
    //       add todo
    //     </button>
    //     <dialog id="my_modal_1" className="modal">
    //       <div className="modal-box">
    //         <form
    //           onSubmit={(e) => {
    //             // e.preventDefault();
    //             if (!text) return;
    //             addTodo({ text });
    //             setText('');
    //           }}
    //         >
    //           <input
    //             value={text}
    //             onChange={(e) => setText(e.target.value)}
    //             type="text"
    //             id="item"
    //             placeholder="add todo"
    //             className="input input-bordered w-full max-w-md"
    //           />
    //         </form>
    //       </div>
    //     </dialog>
    //   </div>
    // </>
  );
};

export default AddTodoForm;
