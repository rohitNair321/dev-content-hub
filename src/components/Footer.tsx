
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/rohit-nair-007408217", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:rohit123nair@gmail.com", label: "Email" }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-primary/5 pt-12 pb-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
          <div className="md:max-w-xs">
            <a href="#home" className="text-xl font-bold text-primary mb-4 block">
              <span className="text-foreground">Dev</span>Portfolio
            </a>
            <p className="text-muted-foreground mb-6">
              Frontend developer specialized in Angular, passionate about creating
              beautiful and functional web experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>Hinjewadi, Pune, Maharashtra, India</p>
              <p>
                <a href="mailto:contact@johndeveloper.com" className="hover:text-primary transition-colors">
                rohit123nair@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                  +918668671077
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Rohit Nair. All rights reserved.
            </p>
            {/* <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Designed & Built with <span className="text-primary">❤</span>
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
