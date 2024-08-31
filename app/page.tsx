import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectContainer from "@/components/ProjectContainer";
import SkillsContainer from "@/components/SkillsContainer";

function Home() {
  return(
    <div className="bg-gradient-to-r from-primary to-secondary py-12">
      <Navbar />
      <Hero />
      <ProjectContainer />
      <SkillsContainer />
    </div>
  )
}

export default Home