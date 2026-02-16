import { Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Branding */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  {/* <span className="text-primary-foreground font-bold text-lg">Python Togo</span> */}
                  <img src="https://www.pytogo.org/static/images/Py.png" alt="Python Togo" width="120" loading="eager" decoding="async" fetchpriority="high"></img>
                </div>
                <span className="text-xl font-bold">Python Software Community Togo</span>
              </div>
              <p className="text-secondary-foreground/70 text-sm">
                © 2026 PSCT. All rights reserved. Empowering students through Python, Open Source, and Community
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.x.com/pytogo_org"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.github.com/python-togo"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/python-togo/"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@pytogo.org"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
