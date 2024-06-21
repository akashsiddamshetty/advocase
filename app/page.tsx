"use client";

import Screen1 from "@/components/Screen1";
import Screen2 from "@/components/Screen2";
import Screen3 from "@/components/Screen3";
import { useState } from "react";

const recentstudies = [
  {
    id: 1,
    title: "Dog bite complaint",
    last_updated: "2 days ago",
    status: "completed",
  },
  {
    id: 2,
    title: "The Cyberbullying Conspiracy",
    last_updated: "1 day ago",
    status: "in progress",
  },
  {
    id: 3,
    title: "Financial Fraud Investigation",
    last_updated: "3 days ago",
    status: "failed",
  },
  {
    id: 4,
    title: "Market Research Analysis",
    last_updated: "5 days ago",
    status: "completed",
  },
];

const files = [
  {
    name: "case document.pdf",
  },
  {
    name: "case document.docx",
  },
  { name: "case document.docx" },
];

export default function Home() {
  const [screen, setScreen] = useState("screen1");
  if (screen === "screen3") return <Screen3 setScreen={setScreen} recentstudies={recentstudies} />;
  if (screen === "screen2")
    return <Screen2 setScreen={setScreen} files={files} />;
  return (
    <>
      <Screen1
        recentstudies={recentstudies}
        files={files}
        setScreen={setScreen}
      />
    </>
  );
}
