"use client";
import { getAllShayri } from "@/server";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";
import { getShayriMutation } from "@/context/http/GetShayari";

export const ShayariData = createContext();

export const ShayariProvider = ({ children }) => {
  const [newShayriData, setNewShayriData] = useState(null);

  const data = [
    {
      id: 1,
      link: "latest",
      heading: "Latest Shayari",
      imgsrc: "latest.jpeg",
    },
    {
      id: 2,
      link: "signature",
      heading: "Signature Shayari",
      imgsrc: "IMG-20241109-WA0036.jpg",
    },
    {
      id: 3,
      link: "sad",
      heading: "Sad Shayari",
      imgsrc: "sad.jpeg",
    },
    {
      id: 4,
      link: "romantic",
      heading: "Romantic Shayari",
      imgsrc: "mohabbat.jpeg",
    },
    {
      id: 5,
      link: "breakup",
      heading: "Breakup Shayari",
      imgsrc: "breakup.jpeg",
    },
    {
      id: 6,
      link: "motivational",
      heading: "Motivational Shayari",
      imgsrc: "motivational.jpeg",
    },
    {
      id: 7,
      link: "social",
      heading: "Social Shayari",
      imgsrc: "social.jpeg",
    },
    {
      id: 8,
      link: "politic",
      heading: "Politic Shayari",
      imgsrc: "politic.jpeg",
    },
  ];

  const { data: shayriData, isLoading, isError, error } = getShayriMutation();

  // Initialize shayaris from the server or as an empty array
  const [shayaris, setShayaris] = useState([]);
  useEffect(() => {
    if (shayriData && !isLoading) {
      setShayaris(shayriData); // Update state when data is fetched
    }
  }, [shayriData, isLoading]);

  const CHUNK_SIZE = 3;

  const keywordGroups = shayaris?.reduce((acc, shayari) => {
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

    // Reverse the data for "latest" keyword
    const data =
      keyword === "latest"
        ? [...keywordGroups[keyword]].reverse()
        : keywordGroups[keyword];

    return data.slice(startIndex, endIndex);
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
    latest: {
      heading: "Latest shayaris",
      imageSrc: "/Images/latest.jpeg",
    },
    signature: {
      heading: "Signature shayaris",
      imageSrc: "/Images/IMG-20241109-WA0036.jpg",
    },
    sad: {
      heading: "Sad Shayari",
      imageSrc: "/Images/sad.jpeg",
    },
    romantic: {
      heading: "Romantic shayaris",
      imageSrc: "/Images/mohabbat.jpeg",
    },
    breakup: {
      heading: "Break-up Shayari",
      imageSrc: "/Images/breakup.jpeg",
    },
    motivational: {
      heading: "Motivational Shayari",
      imageSrc: "/Images/motivational.jpeg",
    },
    social: {
      heading: "Socila Shayari",
      imageSrc: "/Images/social.jpeg",
    },
    politic: {
      heading: "Political Shayari",
      imageSrc: "/Images/politic.jpeg",
    },
  };

  const contact = [
    {
      id: 1,
      name: "Rahul",
      email: "rahul@gmail.com",
      message: "Hello there",
    },
  ];

  const booking = [
    {
      id: 1,
      name: "Rahul",
      email: "rahul@gmail.com",
      phone: "1234567890",
      date: "1234",
      location: "jalandhar",
      message: "hello there",
    },
  ];

  const formData = {
    shayari: {
      heading: "Shayari",
      headers: [
        { key: "heading", label: "Heading" },
        { key: "shayriData", label: "Shayri Data" },
        { key: "urduShayari", label: "Urdu Shayari" },
        { key: "keywords", label: "Keywords" },
      ],
      data: shayaris, // Dynamic shayaris from state
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
      data: [
        {
          id: 1,
          name: "Rahul",
          email: "rahul@gmail.com",
          phone: "1234567890",
          date: "1234",
          location: "jalandhar",
          message: "hello there",
        },
      ],
      links: "/booking",
    },
    contact: {
      heading: "Contact",
      headers: [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "message", label: "Message" },
      ],
      data: [
        {
          id: 1,
          name: "Rahul",
          email: "rahul@gmail.com",
          message: "Hello there",
        },
      ],
      links: "/",
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
        isLoading,
      }}
    >
      {children}
    </ShayariData.Provider>
  );
};
