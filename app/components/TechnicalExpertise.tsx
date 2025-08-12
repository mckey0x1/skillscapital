"use client";

import { useState } from "react";

export default function TechnicalExpertise() {
  const tabs = [
    { id: "mainframe", label: "Mainframe & Programming" },
    { id: "maximo", label: "Maximo & BPM" },
    { id: "integration", label: "Integration & Middleware" },
    { id: "devops", label: "DevOps & Platform Tools" }
  ];

  const tabContent: Record<
    string,
    { title: string; description: string; items: string[] }
  > = {
    mainframe: {
      title: "Mainframe & Programming",
      description:
        "Expertise in COBOL, JCL, and other mainframe technologies with focus on performance and reliability.",
      items: [
        "z/OS System Programming",
        "CICS, IMS, and DB2 Development",
        "Batch Processing Optimization"
      ]
    },
    maximo: {
      title: "Maximo & BPM",
      description:
        "Functional & technical SAP consultants with implementation, migration, and post-go-live expertise across modules.",
      items: [
        "BIRT Reporting, Escalations, Automation Scripts",
        "Work Order Management, Inventory, Asset Lifecycle",
        "Workflow Designer, Process Modeling"
      ]
    },
    integration: {
      title: "Integration & Middleware",
      description:
        "Integration experts in APIs, ESB, and messaging systems ensuring seamless enterprise connectivity.",
      items: [
        "IBM Integration Bus & API Connect",
        "Enterprise Service Bus Management",
        "Message Queuing & Event Streaming"
      ]
    },
    devops: {
      title: "DevOps & Platform Tools",
      description:
        "DevOps engineers with CI/CD pipelines, containerization, and platform automation expertise.",
      items: [
        "Jenkins, GitLab CI/CD",
        "Docker, Kubernetes Orchestration",
        "Infrastructure as Code (Terraform, Ansible)"
      ]
    }
  };

  const [activeTab, setActiveTab] = useState("maximo");

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 py-12 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            Technical Expertise &amp; Tooling
          </h2>
          <p className="text-gray-300 mt-2">
            Specialized IBM engineering across core systems, integrations, and
            middleware
          </p>
        </div>

        {/* Tabs */}
        <div
          className="
  flex justify-center overflow-x-auto
whitespace-nowrap 
  bg-white/10 rounded-full p-1 mb-8 w-full
">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-yellow-400 text-black shadow"
                  : "text-white hover:bg-white/20"
              }`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/10 rounded-2xl p-6">
          {/* Left Column */}
          <div className="bg-white text-black rounded-xl p-6">
            <h3 className="text-xl font-bold">{tabContent[activeTab].title}</h3>
            <p className="mt-2 text-gray-600">
              {tabContent[activeTab].description}
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {tabContent[activeTab].items.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-full px-4 py-3 shadow">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white font-bold mr-4">
                  {index + 1}
                </span>
                <span className="text-black font-medium text-xs sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
