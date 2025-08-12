import Navbar from "./components/navbar";
import Hero from "./components/hero";
import WhyChoose from "./components/whychoose";
import RolesWeCover from "./components/roleswecover";
import PlatformsModules from "./components/platformsModules";
import CertificationsVetting from "./components/certificationsvetting";
import VettingProcess from "./components/vettingprocess";
import EngagementModels from "./components/engagementmodels";
import KeyUseCases from "./components/keyuses";
import TechnicalExpertise from "./components/TechnicalExpertise";
import ProjectTypesSection from "./components/ProjectTypes";
import RoleTypesSection from "./components/RoleTypes";
import SampleWorkdayProfiles from "./components/SampleWorkdayProfiles";
import IndustriesSection from "./components/IndustriesSection";
import HiringSection from "./components/HiringSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChoose />
      <RolesWeCover />
      <PlatformsModules />
      <CertificationsVetting />
      <VettingProcess />
      <EngagementModels />
      <KeyUseCases />
      <TechnicalExpertise />
      <ProjectTypesSection/>
      <RoleTypesSection/>
      <SampleWorkdayProfiles/>
      <IndustriesSection/>
      <HiringSection/>
      <Footer/>
    </main>
  );
}
