import axios from "axios";

const API_URL = "http://localhost:5001"; // backend URL

// Get all devices
export const getDevices = async () => {
  const response = await axios.get(`${API_URL}/devices`);
  return response.data;
};

// Add a new device
export const addDevice = async (device) => {
  const response = await axios.post(`${API_URL}/devices`, device);
  return response.data;
};

// Wipe a device by ID
export const wipeDevice = async (id, method) => {
  const response = await axios.post(`${API_URL}/devices/${id}/wipe`, { method });
  return response.data;
};

// Simulate USB device detection
export const detectDevice = async () => {
  const response = await axios.post(`${API_URL}/devices/detect`);
  return response.data;
};
