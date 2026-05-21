import {
  HashRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import KiruTech from "./components/KIRUMAIN";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/kiru-styles.css";
import { SecurityLayout } from "./layouts/SecurityLayout";

function App() {
  const kiruRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "services", element: <ServicesPage /> },
        { path: "projects", element: <ProjectsPage /> },
      ],
    },

    // other pages
    {
      path: "/sec",
      element: <SecurityLayout />,
      children: [
        { index: true, element: <TermsOfService /> },
        { path: "privacy", element: <PrivacyPolicy /> },
        // Auth routes
        { path: "/login", element: <LoginPage /> },
        { path: "/singup", element: <SignupPage /> },
      ],
    },

    // Page 404 - for undefined routes
    { path: "*", element: <NotFoundPage /> },
  ]);

  return <RouterProvider router={kiruRouter} />;
}

export default App;
