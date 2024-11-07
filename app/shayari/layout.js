"use client";
import React from "react";
import { ShayariProvider } from "context/ShayariContext";

export default function Layout({ children }) {
  return <ShayariProvider>{children}</ShayariProvider>;
}
