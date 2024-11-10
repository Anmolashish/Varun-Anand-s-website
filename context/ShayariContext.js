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
      shayariname: "Sad shayari , Mohabbat shayari, Break-up shayari",
      keywords: ["mohabbat", "sad", "break-up"],
      shayari: " HELLO THERE ",
      urdushayari: "",
    },
    {
      id: 2,
      shayariname: "Mohabbat shayari, Break-up shayari",
      keywords: ["mohabbat", "break-up"],
      shayari: " HELLO THERE",
      urdushayari: "",
    },
    {
      id: 3,
      shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
      keywords: ["mohabbat", "sad"],
      shayari: " HELLO THERE",
      urdushayari: "",
    },
    {
      id: 4,
      shayariname: "Sad shayari, Break-up shayari",
      keywords: ["break-up", "sad"],
      shayari: " HELLO THERE",
      urdushayari: "",
    },
    {
      id: 5,
      shayariname: "Sad shayari",
      keywords: ["sad"],
      shayari: " HELLO THERE",
      urdushayari: "",
    },
    {
      id: 6,
      shayariname: "Break-up shayari",
      keywords: ["break-up"],
      shayari: " HELLO THERE",
      urdushayari: "",
    },
    {
      id: 7,
      shayariname: "Mohabbat shayari",
      keywords: ["mohabbat"],
      shayari: " HELLO THERE ",
      urdushayari: "",
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

  const formData = {
    shayari: {
      heading: "Shayari",
      headers: [
        { key: "shayariname", label: "Shayari name" },
        { key: "keywords", label: "Keywords" },
        { key: "shayari", label: "Shayari" },
        { key: "urdushayari", label: "Urdu Shayari" },
      ],
      data: [...shayaris],
      links: "/dashboard/shayari/shayari-form",
    },
    booking: {
      heading: "Booking",
      headers: [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "date", label: "Date" },
        { key: "location", label: "Location" },
        { key: "message", label: "Message" },
      ],
      data: [],
      links: "/booking",
    },
    contact: {
      heading: "Contact",
      headers: [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "message", label: "Message" },
      ],
      data: [],
      links: "/",
    },
    events: {
      heading: "Events",
      headers: [
        { key: "name", label: "Event Name" },
        { key: "description", label: "Event Description" },
        { key: "date", label: "Date" },
        { key: "link", label: "Event Link" },
      ],
      data: [],
      links: "/dashboard/events/events-form",
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
        formData,
      }}
    >
      {children}
    </ShayariData.Provider>
  );
};
