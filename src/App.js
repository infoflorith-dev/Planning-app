import React from "https://esm.sh/react@18";

export default function App() {
  const handelingen = [
    {
      naam: "Stokken",
      daarna: "Afleveren WP",
      mensen: ["Antoaneta Stefanova", "Nataliia Prokhorova", "Yana Prokhorova"],
    },
    {
      naam: "Afleveren WP",
      daarna: "Opruimen",
      mensen: ["Saida Assarar", "Ad Arendse"],
    },
    {
      naam: "Stek steken",
      daarna: "Tray uitlopen",
      mensen: ["Daniela Ilieva", "Plamena Ilieva"],
    },
    {
      naam: "Tray uitlopen",
      daarna: "Kas opruimen",
      mensen: ["Theo Verdooren"],
    },
  ];

  const pageStyle = {
    minHeight: "100vh",
    background: "#f3f4f6",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
  };

  const wrapStyle = {
    maxWidth: "1300px",
    margin: "0 auto",
  };

  const headerStyle = {
    background: "#ffffff",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    marginBottom: "24px",
  };

  const titleStyle = {
    margin: "0 0 6px 0",
    fontSize: "32px",
    color: "#111827",
  };

  const subStyle = {
    margin: 0,
    color: "#6b7280",
    fontSize: "15px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  };

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "22px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    border: "1px solid #e5e7eb",
  };

  const cardTitleStyle = {
    margin: "0 0 8px 0",
    fontSize: "22px",
    color: "#111827",
  };

  const smallLabelStyle = {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "6px",
  };

  const countStyle = {
    display: "inline-block",
    background: "#f3f4f6",
    color: "#111827",
    padding: "8px 12px",
    borderRadius: "12px",
    fontWeight: "bold",
    marginBottom: "14px",
  };

  const nextStyle = {
    background: "#eff6ff",
    color: "#1d4ed8",
    padding: "10px 12px",
    borderRadius: "12px",
    fontSize: "14px",
    marginBottom: "16px",
    fontWeight: "600",
  };

  const namesWrapStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const personStyle = {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "12px 14px",
    color: "#111827",
    fontSize: "14px",
    fontWeight: "500",
  };

  return React.createElement(
    "div",
    { style: pageStyle },
    React.createElement(
      "div",
      { style: wrapStyle },
      [
        React.createElement(
          "div",
          { style: headerStyle, key: "header" },
          [
            React.createElement(
              "h1",
              { style: titleStyle, key: "title" },
              "Planning App"
            ),
            React.createElement(
              "p",
              { style: subStyle, key: "sub" },
              "Planbord versie — mensen zien per handeling direct wat de volgende stap is"
            ),
          ]
        ),

        React.createElement(
          "div",
          { style: gridStyle, key: "grid" },
          handelingen.map((handeling, index) =>
            React.createElement(
              "div",
              { style: cardStyle, key: index },
              [
                React.createElement(
                  "div",
                  { style: smallLabelStyle, key: "label-" + index },
                  "Handeling"
                ),
                React.createElement(
                  "h2",
                  { style: cardTitleStyle, key: "title-" + index },
                  handeling.naam
                ),
                React.createElement(
                  "div",
                  { style: countStyle, key: "count-" + index },
                  handeling.mensen.length + " mensen"
                ),
                React.createElement(
                  "div",
                  { style: nextStyle, key: "next-" + index },
                  "Daarna → " + handeling.daarna
                ),
                React.createElement(
                  "div",
                  { style: namesWrapStyle, key: "people-" + index },
                  handeling.mensen.map((naam, i) =>
                    React.createElement(
                      "div",
                      { style: personStyle, key: i },
                      naam
                    )
                  )
                ),
              ]
            )
          )
        ),
      ]
    )
  );
}
