import React from "react";
import { ArrowRight } from "lucide-react";

type TalentProfile = {
  name: string;
  role: string;
  domainFit: string;
  background: string;
  referenceScore: string;
  image: string;
};

const profiles: TalentProfile[] = [
  {
    name: "Ravi Krishnan",
    role: "FICO + RAP Developer",
    domainFit: "12 Yrs, Banking",
    background: "Lang Chain - RAG - Python - FAISS",
    referenceScore: "4.6/5 (based on 3 global clients)",
    image: "/image/41e6a08c4ed2ed5b0a1e0d1b011b3c83e4a62d89.png"
  },
  {
    name: "Ravi Krishnan",
    role: "MM Config Expert + LTMC",
    domainFit: "10 Yrs, Manufacturing",
    background: "ML flow - Kubernetes - GCP Vertex",
    referenceScore: "4.6/5 (based on 3 global clients)",
    image: "/image/c44ee36a8e627fb01657672404fb273b9f1ee7c0.png"
  },
  {
    name: "Ravi Krishnan",
    role: "CPI Integration Lead",
    domainFit: "14 Yrs, Pharma",
    background: "Time Series - Python - Forecasting",
    referenceScore: "4.6/5 (based on 3 global clients)",
    image: "/image/e07ca6b9d44a45606a1786462e4e52d1a6125e24.png"
  }
];

const ProfileCard: React.FC<{ profile: TalentProfile }> = ({ profile }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-visible border mt-20 border-gray-100">
      <div className="bg-yellow-400 h-20 relative flex items-center rounded-t-xl justify-center overflow-visible">
        <img
          src={profile.image}
          alt={profile.name}
          className="h-40 w-auto absolute -top-20"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{profile.name}</h3>
        <p className="text-sm text-gray-600">{profile.role}</p>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p>
            <strong>Domain Fit:</strong> {profile.domainFit}
          </p>
          <p>
            <strong>Background:</strong> {profile.background}
          </p>
          <p>
            <strong>Reference Score:</strong> {profile.referenceScore}
          </p>
        </div>

        <button className="mt-5 w-full flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
          Request Full Profile <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default function SampleWorkdayProfiles() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Sample Workday Talent Profiles
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          Our freelancers bring contextual understanding of verticals like:
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, idx) => (
            <ProfileCard key={idx} profile={profile} />
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full flex items-center gap-2 mx-auto">
            Explore more profiles <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
