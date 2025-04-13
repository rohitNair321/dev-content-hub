
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Layout, 
  Database, 
  GitBranch, 
  Smartphone, 
  Settings, 
  PenTool, 
  Share2
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-10 w-10 text-primary" />,
      skills: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "RxJS", "NgRx"]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-10 w-10 text-primary" />,
      skills: ["Node.js (Learning)", "Express.js (Learning)", "RESTful APIs", "JSON"]
    },
    {
      title: "Tools & Version Control",
      icon: <GitBranch className="h-10 w-10 text-primary" />,
      skills: ["Git", "GitHub", "VS Code", "npm", "Webpack", "Gulp"]
    },
    {
      title: "UI/UX Design",
      icon: <PenTool className="h-10 w-10 text-primary" />,
      skills: ["Responsive Design", "Bootstrap", "Material Design", "Angular Material", "Tailwind CSS"]
    },
    {
      title: "Testing",
      icon: <Code className="h-10 w-10 text-primary" />,
      skills: ["Jasmine", "Karma", "Protractor", "Jest", "Unit Testing", "E2E Testing"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      skills: ["Progressive Web Apps", "Mobile-First Design", "Responsive Web Design"]
    },
    {
      title: "Performance Optimization",
      icon: <Settings className="h-10 w-10 text-primary" />,
      skills: ["Lazy Loading", "Code Splitting", "Bundle Analysis", "Performance Auditing"]
    },
    {
      title: "Soft Skills",
      icon: <Share2 className="h-10 w-10 text-primary" />,
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Mentoring"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-border/50 shadow-sm hover:shadow-md transition-shadow animate-in" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
