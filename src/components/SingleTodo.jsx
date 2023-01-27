import { MdPendingActions, MdDoneOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { IoMdTrash } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux";

export default function SingleTodo({ id, name, isCompleted }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="px-4 py-3 bg-white flex justify-between items-center w-full rounded-sm shadow-lg shadow-black/10 hover:shadow-black/20 ">
      <div className="flex items-center justify-between space-x-3">
        {isCompleted ? (
          <MdDoneOutline className="text-green-700 text-sm" />
        ) : (
          <MdPendingActions className="text-red-700" />
        )}
        <p className="font-semibold text-md">{name}</p>
      </div>
      <div className="flex justify-between items-center space-x-3">
        <Link to={"/" + id}>
          <TbEdit className="cursor-pointer text-green-700 hover:text-green-500" />
        </Link>
        <IoMdTrash
          className="cursor-pointer text-red-900 hover:text-red-700"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
