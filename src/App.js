import './App.css';
import Router from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <>
      <RouterProvider router={Router} />
      <Toaster></Toaster>


    </>
  );
}

export default App;
