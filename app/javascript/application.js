// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from "react"
// import ReactDOM from "react-dom"
import ReactDOM from "react-dom/client";
import AutomationEditor from "./components/AutomationEditor"



document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(document.getElementById("automation-ui"));
  if (root) {
    root.render(<AutomationEditor />);
    // ReactDOM.render(<AutomationEditor />, root)
  }
})
