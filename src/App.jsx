import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Home/Home";
import About from "./components/AboutMe/AboutMe";
import Projects from "./components/ProjectsComponent/Projects";
import ResumePage from "./components/Resume/ResumePage";
import ContactMe from "./components/ContactMe/ContactMe";
import Skills from "./components/Skills/Skills";
import Navbar from "./Home/Navbar/Navbar";
import Footer from "./Home/Footer/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Use Layout here
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
