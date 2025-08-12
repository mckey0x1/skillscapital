"use client";
import React, { useState } from "react";

const tabs = [
  "Developers & Analysts",
  "Senior Consultants",
  "Architects",
  "Project Leads / PMs",
  "Support Engineers"
];

const devRoles = [
  {
    title: "COBOL Developer",
    img: "/image/684e0505bf50fa320737c95fa083c607802ddb20.png"
  },
  {
    title: "IIB Developer",
    img: "/image/bc90907518c40fccadcca0168087622eaadf353b.png"
  },
  {
    title: "Maximo Analyst",
    img: "/image/bff98db8be101c2b0200a7f415bf6f85d1d65e31.png"
  }
];

export default function RoleTypesSection() {
  const [activeTab, setActiveTab] = useState("Developers & Analysts");

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Role Types & Seniority Levels
        </h2>
        <p className="text-sm text-blue-100 mt-2">
          Multi-level IBM professionals — from legacy engineers to cloud-enabled
          architects
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg font-medium transition-colors
                ${
                  activeTab === tab
                    ? "bg-white text-blue-600"
                    : "bg-white/10 text-white border border-white/20"
                }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Developers & Analysts Section */}
        {activeTab === "Developers & Analysts" && (
          <div className="mt-10 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-slate-800">
              Developers & Analysts
            </h3>
            <p className="text-sm text-slate-500 mt-1 mb-6">
              Utilize agile, multi-disciplinary teams that adapt in size and
              expertise to meet project demands.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {devRoles.map((role) => (
                <div
                  key={role.title}
                  className="relative rounded-lg overflow-hidden shadow-sm group">
                  {/* Image */}
                  <img
                    src={role.img}
                    alt={role.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* Overlay Title (Bottom Left) */}
                  <div className="absolute bottom-0 left-0 w-full px-3 py-2">
                    <p className="text-white font-semibold text-left text-sm">
                      {role.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
