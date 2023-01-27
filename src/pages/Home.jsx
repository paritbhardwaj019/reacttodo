import { useState, useEffect } from "react";
import SingleTodo from "../components/SingleTodo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux";

export default function Home() {
  const dispatch = useDispatch();
  const data =
    useSelector((state) => {
      return state.todoReducer;
    }) || [];

  const [input, setInput] = useState({
    isAdded: false,
    input: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(input.input));
    setInput({ ...input, isAdded: true });
    setTimeout(() => {
      setInput({
        ...input,
        input: "",
        isAdded: false,
      });
    }, 1000);
  };
  return (
    <>
      <section className="w-full p-6 bg-white rounded-sm shadow-lg shadow-black/10 mt-10 mb-10">
        <h2 className="font-bold text-2xl text-center">Todo List</h2>
        <form className="flex w-full mt-6 items-center justify-center">
          <input
            type="text"
            placeholder="Walk The Dog"
            className="w-full py-1 outline-none bg-slate-100 px-2 rounded-tl-md rounded-bl-md"
            value={input.input}
            onChange={(e) => setInput({ ...input, input: e.target.value })}
          />
          <button
            className="px-4 py-1 bg-violet-600 text-white font-semibold rounded-tr-md rounded-br-md hover:bg-violet-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        {input.isAdded && input.input && (
          <p className="text-green-700 font-bold text-xs mt-2">
            ✔️ Success, Task Added
          </p>
        )}
      </section>
      <main className="space-y-4">
        {data.data.map((currElem) => {
          return <SingleTodo key={currElem.id} {...currElem} />;
        })}
      </main>
    </>
  );
}
