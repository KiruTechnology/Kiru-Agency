import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/HomePage";

// import RootLayout from "./layouts/RootLayout";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import ServicesPage from "./pages/ServicesPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import TermsPage from "./pages/TermsPage"; // your existing file
// import PrivacyPage from "./pages/PrivacyPage"; // your existing file
// import NotFoundPage from "./pages/NotFoundPage";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: "services", element: <ServicesPage /> },
//       { path: "projects", element: <ProjectsPage /> },
//       { path: "terms", element: <TermsPage /> },
//       { path: "privacy", element: <PrivacyPage /> },
//     ],
//   },
//   // Auth pages live OUTSIDE RootLayout (no navbar/footer)
//   { path: "/login", element: <LoginPage /> },
//   { path: "/signup", element: <SignupPage /> },
//   // 404
//   { path: "*", element: <NotFoundPage /> },
// ]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>,
);
