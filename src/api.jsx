import axios from "axios";

const API_URL = "/api";

export const getDevices = async () => {
  try {
    const response = await axios.get(`${API_URL}/devices`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch devices:", error.message, error.response?.status);
    throw error;
  }
};

export const addDevice = async (device) => {
  try {
    const response = await axios.post(`${API_URL}/devices`, device);
    return response.data;
  } catch (error) {
    console.error("Failed to add device:", error.message);
    throw error;
  }
};

export const wipeDevice = async (id, method) => {
  try {
    const response = await axios.post(`${API_URL}/wipe`, { id, method });
    return response.data;
  } catch (error) {
    console.error("Failed to wipe device:", error.message);
    throw error;
  }
};

export const detectDevice = async () => {
  if (navigator.usb) {
    try {
      const device = await navigator.usb.requestDevice({ filters: [] });
      const id = `USB-${Math.random().toString(36).substr(2, 9)}`;
      const model = device.productName || `USB Device ${id}`;
      const serialNo = device.serialNumber || `SN${Math.random().toString(36).substr(2, 8)}`;
      return await addDevice({ id, model, serialNo });
    } catch (error) {
      console.error("WebUSB error:", error);
    }
  }
  // Fallback simulation
  const id = `USB-${Math.random().toString(36).substr(2, 9)}`;
  const serialNo = `SN${Math.random().toString(36).substr(2, 8)}`;
  return await addDevice({ id, model: `USB Device ${id}`, serialNo });
};