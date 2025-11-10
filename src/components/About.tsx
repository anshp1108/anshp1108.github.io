import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about building robust solutions and exploring cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 card-hover border-2">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground mb-2">B.Tech in Computer Science</p>
            <p className="text-sm text-foreground font-medium">VIT, Vellore</p>
            <p className="text-sm text-accent">CGPA: 8.99/10</p>
          </Card>

          <Card className="p-6 card-hover border-2">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-muted-foreground mb-2">Campus Business Manager</p>
            <p className="text-sm text-foreground font-medium">PrepBytes</p>
            <p className="text-sm text-accent">Jan 2023 - Mar 2023</p>
          </Card>

          <Card className="p-6 card-hover border-2">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Certifications</h3>
            <p className="text-muted-foreground mb-2">4+ Professional Certifications</p>
            <p className="text-sm text-foreground font-medium">Oracle, AWS, Google</p>
            <p className="text-sm text-accent">2024 - 2025</p>
          </Card>
        </div>

        <Card className="p-8 bg-card">
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a Computer Science and Engineering student at VIT, Vellore, with a strong passion for 
              full-stack development, cloud computing, and cybersecurity. With a CGPA of 8.99, I've 
              consistently demonstrated academic excellence while gaining practical experience in real-world projects.
            </p>
            <p>
              My technical journey spans across various domains - from building healthcare management systems 
              serving 500+ users to developing scalable movie review platforms deployed on AWS. I'm proficient 
              in modern technologies including React, Node.js, PostgreSQL, and cloud platforms like AWS.
            </p>
            <p>
              Beyond coding, I've organized technical events and coding webinars as a Campus Business Manager 
              at PrepBytes, engaging with 100+ peers and fostering a programming culture. I'm actively seeking 
              internship opportunities in Software Development or Site Reliability Engineering to apply my 
              skills in building secure, scalable solutions.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
