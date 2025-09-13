import React from "react";
import { generatePDF } from "../pdf.js";

const CertificateButton = ({ report }) => {
  const handleDownload = () => {
    const doc = generatePDF({
      device: report.model,
      id: report.id,
      serialNo: report.serialNo,
      method: report.wipeMethod,
      status: report.status,
      date: report.wipedAt || new Date().toISOString(),
      addedAt: report.addedAt,
    });
    doc.save(`Wipe_Certificate_${report.id}.pdf`);
  };

  return (
    <button
      className="terminal-button"
      onClick={handleDownload}
    >
      Download Certificate
    </button>
  );
};

export default CertificateButton;