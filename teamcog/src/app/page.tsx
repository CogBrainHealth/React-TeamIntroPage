import StartSection from "@/components/TeamIntro/StartSection/StartSection";
import GotoButtonPage from "@/components/TeamIntro/GotoButtonPage/GotoButtonPage";
import TeamLead from "@/components/TeamIntro/TeamLead/TeamLead";
import TeamMember from "@/components/TeamIntro/TeamMember/TeamMember";

export default function Home() {
  return (
    <div>
      <StartSection />
      <TeamLead />
      <TeamMember />
      <GotoButtonPage />
    </div>
  );
}
