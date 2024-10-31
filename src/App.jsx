import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Home/Home";
import AboutMe from "./Home/AboutMe/AboutMe";

import Projects from "./components/Projects/Projects";
import ResumePage from "./components/Resume/ResumePage";
import ContactMe from "./components/ContactMe/ContactMe";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Experience from "./Home/Experience/Experience";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
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
        { path: "skills", element: <Experience /> },
        { path: "contact", element: <ContactMe /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
