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
  const [qaLoading, setQALoading] = useState(false);
  const [explain, setExplain] = useState({ result: "" });
  const [explainLoading, setExplainLoading] = useState(false);
  const [summary, setSummary] = useState({ result: "" });
  const [summaryLoading, setSummaryLoading] = useState(false);
  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (selection) {
      setHighlighted(selection.toString());
    }
  };

  return (
    <div className="grid grid-cols-5 bg-green-400" onMouseUp={handleMouseUp}>
      <div className="col-span-3">
        <DisplayPDF />
      </div>
      <div className="relative col-span-2 pl-2">
        <div>
          <h3>Highlight any text to start</h3>
        </div>
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
                setQALoading(true);
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
                    setQALoading(false);
                    setQA(result);
                  })
                  .catch((err) => {
                    setQALoading(false);
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
                setExplainLoading(true);
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
                    setExplainLoading(false);
                  })
                  .catch((err) => {
                    setExplainLoading(false);
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
                setSummaryLoading(true);
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
                    setSummaryLoading(false);
                    setSummary(result);
                  })
                  .catch((err) => {
                    setSummaryLoading(false);
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
