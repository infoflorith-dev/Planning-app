import React, { useState, useEffect } from "https://esm.sh/react@18";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
const supabaseUrl = "https://dgqdhencetroqjbzitfl.supabase.co";
const supabaseKey = "sb_publishable_Su60RGRB8xf-i327v9DLuw_U7YNmvgb";
const supabase = createClient(supabaseUrl, supabaseKey);
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
    "Natalia Marinova","Yusein Ali",
"Ivana Batyiova",
"Andrzej Boczar",
"Monika Chosianna",
"Valentin Dimitrov",
"Genoveva Dimitrova",
"Ahmed Ettahiri moskil",
"Iwona Gudalewska",
"Jaroslaw Gudalewski",
"Krzysztof Kwiecien",
"Lydia Lugt",
"Grzegorz Daniel Mierzwiak",
"Krystyna Pielka",
"Mariusz Redlinski",
"Asie Bilyal", 
"Katarzyna Renata Szot",
    "Liliia Kolisnyk",
    "Silvestar Kirilov",
    "Antoaneta Stefanova"
  ]);
const [overigWerk, setOverigWerk] = useState(() => {
  return localStorage.getItem("planning-overig") || "";
});
  const [isInitialLoadDone, setIsInitialLoadDone] = useState(false);
  const vasteMensen = [
  "Su Tran",
  "Ali Karaaslan",
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
  "Wim Snoeij",
  "Ramazan Doǧrusöz",
  "Jacqueline Borger",
  "Nicolae Sabadas",
  "Aldona Magdziak",
  "Monika Kopka",
  "Petra Kaptein",
  "Jowan Klok",
  "Ivan Ivanov",
  "Gyulten Molla",
  "Aleksi Aleksiev",
  "Plamen Petkov",
  "Silvia Petkova",
  "Roos van der Arend"
];

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

  const [handelingen, setHandelingen] = useState(() => {
    function maakLeegBlokInit() {
      return {
        id: crypto.randomUUID(),
        handeling: { code: "", naam: "" },
        vervolg: [],
        mensen: [],
        extraMensen: 0,
        nieuweNaam: "",
        nieuweHandeling: "",
       zoekHoofdHandeling: "",
klantNaam: ""
       
      };
    }

    function vulAanTotMinimaal12Init(blokken) {
      const resultaat = [...blokken];
      while (resultaat.length < 12) {
        resultaat.push(maakLeegBlokInit());
      }
      return resultaat;
    }

    function normaliseerBlokkenInit(blokken) {
  return blokken.map((blok) => ({
    id: blok.id || crypto.randomUUID(),
    handeling: blok.handeling || { code: "", naam: "" },
    vervolg: Array.isArray(blok.vervolg) ? blok.vervolg : [],
    extraMensen: Number(blok.extraMensen || 0),
    mensen: Array.isArray(blok.mensen) ? blok.mensen : [],
    nieuweNaam: blok.nieuweNaam || "",
    nieuweHandeling: blok.nieuweHandeling || "",
    zoekHoofdHandeling: blok.zoekHoofdHandeling || "",
    klantNaam: blok.klantNaam || ""
  }));
}

    try {
      const opgeslagen = localStorage.getItem("planning-handelingen");
      if (opgeslagen) {
        const parsed = JSON.parse(opgeslagen);
        if (Array.isArray(parsed)) {
          return vulAanTotMinimaal12Init(normaliseerBlokkenInit(parsed));
        }
      }
    } catch (e) {
      console.log("Kon planning niet laden");
    }

    return vulAanTotMinimaal12Init([]);
  });

  function formatHandeling(handeling) {
    if (!handeling || !handeling.code) return "Kies handeling";
    return `[${handeling.code}] ${handeling.naam}`;
  }

  function maakLeegBlok() {
    return {
      id: crypto.randomUUID(),
      handeling: { code: "", naam: "" },
      vervolg: [],
      extraMensen: 0,
      mensen: [],
      nieuweNaam: "",
      nieuweHandeling: "",
     zoekHoofdHandeling: "",
klantNaam: ""
    };
  }

  function vulAanTotMinimaal12(blokken) {
    const resultaat = [...blokken];
    while (resultaat.length < 12) {
      resultaat.push(maakLeegBlok());
    }
    return resultaat;
  }

  function normaliseerBlokken(blokken) {
    return blokken.map((blok) => ({
      id: blok.id || crypto.randomUUID(),
      handeling: blok.handeling || { code: "", naam: "" },
      vervolg: Array.isArray(blok.vervolg) ? blok.vervolg : [],
      extraMensen: Number(blok.extraMensen || 0),
      mensen: Array.isArray(blok.mensen) ? blok.mensen : [],
      nieuweNaam: blok.nieuweNaam || "",
      nieuweHandeling: blok.nieuweHandeling || "",
     zoekHoofdHandeling: blok.zoekHoofdHandeling || "",
klantNaam: blok.klantNaam || ""
    }));
  }

 const kleuren = [
  "#e8f0ff",
  "#e8f8ee",
  "#f1ebff",
  "#fff5dd",
  "#fdebf3",
  "#fff0e8",
  "#e7f9fb",
  "#eaf4ff",
  "#eef8df",
  "#fdeaea"
];

