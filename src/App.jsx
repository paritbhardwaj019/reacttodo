import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Edit />,
  },
]);

export default function App() {
  return (
    <div className="bg-slate-200 h-full min-h-screen w-full font-inconsolata flex justify-center transition-shadow">
      <div className="max-w-md w-full relative">
        <RouterProvider router={router} />
        <p className="absolute bottom-0 text-xs w-full text-center ">
          Made with 💔 by{" "}
          <a
            href="https://www.linkedin.com/in/parit-bhardwaj-9918ab262/"
            className="underline text-violet-600"
          >
            Parit Bhardwaj
          </a>
        </p>
      </div>
    </div>
  );
}
