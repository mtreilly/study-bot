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
  const [explain, setExplain] = useState({ result: "" });
  const [summary, setSummary] = useState({ result: "" });
  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (selection) {
      setHighlighted(selection.toString());
    }
  };

  return (
    <div className="grid grid-cols-4 bg-green-400" onMouseUp={handleMouseUp}>
      <div className="col-span-3">
        <DisplayPDF />
      </div>
      <div className="relative col-span-1 pl-2">
        <div>
          <h2 className="text-xl">Highlighted</h2>
          <div>{highlighted}</div>
        </div>
        <div>
          <h2 className="mt-4 text-xl">Questions</h2>
          <div>{qa.result}</div>
        </div>
        <div>
          <h2 className="mt-4 text-xl">Explain</h2>
          <div>{explain.result}</div>
        </div>
        <div>
          <h2 className="mt-4 text-xl">Summary</h2>
          <div>{summary.result}</div>
        </div>
        <div className="fixed bottom-0 bg-white p-3 text-xl">
          <button
            onClick={() => {
              if (highlighted) {
                const res = fetch("http://localhost:3000/api/openai", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    query: highlighted,
                    type: "question",
                  }),
                })
                  .then((res) => res.json())
                  .then((result) => {
                    setQA(result);
                  });
              }
            }}
            className="border border-black p-4"
          >
            Questions
          </button>
          <button
            onClick={() => {
              if (highlighted) {
                const res = fetch("http://localhost:3000/api/openai", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ query: highlighted, type: "explain" }),
                })
                  .then((res) => res.json())
                  .then((result) => {
                    setExplain(result);
                  });
              }
            }}
            className="border border-black p-4"
          >
            Explain
          </button>
          <button
            onClick={() => {
              if (highlighted) {
                const res = fetch("http://localhost:3000/api/openai", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ query: highlighted, type: "summary" }),
                })
                  .then((res) => res.json())
                  .then((result) => {
                    setSummary(result);
                  });
              }
            }}
            className="border border-black p-4"
          >
            Summarize
          </button>
        </div>
      </div>
    </div>
  );
}
