import { Provider } from "react-redux";
import { store } from "./redux/store";
import { TeacherProfileLayout } from "./components/TeacherProfileLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/TeacherProfileLayout",
    element: <TeacherProfileLayout />,
  },
]);

// https://reactrouter.com/en/main/start/tutorial#adding-a-router

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
