import React from "https://esm.sh/react@18";

export default function App() {
  return React.createElement(
    "div",
    { style: { padding: "40px", fontFamily: "Arial, sans-serif" } },
    [
      React.createElement("h1", { key: "h1" }, "Planning App"),
      React.createElement("p", { key: "p" }, "Werkt 🔥")
    ]
  );
}
