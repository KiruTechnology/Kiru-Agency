import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/kiru-styles.css";
import { SecurityLayout } from "./layouts/SecurityLayout";
import RootLayout from "./layouts/RootLayout";
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  PrivacyPolicy,
  ProjectsPage,
  ServicesPage,
  SignupPage,
  TermsOfService,
} from "./pages";

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
      path: "/",
      element: <SecurityLayout />,
      children: [
        { index: true, path: "terms", element: <TermsOfService /> },
        { path: "privacy", element: <PrivacyPolicy /> },
        // Auth routes
        { path: "login", element: <LoginPage /> },
        { path: "signup", element: <SignupPage /> },
      ],
    },

    // Page 404 - for undefined routes
    { path: "*", element: <NotFoundPage /> },
  ]);

  return <RouterProvider router={kiruRouter} />;
}

export default App;
