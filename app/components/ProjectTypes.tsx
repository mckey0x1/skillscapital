import React from "react";
import {
  FileText,
  Settings,
  Layers,
  Gauge,
  RefreshCcw,
  Beaker,
  Check
} from "lucide-react";

type ProjectItem = {
  title: string;
  highlighted?: boolean;
  icon: React.ReactNode;
};

const LeftItems: ProjectItem[] = [
  {
    title: "Legacy Application\nModernization",
    highlighted: true,
    icon: <FileText size={20} />
  },
  { title: "Maximo Upgrades &\nImplementations", icon: <Settings size={20} /> },
  { title: "Middleware\nIntegration", icon: <Layers size={20} /> }
];

const RightItems: ProjectItem[] = [
  { title: "Performance\nOptimization", icon: <Gauge size={20} /> },
  { title: "Ongoing Support &\nEnhancements", icon: <RefreshCcw size={20} /> },
  { title: "PoCs & Pilots", icon: <Beaker size={20} /> }
];

const ExampleActivities = [
  "Enhancing COBOL logic",
  "Exposing APIs",
  "Containerization"
];

const IconCircle: React.FC<{
  children?: React.ReactNode;
  active?: boolean;
}> = ({ children, active = true }) => {
  return (
    <div
      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-pink-500 text-white rounded-full flex items-center justify-center shadow-md
      `}>
      {children}
    </div>
  );
};

const Pill: React.FC<{ item: ProjectItem }> = ({ item }) => {
  return (
    <div
      className={`flex items-center gap-4 rounded-full px-6 py-4 w-full max-w-[320px] shadow-sm
        ${
          item.highlighted
            ? "bg-blue-100 border border-blue-200"
            : "bg-white/70 border border-gray-200"
        }`}>
      <IconCircle active={!!item.highlighted}>{item.icon}</IconCircle>
      <p className="text-sm font-semibold leading-5 text-slate-800 whitespace-pre-line">
        {item.title}
      </p>
    </div>
  );
};

export default function ProjectTypesSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
          Project Types We Support
        </h2>
        <p className="text-sm text-slate-500 text-center mt-2">
          Delivery-ready talent for greenfield, migration, and post-go-live
          phases
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="flex flex-col gap-6 items-start justify-center">
            {LeftItems.map((it, idx) => (
              <Pill key={idx} item={it} />
            ))}
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md bg-gray-50 rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 text-center mb-4">
                Example Activities
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <ul className="space-y-4">
                  {ExampleActivities.map((act, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/90 border border-slate-200 shadow-sm">
                        <Check size={14} className="text-teal-500" />
                      </span>
                      <span className="text-sm text-slate-700">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-end justify-center">
            {RightItems.map((it, idx) => (
              <div key={idx} className="flex justify-end w-full">
                <Pill item={it} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
