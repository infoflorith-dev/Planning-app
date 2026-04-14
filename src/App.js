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

  const [beschikbareHandelingen] = useState([
    "Stokken",
    "Afleveren WP",
    "Opruimen",
    "Stek steken",
    "Tray uitlopen",
    "Kas opruimen",
  ]);

  const [handelingen, setHandelingen] = useState([
    {
      naam: "Stokken",
      vervolg: ["Afleveren WP"],
      mensen: ["Antoaneta Stefanova", "Nataliia Prokhorova"],
      nieuweNaam: "",
      nieuweHandeling: "",
    },
    {
      naam: "Afleveren WP",
      vervolg: ["Opruimen"],
      mensen: ["Saida Assarar"],
      nieuweNaam: "",
      nieuweHandeling: "",
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
    if (!naam) return;

    setHandelingen((prev) =>
      prev.map((h) => {
        const zonderDubbel = h.mensen.filter((persoon) => persoon !== naam);

        if (h.naam === handelingNaam) {
          return {
            ...h,
            mensen: [...zonderDubbel, naam],
            nieuweNaam: "",
          };
        }

        return {
          ...h,
          mensen: zonderDubbel,
        };
      })
    );
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

  function updateNieuweHandeling(handelingNaam, value) {
    setHandelingen((prev) =>
      prev.map((h) =>
        h.naam === handelingNaam ? { ...h, nieuweHandeling: value } : h
      )
    );
  }

  function voegVervolgHandelingToe(handelingNaam, nieuweHandeling) {
    if (!nieuweHandeling) return;

    setHandelingen((prev) =>
      prev.map((h) => {
        if (h.naam !== handelingNaam) return h;
        if (h.vervolg.includes(nieuweHandeling)) {
          return { ...h, nieuweHandeling: "" };
        }

        return {
          ...h,
          vervolg: [...h.vervolg, nieuweHandeling],
          nieuweHandeling: "",
        };
      })
    );
  }

  function verwijderVervolgHandeling(handelingNaam, vervolgNaam) {
    setHandelingen((prev) =>
      prev.map((h) =>
        h.naam === handelingNaam
          ? {
              ...h,
              vervolg: h.vervolg.filter((v) => v !== vervolgNaam),
            }
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

  const nextBlockStyle = {
    marginBottom: "16px",
  };

  const nextTagStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "#eff6ff",
    color: "#1d4ed8",
    padding: "8px 12px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "600",
    marginRight: "8px",
    marginBottom: "8px",
  };

  const nextRemoveStyle = {
    border: "none",
    background: "#dbeafe",
    color: "#1d4ed8",
    borderRadius: "8px",
    padding: "2px 8px",
    cursor: "pointer",
    fontWeight: "700",
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

  return React.createElement(
    "div",
    { style: pageStyle },
    React.createElement(
      "div",
      { style: wrapStyle },
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          { style: headerStyle },
          React.createElement(
            React.Fragment,
            null,
            React.createElement("h1", { style: titleStyle }, "Planning App"),
            React.createElement(
              "p",
              { style: subStyle },
              "Planbord met namen toevoegen en meerdere vervolg handelingen"
            )
          )
        ),
        React.createElement(
          "div",
          { style: gridStyle },
          ...handelingen.map((handeling, index) => {
            const zoekNaam = handeling.nieuweNaam || "";
            const gefilterdeNamen = beschikbareNamen.filter((naam) =>
              naam.toLowerCase().includes(zoekNaam.toLowerCase())
            );

            const zoekVervolg = handeling.nieuweHandeling || "";
            const gefilterdeHandelingen = beschikbareHandelingen.filter(
              (naam) =>
                naam.toLowerCase().includes(zoekVervolg.toLowerCase()) &&
                naam !== handeling.naam
            );

            return React.createElement(
              "div",
              { style: cardStyle, key: index },
              React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  "div",
                  { style: smallLabelStyle },
                  "Handeling"
                ),
                React.createElement(
                  "h2",
                  { style: cardTitleStyle },
                  handeling.naam
                ),
                React.createElement(
                  "div",
                  { style: countStyle },
                  handeling.mensen.length + " mensen"
                ),

                React.createElement(
                  "div",
                  { style: nextBlockStyle },
                  React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                      "div",
                      {
                        style: {
                          ...smallLabelStyle,
                          marginBottom: "10px",
                        },
                      },
                      "Daarna"
                    ),
                    ...handeling.vervolg.map((vervolgNaam, i) =>
                      React.createElement(
                        "span",
                        { style: nextTagStyle, key: i },
                        React.createElement(
                          React.Fragment,
                          null,
                          vervolgNaam,
                          React.createElement(
                            "button",
                            {
                              style: nextRemoveStyle,
                              onClick: () =>
                                verwijderVervolgHandeling(
                                  handeling.naam,
                                  vervolgNaam
                                ),
                            },
                            "✕"
                          )
                        )
                      )
                    )
                  )
                ),

                React.createElement(
                  "div",
                  { style: namesWrapStyle },
                  ...handeling.mensen.map((naam, i) =>
                    React.createElement(
                      "div",
                      { style: personStyle, key: i },
                      React.createElement(
                        React.Fragment,
                        null,
                        React.createElement("span", null, naam),
                        React.createElement(
                          "button",
                          {
                            style: removeButtonStyle,
                            onClick: () => verwijderNaam(handeling.naam, naam),
                          },
                          "✕"
                        )
                      )
                    )
                  )
                ),

                React.createElement(
                  "div",
                  { style: formWrapStyle },
                  React.createElement("input", {
                    type: "text",
                    placeholder: "Zoek medewerker...",
                    value: handeling.nieuweNaam,
                    onChange: (e) =>
                      updateNieuweNaam(handeling.naam, e.target.value),
                    style: searchInputStyle,
                  }),
                  zoekNaam
                    ? React.createElement(
                        "div",
                        { style: resultsStyle },
                        ...(gefilterdeNamen.length > 0
                          ? gefilterdeNamen.slice(0, 8).map((naam, i) =>
                              React.createElement(
                                "div",
                                {
                                  key: i,
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
                                  key: "geen-medewerker",
                                  style: {
                                    padding: "10px 12px",
                                    fontSize: "14px",
                                    color: "#6b7280",
                                  },
                                },
                                "Geen medewerker gevonden"
                              ),
                            ])
                      )
                    : null,
                  React.createElement(
                    "div",
                    { style: hintStyle },
                    "Typ een paar letters en klik op een naam"
                  )
                ),

                React.createElement(
                  "div",
                  {
                    style: {
                      ...formWrapStyle,
                      marginTop: "18px",
                    },
                  },
                  React.createElement("input", {
                    type: "text",
                    placeholder: "Zoek vervolg handeling...",
                    value: handeling.nieuweHandeling,
                    onChange: (e) =>
                      updateNieuweHandeling(handeling.naam, e.target.value),
                    style: searchInputStyle,
                  }),
                  zoekVervolg
                    ? React.createElement(
                        "div",
                        { style: resultsStyle },
                        ...(gefilterdeHandelingen.length > 0
                          ? gefilterdeHandelingen.slice(0, 8).map((naam, i) =>
                              React.createElement(
                                "div",
                                {
                                  key: i,
                                  style: resultItemStyle,
                                  onClick: () =>
                                    voegVervolgHandelingToe(
                                      handeling.naam,
                                      naam
                                    ),
                                },
                                naam
                              )
                            )
                          : [
                              React.createElement(
                                "div",
                                {
                                  key: "geen-handeling",
                                  style: {
                                    padding: "10px 12px",
                                    fontSize: "14px",
                                    color: "#6b7280",
                                  },
                                },
                                "Geen handeling gevonden"
                              ),
                            ])
                      )
                    : null,
                  React.createElement(
                    "div",
                    { style: hintStyle },
                    "Typ een paar letters en klik op een vervolg handeling"
                  )
                )
              )
            );
          })
        )
      )
    )
  );
}
