import Image, { StaticImageData } from 'next/image';
import { Button } from './ui/button';
import { skills as allSkills } from '@/utils/skills'; // Import the skill list

// Define the type for a project
interface ProjectType {
  name: string;
  description?: string;
  img: StaticImageData;
  link: string;
  git: string;
  skills: string[];
}

// Define the props type
interface ProjectProps {
  project: ProjectType;
}

function Project({ project }: ProjectProps) {
  // Get the skill images for the project
  const projectSkills = allSkills.filter(skill => project.skills.includes(skill.name));

  return (
    <div className="relative p-6 bg-card rounded-lg shadow-lg flex overflow-hidden transition-transform transform hover:scale-105 group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground to-transparent opacity-60 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative z-10 flex items-center gap-8 text-left">
        <Image
          src={project.img}
          alt={project.name}
          className="rounded-lg mb-4"
          width={300}
          height={200}
        />
        <div className='flex flex-col w-2/3'>
          <div className='flex items-center justify-between mb-2'>
            <h2 className="text-2xl text-primary font-semibold">{project.name}</h2> 
            <div className="flex flex-wrap gap-2">
              {projectSkills.map((skill) => (
                <Image
                  key={skill.name}
                  src={skill.image}
                  alt={skill.name}
                  className="w-6 h-6"
                  width={32}
                  height={32}
                />
              ))}
            </div>
          </div>
          <p className="text-xs mb-4">{project.description}</p>
        </div>
        <div className='flex flex-col gap-4'>
          <Button>
            <a
              href={project.link}
              className="font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Page
            </a>
          </Button>
          <Button>
            <a
              href={project.git}
              className="font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Repository
            </a>
          </Button>
        </div>
      </div>
      <style jsx>{`
        .transform {
          transform: translateY(0);
        }
        .group:hover .transform {
          transform: translateY(-10px);
        }
      `}</style>
    </div>
  );
}

export default Project;
