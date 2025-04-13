
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for an e-commerce platform built with Angular. Features include data visualization, product management, order tracking, and user management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "Chart.js", "Angular Material"],
      liveDemo: "https://example.com",
      sourceCode: "https://github.com",
      featured: true
    },
    {
      title: "Task Management Application",
      description: "A Kanban-style task management application that helps teams track project progress. Includes features like drag-and-drop task management, user assignments, and deadline tracking.",
      image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2a1?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Angular", "TypeScript", "Firebase", "Angular CDK", "SCSS"],
      liveDemo: "https://example.com",
      sourceCode: "https://github.com",
      featured: true
    },
    {
      title: "Weather Forecast App",
      description: "A responsive weather application that provides current weather information and 5-day forecasts for any location. Utilizes geolocation and weather APIs for accurate data.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Angular", "TypeScript", "RxJS", "OpenWeatherMap API", "Progressive Web App"],
      liveDemo: "https://example.com",
      sourceCode: "https://github.com",
      featured: false
    },
    {
      title: "Personal Blog Platform",
      description: "A full-stack blog platform built with Angular frontend and Node.js backend. Features include article publishing, commenting system, and user authentication.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Angular", "Node.js", "Express", "MongoDB", "JWT Authentication"],
      liveDemo: "https://example.com",
      sourceCode: "https://github.com",
      featured: true
    },
    {
      title: "Fitness Tracking Application",
      description: "A fitness application that allows users to track workouts, set goals, and monitor progress. Includes features like workout timers, progress charts, and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Angular", "TypeScript", "NgRx", "Firebase", "Chart.js"],
      liveDemo: "https://example.com",
      sourceCode: "https://github.com",
      featured: false
    },
    {
      title: "Real-Time Chat Application",
      description: "A real-time messaging application with features like group chats, direct messaging, and file sharing. Uses WebSockets for instant message delivery.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Angular", "Socket.io", "Node.js", "Express", "MongoDB"],
      liveDemo: "https://example.com",
      sourceCode: "https://github.com",
      featured: false
    }
  ];

  // Filter featured projects first, followed by non-featured
  const sortedProjects = [
    ...projects.filter(p => p.featured),
    ...projects.filter(p => !p.featured)
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border/50 shadow-md hover:shadow-lg transition-all animate-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="ml-2">Featured</Badge>
                  )}
                </div>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline">+{project.technologies.length - 3} more</Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button asChild variant="default" size="sm">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
