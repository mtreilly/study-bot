"use client";

import React from "react";
import { useEffect, useState } from "react";
import SampleText from "../../src/components/SampleText";

import dynamic from "next/dynamic";

const DisplayPDF = dynamic(() => import("./DisplayPDF"), {
  ssr: false,
});

export default function Display() {
  const [highlighted, setHighlighted] = useState("");
  const [qa, setQA] = useState({ result: "" });
  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (selection) {
      setHighlighted(selection.toString());
    }
  };

  useEffect(() => {
    if (highlighted) {
      const res = fetch("http://localhost:3000/api/openai", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: highlighted }),
      })
        .then((res) => res.json())
        .then((result) => {
          setQA(result);
        });
    }
  }, [highlighted]);

  return (
    <div className="grid grid-cols-3 bg-green-400" onMouseUp={handleMouseUp}>
      <div className="col-span-2">
        <DisplayPDF />
      </div>
      <div className="pl-2">
        <h2>Questions</h2>
        <div>
        {qa.result}
        </div>
      </div>
    </div>
  );
}
