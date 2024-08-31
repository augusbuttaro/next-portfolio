import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";

// Define the type for a project
interface SocialType {
    name: string;
    text?: string;
    icon: IconType;
    link: string;
  }
  
  // Define the props type
  interface SocialProps {
    social: SocialType;
  }

function Social({social}:SocialProps){
    return(
        <a href={social.link} className="flex items-center gap-2">
            <social.icon/>
            <h1 className="hover:underline">{social.text}</h1>
        </a>
    )
}

export default Social