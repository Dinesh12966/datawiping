import React from "react";

const DevicesList = ({ devices, onStartWipe }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {devices.map((device) => (
        <div
          key={device.id}
          className={`device-card ${device.status === "Wiped" ? "device-wiped" : ""} animate-fade-in`}
        >
          <h3 className="text-lg font-semibold text-secure-blue">{device.model}</h3>
          <p className="text-sm text-gray-600">ID: {device.id}</p>
          <p className="text-sm text-gray-600">Serial: {device.serialNo}</p>
          <p className="text-sm text-gray-600">Added: {new Date(device.addedAt).toLocaleString()}</p>
          <p className="text-sm text-gray-600">
            Status: <span className={device.status === "Wiped" ? "text-wipe-green" : "text-gray-600"}>{device.status}</span>
            {device.wipeMethod && ` (${device.wipeMethod})`}
          </p>
          {device.status !== "Wiped" && (
            <div className="flex gap-2 mt-4">
              <button
                className="wipe-button"
                onClick={() => onStartWipe(device, "Quick")}
              >
                Quick Wipe
              </button>
              <button
                className="wipe-button"
                onClick={() => onStartWipe(device, "Full")}
              >
                Full Wipe
              </button>
              <button
                className="wipe-button"
                onClick={() => onStartWipe(device, "DoD")}
              >
                DoD Wipe
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DevicesList;