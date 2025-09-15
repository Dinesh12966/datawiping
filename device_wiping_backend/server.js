import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Demo devices
let devices = [
  { id: "SSD-001", model: "Samsung 970 EVO Plus", serialNo: "SN12345", status: "Available", wipeMethod: null, addedAt: new Date().toISOString() },
  { id: "HDD-002", model: "Seagate Barracuda 2TB", serialNo: "SN67890", status: "Available", wipeMethod: null, addedAt: new Date().toISOString() },
  { id: "LAP-003", model: "Dell Latitude 7420", serialNo: "SN11121", status: "Available", wipeMethod: null, addedAt: new Date().toISOString() },
];

// Get all devices
app.get("/devices", (req, res) => {
  res.json(devices);
});

// Add a new device
app.post("/devices", (req, res) => {
  const { id, model, serialNo } = req.body;
  if (!id || !model || !serialNo) return res.status(400).json({ error: "Device ID, Model, and Serial Number required" });
  const newDevice = { id, model, serialNo, status: "Available", wipeMethod: null, addedAt: new Date().toISOString() };
  devices.push(newDevice);
  res.json(newDevice);
});

// Wipe device
app.post("/wipe", (req, res) => {
  const { id, method } = req.body;
  const device = devices.find((d) => d.id === id);
  if (!device) return res.status(404).json({ error: "Device not found" });
  device.status = "Wiped";
  device.wipeMethod = method;
  device.wipedAt = new Date().toISOString();
  res.json(device);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});