import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import PhotoReel from '../components/home/PhotoReel';
import Programs from '../components/home/Programs';
import PeacebuildingSpotlight from '../components/home/PeacebuildingSpotlight';
import EducationSpotlight from '../components/home/EducationSpotlight';
import LivelihoodsSpotlight from '../components/home/LivelihoodsSpotlight';
import TargetGroups from '../components/home/TargetGroups';
import Achievements from '../components/home/Achievements';
import PartnershipCTA from '../components/home/PartnershipCTA';
import DonationCTA from '../components/home/DonationCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <PhotoReel />
      <Programs />
      <PeacebuildingSpotlight />
      <EducationSpotlight />
      <LivelihoodsSpotlight />
      <TargetGroups />
      <Achievements />
      <PartnershipCTA />
      <DonationCTA />
    </>
  );
}
