"use client";

import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

export default function DisplayPDF() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
      <div style={{ height: "75vh" }}>
        <Viewer
          fileUrl={"./in-context.pdf"}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
}
