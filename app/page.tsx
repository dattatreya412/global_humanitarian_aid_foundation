import ImageSlider from "@/components/imageSlider";
import ImpactCreated from '@/components/impactCreated'
import ActiveCampaign from '@/components/activeCampaign'
import VolunteerTab from "@/components/volunteerTab";
import ContactSection from "@/components/contactSection";


export default function Home(){
  return <main className="h-full w-full mt-30">
    <ImageSlider />
    <ImpactCreated />
    <ActiveCampaign/>
    <VolunteerTab />
    <ContactSection />
  </main>
}