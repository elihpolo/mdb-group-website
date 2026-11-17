import { useEffect } from 'react';
import PageTransition from '../components/ui/PageTransition.jsx';
import Hero from '../components/home/Hero.jsx';
import Overview from '../components/home/Overview.jsx';
import CapabilitiesPreview from '../components/home/CapabilitiesPreview.jsx';
import MissionSolutions from '../components/home/MissionSolutions.jsx';
import Credentials from '../components/home/Credentials.jsx';
import ContractingPreview from '../components/home/ContractingPreview.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';

export default function Home() {
  useEffect(() => {
    document.title = 'MDB Group, LLC | Defense Management Consulting (Redesign Concept)';
  }, []);

  return (
    <PageTransition>
      <Hero />
      <Overview />
      <CapabilitiesPreview />
      <MissionSolutions />
      <Credentials />
      <ContractingPreview />
      <ContactCTA />
    </PageTransition>
  );
}
