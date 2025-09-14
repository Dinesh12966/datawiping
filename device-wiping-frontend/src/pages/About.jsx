import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secure-blue/10 to-wipe-green/10 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12 animate-fade-in"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-secure-blue">About SecureWipe </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            SecureWipe provides industry-leading data erasure solutions, ensuring compliance, security, and sustainability for IT asset management.
          </p>
          <a
            href="http://localhost:5000"
            className="inline-block px-6 py-3 bg-gradient-to-r from-secure-blue to-wipe-green text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition card-hover"
          >
            View Backend Dashboard
          </a>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="card-hover bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold text-secure-blue mb-3">Problem Statement</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Inadequate data erasure risks data breaches and non-compliance. Many recycling processes lack verifiable methods, leaving sensitive data vulnerable.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="card-hover bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold text-wipe-green mb-3">Solution</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              SecureWipe AI offers <strong>Quick</strong> (1-pass), <strong>Full</strong> (3-pass), and <strong>DoD</strong> (7-pass) wiping standards, with PDF certificates for audit compliance.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="card-hover bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold text-secure-blue mb-3">Compliance & Trust</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Compliant with <strong>NIST 800-88</strong> and <strong>DoD 5220.22-M</strong>, SecureWipe provides tamper-proof certificates for regulatory audits.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="card-hover bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold text-wipe-green mb-3">Sustainability</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reduce e-waste by up to 80% (EPA estimate) with secure IT asset reuse, promoting a <strong>circular economy</strong>.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="card-hover bg-white p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-1"
          >
            <h2 className="text-xl font-semibold text-secure-blue mb-3">Driven Technology</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              optimized wiping for SSDs, HDDs, and more, with real-time tracking and automated certificates for transparency.
            </p>
          </motion.div>
        </div>

        {/* Sustainability Metrics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-white p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold text-secure-blue mb-4">Sustainability Impact</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-wipe-green">1,000+</p>
              <p className="text-sm text-gray-600">Organizations Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-wipe-green">99.9%</p>
              <p className="text-sm text-gray-600">Erasure Success Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-wipe-green">80%</p>
              <p className="text-sm text-gray-600">E-Waste Reduction</p>
            </div>
          </div>
          <Link
            to="/devices"
            className="btn-primary mt-6 inline-block"
          >
            Start Wiping Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}