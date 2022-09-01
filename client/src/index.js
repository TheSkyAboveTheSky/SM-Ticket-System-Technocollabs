import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/main.min.css";
import "./assets/css/theme.css";
import "react-notifications/lib/notifications.css";
import ChatProvider from "./Context/ChatProvider";

import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChatProvider>
      <App />
    </ChatProvider>
  </BrowserRouter>
);
