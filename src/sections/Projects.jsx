import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import portfolio3Img from "../assets/portfolio3.png"
import EcommerceImg from "../assets/E-commerce.png"
import NetflixImg from "../assets/Netflix.png"
import TodoImg from "../assets/Todo.png"
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Personal portfolio",
    description:
      "A responsive personal portfolio website build using React.js to showcase my skills,projects,and experience as a front-end developer.",
    image: portfolio3Img,
    tags: ["React", "JavaScript", "Redux","tailwindcss"],
    link:"#",
    github: "#",
    
  },
  {
    title: "E-Commerce App",
    description:
      "A fully responsive e-commerce web application built using React.js that provides a  smooth and user-friendly shopping experience.The application includes user authentication with secure login functionality,allowing users to sign up and access personalized features.",
    image: EcommerceImg,
    tags: ["React.js", "JavaScript", "Redux", "Firebase","tailwindcss"],
    link: "https://ecommerce-org.netlify.app/",
    github: "https://github.com/Sahlaktp01/E-commerce-app",
  },
  {
    title: "Netflix-clone",
    description:
      "A responsive Netflix inspired web application build using Reacrt.js that replicates the core features and user interface of the Netflix platform.The application displays movies and TV shows with dynamic content fetched from external REST APIs.",
    image: NetflixImg,
    tags: ["React", "Redux", "Firebase", "REST APIs"],
    link: "https://6967bfa40b1d7a000845b0ad--sahla-netfli.netlify.app/",
    github: "https://github.com/Sahlaktp01/Netflix",
  },
  {
    title: "To Do APP",
    description:
      "A simple and interactive Todo application built using React.js that allows users to add,update,and delete tasks.The application focuses on efficient state managememt using React hooks and component-based architecture",
    image: TodoImg,
    tags: ["React"],
    link: "#",
    github: "https://github.com/Sahlaktp01/Todo-APP",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};