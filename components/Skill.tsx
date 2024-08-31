import Image, { StaticImageData } from "next/image";

interface SkillType {
  name: string;
  image: StaticImageData;
}

interface SkillProps {
  skill: SkillType;
}

function Skill({ skill }: SkillProps) {
  return (
    <div className="relative p-4 bg-card rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground to-transparent opacity-60 group-hover:opacity-100 transition duration-500"></div>
      <Image
        src={skill.image}
        alt={skill.name}
        className="w-16 h-16 mb-4 z-10"
      />
      <h1 className="text-xl text-primary z-10">{skill.name}</h1>
    </div>
  );
}

export default Skill;
