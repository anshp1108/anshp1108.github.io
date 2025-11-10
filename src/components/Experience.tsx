import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experience and industry-recognized certifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Work Experience */}
          <Card className="p-8 border-2 animate-fade-in">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-2xl font-semibold">Campus Business Manager Intern</h3>
                    <p className="text-lg text-accent">PrepBytes</p>
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Jan 2023 - Mar 2023
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Remote</p>
              </div>
            </div>
            
            <ul className="space-y-3 text-muted-foreground ml-16">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Organized technical events, coding webinars, and hackathons, engaging 100+ peers and fostering programming culture across campus</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Promoted and marketed coding programs across LinkedIn, Instagram, and Quora to boost enrollments and expand brand reach</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Acted as Single Point of Contact (SPOC) between PrepBytes and campus, coordinating events and addressing student queries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Received Letter of Recommendation and performance-based incentives for successful program completion</span>
              </li>
            </ul>
          </Card>

          {/* Certifications */}
          <Card className="p-8 border-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Professional Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 ml-16">
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <h4 className="font-semibold mb-1">Oracle Cloud Infrastructure 2025</h4>
                <p className="text-sm text-muted-foreground mb-1">Certified Data Science Professional</p>
                <p className="text-xs text-accent">Oracle • 2025</p>
              </div>
              
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <h4 className="font-semibold mb-1">AWS Cloud Practitioner</h4>
                <p className="text-sm text-muted-foreground mb-1">Amazon Web Services Certification</p>
                <p className="text-xs text-accent">AWS • 2024</p>
              </div>
              
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <h4 className="font-semibold mb-1">Google Cybersecurity Certificate</h4>
                <p className="text-sm text-muted-foreground mb-1">Play It Safe: Manage Security Risks</p>
                <p className="text-xs text-accent">Google • 2024</p>
              </div>
              
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <h4 className="font-semibold mb-1">Complete Web Development Bootcamp</h4>
                <p className="text-sm text-muted-foreground mb-1">Full Stack Development</p>
                <p className="text-xs text-accent">Dr. Angela Yu • 2024</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
