
import useId from "./useId";
import { HomePage } from "../pages/Home";
import { ServisePage} from "../pages/Servise"
import {  ProjectsPage } from "../pages/Projects";
import { AboutPage } from "../pages/About";
export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Asosiy",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <ServisePage />,
    title: "Xizmatlar",
    path: "/servise",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <ProjectsPage />,
    title: "Bizning loyihalar",
    path: "/projects",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <AboutPage />,
    title: "Biz haqimizda",
    path: "/about",
    private: false,
    hidden: false,
  }
//   {
//     id: useId,
//     element: <SigninPage />,
//     title: "Sign In",
//     path: "/signin",
//     private: false,
//     hidden: true,
//   },
//   {
//     id: useId,
//     element: <h1>Sign Up</h1>,
//     title: "Sign Un",
//     path: "/signup",
//     private: false,
//     hidden: true,
//   },
//   {
//     id: useId,
//     element: <HouseItem />,
//     title: "Single House",
//     path: "/proporties/:id",
//     private: false,
//     hidden: true,
//   },
];
