import { Sliders, Globe2, MessageSquare, Users } from "lucide-react";

const steps = [
  {
    icon: <Sliders size={28} color="white" />,
    title: "Technical Tasks",
    description:
      "Technical assessments in COBOL, Maximo, IIB, MQ, and BPM workflows",
  },
  {
    icon: <Globe2 size={28} color="white" />,
    title: "Real-World Scenario",
    description:
      "Integration design simulations and real-world scenario walkthroughs",
  },
  {
    icon: <MessageSquare size={28} color="white" />,
    title: "Communication Check",
    description:
      "Communication, incident management, and escalation handling evaluations",
  },
  {
    icon: <Users size={28} color="white" />,
    title: "Peer & Reference Review",
    description:
      "Peer-reviewed by senior IBM-certified leads",
  },
];

export default function VettingProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Vetting Process</h2>
        <p className="text-center text-gray-500 mb-12">
          Smart Matching. Certified Talent. Lightning Fast.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative">
              {/* Circle Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2">{step.description}</p>

              {/* Dotted arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-[-45px] w-[90px] h-0 border-t-2 border-dashed border-gray-300 transform translate-y-[-50%]">
                  <span className="absolute -right-2 top-[-6px] w-0 h-0 border-l-[8px] border-l-gray-300 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
