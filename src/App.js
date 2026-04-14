import React, { useState } from "https://esm.sh/react@18";

export default function App() {
  const [zoek, setZoek] = useState("");

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
      mensen: ["Antoaneta Stefanova", "Nataliia Prokhorova"],
    },
    {
      naam: "Afleveren WP",
      daarna: "Opruimen",
      mensen: ["Saida Assarar"],
    },
  ]);

  function voegNaamToe(handelingNaam, naam) {
    setHandelingen((prev) =>
      prev.map((h) => {
        const zonderDubbel = h.mensen.filter((p) => p !== naam);

        if (h.naam === handelingNaam) {
          return {
            ...h,
            mensen: [...zonderDubbel, naam],
          };
        }

        return {
          ...h,
          mensen: zonderDubbel,
        };
      })
    );
    setZoek("");
  }

  const gefilterdeNamen = beschikbareNamen.filter((naam) =>
    naam.toLowerCase().includes(zoek.toLowerCase())
  );

  return React.createElement(
    "div",
    { style: { padding: "30px", fontFamily: "Arial" } },
    handelingen.map((handeling, index) =>
      React.createElement(
        "div",
        {
          key: index,
          style: {
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
          },
        },
        [
          React.createElement("h2", {}, handeling.naam),
          React.createElement(
            "div",
            {},
            "Daarna → " + handeling.daarna
          ),

          React.createElement(
            "div",
            { style: { marginTop: "10px" } },
            handeling.mensen.map((naam, i) =>
              React.createElement(
                "div",
                { key: i },
                naam
              )
            )
          ),

          React.createElement(
            "div",
            { style: { marginTop: "10px" } },
            [
              React.createElement("input", {
                placeholder: "Zoek medewerker...",
                value: zoek,
                onChange: (e) => setZoek(e.target.value),
                style: {
                  padding: "8px",
                  width: "100%",
                  marginBottom: "10px",
                },
              }),

              React.createElement(
                "div",
                {
                  style: {
                    maxHeight: "120px",
                    overflow: "auto",
                    border: "1px solid #ddd",
                  },
                },
                gefilterdeNamen.map((naam, i) =>
                  React.createElement(
                    "div",
                    {
                      key: i,
                      onClick: () =>
                        voegNaamToe(handeling.naam, naam),
                      style: {
                        padding: "6px",
                        cursor: "pointer",
                        borderBottom: "1px solid #eee",
                      },
                    },
                    naam
                  )
                )
              ),
            ]
          ),
        ]
      )
    )
  );
}
