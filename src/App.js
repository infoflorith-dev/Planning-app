import React, { useState } from "https://esm.sh/react@18";

export default function App() {
  const [beschikbareNamen] = useState([
    "Antoaneta Stefanova",
    "Nataliia Prokhorova",
    "Yana Prokhorova",
    "Saida Assarar",
    "Ad Arendse",
    "Daniela Ilieva",
    "Plamena Ilieva",
    "Theo Verdooren",
    "Tomasz Surmacz",
  ]);

  const [handelingen, setHandelingen] = useState([
    {
      naam: "Stokken",
      daarna: "Afleveren WP",
      mensen: ["Antoaneta Stefanova", "Nataliia Prokhorova", "Yana Prokhorova"],
      nieuweNaam: "",
    },
    {
      naam: "Afleveren WP",
      daarna: "Opruimen",
      mensen: ["Saida Assarar", "Ad Arendse"],
      nieuweNaam: "",
    },
    {
      naam: "Stek steken",
      daarna: "Tray uitlopen",
      mensen: ["Daniela Ilieva", "Plamena Ilieva"],
      nieuweNaam: "",
    },
    {
      naam: "Tray uitlopen",
      daarna: "Kas opruimen",
      mensen: ["Theo Verdooren"],
      nieuweNaam: "",
    },
  ]);

  function updateNieuweNaam(handelingNaam, value) {
    setHandelingen((prev) =>
      prev.map((h) =>
        h.naam === handelingNaam ? { ...h, nieuweNaam: value } : h
      )
    );
  }

  function voegNaamToeDirect(handelingNaam, naam) {
    setHandelingen((prev) => {
      if (!naam) return prev;

      const naamBestaat = beschikbareNamen.includes(naam);
      if (!naamBestaat) return prev;

      return prev.map((h) => {
        const zonderDubbel = h.mensen.filter((persoon) => persoon !== naam);

        if (h.naam === handelingNaam) {
          const bestaatAl = zonderDubbel.includes(naam);
          return {
            ...h,
            mensen: bestaatAl ? zonderDubbel : [...zonderDubbel, naam],
            nieuweNaam: "",
          };
        }

        return {
          ...h,
          mensen: zonderDubbel,
        };
      });
    });
  }

  function voegNaamToe(handelingNaam) {
    const doelHandeling = handelingen.find((h) => h.naam === handelingNaam);
    if (!doelHandeling) return;

    const naam = (doelHandeling.nieuweNaam || "").trim();
    if (!naam) return;

    voegNaamToeDirect(handelingNaam, naam);
  }

  function verwijderNaam(handelingNaam, naam) {
    setHandelingen((prev) =>
      prev.map((h) =>
        h.naam === handelingNaam
          ? { ...h, mensen: h.mensen.filter((persoon) => persoon !== naam) }
          : h
      )
    );
  }

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
    marginBottom: "16px",
  };

  const personStyle = {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "12px 14px",
    color: "#111827",
    fontSize: "14px",
    fontWeight: "500",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  };

  const removeButtonStyle = {
    border: "none",
    background: "#fee2e2",
    color: "#b91c1c",
    borderRadius: "10px",
    padding: "6px 10px",
    cursor: "pointer",
    fontWeight: "700",
  };

  const formWrapStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "6px",
    position: "relative",
  };

  const searchInputStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    background: "#ffffff",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  const resultsStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    background: "#ffffff",
    maxHeight: "180px",
    overflowY: "auto",
  };

  const resultItemStyle = {
    padding: "10px 12px",
    cursor: "pointer",
    borderBottom: "1px solid #f3f4f6",
    fontSize: "14px",
    color: "#111827",
  };

  const hintStyle = {
    fontSize: "12px",
    color: "#6b7280",
  };

  const addButtonStyle = {
    border: "none",
    background: "#111827",
    color: "#ffffff",
    borderRadius: "12px",
    padding: "10px 12px",
    cursor: "pointer",
    fontWeight: "600",
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
              "Planbord met namen toevoegen en automatisch verplaatsen zonder dubbelen"
            ),
          ]
        ),

        React.createElement(
          "div",
          { style: gridStyle, key: "grid" },
          handelingen.map((handeling, index) => {
            const zoekwaarde = handeling.nieuweNaam || "";
            const gefilterdeNamen = beschikbareNamen.filter((naam) =>
              naam.toLowerCase().includes(zoekwaarde.toLowerCase())
            );

            return React.createElement(
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
                      [
                        React.createElement("span", { key: "name-" + i }, naam),
                        React.createElement(
                          "button",
                          {
                            key: "remove-" + i,
                            style: removeButtonStyle,
                            onClick: () => verwijderNaam(handeling.naam, naam),
                          },
                          "✕"
                        ),
                      ]
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { style: formWrapStyle, key: "form-" + index },
                  [
                    React.createElement("input", {
                      key: "input-" + index,
                      type: "text",
                      placeholder: "Zoek medewerker...",
                      value: handeling.nieuweNaam,
                      onChange: (e) =>
                        updateNieuweNaam(handeling.naam, e.target.value),
                      style: searchInputStyle,
                    }),

                    zoekwaarde
                      ? React.createElement(
                          "div",
                          { style: resultsStyle, key: "results-" + index },
                          gefilterdeNamen.length > 0
                            ? gefilterdeNamen.slice(0, 8).map((naam, i) =>
                                React.createElement(
                                  "div",
                                  {
                                    key: "result-" + i,
                                    style: resultItemStyle,
                                    onClick: () =>
                                      voegNaamToeDirect(handeling.naam, naam),
                                  },
                                  naam
                                )
                              )
                            : [
                                React.createElement(
                                  "div",
                                  {
                                    key: "geen-resultaat",
                                    style: {
                                      padding: "10px 12px",
                                      fontSize: "14px",
                                      color: "#6b7280",
                                    },
                                  },
                                  "Geen medewerker gevonden"
                                ),
                              ]
                        )
                      : null,

                    React.createElement(
                      "div",
                      { style: hintStyle, key: "hint-" + index },
                      "Typ een paar letters en klik op een naam"
                    ),

                    React.createElement(
                      "button",
                      {
                        key: "add-" + index,
                        style: addButtonStyle,
                        onClick: () => voegNaamToe(handeling.naam),
                      },
                      "+ Naam toevoegen"
                    ),
                  ]
                ),
              ]
            );
          })
        ),
      ]
    )
  );
}
