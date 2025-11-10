import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent">A</span>nsh Prajapati
            </h3>
            <p className="text-gray-300 mb-4">
              Full Stack Developer passionate about building innovative solutions
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/anshp1108"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/ansh-prajapati"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:anshp1108@gmail.com"
                className="p-2 rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Get In Touch</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:anshp1108@gmail.com" className="hover:text-accent transition-colors">
                  anshp1108@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919727776100" className="hover:text-accent transition-colors">
                  +91 9727776100
                </a>
              </li>
              <li>VIT, Vellore, Tamil Nadu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-300">
          <p>© {currentYear} Ansh Prajapati. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
