import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Colleges from "../pages/Colleges";
import Addmission from "../pages/Addmission";
import MyCollege from "../pages/MyCollege";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../components/NotFound";
import CollegeDetails from "../components/CollegeDetails";
import AdmissionForm from "../components/AdmissionForm";
import Profile from "../components/Profile";
import ForgotPassword from "../components/ForgotPassword";
import PrivateRouter from "./PrivateRoute";

// import PrivateRouter from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/addmission",
        element: <Addmission />,
      },
      {
        path: "/admission/:_id",
        element: <AdmissionForm />,
        loader: ({ params }) =>
          fetch(
            `https://college-services-server-ashy.vercel.app/colleges/${params._id}`
          ),
      },
      {
        path: "/mycollege",
        element: <MyCollege />,
      },
      {
        path: "/mycollege/:id",
        element: (
          <PrivateRouter>
            <MyCollege />
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "college/:_id",
        element: (
          <PrivateRouter>
            <CollegeDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://college-services-server-ashy.vercel.app/colleges/${params._id}`
          ),
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword />,
      },
    ],
  },
]);
