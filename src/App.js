import React, { useState } from "https://esm.sh/react@18";

export default function App() {
  const [beschikbareNamen] = useState([
    "Su Tran",
    "Richard de Jong",
    "Arnold Dellaert",
    "Johan van Es",
    "Ad Arendse",
    "Tolga Yildiz",
    "Saida Assarar",
    "Lucy Kolodziej",
    "Michel van Gelder",
    "Yodith Mesfin Melese",
    "Colinda van der Steen",
    "Antoaneta Stefanova",
    "Nataliia Prokhorova",
    "Yana Prokhorova",
    "Daniela Ilieva",
    "Plamena Ilieva",
    "Theo Verdooren",
    "Tomasz Surmacz",
    "Wim Snoeij",
    "Jacqueline Borger",
    "Nicolae Sabadas",
    "Aldona Magdziak",
    "Monika Kopka",
    "Gyulten Molla",
    "Aleksi Aleksiev",
    "Plamen Petkov",
    "Silvia Petkova",
    "Isaa Asen",
    "Sevda Asenova",
    "Ayberk Ozturk",
    "Orhan Daud",
    "Albena Stoyanova 1",
    "Gyudzhan Daud",
    "Ralitsa Miteva 1",
    "Mariya Kraycheva 1",
    "Logina Poniewiera 1",
    "Hubert Surmacz",
    "Tetiana Yashchenko",
    "Liliia Chvankova",
    "Emilia Yulianova-Achikyuyrek 1",
    "Pauna Chakarova",
    "Neydin Ibryam",
    "Milena Asenova 1",
    "Vira Rozhok",
    "Krystian Mista",
    "Samet Myumyun",
    "Shukri Rashid",
    "Donka Ivanova 1",
    "Nazmie Sali",
    "Ivan Mitkov 1",
    "Elvan Hashim",
    "Oleksandr Danyliuk",
    "Tundzhay Syuleyman 1",
    "Anastasiia Horban",
    "Hennadii Terziohlo",
    "Artur Bilyi",
    "Halil Myumyun",
    "Ferdun Nazif",
    "Yusein Kirov",
    "Minka Simeonova",
    "Maryna Ivanova",
    "Mariana Alyosheva 1",
    "Maria Mihaylova 1",
    "Olena Kitaieva",
    "Maria Georgieva 1",
    "Andriyana Boykova",
    "Donka Staneva 1",
    "Minka Angelova",
    "Alime Ahmedova",
    "Nurtash Haka",
    "Stefcho Neychev",
    "Diana Voitenko",
    "Patrycja Strozynska",
    "Dzhengiz Aleksiev",
    "Afra Turker",
    "Arturs Sapovals",
    "Selin Dzhambazova",
    "Galya Ivanova",
    "Sevim Kasim",
    "Katya Stoyanova",
    "Ibryam Ibryam",
    "Mirem Molla",
    "Tsvetana Angelova",
    "Mariyana Samuilova",
    "Aneta Ivanova",
    "Myroslava Zhupynas",
    "Krasimir Mihaylov",
    "Angelina Memisheva",
    "Yevhenii Yurchenko",
    "Oleksandr Karmazin",
    "Svitlana Babinina",
    "Maria Kraycheva 1",
    "Ravina Asenova",
    "Mariyana Atanasova",
    "Narin Zhivkova",
    "Slawomir Nyga",
    "Ivan Balzhyk",
    "Halyna Popovych",
    "Atanaska Miteva 1",
    "Stefan Pironkov",
    "Natalia Shevchenko",
    "Zlatka Manusheva 1",
    "Ventsislav Danchev",
    "Nataliia Kormosh",
    "Gyurses Yusmenov",
    "Mariia Ilina",
    "Evdokia Hristova 1",
    "Dimo Mitev",
    "Aneliya Shomova",
    "Valentyn Kovch",
    "Danka Kurteva 1",
    "Oksana Tretiak",
    "Maryna Derevianko",
    "Blahovest Kamennyi",
    "Stefka Yordanova 1",
    "Vitalii Pasmor",
    "Nedka Taneva 1",
    "Zanka Yuliyanova 1",
    "Tonka Toncheva 1",
    "Krasa Angelova 1",
    "Anka Kalaydzhieva 1",
    "Diana Hristova 1",
    "Zina Aleksandova 1",
    "Beye Emin",
    "Katya Dimitrova 1",
    "Daria Popravko",
    "Valeriia Pasmor",
    "Mateusz Makocki",
    "Martyna Pokropska",
    "Tihomira Neykova",
    "Emral Moustafa 1",
    "Demir Velev 1",
    "Galina Ivanova 1",
    "Vasyl Demchuk",
    "Dragomir Dragomirov 1",
    "Minka Todorova",
    "Tetiana Ismailova",
    "Shengyul Nazif",
    "Sevdzhan Durala",
    "Bahar Mehmed",
    "Plamen Valev 1",
    "Iryna Haidychuk",
    "Lilyana Dimitorva 1",
    "Sadaka Ahmed 1",
    "Maria Zheleva",
    "Lesia Kovtun",
    "Ana Todorova 1",
    "Mariana Yanakieva 1",
    "Nedka Ilieva 1",
    "Rusana Mihova 1",
    "Kiril Kirilov 1",
    "Gyunay Todorov",
    "Yana Prokhorova",
    "Maria Mihova 1",
    "Angel Mihov 1",
    "Tanya Taneva 1",
    "Larysa Korzh",
    "Gergina Dobreva 1",
    "Stefka Hristova 1",
    "Nadiia Voloshyna",
    "Tasim Ekpem",
    "Radka Koleva 1",
    "Yanko Stefanov 1",
    "Liliia Tewrziohlo",
    "Asya Ahmed",
    "Iliyan Raychinov",
    "Rubie Isuf",
    "Mihail Iliev 1",
    "Petranka Ilieva 1",
    "Anastasiia Zaiets",
    "Ivanka Kurteva 1",
    "Vladimir Tashev",
    "Zhelyazka Asenova 1",
    "Dmytro Kozel",
    "Myhailo Tsaryk",
    "Pardos Alexandru",
    "Oleh Pavlovych",
    "Natalia Horobets",
    "Olha Letsyk",
    "Volodymyr Retivov",
    "Stanimira Tasheva",
    "Ivelin Todorov",
    "Gabriel Lepadatu",
    "Lev Bilous",
    "Hristina Nikolova 1",
    "Anastasiia Martysevych",
    "Petrica Pardos",
    "Donka Kraycheva 1",
    "Sergey Hristov 1",
    "Radka Dimitrova 1",
    "Galina Stefanova",
    "Vizhdan Myumyun",
    "Tundzhay Yusein",
    "Aysel Mahmud",
    "Tinka Georgieva",
    "Ferdi Syuleyman",
    "Diana Yordanova 1",
    "Minka Yordanova 1",
    "Asen Aleksandrov 1",
    "Aleksandar Dimitrov",
    "Velichko Neykov 1",
    "Sabka Asenova 1",
    "Zhana Ruseva 1",
    "Asen Salimov 1",
    "Tsvetelina (T.B.) Angelova",
    "Okan Ahmed",
    "Galya Andrevaa",
    "Aneta Mihaylova 1",
    "Hristo Kirilov 1",
    "Kiril Yordanov 1",
    "Sabka Lukova 1",
    "Zhivko Stamatov 1",
    "Tihomira Atanasova",
    "Dancho Dimov 1",
    "Tsvetana Mustafova",
    "Serhii Konstantynov",
    "Tsonka Decheva 1",
    "Yordan Yordanov 1",
    "Angel Angelov 1",
    "Pavlina Georgieva 1",
    "Minka Karaivanova 1",
    "Svitlana Burlachenko",
    "Svitlana Binat",
    "Tetiana Podoliaka",
    "Stefan Stefanov 1",
    "Stefan Vasilev 1",
    "Velyo Velev 1",
    "Vasil Atanasov 1",
    "Radka Karailieva 1",
    "Nataliia Dmytriv",
    "Ivan Babenko",
    "Nadiia Babenko",
    "Roman Melnyk",
    "Leny van der Lugt",
    "Violeta Trifonova 1",
    "Kerem Guven",
    "Yanko Trifonov",
    "Kiril Iliev",
    "Svitlana Furman",
    "Mehmet Imamoglu ( Chauffeur van Erik )",
    "Radoslav Yakimov",
    "Angel Mihov 1",
    "Mehmet Yoztyurk",
    "Minka Ilieva 1",
    "Petar Ognyanov 1",
    "Vyara Yakimova",
    "Temenuzhka Yankova 1",
    "Georgi Dimitrov 1",
    "Antonia Doncheva 1",
    "Ntenis Ramadan Oglou 1",
    "Hazel Kadir",
    "Tzaner Chousein Oglou 1",
    "Petar Petrov",
    "Metin Mahmud",
    "Orhan Demirdzhi",
    "Selver Sadula",
    "Szymon Petrikow",
    "Gyuray Shimshek",
    "Sabrie Muradova",
    "Rasim Hashim",
    "Ridvan Yumer",
    "Elis Ismailova",
    "Sezer Ulyanov",
    "Joanna Monika Wielg",
    "Kateryna Klimakova",
    "Viktoriia Shpytsia",
    "Albena Stoyanova",
    "Galina Stoyanova",
    "Ana Stoyanova",
    "Milko Mihaylov",
    "Asen Nedelchev 1",
    "Asen Georgiev 1",
    "Liubov Parfan",
    "Yuliyan Stefanov 1",
    "Sibel Nedzhipova",
    "Ramis Tatar",
    "Lyudmila Dobreva",
    "Kalcho Stefanov",
    "Plamen Petrov",
    "Emi Yusmenova",
    "Ahmed Ahmedov",
    "Aygyun Denislavov",
    "Yusein Yuliyanov",
    "Nefize Dedeoglu",
    "Galya Marinova",
    "Andrii Ilkiv",
    "Boryana Hristova 1",
    "Tatjana Grigorjeva",
    "Mustafa Mustafa",
    "Iskra Simeonova",
    "Pervin Halibryam",
    "Larysa Kolesnikova",
    "Tsvetelina Ivanova 1",
    "Vasilka Hristova",
    "Ebru Ibramova",
    "Ewelina Szemraj",
    "Iliyan Iliev",
    "Katya Taneva",
    "Gheorhian Dumitru",
    "Hanna Ostapenko",
    "Mira Ivanova",
    "Melekber Yuzeir",
    "Uliana Kopysytnska",
    "Marta Fedyk",
    "Ali Karaaslan",
    "Ramazan Doǧrusöz",
    "Petra Kaptein",
    "Jowan Klok",
    "Ivan Ivanov",
    "Roos van der Arend",
    "Rumyana Asenova",
    "Toshko Iliev",
    "Vanesa Viktorova",
    "Dmytro Kulyniak",
    "Ivan Stefanov",
    "Yana Chumachenko",
    "Ivan Ivanov 1",
    "Ivanna Bak",
    "Iryna Morozova",
    "Shinka Miteva",
    "Mitko Mitkov",
    "Pol Kolev",
    "Nataliia Prokhorova",
    "Myumyune Osman",
    "Yana Prokhorova",
    "Albena Ivanova 1",
    "Ana Angelova 1",
    "Ganka Andreeva 1",
    "Maksym Nimas",
    "Oleksandr Ostapenko",
    "Zlatka Singh 1",
    "Nadzhie Yashar 1",
    "Atanas Atanasov 1",
    "Irek Kleban",
    "Diana Ilkiv",
    "Ahmed Ali",
    "Serhii Shemchuk",
    "Adrianna Bronislawa Magdziak",
    "Iliyan Asenov",
    "Natalia Marinova",
    "Liliia Kolisnyk",
    "Silvestar Kirilov",
    "Antoaneta Stefanova"
  ]);

  const [beschikbareHandelingen] = useState([
    { code: "1", naam: "Looptijd" },
    { code: "2", naam: "Flo tray handeling" },
    { code: "3", naam: "Flo inboeten hand" },
    { code: "4", naam: "Flo inboeten mach" },
    { code: "5", naam: "Flo overig" },
    { code: "6", naam: "Flo teelt" },
    { code: "7", naam: "Flo aansturing" },
    { code: "8", naam: "Flo kwaliteit" },
    { code: "9", naam: "Flo opknappen" },
    { code: "10", naam: "Flo toppen" },
    { code: "11", naam: "Flo admin" },
    { code: "12", naam: "Flo afleveren" },
    { code: "13", naam: "Flo voorb afleveren" },
    { code: "21", naam: "Fust schoon" },
    { code: "22", naam: "Schoonmaken" },
    { code: "23", naam: "V dompelen" },
    { code: "24", naam: "Stokken verven" },
    { code: "25", naam: "Hal" },
    { code: "26", naam: "Ondersteunend" },
    { code: "27", naam: "Folie leggen" },
    { code: "39", naam: "Zaaien Pit/Plug" },
    { code: "40", naam: "Zaaien" },
    { code: "41", naam: "Zaaien Pit/Pot" },
    { code: "42", naam: "Tray Uitvloeren" },
    { code: "43", naam: "Zaailingen Sorteren" },
    { code: "44", naam: "Zaailing Sort Machi" },
    { code: "45", naam: "Enten" },
    { code: "46", naam: "Entmachine" },
    { code: "47", naam: "Tray Omrijden WP" },
    { code: "48", naam: "Stnw Uitvl" },
    { code: "49", naam: "Kokos/perl Uitvl" },
    { code: "50", naam: "Stnw Ingieten" },
    { code: "51", naam: "Tray Inspoelen" },
    { code: "52", naam: "Oppot" },
    { code: "53", naam: "Correctie Oppotten" },
    { code: "54", naam: "Toppen" },
    { code: "55", naam: "Correctie Toppen" },
    { code: "56", naam: "Stokken" },
    { code: "57", naam: "Stokken mach" },
    { code: "58", naam: "Correctie Stokken" },
    { code: "59", naam: "Uitzetten WP mach" },
    { code: "60", naam: "Uitzetten WP hand" },
    { code: "61", naam: "Correctie Uitzetten" },
    { code: "63", naam: "Dieven" },
    { code: "64", naam: "Bladplukken" },
    { code: "65", naam: "Wijderzetten" },
    { code: "66", naam: "Stiek" },
    { code: "67", naam: "Clippen" },
    { code: "68", naam: "Clippen/stiek aangenomen" },
    { code: "69", naam: "Afleveren WP" },
    { code: "70", naam: "Overig WP" },
    { code: "71", naam: "Inboeten" },
    { code: "72", naam: "Bladplukken EXTRA" },
    { code: "73", naam: "Dieven EXTRA" },
    { code: "74", naam: "Clippen/stiek aangenomen EXTRA" },
    { code: "75", naam: "Stokken EXTRA" },
    { code: "100", naam: "Stek steken" },
    { code: "101", naam: "Oppot potplant" },
    { code: "102", naam: "Omrijden extra" },
    { code: "103", naam: "Maaien HG" },
    { code: "104", naam: "Toppen HG" },
    { code: "105", naam: "Omrijden HG" },
    { code: "106", naam: "Inpakken kas" },
    { code: "107", naam: "Inpak callistephus" },
    { code: "108", naam: "Afleveren hal" },
    { code: "109", naam: "Overig HG" },
    { code: "110", naam: "Uitzetten HG mach" },
    { code: "111", naam: "Uitzetten HG hand" },
    { code: "120", naam: "Kool zaaien" },
    { code: "121", naam: "Kool tray handeling" },
    { code: "122", naam: "Kool naar buiten" },
    { code: "123", naam: "Maaien kool" },
    { code: "124", naam: "Afleveren kool" },
    { code: "125", naam: "Kool tray uitkloppen" },
    { code: "126", naam: "Rekken repareren" },
    { code: "127", naam: "Kool overig" },
    { code: "149", naam: "Bedrijfskantoor" },
    { code: "150", naam: "Kantoor" },
    { code: "151", naam: "Onderhoud" },
    { code: "152", naam: "Teelt" },
    { code: "153", naam: "Extern" },
    { code: "154", naam: "Chauffeur" },
    { code: "155", naam: "Klant" },
    { code: "156", naam: "WPK Chauffeur" },
    { code: "157", naam: "Kant/ Kanti schoonm" },
    { code: "158", naam: "Overige" },
    { code: "159", naam: "Verkoop" },
    { code: "160", naam: "Management" },
    { code: "161", naam: "Vestigingsleiding" },
    { code: "162", naam: "Training" },
    { code: "163", naam: "Gaas bevestigen" },
    { code: "164", naam: "Led lampen" },
    { code: "165", naam: "Directie" }
  ]);

  const [handelingen, setHandelingen] = useState([
    {
      handeling: { code: "56", naam: "Stokken" },
      vervolg: [{ code: "69", naam: "Afleveren WP" }],
      mensen: ["Antoaneta Stefanova", "Nataliia Prokhorova"],
      nieuweNaam: "",
      nieuweHandeling: ""
    },
    {
      handeling: { code: "69", naam: "Afleveren WP" },
      vervolg: [{ code: "70", naam: "Overig WP" }],
      mensen: ["Saida Assarar"],
      nieuweNaam: "",
      nieuweHandeling: ""
    }
  ]);

  function formatHandeling(handeling) {
    return `[${handeling.code}] ${handeling.naam}`;
  }

  function updateNieuweNaam(handelingCode, value) {
    setHandelingen((prev) =>
      prev.map((h) =>
        h.handeling.code === handelingCode ? { ...h, nieuweNaam: value } : h
      )
    );
  }

  function voegNaamToeDirect(handelingCode, naam) {
    if (!naam) return;

    setHandelingen((prev) =>
      prev.map((h) => {
        const zonderDubbel = h.mensen.filter((persoon) => persoon !== naam);

        if (h.handeling.code === handelingCode) {
          return {
            ...h,
            mensen: [...zonderDubbel, naam],
            nieuweNaam: ""
          };
        }

        return {
          ...h,
          mensen: zonderDubbel
        };
      })
    );
  }

  function verwijderNaam(handelingCode, naam) {
    setHandelingen((prev) =>
      prev.map((h) =>
        h.handeling.code === handelingCode
          ? { ...h, mensen: h.mensen.filter((persoon) => persoon !== naam) }
          : h
      )
    );
  }

  function updateNieuweHandeling(handelingCode, value) {
    setHandelingen((prev) =>
      prev.map((h) =>
        h.handeling.code === handelingCode ? { ...h, nieuweHandeling: value } : h
      )
    );
  }

  function voegVervolgHandelingToe(handelingCode, nieuweHandeling) {
    if (!nieuweHandeling) return;

    setHandelingen((prev) =>
      prev.map((h) => {
        if (h.handeling.code !== handelingCode) return h;
        if (h.vervolg.some((v) => v.code === nieuweHandeling.code)) {
          return { ...h, nieuweHandeling: "" };
        }

        return {
          ...h,
          vervolg: [...h.vervolg, nieuweHandeling],
          nieuweHandeling: ""
        };
      })
    );
  }

  function verwijderVervolgHandeling(handelingCode, vervolgCode) {
    setHandelingen((prev) =>
      prev.map((h) =>
        h.handeling.code === handelingCode
          ? {
              ...h,
              vervolg: h.vervolg.filter((v) => v.code !== vervolgCode)
            }
          : h
      )
    );
  }

  const pageStyle = {
    minHeight: "100vh",
    background: "#f3f4f6",
    padding: "24px",
    fontFamily: "Arial, sans-serif"
  };

  const wrapStyle = {
    maxWidth: "1300px",
    margin: "0 auto"
  };

  const headerStyle = {
    background: "#ffffff",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    marginBottom: "24px"
  };

  const titleStyle = {
    margin: "0 0 6px 0",
    fontSize: "32px",
    color: "#111827"
  };

  const subStyle = {
    margin: 0,
    color: "#6b7280",
    fontSize: "15px"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px"
  };

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "22px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    border: "1px solid #e5e7eb"
  };

  const cardTitleStyle = {
    margin: "0 0 8px 0",
    fontSize: "22px",
    color: "#111827"
  };

  const smallLabelStyle = {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "6px"
  };

  const countStyle = {
    display: "inline-block",
    background: "#f3f4f6",
    color: "#111827",
    padding: "8px 12px",
    borderRadius: "12px",
    fontWeight: "bold",
    marginBottom: "14px"
  };

  const nextBlockStyle = {
    marginBottom: "16px"
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
    marginBottom: "8px"
  };

  const nextRemoveStyle = {
    border: "none",
    background: "#dbeafe",
    color: "#1d4ed8",
    borderRadius: "8px",
    padding: "2px 8px",
    cursor: "pointer",
    fontWeight: "700"
  };

  const namesWrapStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "16px"
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
    gap: "10px"
  };

  const removeButtonStyle = {
    border: "none",
    background: "#fee2e2",
    color: "#b91c1c",
    borderRadius: "10px",
    padding: "6px 10px",
    cursor: "pointer",
    fontWeight: "700"
  };

  const formWrapStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "6px"
  };

  const searchInputStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    background: "#ffffff",
    fontSize: "14px",
    boxSizing: "border-box"
  };

  const resultsStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    background: "#ffffff",
    maxHeight: "180px",
    overflowY: "auto"
  };

  const resultItemStyle = {
    padding: "10px 12px",
    cursor: "pointer",
    borderBottom: "1px solid #f3f4f6",
    fontSize: "14px",
    color: "#111827"
  };

  const hintStyle = {
    fontSize: "12px",
    color: "#6b7280"
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
          ...handelingen.map((item, index) => {
            const zoekNaam = item.nieuweNaam || "";
            const gefilterdeNamen = beschikbareNamen.filter((naam) =>
              naam.toLowerCase().includes(zoekNaam.toLowerCase())
            );

            const zoekVervolg = item.nieuweHandeling || "";
            const gefilterdeHandelingen = beschikbareHandelingen.filter(
              (handelingOptie) =>
                `${handelingOptie.code} ${handelingOptie.naam}`
                  .toLowerCase()
                  .includes(zoekVervolg.toLowerCase()) &&
                handelingOptie.code !== item.handeling.code
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
                  formatHandeling(item.handeling)
                ),
                React.createElement(
                  "div",
                  { style: countStyle },
                  item.mensen.length + " mensen"
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
                          marginBottom: "10px"
                        }
                      },
                      "Daarna"
                    ),
                    ...item.vervolg.map((vervolgItem, i) =>
                      React.createElement(
                        "span",
                        { style: nextTagStyle, key: i },
                        React.createElement(
                          React.Fragment,
                          null,
                          formatHandeling(vervolgItem),
                          React.createElement(
                            "button",
                            {
                              style: nextRemoveStyle,
                              onClick: () =>
                                verwijderVervolgHandeling(
                                  item.handeling.code,
                                  vervolgItem.code
                                )
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
                  ...item.mensen.map((naam, i) =>
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
                            onClick: () =>
                              verwijderNaam(item.handeling.code, naam)
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
                    value: item.nieuweNaam,
                    onChange: (e) =>
                      updateNieuweNaam(item.handeling.code, e.target.value),
                    style: searchInputStyle
                  }),
                  zoekNaam
                    ? React.createElement(
                        "div",
                        { style: resultsStyle },
                        ...(gefilterdeNamen.length > 0
                          ? gefilterdeNamen.slice(0, 20).map((naam, i) =>
                              React.createElement(
                                "div",
                                {
                                  key: i,
                                  style: resultItemStyle,
                                  onClick: () =>
                                    voegNaamToeDirect(item.handeling.code, naam)
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
                                    color: "#6b7280"
                                  }
                                },
                                "Geen medewerker gevonden"
                              )
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
                      marginTop: "18px"
                    }
                  },
                  React.createElement("input", {
                    type: "text",
                    placeholder: "Zoek vervolg handeling of code...",
                    value: item.nieuweHandeling,
                    onChange: (e) =>
                      updateNieuweHandeling(item.handeling.code, e.target.value),
                    style: searchInputStyle
                  }),
                  zoekVervolg
                    ? React.createElement(
                        "div",
                        { style: resultsStyle },
                        ...(gefilterdeHandelingen.length > 0
                          ? gefilterdeHandelingen.slice(0, 8).map((handelingOptie, i) =>
                              React.createElement(
                                "div",
                                {
                                  key: i,
                                  style: resultItemStyle,
                                  onClick: () =>
                                    voegVervolgHandelingToe(
                                      item.handeling.code,
                                      handelingOptie
                                    )
                                },
                                formatHandeling(handelingOptie)
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
                                    color: "#6b7280"
                                  }
                                },
                                "Geen handeling gevonden"
                              )
                            ])
                      )
                    : null,
                  React.createElement(
                    "div",
                    { style: hintStyle },
                    "Typ code of naam en klik op een vervolg handeling"
                  )
                )
              )
            );
          })
        )
      )
    )
  );
}import React, { useState } from "https://esm.sh/react@18";

