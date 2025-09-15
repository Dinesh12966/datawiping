import React, { useEffect, useState } from "react";
import { getDevices, addDevice, wipeDevice, detectDevice } from "../api.jsx";
import AddDevice from "../components/AddDevice";
import DevicesList from "../components/DevicesList";
import WipeTerminal from "../components/WipeTerminal";
import CounterButton from "../components/CounterButton";
import { incrementCount } from "../utils/counter";

const DevicePage = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        setError(null);
        const data = await getDevices();
        setDevices(data);
      } catch (error) {
        console.error("Error fetching devices:", error);
        setError("Failed to load devices. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchDevices();
  }, []);

  const handleDetectDevice = async () => {
    try {
      setLoading(true);
      setError(null);
      const detectedDevice = await detectDevice();
      setDevices((prev) => [...prev, detectedDevice]);
    } catch (error) {
      console.error("Error detecting device:", error);
      setError("Failed to detect USB device. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleWipe = async (device, method) => {
    try {
      setError(null);
      const updatedDevice = await wipeDevice(device.id, method);
      setDevices((prev) =>
        prev.map((d) => (d.id === device.id ? updatedDevice : d))
      );
      setSelectedDevice({ ...updatedDevice, method });
      incrementCount();
    } catch (error) {
      console.error("Error wiping device:", error);
      setError("Failed to wipe device. Please try again.");
    }
  };

  const handleWipeDone = (updatedDevice) => {
    setDevices((prev) =>
      prev.map((d) => (d.id === updatedDevice.id ? updatedDevice : d))
    );
    setSelectedDevice(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-dark">
        <div className="flex flex-col items-center gap-4">
          <div className="spinner"></div>
          <p className="text-xl text-gray-300">Loading devices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-dark py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
            Device Management
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Securely wipe devices with NIST-compliant standards. Track progress and receive compliance certificates automatically.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-900/50 text-red-300 p-4 rounded-lg mb-8 text-center animate-fade-in">
            {error}
          </div>
        )}

        {/* Add Device and Detect Device */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in">
          <AddDevice setDevices={setDevices} />
          <button
            className="btn-primary text-lg"
            onClick={handleDetectDevice}
          >
            Detect USB Device
          </button>
        </div>

        {/* Wipe Counter */}
        <div className="mb-8 animate-fade-in">
          <CounterButton onWipe={() => incrementCount()} />
        </div>

        {/* Devices List */}
        <div className="animate-fade-in">
          <DevicesList devices={devices} onStartWipe={handleWipe} />
        </div>

        {/* Wipe Terminal Modal */}
        {selectedDevice && (
          <div className="terminal-modal">
            <div className="terminal-content">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Wiping {selectedDevice.model} ({selectedDevice.id})
              </h2>
              <WipeTerminal device={selectedDevice} onDone={handleWipeDone} />
              <div className="flex justify-end mt-4">
                <button
                  className="terminal-button"
                  onClick={() => setSelectedDevice(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevicePage;