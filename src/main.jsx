import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { UserDetailsProvider } from "./context/UserDetails.jsx";

createRoot(document.getElementById("root")).render(
    <UserDetailsProvider>
    <App />
     </UserDetailsProvider> 
);
