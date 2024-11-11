"use client";
import React, { createContext, useState } from "react";

export const ShayariData = createContext();

export const ShayariProvider = ({ children }) => {
  const data = [
    {
      id: 1,
      link: "mohabbat",
      heading: "Mohabbat Shayari",
      imgsrc: "mohabbat.jpeg",
    },
    {
      id: 2,
      link: "sad",
      heading: "Sad Shayari",
      imgsrc: "sad.jpeg",
    },
    {
      id: 3,
      link: "break-up",
      heading: "Breakup Shayari",
      imgsrc: "cheat.jpeg",
    },
    {
      id: 4,
      link: "ghazal",
      heading: "Ghazal 1",
      imgsrc: "ghazal.jpeg",
    },
    {
      id: 5,
      link: "ghazal",
      heading: "Ghazal 2",
      imgsrc: "ghazal.jpeg",
    },
    {
      id: 6,
      link: "ghazal",
      heading: "Ghazal 3",
      imgsrc: "ghazal.jpeg",
    },
  ];

  const shayaris = [
    {
      id: 1,
      shayariname: "झीलें क्या हैं? उसकी आँखें ",
      keywords: ["mohabbat", "sad", "break-up"],
      shayari:
        "झीलें क्या हैं? उसकी आँखें उम्दा क्या है? उसका चेहरा ख़ुश्बू क्या है? उसकी साँसें खुशियाँ क्या हैं? उसका  होना तो ग़म क्या है? उससे जुदाई सावन क्या है? उसका रोना सर्दी क्या है? उसकी उदासी ",
      urdushayari: "",
      sharelink: "",
    },
    {
      id: 2,
      shayariname: "Mohabbat shayari, Break-up shayari",
      keywords: ["mohabbat", "break-up"],
      shayari: " HELLO THERE",
      urdushayari: "",
      sharelink: "",
    },
    {
      id: 3,
      shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
      keywords: ["mohabbat", "sad"],
      shayari: " HELLO THERE",
      urdushayari: "",
      sharelink: "",
    },
    {
      id: 4,
      shayariname: "Sad shayari, Break-up shayari",
      keywords: ["break-up", "sad"],
      shayari: " HELLO THERE",
      urdushayari: "",
      sharelink: "",
    },
    {
      id: 5,
      shayariname: "Sad shayari",
      keywords: ["sad"],
      shayari: " HELLO THERE",
      urdushayari: "",
      sharelink: "",
    },
    {
      id: 6,
      shayariname: "Break-up shayari",
      keywords: ["break-up"],
      shayari: " HELLO THERE",
      urdushayari: "",
      sharelink: "",
    },
    {
      id: 7,
      shayariname: "Mohabbat shayari",
      keywords: ["mohabbat"],
      shayari: " HELLO THERE",
      urdushayari: "",
      sharelink: "",
    },
  ];

  const CHUNK_SIZE = 2;

  const keywordGroups = shayaris.reduce((acc, shayari) => {
    shayari.keywords.forEach((keyword) => {
      if (!acc[keyword]) {
        acc[keyword] = [];
      }
      acc[keyword].push(shayari);
    });
    return acc;
  }, {});

  const [visibleData, setVisibleData] = useState({});
  const [paginationIndexes, setPaginationIndexes] = useState({});

  function getNextChunkByKeyword(keyword) {
    if (!keywordGroups[keyword]) return [];

    const startIndex = paginationIndexes[keyword] || 0; // Initialize if undefined
    const endIndex = startIndex + CHUNK_SIZE;
    return keywordGroups[keyword].slice(startIndex, endIndex);
  }

  function loadMoreForKeyword(keyword) {
    const newChunk = getNextChunkByKeyword(keyword);

    // Only update if new data exists
    if (newChunk.length > 0) {
      setVisibleData((prevData) => ({
        ...prevData,
        [keyword]: [...(prevData[keyword] || []), ...newChunk],
      }));

      // Update pagination index for the next load
      setPaginationIndexes((prevIndexes) => ({
        ...prevIndexes,
        [keyword]: (prevIndexes[keyword] || 0) + CHUNK_SIZE,
      }));
    } else {
      console.log(`No more data to load for '${keyword}'`);
      // Optional: set to an initial state if needed
      // For example, reset to the initial state or keep the last state
    }
  }

  const basicData = {
    mohabbat: {
      heading: "Mohabat shayaris",
      imageSrc: "/Images/mohabbat.jpeg",
    },
    sad: {
      heading: "Sad Shayari",
      imageSrc: "/Images/sad.jpeg",
    },
    "break-up": {
      heading: "Break-up Shayari",
      imageSrc: "/Images/cheat.jpeg",
    },
    ghazal: {
      heading: "Ghazal Shayari",
      imageSrc: "/Images/ghazal.jpeg",
    },
  };

  return (
    <ShayariData.Provider
      value={{
        data,
        shayaris,
        basicData,
        loadMoreForKeyword,
        getNextChunkByKeyword,
        visibleData,
      }}
    >
      {children}
    </ShayariData.Provider>
  );
};
