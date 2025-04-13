
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              John Developer
            </h1>
            <div className="mb-6">
              <span className="text-2xl md:text-3xl font-semibold block mb-1">Frontend Developer</span>
              <span className="text-muted-foreground text-lg">Specialized in Angular & Learning Node.js</span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-md">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative animate-in">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-50"></div>
              <div className="w-full h-[480px] rounded-2xl bg-background relative overflow-hidden border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-60 w-60 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-70 blur-2xl"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Developer portrait" 
                    className="w-[400px] h-[400px] object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
