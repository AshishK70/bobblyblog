import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from './pages/Home';
import Write from './pages/Write';
import Single from './pages/Single';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// using <Outlet method to common the files>
const Layout = () => {
  return(
    <>
    <Navbar />
    <Outlet/>
    <Footer />
    </>
  )
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/write",
        element:<Write/>
      },
      {
        path:"/post/:id",     //as we'll be using id to show a post in single post
        element:<Single/>
      },
      
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="App">
      <div className="container">
      <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
