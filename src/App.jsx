import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./layout/Home";
import About from "./components/AboutMe/AboutMe";
import Projects from "./components/ProjectsComponent/Projects";
import ResumePage from "./components/Resume/ResumePage";
import ContactMe from "./components/ContactMe/ContactMe";
import Skills from "./components/Skills/Skills";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Layout wrapper
      children: [
        { index: true, element: <Home /> }, // Home component as default route
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "resume", element: <ResumePage /> },
        { path: "skills", element: <Skills /> },
        { path: "contact", element: <ContactMe /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
