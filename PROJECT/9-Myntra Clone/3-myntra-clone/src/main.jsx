import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import {Provider} from "react-redux";
import myntrastore from "./store/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", 
        element: <Home></Home>,
      },
      {
        path: "/bag",
        element: <Bag></Bag>,
      },
    ],
  },  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntrastore}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
