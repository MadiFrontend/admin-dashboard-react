// import Login from "./features/identity/component/Login";
import { RouterProvider } from "react-router-dom";
import Register from "./features/identity/component/register";
import router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
