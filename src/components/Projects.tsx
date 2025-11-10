import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Health Care Management System",
    description: "Comprehensive healthcare portal serving 500+ users with secure data handling, HIPAA compliance, scheduling APIs, billing systems, and interactive dashboards.",
    technologies: ["PostgreSQL", "React", "Node.js", "Express.js"],
    highlights: [
      "Implemented HIPAA-compliant data security",
      "Real-time appointment scheduling system",
      "Integrated billing and payment processing",
      "Interactive patient & doctor dashboards"
    ],
    githubUrl: "https://github.com/anshp1108/hospital-management"
  },
  {
    title: "Movie Reviewing Platform",
    description: "Responsive movie review platform with JWT authentication, scalable database architecture, and comprehensive API endpoints deployed on AWS cloud infrastructure.",
    technologies: ["Express.js", "AWS", "PostgreSQL", "JWT"],
    highlights: [
      "Secure JWT-based authentication",
      "AWS deployment (EC2, S3, CloudFront)",
      "RESTful API architecture",
      "Scalable database design"
    ],
    githubUrl: "https://github.com/anshp1108/moviemate"
  },
  {
    title: "Code Review Assistant",
    description: "AI-powered code review tool leveraging OpenAI's API to analyze source code for syntax errors, logic issues, and optimization suggestions with an intuitive Streamlit interface.",
    technologies: ["Python", "Streamlit", "OpenAI API", "AI/ML"],
    highlights: [
      "Automated code quality analysis",
      "AI-powered optimization suggestions",
      "Real-time syntax error detection",
      "User-friendly Streamlit UI"
    ],
    githubUrl: "https://github.com/anshp1108/code_review_assistant"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="p-6 card-hover flex flex-col border-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-accent">Key Highlights:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button variant="default" size="sm" className="flex-1 bg-accent hover:bg-accent/90">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
