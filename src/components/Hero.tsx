import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl -top-48 -left-48 animate-float" />
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-accent text-lg font-medium">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                Ansh Prajapati
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300">
                Full Stack Developer & Cloud Enthusiast
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 max-w-xl">
              Computer Science Engineering student at VIT with expertise in building scalable web applications, 
              cloud infrastructure, and secure software solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/anshp1108" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/ansh-prajapati" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:anshp1108@gmail.com"
                className="p-3 rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 rounded-2xl blur-2xl" />
              <img 
                src={profileImage} 
                alt="Ansh Prajapati" 
                className="relative rounded-2xl w-full max-w-md shadow-2xl border-4 border-accent/20"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
