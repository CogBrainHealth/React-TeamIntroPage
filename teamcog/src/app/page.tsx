import AppIntro from "@/components/AppIntro/AppIntro";
import TeamLead from "@/components/TeamLead/TeamLead";
import TeamMember from "@/components/TeamMember/TeamMember";

export default function Home() {
  return (
    <div>
      <AppIntro />
      <TeamLead />
      <TeamMember />
    </div>
  );
}
