import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-dark py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="container mx-auto text-center">
        {/* Hero Section */}
        <div className="space-y-6 mb-12 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
            Welcome to SecureWipe AI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Securely wipe SSDs, HDDs, and laptops with NIST 800-88 and DoD 5220.22-M standards. Ensure compliance and sustainability.
          </p>
          <div className="flex justify-center">
            <Link
              to="/devices"
              className="btn-primary text-lg"
            >
              Start Wiping Now
            </Link>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="card-hover bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg animate-fade-in">
            <h2 className="text-xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Prevent data breaches with secure wiping, ensuring permanent data erasure and regulatory compliance.
            </p>
          </div>
          <div className="card-hover bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg animate-fade-in">
            <h2 className="text-xl font-semibold text-white mb-4">Wiping Standards</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Choose Quick (1-pass), Full (3-pass), or DoD (7-pass) methods. Get tamper-proof PDF certificates.
            </p>
          </div>
          <div className="card-hover bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg animate-fade-in">
            <h2 className="text-xl font-semibold text-white mb-4">Sustainability</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Reduce e-waste by up to 80% (EPA estimate) with secure IT asset reuse.
            </p>
          </div>
        </div>

        {/* Compliance Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-white mb-4">Compliance & Trust</h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto mb-6">
            SecureWipe adheres to NIST SP 800-88 and DoD 5220.22-M standards, ensuring compliance for enterprises and data centers.
          </p>
          <Link
            to="/about"
            className="btn-primary"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}