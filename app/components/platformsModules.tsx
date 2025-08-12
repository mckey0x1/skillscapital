"use client";

import {
  Database,
  Settings,
  Workflow,
  Globe,
  ArrowUpDown,
  MessageSquare,
  Zap,
  Cloud
} from "lucide-react";

export default function PlatformsModules() {
  const platforms = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "IBM z/OS Mainframe (COBOL, JCL, DB2, VSAM)",
      description: "Legacy mainframe systems"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "IBM Maximo (EAM, Work Orders, Inventory, Asset Management)",
      description: "Enterprise asset management"
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "IBM BPM / BAW (Business Automation Workflow)",
      description: "Business process management"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "IBM WebSphere Application Server (WAS)",
      description: "Application server platform"
    },
    {
      icon: <ArrowUpDown className="h-8 w-8" />,
      title: "IBM Integration Bus (IIB), App Connect Enterprise (ACE)",
      description: "Integration middleware"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "IBM MQ & Message Broker",
      description: "Message queuing solutions"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "IBM API Connect, DataPower Gateway",
      description: "API management platform"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "IBM Cloud Pak for Integration, IBM Cloud",
      description: "Cloud integration platform"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with stats */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Platforms & Modules We Support
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            End-to-end Workday coverage across HR, Finance, and Technical
            domains
          </p>
        </div>

        {/* Platform Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-slate-700 rounded-full text-white">
                  {platform.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm leading-tight mb-2">
                    {platform.title}
                  </h3>
                  <p className="text-slate-300 text-xs">
                    {platform.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
