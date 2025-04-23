
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-30 blur-xl rounded-xl"></div>
            <div className="relative bg-card rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Developer working on code" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="animate-in">
            <h3 className="text-2xl font-bold mb-4">Frontend Developer & Angular Specialist</h3>
            <p className="text-muted-foreground mb-4">
              I'm a passionate frontend developer with expertise in Angular, creating
              responsive and user-friendly web applications. Currently expanding my skillset
              into Node.js to become a full-stack developer.
            </p>
            <p className="text-muted-foreground mb-4">
              With over 5 years of experience in frontend development, I've worked on projects
              ranging from small business websites to large enterprise applications. My approach
              combines technical expertise with an eye for design to deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              When I'm not coding, I create content to help other developers learn and grow in the field.
              I believe in sharing knowledge and contributing to the developer community.
            </p>
            <Button asChild>
              <a href="/Rohit.Nair.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
