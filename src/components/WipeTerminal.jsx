import React, { useState, useEffect } from "react";
import { generatePDF } from "../pdf.js";

const WipeTerminal = ({ device, onDone }) => {
  const [log, setLog] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLog([
      `Starting ${device.method} wipe on ${device.model} (ID: ${device.id}, Serial: ${device.serialNo})...`,
      `Initialized at ${new Date().toLocaleString()}`,
    ]);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLog((prevLog) => [
            ...prevLog,
            `Wipe completed successfully at ${new Date().toLocaleString()}`,
          ]);
          const updatedDevice = { ...device, status: "Wiped", wipedAt: new Date().toISOString() };
          onDone(updatedDevice);
          // Automatically download certificate
          const doc = generatePDF({
            device: device.model,
            id: device.id,
            serialNo: device.serialNo,
            method: device.method,
            status: "Wiped",
            date: new Date().toISOString(),
            addedAt: device.addedAt,
          });
          doc.save(`Wipe_Certificate_${device.id}.pdf`);
          return 100;
        }
        setLog((prevLog) => [...prevLog, `Progress: ${prev + 10}%`]);
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [device, onDone]);

  return (
    <div className="bg-gray-800 p-4 rounded-lg text-sm overflow-auto max-h-64 animate-fade-in">
      <div className="w-full bg-gray-600 rounded-full h-2.5 mb-4">
        <div
          className="bg-wipe-green h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {log.map((entry, index) => (
        <p key={index} className="text-wipe-green">{entry}</p>
      ))}
    </div>
  );
};

export default WipeTerminal;