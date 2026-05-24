import { useEffect } from "react";
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
  // Initialize global reveal observer for all elements with reveal classes
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with reveal classes
    const revealElements = document.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade",
    );
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    // Also observe elements as they're added to the DOM dynamically
    const mutationObserver = new MutationObserver(() => {
      const newRevealElements = document.querySelectorAll(
        ".reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade",
      );
      newRevealElements.forEach((element) => {
        if (!element.classList.contains("visible")) {
          observer.observe(element);
        }
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
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
