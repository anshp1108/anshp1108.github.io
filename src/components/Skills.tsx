import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillsData = {
  "Languages": [
    "Java", "Python", "JavaScript", "TypeScript", "SQL", "C", "HTML5", "CSS3"
  ],
  "Frontend": [
    "React.js", "Bootstrap", "Responsive Design", "REST APIs"
  ],
  "Backend": [
    "Node.js", "Express.js", "Spring Boot", "Django"
  ],
  "Databases": [
    "PostgreSQL", "MySQL", "MongoDB", "Redis"
  ],
  "Cloud & DevOps": [
    "AWS", "Docker", "Git", "GitHub", "CI/CD", "Linux"
  ],
  "Cybersecurity": [
    "Nmap", "IDS", "Firewalls", "SSL/TLS", "SIEM"
  ],
  "Tools": [
    "VS Code", "IntelliJ", "Eclipse", "Postman", "Selenium"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <Card 
              key={category} 
              className="p-6 card-hover animate-fade-in border-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
