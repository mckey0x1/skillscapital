import React from "react";

type Industry = {
  title: string;
  description: string;
  image: string;
};

const industries: Industry[] = [
  {
    title: "Banking & Financial Services",
    description: "COBOL-based core banking, IBM MQ-based transaction queues",
    image: "/image/8e8cc704e4dfba4b69c852813fc6e9596ec2233b.jpg"
  },
  {
    title: "Utilities & Energy",
    description:
      "Maximo for asset lifecycle, GIS integrations, IIB-based SCADA feeds",
    image: "/image/a92913945c6b614431ab6f85340b5bf5b433b8d5.jpg"
  },
  {
    title: "Telecom",
    description: "High-volume MQ messaging, BPM for customer workflows",
    image: "/image/297d9a683cec9f5435f2bc3913ca76ec1449cd3e.png"
  },
  {
    title: "Manufacturing",
    description: "Maximo Inventory, Preventive Maintenance, WebSphere admin",
    image: "/image/2d0e30601973227dc6a1f883c9deb4a3529fe821.jpg"
  },
  {
    title: "Public Sector",
    description: "Mainframe apps, record archiving, BPM governance workflows",
    image: "/image/c7105da426632bcb0b5bef6975cdf14837783238.png"
  },
  {
    title: "Insurance",
    description:
      "Claims management on mainframe, policy workflow automation via IIB",
    image: "/image/ff97236ba9b1e3a1df036b92bc1a599c1aa294a3.png"
  }
];

const IndustryCard: React.FC<{ industry: Industry }> = ({ industry }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="p-2">
        <img
          src={industry.image}
          alt={industry.title}
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">
          {industry.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{industry.description}</p>
      </div>
    </div>
  );
};

export default function IndustriesSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Industries We Specialize In
        </h2>
        <p className="text-gray-600 mt-2">
          Trusted Workday consultants across global and regulated sectors
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <IndustryCard key={idx} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
