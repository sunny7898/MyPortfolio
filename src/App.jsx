import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Home/Home";
import AboutMe from "./Home/AboutMe/AboutMe";
import Skills from "./Home/Skills/Skills";

import Projects from "./components/ProjectsComponent/Projects";
import ResumePage from "./components/Resume/ResumePage";
import ContactMe from "./components/ContactMe/ContactMe";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <AboutMe /> },
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
