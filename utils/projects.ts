import tava from '@/public/images/tava-ecommerce.png'
import rps from '@/public/images/rps-img.png'
import college from '@/public/images/college-dashboard.png'
import myRecipes from '@/public/images/my-recipes.png'
import unitConverter from '@/public/images/unit-converter-img.png'

export const projectList = [
    {
        name: "Tava E-Commerce",
        img: tava,
        description: "The Tava E-Commerce website is a modern online shopping platform featuring a user-friendly design. Built with React and Next.js for a dynamic and high-performance experience, it uses Tailwind CSS for flexible styling and a responsive design that ensures a smooth experience across devices, with a minimalist layout and intuitive navigation. Also uses Shadcn-UI for a cohesive look and PostgreSQL is employed for robust data management. ",
        git:"https://github.com/augusbuttaro/tava-ecommerce",
        link: "https://tava-ecommerce.vercel.app/",
        skills:['React', 'Next.js', 'PostgreSQL', "Tailwind CSS", 'TypeScript']
    },
    {
        name: "College Dashboard",
        img: college,
        description: "The College Dashboard is an efficient academic management tool built with React for a dynamic frontend and Node.js with Express.js and MongoDB for a powerful backend. It features a clean, responsive design that ensures a smooth experience across devices. The dashboard enables users to manage classes, track tasks and exams, and organize notes with ease. Its user-friendly interface and optimized performance deliver a streamlined and effective academic experience.",
        git:"https://github.com/augusbuttaro/college-dashboard",
        link: "https://college-dashboard-mrxs.onrender.com/",
        skills:['React', 'Node.js', 'MongoDB', 'Figma', 'Tailwind CSS']
    },
    {
        name: "MyRecipes",
        img: myRecipes,
        description: "MyRecipes is an engaging recipe catalog platform designed to help users discover and save their favorite meals. Built with React for a dynamic user experience, it integrates a clean and responsive design that works seamlessly across devices. The application features an intuitive interface for browsing a wide range of recipes, with options to search and filter based on various criteria. Users can easily save their favorite recipes and access detailed information about each dish. The site’s performance is optimized for quick load times and smooth interactions, providing a delightful cooking and recipe management experience.",
        git:"https://github.com/augusbuttaro/my-recipes",
        link: "https://my-recipes-alpha.vercel.app/",
        skills:['React', 'HTML', 'JavaScript', 'Tailwind CSS']
    },
    {
        name: "Rock, Paper, Scissors",
        img: rps,
        description: "Rock, Paper, Scissors was created using JavaScript, HTML, and CSS. It offers a user-friendly experience for playing the classic game, while also displaying basic JavaScript concepts.",
        git:"https://github.com/augusbuttaro/RPSGame",
        link: "https://rock-paper-scissors-augusto-buttaro.netlify.app/",
        skills:['JavaScript', 'HTML', 'Figma', 'CSS']
    },
]