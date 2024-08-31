import { cn } from "@/lib/utils"

function Title({text,className}:{text:string, className?:string}) {
    return(
      <h1 className={cn(`text-3xl`, className) }>
        {text}
      </h1>
    )
  }
  
  export default Title