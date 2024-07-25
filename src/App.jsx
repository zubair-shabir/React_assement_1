import React from "react";
import Otp from "./components/otp";
import DragableList from "./components/dragableList";
import DataTable from "./components/dataTable";
import  ChaiIcon  from "./components/chaiIcon";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <Otp /> },{
    path: "/dragableList", element: <DragableList />
},{
    path: "/dataTable", element: <DataTable />
}]);

function App() {
  return (
    <>
     <RouterProvider router={router} />
      
      <ChaiIcon />
    </>
  );
}

export default App;
