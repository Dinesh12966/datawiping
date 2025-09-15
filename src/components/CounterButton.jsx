import React from "react";
import { motion } from "framer-motion";
import { getCount, incrementCount } from "../utils/counter";

const CounterButton = ({ onWipe }) => {
  const handleIncrement = () => {
    const newCount = incrementCount();
    if (onWipe) onWipe(newCount);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <h2 className="text-2xl font-bold text-[#2563eb] mb-4">Wipe Counter</h2>
      <p className="text-lg text-gray-600 mb-4">Total Wipes: {getCount()}</p>
      <button
        onClick={handleIncrement}
        className="px-4 py-2 bg-[#10b981] text-white rounded-lg hover:bg-green-700 transition"
      >
        Increment Wipe Count
      </button>
    </motion.div>
  );
};

export default CounterButton;