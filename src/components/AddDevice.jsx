import React, { useState } from "react";
import { addDevice } from "../api/deviceApi"; // Import the API function

export default function AddDevice({ setDevices }) {
  const [model, setModel] = useState("");
  const [id, setId] = useState("");

  const addDeviceHandler = async () => {
    if (!model || !id) return alert("Enter both Model and ID");

    try {
      const newDevice = { model, id }; // Create device object
      const addedDevice = await addDevice(newDevice); // Call API to add device
      setDevices((prev) => [...prev, addedDevice]); // Update parent state with API response
      setModel("");
      setId("");
    } catch (error) {
      console.error("Error adding device:", error);
      alert("Failed to add device. Please try again.");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Device Model"
        className="border px-2 py-1 rounded flex-1"
      />
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Device ID"
        className="border px-2 py-1 rounded flex-1"
      />
      <button
        onClick={addDeviceHandler}
        className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
      >
        Add Device
      </button>
    </div>
  );
}