function getCardStyle(index) {
  const kleur = kleuren[index % kleuren.length];
  return {
    background: kleur,
    borderRadius: "24px",
    padding: "20px",
    boxShadow: "0 6px 18px rgba(15,23,42,0.05)",
    border: "1px solid rgba(148,163,184,0.12)"
  };
}
  function getCountStyle(index) {
    const kleur = kleuren[index % kleuren.length];
    return {
      display: "inline-block",
      background: "rgba(255,255,255,0.72)",
      color: "#111827",
      padding: "8px 12px",
      borderRadius: "999px",
      fontWeight: "700",
      marginBottom: "14px",
      border: `1px solid ${kleur}`,
      boxShadow: "0 2px 8px rgba(15,23,42,0.04)"
    };
  }

  function getNextTagStyle(index) {
    const kleur = kleuren[index % kleuren.length];
    return {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
     background: kleur,
      color: "#334155",
      padding: "8px 12px",
      borderRadius: "999px",
      fontSize: "16px",
      fontWeight: "600",
      marginRight: "8px",
      marginBottom: "8px",
      border: `1px solid ${kleur}`,
      boxShadow: "0 2px 8px rgba(15,23,42,0.04)"
    };
  }

  function getPersonStyle(index) {
    const kleur = kleuren[index % kleuren.length];
    return {
     background: kleur,
      border: `1px solid ${kleur}`,
      borderRadius: "16px",
      padding: "12px 14px",
      color: "#111827",
      fontSize: "14px",
      fontWeight: "500",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
      boxShadow: "0 2px 8px rgba(15,23,42,0.04)"
    };
  }

  function getResultsStyle(index) {
    const kleur = kleuren[index % kleuren.length];
    return {
      border: `1px solid ${kleur}`,
      borderRadius: "14px",
     background: kleur,
      maxHeight: "180px",
      overflowY: "auto",
      boxShadow: "0 8px 20px rgba(15,23,42,0.06)"
    };
  }

  function voegHandelingBlokToe() {
    setHandelingen((prev) => [...prev, maakLeegBlok()]);
  }

  function updateZoekHoofdHandeling(blokId, value) {
    setHandelingen((prev) =>
      prev.map((h) =>
        h.id === blokId ? { ...h, zoekHoofdHandeling: value } : h
      )
    );
  }

  function kiesHoofdHandeling(blokId, handelingOptie) {
    setHandelingen((prev) =>
      prev.map((h) =>
        h.id === blokId
          ? {
              ...h,
              handeling: handelingOptie,
              zoekHoofdHandeling: ""
            }
          : h
      )
    );
  }

  function updateNieuweNaam(blokId, value) {
    setHandelingen((prev) =>
      prev.map((h) =>
        h.id === blokId ? { ...h, nieuweNaam: value } : h
      )
    );
  }

  function voegNaamToeDirect(blokId, naam) {
    if (!naam) return;

    setHandelingen((prev) =>
      prev.map((h) => {
        const zonderDubbel = h.mensen.filter((persoon) => persoon !== naam);

        if (h.id === blokId) {
          return {
            ...h,
            mensen: zonderDubbel.includes(naam)
              ? zonderDubbel
              : [...zonderDubbel, naam],
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

  function verwijderNaam(blokId, naam) {
    setHandelingen((prev) =>
      prev.map((h) =>
        h.id === blokId
          ? { ...h, mensen: h.mensen.filter((persoon) => persoon !== naam) }
          : h
      )
    );
  }
function updateExtraMensen(blokId, value) {
  const nummer = Math.max(0, Number(value) || 0);

  setHandelingen((prev) =>
    prev.map((h) =>
      h.id === blokId ? { ...h, extraMensen: nummer } : h
    )
  );
}
  function updateNieuweHandeling(blokId, value) {
    setHandelingen((prev) =>
      prev.map((h) =>
        h.id === blokId ? { ...h, nieuweHandeling: value } : h
      )
    );
  }
function updateKlantNaam(blokId, value) {
  setHandelingen((prev) =>
    prev.map((h) =>
      h.id === blokId ? { ...h, klantNaam: value } : h
    )
  );
}
  function voegVervolgHandelingToe(blokId, nieuweHandeling) {
    if (!nieuweHandeling) return;

       setHandelingen((prev) =>
      prev.map((h) => {
        if (h.id !== blokId) return h;
        if (h.vervolg.some((v) => (v.handeling || v).code === nieuweHandeling.code)) {
          return { ...h, nieuweHandeling: "" };
        }

        return {
          ...h,
          vervolg: [
            ...h.vervolg,
            {
              handeling: nieuweHandeling,
              klantNaam: ""
            }
          ],
          nieuweHandeling: ""
        };
      })
    );
  }

  function verwijderVervolgHandeling(blokId, vervolgCode) {
  setHandelingen((prev) =>
    prev.map((h) =>
      h.id === blokId
        ? {
            ...h,
            vervolg: h.vervolg.filter(
              (v) => (v.handeling || v).code !== vervolgCode
            )
          }
        : h
    )
  );
}

function updateVervolgKlantNaam(blokId, vervolgCode, value) {
  setHandelingen((prev) =>
    prev.map((h) =>
      h.id === blokId
        ? {
            ...h,
            vervolg: h.vervolg.map((v) =>
              (v.handeling || v).code === vervolgCode
                ? { ...v, klantNaam: value }
                : v
            )
          }
        : h
    )
  );
}
  function verwijderBlok(blokId) {
    setHandelingen((prev) => {
      const over = prev.filter((h) => h.id !== blokId);
      return vulAanTotMinimaal12(over);
    });
  }
useEffect(() => {
  async function laadPlanning() {
    const { data, error } = await supabase
      .from("planning_app")
      .select("*")
      .eq("id", "main")
      .single();

    if (!error && data && data.data) {
      if (data.data.handelingen) {
        setHandelingen(
          vulAanTotMinimaal12(
            normaliseerBlokken(data.data.handelingen)
          )
        );
      }

      if (typeof data.data.overigWerk === "string") {
        setOverigWerk(data.data.overigWerk);
      }
    }

    setIsInitialLoadDone(true);
  }

  laadPlanning();
}, []);

useEffect(() => {
  if (!isInitialLoadDone) return;

  async function bewaarPlanning() {
    const payload = {
      handelingen: normaliseerBlokken(handelingen),
      overigWerk
    };

    const { error } = await supabase
      .from("planning_app")
      .upsert(
        {
          id: "main",
          data: payload,
          updated_at: new Date().toISOString()
        },
        { onConflict: "id" }
      );

    if (error) {
      console.log("Supabase opslaan mislukt:", error.message);
    }
  }

  bewaarPlanning();

  try {
    localStorage.setItem(
      "planning-handelingen",
      JSON.stringify(normaliseerBlokken(handelingen))
    );
    localStorage.setItem("planning-overig", overigWerk);
  } catch (e) {
    console.log("Opslaan mislukt");
  }
}, [handelingen, overigWerk, isInitialLoadDone]);

  function berekenTotaalUitzend(handelingen) {
  return handelingen.reduce((totaal, item) => {
    const aantal = item.mensen
      .filter((naam) => !vasteMensen.includes(naam))
      .length;

    return totaal + aantal + (item.extraMensen || 0);
  }, 0);
}
function maakUitzendLijst(handelingen) {
  const namenSet = new Set();
  let extraTotaal = 0;

  handelingen.forEach((item) => {
    const uitzend = item.mensen.filter(
      (naam) => !vasteMensen.includes(naam)
    );

    uitzend.forEach((naam) => namenSet.add(naam));

    extraTotaal += item.extraMensen || 0;
  });

  return {
    namen: Array.from(namenSet).sort(),
    extra: extraTotaal
  };
}

function maakHandelingTelling(handelingen) {
  const tellingen = {};

  handelingen.forEach((item) => {
    if (!item.handeling || !item.handeling.code) return;

    const sleutel = item.handeling.code;
    const naam = `${formatHandeling(item.handeling)}${item.klantNaam ? " - " + item.klantNaam : ""}`;
    const aantal =
      item.mensen.filter((naam) => !vasteMensen.includes(naam)).length +
      (item.extraMensen || 0);

    if (!tellingen[sleutel]) {
      tellingen[sleutel] = {
        handeling: naam,
        aantal: 0
      };
    }

    tellingen[sleutel].aantal += aantal;
  });

 return Object.values(tellingen)
  .filter((item) => item.aantal > 0)
  .sort((a, b) => b.aantal - a.aantal);
}
 function getVandaag() {
  const d = new Date();
  d.setDate(d.getDate() + 1);

  const weekdag = d.toLocaleDateString("nl-NL", { weekday: "long" });
  const weekdagMetHoofdletter =
    weekdag.charAt(0).toUpperCase() + weekdag.slice(1);

  const dag = String(d.getDate()).padStart(2, "0");
  const maand = String(d.getMonth() + 1).padStart(2, "0");
  const jaar = d.getFullYear();

  return `${weekdagMetHoofdletter} ${dag}-${maand}-${jaar}`;
}
function mailUitzendLijst() {
  const lijst = maakUitzendLijst(handelingen);

  const onderwerp = `Uitzendlijst - ${getVandaag()}`;

  const regels = [
    `Uitzendkrachten - ${getVandaag()}`,
    ``,
    ...lijst.namen.map((naam) => `- ${naam}`),
    ``,
    `Extra mensen: ${lijst.extra}`,
    `Totaal mensen: ${lijst.namen.length + lijst.extra}`
  ];

  const body = regels.join("\n");

  const mailto = `mailto:?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
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

const topButtonStyle = {
  border: "none",
  background: "#111827",
  color: "#ffffff",
  borderRadius: "12px",
  padding: "12px 16px",
  cursor: "pointer",
  fontWeight: "600"
};

const printButtonStyle = {
  border: "none",
  background: "#2563eb",
  color: "#ffffff",
  borderRadius: "12px",
  padding: "12px 16px",
  cursor: "pointer",
  fontWeight: "600",
  marginLeft: "10px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
  alignItems: "start"
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

const hoofdHandelingWrapStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginBottom: "16px"
};

const nextBlockStyle = {
  marginBottom: "16px"
};

const nextRemoveStyle = {
  border: "none",
  background: "#eff6ff",
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

const removeButtonStyle = {
  border: "none",
  background: "#fff5f5",
  color: "#b91c1c",
  borderRadius: "10px",
  padding: "6px 10px",
  cursor: "pointer",
  fontWeight: "700",
  boxShadow: "0 2px 8px rgba(185,28,28,0.08)"
};

const formWrapStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "6px"
};

const searchInputStyle = {
  width: "100%",
  padding: "11px 13px",
  borderRadius: "14px",
  border: "1px solid rgba(203,213,225,0.9)",
  background: "rgba(255,255,255,0.92)",
  fontSize: "14px",
  boxSizing: "border-box",
  outline: "none"
};

const resultItemStyle = {
  padding: "10px 12px",
  cursor: "pointer",
  borderBottom: "1px solid rgba(226,232,240,0.8)",
  fontSize: "14px",
  color: "#111827",
  background: "transparent"
};

const hintStyle = {
  fontSize: "12px",
  color: "#6b7280"
};

const printAreaStyle = {
  background: "#ffffff",
  borderRadius: "18px",
  padding: "16px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
  marginTop: "24px"
};

const printTitleStyle = {
  margin: "0 0 6px 0",
  fontSize: "16px",
  color: "#111827"
};

const printTableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "10px",
  tableLayout: "fixed"
};
const colWidths = [
  "22%", // Handeling
  "28%", // Daarna
  "38%", // Namen
  "12%"  // Aantal
];
const thStyle = {
  textAlign: "left",
  borderBottom: "2px solid #d1d5db",
  padding: "4px 4px",
  color: "#374151",
  fontSize: "16px",
  lineHeight: "1.1"
};

const tdStyle = {
  borderBottom: "1px solid #e5e7eb",
  padding: "4px 4px",
  verticalAlign: "top",
  color: "#111827",
  fontSize: "16px",
  lineHeight: "1.1",
  wordBreak: "break-word"
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
          React.createElement("img", {
            src: "https://tse4.mm.bing.net/th/id/OIP.EKovU0fgzY9XbSPlmmPCzQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
            style: {
              width: "180px",
              marginBottom: "12px",
              borderRadius: "8px"
            },
            key: "logo"
          }),
          React.createElement(
            "h1",
            { style: titleStyle, key: "title" },
            `Planning App - ${getVandaag()}`
          ),
          React.createElement(
            "div",
            {
              style: {
                marginTop: "8px",
                fontSize: "28px",
                fontWeight: "700",
                color: "#111827"
              },
              key: "totaal-uitzend"
            },
            `Totaal uitzendkrachten: ${berekenTotaalUitzend(handelingen)}`
          ),
          React.createElement(
            "p",
            { style: subStyle, key: "sub" },
            "Planbord met namen toevoegen en meerdere vervolg handelingen"
          ),
          React.createElement(
            "div",
            {
              style: { marginTop: "16px", display: "flex", gap: "10px", flexWrap: "wrap" },
              key: "header-actions"
            },
            [
              React.createElement(
                "button",
                {
                  style: topButtonStyle,
                  onClick: voegHandelingBlokToe,
                  key: "add-block"
                },
                "+ Handeling blok toevoegen"
              ),
              React.createElement(
                "button",
                {
                  style: topButtonStyle,
                  onClick: () => {
                    const lijst = maakUitzendLijst(handelingen);

                    const inhoud = `
                      <html>
                        <head>
                          <title>Uitzendlijst - ${getVandaag()}</title>
                        </head>
                        <body style="font-family: Arial; padding:20px;">
                          <h2>Uitzendkrachten - ${getVandaag()}</h2>
                          <ul>
                            ${lijst.namen.map((naam) => `<li>${naam}</li>`).join("")}
                          </ul>
                          <h3 style="margin-top:20px;">+ extra mensen: ${lijst.extra}</h3>
                          <h2 style="margin-top:10px;">Totaal mensen: ${lijst.namen.length + lijst.extra}</h2>
                        </body>
                      </html>
                    `;

                    const win = window.open("", "_blank");
                    win.document.write(inhoud);
                    win.document.close();
                    win.print();
                  },
                  key: "print-uitzendlijst"
                },
                "Print lijst"
              ),
              React.createElement(
                "button",
                {
                  style: printButtonStyle,
                  onClick: mailUitzendLijst,
                  key: "mail-uitzendlijst"
                },
                "Mail lijst"
              ),
              React.createElement(
                "button",
                {
                  style: printButtonStyle,
                  onClick: () => {
                    const printInhoud = handelingen
                      .filter((item) => item.handeling && item.handeling.code)
                      .map((item) => `
                        <tr>
                         <td>${formatHandeling(item.handeling)}${item.klantNaam ? ` - ${item.klantNaam}` : ""}</td>
<td>${
  item.vervolg.length > 0
    ? item.vervolg
        .map((v) => `${formatHandeling(v.handeling || v)}${v.klantNaam ? ` - ${v.klantNaam}` : ""}`)
        .join("<br>")
    : "-"
}</td>
<td>${[...item.mensen, ...(item.extraMensen > 0 ? [`+${item.extraMensen}`] : [])].join(", ") || "-"}</td>
<td style="text-align:right;">
  ${item.mensen.filter((naam) => !vasteMensen.includes(naam)).length + (item.extraMensen || 0)}
</td>
                        </tr>
                      `)
                      .join("");

                    const win = window.open("", "_blank");
                    win.document.write(`
                      <html>
                        <head>
                          <title>Dagprogramma overzicht - ${getVandaag()}</title>
                          <style>
                            body {
                              font-family: Arial, sans-serif;
                              padding: 20px;
                              color: #111827;
                            }
                            h1 {
                              font-size: 18px;
                              margin-bottom: 10px;
                            }
                            table {
                              width: 100%;
                              border-collapse: collapse;
                              font-size: 14px;
                              table-layout: fixed;
                            }
                            th, td {
                              border: 1px solid #d1d5db;
                              padding: 4px;
                              text-align: left;
                              vertical-align: top;
                              word-break: break-word;
                              line-height: 1.1;
                            }
                           th:nth-child(1), td:nth-child(1) { width: 25%; }  /* Handeling */
th:nth-child(2), td:nth-child(2) { width: 35%; }  /* Daarna */
th:nth-child(3), td:nth-child(3) { width: 35%; }  /* Namen */
th:nth-child(4), td:nth-child(4) { width: 5%; }  /* Aantal */
                            @page {
                              size: A4 landscape;
                              margin: 10mm;
                            }
                          </style>
                        </head>
                        <body>
                          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                            <h1 style="margin:0;">Dagprogramma overzicht - ${getVandaag()}</h1>
                            <img src="https://tse4.mm.bing.net/th/id/OIP.EKovU0fgzY9XbSPlmmPCzQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" style="width:90px;" />
                          </div>
                          <table>
                            <thead>
                              <tr>
                              <th>Handeling</th>
                              <th>Daarna</th>
                              <th>Namen</th>
                              <th>Aantal</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${printInhoud}
                            </tbody>
                          </table>
                          <h2 style="margin-top:20px;">Overig werk</h2>
                          <p style="font-size:12px; white-space:pre-line;">${overigWerk || "-"}</p>
                        </body>
                      </html>
                    `);
                    win.document.close();
                    win.focus();
                    win.print();
                  },
                  key: "print-button"
                },
                "Print / PDF"
              ),
              React.createElement(
                "button",
                {
                  style: printButtonStyle,
                  key: "save-pdf-button",
                  onClick: () => {
                    const printInhoud = handelingen
                      .filter((item) => item.handeling && item.handeling.code)
                      .map((item) => `
                        <tr>
                          <td>${formatHandeling(item.handeling)}${item.klantNaam ? ` - ${item.klantNaam}` : ""}</td>
                          <td>${item.mensen.filter((naam) => !vasteMensen.includes(naam)).length + (item.extraMensen || 0)}</td>
                          <td>${[...item.mensen, ...(item.extraMensen > 0 ? [`+${item.extraMensen}`] : [])].join(", ") || "-"}</td>
                          <td>${
                            item.vervolg.length > 0
                              ? item.vervolg
                                  .map((v) => `${formatHandeling(v.handeling || v)}${v.klantNaam ? ` - ${v.klantNaam}` : ""}`)
                                  .join(", ")
                              : "-"
                          }</td>
                        </tr>
                      `)
                      .join("");

                    const win = window.open("", "_blank");
                    win.document.write(`
                      <html>
                        <head>
                          <title>Planning-${getVandaag()}</title>
                        </head>
                        <body>
                          <h1>Dagprogramma overzicht - ${getVandaag()}</h1>
                          <table border="1" style="width:100%; border-collapse:collapse; font-size:10px;">
                            <thead>
                              <tr>
                                <th>Handeling</th>
                                <th>Aantal</th>
                                <th>Namen</th>
                                <th>Daarna</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${printInhoud}
                            </tbody>
                          </table>
                          <h2 style="margin-top:20px;">Overig werk</h2>
                          <p style="font-size:12px; white-space:pre-line;">${overigWerk || "-"}</p>
                        </body>
                      </html>
                    `);
                    win.document.close();
                    win.print();
                  }
                },
                "Opslaan als PDF"
              )
            ]
          )
        ]
      ),

      React.createElement(
        "div",
        { style: gridStyle, key: "grid" },
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

          const zoekHoofd = item.zoekHoofdHandeling || "";
          const gefilterdeHoofdHandelingen = beschikbareHandelingen.filter(
            (handelingOptie) =>
              `${handelingOptie.code} ${handelingOptie.naam}`
                .toLowerCase()
                .includes(zoekHoofd.toLowerCase())
          );

          return React.createElement(
            "div",
            { style: getCardStyle(index), key: item.id || index },
            [
              React.createElement(
                "div",
                { style: smallLabelStyle, key: "label-" + index },
                "Handeling"
              ),

              React.createElement(
                "div",
                { style: hoofdHandelingWrapStyle, key: "hoofdhandeling-" + index },
                [
                  React.createElement(
                    "h2",
                    { style: cardTitleStyle, key: "title-" + index },
                    `${formatHandeling(item.handeling)}${item.klantNaam ? " - " + item.klantNaam : ""}`
                  ),
                  React.createElement(
                    "button",
                    {
                      style: {
                        border: "none",
                        background: "#fee2e2",
                        color: "#b91c1c",
                        borderRadius: "10px",
                        padding: "6px 10px",
                        cursor: "pointer",
                        fontWeight: "700",
                        marginBottom: "10px"
                      },
                      onClick: () => verwijderBlok(item.id),
                      key: "verwijder-" + index
                    },
                    "Blok verwijderen"
                  ),
                  React.createElement("input", {
                    type: "text",
                    placeholder: "Zoek hoofdhandeling of code...",
                    value: item.zoekHoofdHandeling || "",
                    onChange: (e) =>
                      updateZoekHoofdHandeling(item.id, e.target.value),
                    style: searchInputStyle,
                    key: "main-input-" + index
                  }),
                  zoekHoofd
                    ? React.createElement(
                        "div",
                        { style: getResultsStyle(index), key: "main-results-" + index },
                        ...(gefilterdeHoofdHandelingen.length > 0
                          ? gefilterdeHoofdHandelingen.slice(0, 8).map((handelingOptie, i) =>
                              React.createElement(
                                "div",
                                {
                                  key: "main-result-" + i,
                                  style: resultItemStyle,
                                  onClick: () =>
                                    kiesHoofdHandeling(item.id, handelingOptie)
                                },
                                formatHandeling(handelingOptie)
                              )
                            )
                          : [
                              React.createElement(
                                "div",
                                {
                                  key: "geen-hoofdhandeling",
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
                    : null
                ]
              ),

              React.createElement(
                "div",
                { style: getCountStyle(index), key: "count-" + index },
                (item.mensen.filter((naam) => !vasteMensen.includes(naam)).length + (item.extraMensen || 0)) + " mensen"
              ),

              React.createElement(
                "div",
                { style: nextBlockStyle, key: "nextblock-" + index },
                [
                  React.createElement(
                    "div",
                    {
                      style: { ...smallLabelStyle, marginBottom: "10px" },
                      key: "nextlabel-" + index
                    },
                    "Daarna"
                  ),
                  ...item.vervolg.map((vervolgItem, i) =>
                    React.createElement(
                      "div",
                      {
                        key: "vervolg-wrap-" + i,
                        style: { marginBottom: "10px" }
                      },
                      [
                        React.createElement(
                          "span",
                          { style: getNextTagStyle(index), key: "tag-" + i },
                          [
                            `${formatHandeling(vervolgItem.handeling || vervolgItem)}${vervolgItem.klantNaam ? " - " + vervolgItem.klantNaam : ""}`,
                            React.createElement(
                              "button",
                              {
                                style: nextRemoveStyle,
                                onClick: () =>
                                  verwijderVervolgHandeling(
                                    item.id,
                                    (vervolgItem.handeling || vervolgItem).code
                                  ),
                                key: "remove-tag-" + i
                              },
                              "✕"
                            )
                          ]
                        ),
                        React.createElement("input", {
                          type: "text",
                          placeholder: "Klantnaam vervolg",
                          value: vervolgItem.klantNaam || "",
                          onChange: (e) =>
                            updateVervolgKlantNaam(
                              item.id,
                              (vervolgItem.handeling || vervolgItem).code,
                              e.target.value
                            ),
                          style: searchInputStyle,
                          key: "vervolg-klant-" + i
                        })
                      ]
                    )
                  )
                ]
              ),

              React.createElement(
                "div",
                { style: namesWrapStyle, key: "names-" + index },
                ...item.mensen.map((naam, i) =>
                  React.createElement(
                    "div",
                    { style: getPersonStyle(index), key: "person-" + i },
                    [
                      React.createElement("span", { key: "person-name-" + i }, naam),
                      React.createElement(
                        "button",
                        {
                          style: removeButtonStyle,
                          onClick: () => verwijderNaam(item.id, naam),
                          key: "person-remove-" + i
                        },
                        "✕"
                      )
                    ]
                  )
                )
              ),

              React.createElement(
                "div",
                { style: formWrapStyle, key: "nameform-" + index },
                [
                  React.createElement("input", {
                    type: "text",
                    placeholder: "Zoek medewerker...",
                    value: item.nieuweNaam,
                    onChange: (e) =>
                      updateNieuweNaam(item.id, e.target.value),
                    style: searchInputStyle,
                    key: "name-input-" + index
                  }),
                  zoekNaam
                    ? React.createElement(
                        "div",
                        { style: getResultsStyle(index), key: "name-results-" + index },
                        ...(gefilterdeNamen.length > 0
                          ? gefilterdeNamen.slice(0, 20).map((naam, i) =>
                              React.createElement(
                                "div",
                                {
                                  key: "name-result-" + i,
                                  style: resultItemStyle,
                                  onClick: () =>
                                    voegNaamToeDirect(item.id, naam)
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
                    { style: hintStyle, key: "name-hint-" + index },
                    "Typ een paar letters en klik op een naam"
                  ),
                  React.createElement("input", {
                    type: "number",
                    min: "0",
                    placeholder: "Extra mensen zonder naam",
                    value: item.extraMensen || 0,
                    onChange: (e) => updateExtraMensen(item.id, e.target.value),
                    style: searchInputStyle,
                    key: "extra-input-" + index
                  }),
                  React.createElement(
                    "div",
                    { style: hintStyle, key: "extra-hint-" + index },
                    "Bijvoorbeeld +5 als uitzendbureau zelf mensen invult"
                  ),
                  React.createElement("input", {
                    type: "text",
                    placeholder: "Klantnaam",
                    value: item.klantNaam || "",
                    onChange: (e) => updateKlantNaam(item.id, e.target.value),
                    style: searchInputStyle,
                    key: "klant-input-" + index
                  }),
                  React.createElement(
                    "div",
                    { style: hintStyle, key: "klant-hint-" + index },
                    "Vrij invulbaar, bijvoorbeeld Agro Care"
                  )
                ]
              ),

              React.createElement(
                "div",
                {
                  style: { ...formWrapStyle, marginTop: "18px" },
                  key: "nextform-" + index
                },
                [
                  React.createElement("input", {
                    type: "text",
                    placeholder: "Zoek vervolg handeling of code...",
                    value: item.nieuweHandeling,
                    onChange: (e) =>
                      updateNieuweHandeling(item.id, e.target.value),
                    style: searchInputStyle,
                    key: "next-input-" + index
                  }),
                  zoekVervolg
                    ? React.createElement(
                        "div",
                        { style: getResultsStyle(index), key: "next-results-" + index },
                        ...(gefilterdeHandelingen.length > 0
                          ? gefilterdeHandelingen.slice(0, 8).map((handelingOptie, i) =>
                              React.createElement(
                                "div",
                                {
                                  key: "next-result-" + i,
                                  style: resultItemStyle,
                                  onClick: () =>
                                    voegVervolgHandelingToe(item.id, handelingOptie)
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
                                ]
              )
            ]
          );
        })
      ),

      React.createElement(
        "div",
        { style: printAreaStyle, key: "print-area" },
        [
          React.createElement(
            "h2",
            { style: printTitleStyle, key: "print-title" },
            "Dagprogramma overzicht"
          ),
          React.createElement(
            "table",
            { style: printTableStyle, key: "print-table" },
            [
              React.createElement(
                "thead",
                { key: "thead" },
                React.createElement(
                  "tr",
                  {},
                  [
                React.createElement("th", { style: thStyle, key: "h1" }, "Handeling"),
React.createElement("th", { style: thStyle, key: "h2" }, "Daarna"),
React.createElement("th", { style: thStyle, key: "h3" }, "Namen"),
React.createElement("th", { style: { ...thStyle, width: "5%", textAlign: "right" }, key: "h4" }, "Aantal")
                  ]
                )
              ),
              React.createElement(
                "tbody",
                { key: "tbody" },
                ...handelingen
                  .filter((item) => item.handeling && item.handeling.code)
                  .map((item, index) =>
                    React.createElement(
                      "tr",
                      { key: "row-" + index },
                      [
                    React.createElement(
  "td",
  { style: tdStyle },
  `${formatHandeling(item.handeling)}${item.klantNaam ? " - " + item.klantNaam : ""}`
),

React.createElement(
  "td",
  { style: tdStyle },
  item.vervolg.length
    ? item.vervolg
        .map(v => `${formatHandeling(v.handeling || v)}${v.klantNaam ? " - " + v.klantNaam : ""}`)
        .join(", ")
    : "-"
),

React.createElement(
  "td",
  { style: tdStyle },
  [...item.mensen, ...(item.extraMensen > 0 ? [`+${item.extraMensen}`] : [])].join(", ") || "-"
),

React.createElement(
  "td",
{ style: { ...tdStyle, width: "5%", textAlign: "right" } },
  item.mensen.filter((naam) => !vasteMensen.includes(naam)).length + (item.extraMensen || 0)
)
                      ]
                    )
                  )
              )
            ]
          )
        ]
      ),

      React.createElement(
        "div",
        {
          style: {
            marginTop: "20px",
            background: "#ffffff",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
          },
          key: "handeling-aantallen"
        },
        [
          React.createElement(
            "h3",
            { style: { marginBottom: "10px" } },
            "Aantal per handeling"
          ),
          React.createElement(
            "table",
            {
              style: {
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px"
              }
            },
            [
              React.createElement(
                "thead",
                {},
                React.createElement(
                  "tr",
                  {},
                  [
                    React.createElement("th", { style: thStyle }, "Handeling"),
                    React.createElement("th", { style: thStyle }, "Aantal")
                  ]
                )
              ),
              React.createElement(
                "tbody",
                {},
                ...maakHandelingTelling(handelingen).map((item, index) =>
                  React.createElement(
                    "tr",
                    { key: index },
                    [
                      React.createElement("td", { style: tdStyle }, item.handeling),
                      React.createElement("td", { style: { ...tdStyle, textAlign: "right" } }, item.aantal)
                    ]
                  )
                )
              )
            ]
          )
        ]
      ),

      React.createElement(
        "div",
        {
          style: {
            marginTop: "20px",
            background: "#ffffff",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
          },
          key: "overig-blok"
        },
        [
          React.createElement(
            "h3",
            { style: { marginBottom: "10px" } },
            "Overig werk"
          ),
          React.createElement("textarea", {
            value: overigWerk,
            onChange: (e) => setOverigWerk(e.target.value),
            placeholder: "Typ hier overig werk...",
            style: {
              width: "100%",
              minHeight: "80px",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }
          })
        ]
      )
    ]
  )
);
}