export default function App() {
  const [beschikbareNamen] = useState([
    "Su Tran",
    "Richard de Jong",
    "Arnold Dellaert",
    "Johan van Es",
    "Ad Arendse",
    "Tolga Yildiz",
    "Saida Assarar",
    "Lucy Kolodziej",
    "Michel van Gelder",
    "Yodith Mesfin Melese",
    "Colinda van der Steen",
    "Antoaneta Stefanova",
    "Nataliia Prokhorova",
    "Yana Prokhorova",
    "Daniela Ilieva",
    "Plamena Ilieva",
    "Theo Verdooren",
    "Tomasz Surmacz",
    "Wim Snoeij",
    "Jacqueline Borger",
    "Nicolae Sabadas",
    "Aldona Magdziak",
    "Monika Kopka",
    "Gyulten Molla",
    "Aleksi Aleksiev",
    "Plamen Petkov",
    "Silvia Petkova",
    "Isaa Asen",
    "Sevda Asenova",
    "Ayberk Ozturk",
    "Orhan Daud",
    "Albena Stoyanova 1",
    "Gyudzhan Daud",
    "Ralitsa Miteva 1",
    "Mariya Kraycheva 1",
    "Logina Poniewiera 1",
    "Hubert Surmacz",
    "Tetiana Yashchenko",
    "Liliia Chvankova",
    "Emilia Yulianova-Achikyuyrek 1",
    "Pauna Chakarova",
    "Neydin Ibryam",
    "Milena Asenova 1",
    "Vira Rozhok",
    "Krystian Mista",
    "Samet Myumyun",
    "Shukri Rashid",
    "Donka Ivanova 1",
    "Nazmie Sali",
    "Ivan Mitkov 1",
    "Elvan Hashim",
    "Oleksandr Danyliuk",
    "Tundzhay Syuleyman 1",
    "Anastasiia Horban",
    "Hennadii Terziohlo",
    "Artur Bilyi",
    "Halil Myumyun",
    "Ferdun Nazif",
    "Yusein Kirov",
    "Minka Simeonova",
    "Maryna Ivanova",
    "Mariana Alyosheva 1",
    "Maria Mihaylova 1",
    "Olena Kitaieva",
    "Maria Georgieva 1",
    "Andriyana Boykova",
    "Donka Staneva 1",
    "Minka Angelova",
    "Alime Ahmedova",
    "Nurtash Haka",
    "Stefcho Neychev",
    "Diana Voitenko",
    "Patrycja Strozynska",
    "Dzhengiz Aleksiev",
    "Afra Turker",
    "Arturs Sapovals",
    "Selin Dzhambazova",
    "Galya Ivanova",
    "Sevim Kasim",
    "Katya Stoyanova",
    "Ibryam Ibryam",
    "Mirem Molla",
    "Tsvetana Angelova",
    "Mariyana Samuilova",
    "Aneta Ivanova",
    "Myroslava Zhupynas",
    "Krasimir Mihaylov",
    "Angelina Memisheva",
    "Yevhenii Yurchenko",
    "Oleksandr Karmazin",
    "Svitlana Babinina",
    "Maria Kraycheva 1",
    "Ravina Asenova",
    "Mariyana Atanasova",
    "Narin Zhivkova",
    "Slawomir Nyga",
    "Ivan Balzhyk",
    "Halyna Popovych",
    "Atanaska Miteva 1",
    "Stefan Pironkov",
    "Natalia Shevchenko",
    "Zlatka Manusheva 1",
    "Ventsislav Danchev",
    "Nataliia Kormosh",
    "Gyurses Yusmenov",
    "Mariia Ilina",
    "Evdokia Hristova 1",
    "Dimo Mitev",
    "Aneliya Shomova",
    "Valentyn Kovch",
    "Danka Kurteva 1",
    "Oksana Tretiak",
    "Maryna Derevianko",
    "Blahovest Kamennyi",
    "Stefka Yordanova 1",
    "Vitalii Pasmor",
    "Nedka Taneva 1",
    "Zanka Yuliyanova 1",
    "Tonka Toncheva 1",
    "Krasa Angelova 1",
    "Anka Kalaydzhieva 1",
    "Diana Hristova 1",
    "Zina Aleksandova 1",
    "Beye Emin",
    "Katya Dimitrova 1",
    "Daria Popravko",
    "Valeriia Pasmor",
    "Mateusz Makocki",
    "Martyna Pokropska",
    "Tihomira Neykova",
    "Emral Moustafa 1",
    "Demir Velev 1",
    "Galina Ivanova 1",
    "Vasyl Demchuk",
    "Dragomir Dragomirov 1",
    "Minka Todorova",
    "Tetiana Ismailova",
    "Shengyul Nazif",
    "Sevdzhan Durala",
    "Bahar Mehmed",
    "Plamen Valev 1",
    "Iryna Haidychuk",
    "Lilyana Dimitorva 1",
    "Sadaka Ahmed 1",
    "Maria Zheleva",
    "Lesia Kovtun",
    "Ana Todorova 1",
    "Mariana Yanakieva 1",
    "Nedka Ilieva 1",
    "Rusana Mihova 1",
    "Kiril Kirilov 1",
    "Gyunay Todorov",
    "Yana Prokhorova",
    "Maria Mihova 1",
    "Angel Mihov 1",
    "Tanya Taneva 1",
    "Larysa Korzh",
    "Gergina Dobreva 1",
    "Stefka Hristova 1",
    "Nadiia Voloshyna",
    "Tasim Ekpem",
    "Radka Koleva 1",
    "Yanko Stefanov 1",
    "Liliia Tewrziohlo",
    "Asya Ahmed",
    "Iliyan Raychinov",
    "Rubie Isuf",
    "Mihail Iliev 1",
    "Petranka Ilieva 1",
    "Anastasiia Zaiets",
    "Ivanka Kurteva 1",
    "Vladimir Tashev",
    "Zhelyazka Asenova 1",
    "Dmytro Kozel",
    "Myhailo Tsaryk",
    "Pardos Alexandru",
    "Oleh Pavlovych",
    "Natalia Horobets",
    "Olha Letsyk",
    "Volodymyr Retivov",
    "Stanimira Tasheva",
    "Ivelin Todorov",
    "Gabriel Lepadatu",
    "Lev Bilous",
    "Hristina Nikolova 1",
    "Anastasiia Martysevych",
    "Petrica Pardos",
    "Donka Kraycheva 1",
    "Sergey Hristov 1",
    "Radka Dimitrova 1",
    "Galina Stefanova",
    "Vizhdan Myumyun",
    "Tundzhay Yusein",
    "Aysel Mahmud",
    "Tinka Georgieva",
    "Ferdi Syuleyman",
    "Diana Yordanova 1",
    "Minka Yordanova 1",
    "Asen Aleksandrov 1",
    "Aleksandar Dimitrov",
    "Velichko Neykov 1",
    "Sabka Asenova 1",
    "Zhana Ruseva 1",
    "Asen Salimov 1",
    "Tsvetelina (T.B.) Angelova",
    "Okan Ahmed",
    "Galya Andrevaa",
    "Aneta Mihaylova 1",
    "Hristo Kirilov 1",
    "Kiril Yordanov 1",
    "Sabka Lukova 1",
    "Zhivko Stamatov 1",
    "Tihomira Atanasova",
    "Dancho Dimov 1",
    "Tsvetana Mustafova",
    "Serhii Konstantynov",
    "Tsonka Decheva 1",
    "Yordan Yordanov 1",
    "Angel Angelov 1",
    "Pavlina Georgieva 1",
    "Minka Karaivanova 1",
    "Svitlana Burlachenko",
    "Svitlana Binat",
    "Tetiana Podoliaka",
    "Stefan Stefanov 1",
    "Stefan Vasilev 1",
    "Velyo Velev 1",
    "Vasil Atanasov 1",
    "Radka Karailieva 1",
    "Nataliia Dmytriv",
    "Ivan Babenko",
    "Nadiia Babenko",
    "Roman Melnyk",
    "Leny van der Lugt",
    "Violeta Trifonova 1",
    "Kerem Guven",
    "Yanko Trifonov",
    "Kiril Iliev",
    "Svitlana Furman",
    "Mehmet Imamoglu ( Chauffeur van Erik )",
    "Radoslav Yakimov",
    "Angel Mihov 1",
    "Mehmet Yoztyurk",
    "Minka Ilieva 1",
    "Petar Ognyanov 1",
    "Vyara Yakimova",
    "Temenuzhka Yankova 1",
    "Georgi Dimitrov 1",
    "Antonia Doncheva 1",
    "Ntenis Ramadan Oglou 1",
    "Hazel Kadir",
    "Tzaner Chousein Oglou 1",
    "Petar Petrov",
    "Metin Mahmud",
    "Orhan Demirdzhi",
    "Selver Sadula",
    "Szymon Petrikow",
    "Gyuray Shimshek",
    "Sabrie Muradova",
    "Rasim Hashim",
    "Ridvan Yumer",
    "Elis Ismailova",
    "Sezer Ulyanov",
    "Joanna Monika Wielg",
    "Kateryna Klimakova",
    "Viktoriia Shpytsia",
    "Albena Stoyanova",
    "Galina Stoyanova",
    "Ana Stoyanova",
    "Milko Mihaylov",
    "Asen Nedelchev 1",
    "Asen Georgiev 1",
    "Liubov Parfan",
    "Yuliyan Stefanov 1",
    "Sibel Nedzhipova",
    "Ramis Tatar",
    "Lyudmila Dobreva",
    "Kalcho Stefanov",
    "Plamen Petrov",
    "Emi Yusmenova",
    "Ahmed Ahmedov",
    "Aygyun Denislavov",
    "Yusein Yuliyanov",
    "Nefize Dedeoglu",
    "Galya Marinova",
    "Andrii Ilkiv",
    "Boryana Hristova 1",
    "Tatjana Grigorjeva",
    "Mustafa Mustafa",
    "Iskra Simeonova",
    "Pervin Halibryam",
    "Larysa Kolesnikova",
    "Tsvetelina Ivanova 1",
    "Vasilka Hristova",
    "Ebru Ibramova",
    "Ewelina Szemraj",
    "Iliyan Iliev",
    "Katya Taneva",
    "Gheorhian Dumitru",
    "Hanna Ostapenko",
    "Mira Ivanova",
    "Melekber Yuzeir",
    "Uliana Kopysytnska",
    "Marta Fedyk",
    "Ali Karaaslan",
    "Ramazan Doǧrusöz",
    "Petra Kaptein",
    "Jowan Klok",
    "Ivan Ivanov",
    "Roos van der Arend",
    "Rumyana Asenova",
    "Toshko Iliev",
    "Vanesa Viktorova",
    "Dmytro Kulyniak",
    "Ivan Stefanov",
    "Yana Chumachenko",
    "Ivan Ivanov 1",
    "Ivanna Bak",
    "Iryna Morozova",
    "Shinka Miteva",
    "Mitko Mitkov",
    "Pol Kolev",
    "Nataliia Prokhorova",
    "Myumyune Osman",
    "Yana Prokhorova",
    "Albena Ivanova 1",
    "Ana Angelova 1",
    "Ganka Andreeva 1",
    "Maksym Nimas",
    "Oleksandr Ostapenko",
    "Zlatka Singh 1",
    "Nadzhie Yashar 1",
    "Atanas Atanasov 1",
    "Irek Kleban",
    "Diana Ilkiv",
    "Ahmed Ali",
    "Serhii Shemchuk",
    "Adrianna Bronislawa Magdziak",
    "Iliyan Asenov",
    "Natalia Marinova",
    "Liliia Kolisnyk",
    "Silvestar Kirilov",
    "Antoaneta Stefanova"
  ]);

  const [beschikbareHandelingen] = useState([
    "Looptijd",
    "Flo tray handeling",
    "Flo inboeten hand",
    "Flo inboeten mach",
    "Flo overig",
    "Flo teelt",
    "Flo aansturing",
    "Flo kwaliteit",
    "Flo opknappen",
    "Flo toppen",
    "Flo admin",
    "Flo afleveren",
    "Flo voorb afleveren",
    "Fust schoon",
    "Schoonmaken",
    "V dompelen",
    "Stokken verven",
    "Hal",
    "Ondersteunend",
    "Folie leggen",
    "Zaaien Pit/Plug",
    "Zaaien",
    "Zaaien Pit/Pot",
    "Tray Uitvloeren",
    "Zaailingen Sorteren",
    "Zaailing Sort Machi",
    "Enten",
    "Entmachine",
    "Tray Omrijden WP",
    "Stnw Uitvl",
    "Kokos/perl Uitvl",
    "Stnw Ingieten",
    "Tray Inspoelen",
    "Oppot",
    "Correctie Oppotten",
    "Toppen",
    "Correctie Toppen",
    "Stokken",
    "Stokken mach",
    "Correctie Stokken",
    "Uitzetten WP mach",
    "Uitzetten WP hand",
    "Correctie Uitzetten",
    "Dieven",
    "Bladplukken",
    "Wijderzetten",
    "Stiek",
    "Clippen",
    "Clippen/stiek aangenomen",
    "Afleveren WP",
    "Overig WP",
    "Inboeten",
    "Bladplukken EXTRA",
    "Dieven EXTRA",
    "Clippen/stiek aangenomen EXTRA",
    "Stokken EXTRA",
    "Stek steken",
    "Oppot potplant",
    "Omrijden extra",
    "Maaien HG",
    "Toppen HG",
    "Omrijden HG",
    "Inpakken kas",
    "Inpak callistephus",
    "Afleveren hal",
    "Overig HG",
    "Uitzetten HG mach",
    "Uitzetten HG hand",
    "Kool zaaien",
    "Kool tray handeling",
    "Kool naar buiten",
    "Maaien kool",
    "Afleveren kool",
    "Kool tray uitkloppen",
    "Rekken repareren",
    "Kool overig",
    "Bedrijfskantoor",
    "Kantoor",
    "Onderhoud",
    "Teelt",
    "Extern",
    "Chauffeur",
    "Klant",
    "WPK Chauffeur",
    "Kant/ Kanti schoonm",
    "Overige",
    "Verkoop",
    "Management",
    "Vestigingsleiding",
    "Training",
    "Gaas bevestigen",
    "Led lampen",
    "Directie",
    "Opruimen"
  ]);

  const [handelingen, setHandelingen] = useState([
    {
      naam: "Stokken",
      vervolg: ["Afleveren WP"],
      mensen: ["Antoaneta Stefanova", "Nataliia Prokhorova"],
      nieuweNaam: "",
      nieuweHandeling: ""
    },
    {
      naam: "Afleveren WP",
      vervolg: ["Opruimen"],
      mensen: ["Saida Assarar"],
      nieuweNaam: "",
      nieuweHandeling: ""
    }
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
            nieuweNaam: ""
          };
        }

        return {
          ...h,
          mensen: zonderDubbel
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
          nieuweHandeling: ""
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
              vervolg: h.vervolg.filter((v) => v !== vervolgNaam)
            }
          : h
      )
    );
  }

  const pageStyle = {
    minHeight: "100vh",
    background: "#f3f4f6",
    padding: "24px",
    fontFamily: "Arial, sans-serif"
  };

  const wrapStyle = {
    maxWidth: "1300px",
    margin: "0 auto"
  };

  const headerStyle = {
    background: "#ffffff",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    marginBottom: "24px"
  };

  const titleStyle = {
    margin: "0 0 6px 0",
    fontSize: "32px",
    color: "#111827"
  };

  const subStyle = {
    margin: 0,
    color: "#6b7280",
    fontSize: "15px"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px"
  };

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "22px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    border: "1px solid #e5e7eb"
  };

  const cardTitleStyle = {
    margin: "0 0 8px 0",
    fontSize: "22px",
    color: "#111827"
  };

  const smallLabelStyle = {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "6px"
  };

  const countStyle = {
    display: "inline-block",
    background: "#f3f4f6",
    color: "#111827",
    padding: "8px 12px",
    borderRadius: "12px",
    fontWeight: "bold",
    marginBottom: "14px"
  };

  const nextBlockStyle = {
    marginBottom: "16px"
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
    marginBottom: "8px"
  };

  const nextRemoveStyle = {
    border: "none",
    background: "#dbeafe",
    color: "#1d4ed8",
    borderRadius: "8px",
    padding: "2px 8px",
    cursor: "pointer",
    fontWeight: "700"
  };

  const namesWrapStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "16px"
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
    gap: "10px"
  };

  const removeButtonStyle = {
    border: "none",
    background: "#fee2e2",
    color: "#b91c1c",
    borderRadius: "10px",
    padding: "6px 10px",
    cursor: "pointer",
    fontWeight: "700"
  };

  const formWrapStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "6px"
  };

  const searchInputStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    background: "#ffffff",
    fontSize: "14px",
    boxSizing: "border-box"
  };

  const resultsStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    background: "#ffffff",
    maxHeight: "180px",
    overflowY: "auto"
  };

  const resultItemStyle = {
    padding: "10px 12px",
    cursor: "pointer",
    borderBottom: "1px solid #f3f4f6",
    fontSize: "14px",
    color: "#111827"
  };

  const hintStyle = {
    fontSize: "12px",
    color: "#6b7280"
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
                          marginBottom: "10px"
                        }
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
                                )
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
                            onClick: () => verwijderNaam(handeling.naam, naam)
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
                    style: searchInputStyle
                  }),
                  zoekNaam
                    ? React.createElement(
                        "div",
                        { style: resultsStyle },
                        ...(gefilterdeNamen.length > 0
                          ? gefilterdeNamen.slice(0, 20).map((naam, i) =>
                              React.createElement(
                                "div",
                                {
                                  key: i,
                                  style: resultItemStyle,
                                  onClick: () =>
                                    voegNaamToeDirect(handeling.naam, naam)
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
                                    color: "#6b7280"
                                  }
                                },
                                "Geen medewerker gevonden"
                              )
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
                      marginTop: "18px"
                    }
                  },
                  React.createElement("input", {
                    type: "text",
                    placeholder: "Zoek vervolg handeling...",
                    value: handeling.nieuweHandeling,
                    onChange: (e) =>
                      updateNieuweHandeling(handeling.naam, e.target.value),
                    style: searchInputStyle
                  }),
                  zoekVervolg
                    ? React.createElement(
                        "div",
                        { style: resultsStyle },
                      ...gefilterdeHandelingen.length > 0
  ? gefilterdeHandelingen.slice(0, 8).map((handelingOptie, i) =>
      React.createElement(
        "div",
        {
          key: i,
          style: resultItemStyle,
          onClick: () =>
            voegVervolgHandelingToe(
              item.handeling.code,
              handelingOptie
            )
        },
        formatHandeling(handelingOptie)
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
                                    color: "#6b7280"
                                  }
                                },
                                "Geen handeling gevonden"
                              )
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
