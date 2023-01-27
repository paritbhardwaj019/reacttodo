import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { updateTodo } from "../redux";

export default function Edit() {
  const data = useSelector((state) => state.todoReducer.data);
  const dispatch = useDispatch();

  const { id } = useParams();
  const editTodo = data.find((currElem) => {
    return currElem.id === id;
  });

  const [state, setState] = useState({
    input: editTodo.name,
    isCompleted: editTodo.isCompleted,
    isEditingCompleted: false,
  });

  const handleEdit = () => {
    const payload = {
      id,
      name: state.input,
      isCompleted: state.isCompleted,
    };
    dispatch(updateTodo(payload));
    setState({ ...state, isEditingCompleted: !state.isEditingCompleted });
  };

  const handleCheckbox = () => {
    setState({ ...state, isCompleted: !state.isCompleted });
  };

  return (
    <>
      <section className="p-4 w-full bg-white shadow-lg shadow-black/10 mt-16 text-center rounded-sm">
        <h1 className="font-bold text-2xl mb-6">Edit Task</h1>
        <div className="w-full flex justify-between items-center mb-4">
          <p className="text-lg font-semibold">Task</p>
          <input
            type="text"
            className="bg-slate-200 py-1 outline-none px-2"
            value={state.input}
            onChange={(e) => setState({ ...state, input: e.target.value })}
          />
        </div>
        <div className="w-full flex justify-between items-center mb-4">
          <p className="text-lg font-semibold">Completed</p>
          <input
            type="checkbox"
            className="text-2xl cursor-pointer"
            onClick={handleCheckbox}
            checked={state.isCompleted ? true : false}
          />
        </div>
        <Link to={"/"}>
          <button
            className="w-full bg-violet-700 py-1 text-xl rounded-md text-white
            font-semibold hover:bg-violet-500"
            onClick={handleEdit}
          >
            {" "}
            Edit
          </button>
        </Link>
      </section>
      <Link to="/">
        <button className="w-full bg-black py-2 text-xl rounded-md text-white font-semibold hover:bg-slate-900 mt-8">
          Back to Tasks
        </button>
      </Link>
    </>
  );
}
