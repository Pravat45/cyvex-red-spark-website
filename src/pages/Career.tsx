
import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const jobs = [
  {
    id: "cybersec-analyst",
    title: "Cybersecurity Analyst",
    type: "Full-Time",
    location: "Remote / West Palm Beach, FL",
    description: "Join our team as a Cybersecurity Analyst to help protect our clients' digital assets and infrastructure.",
    responsibilities: [
      "Monitor security systems and respond to security alerts and incidents",
      "Perform vulnerability assessments and penetration testing",
      "Analyze security breaches to identify vulnerabilities",
      "Recommend and implement security improvements",
      "Stay updated with the latest security trends and threats",
    ],
    requirements: [
      "Bachelor's degree in Cybersecurity, IT, or related field",
      "2+ years of experience in cybersecurity or related role",
      "Knowledge of security frameworks and best practices",
      "Experience with security tools and technologies",
      "Security certifications (e.g., Security+, CEH, CISSP) preferred",
    ],
  },
  {
    id: "security-engineer",
    title: "Security Engineer",
    type: "Full-Time",
    location: "Remote / West Palm Beach, FL",
    description: "We're looking for a skilled Security Engineer to design and implement security solutions for our clients.",
    responsibilities: [
      "Design, implement, and maintain security infrastructure",
      "Configure and manage security tools and systems",
      "Conduct security assessments and audits",
      "Develop and implement security policies and procedures",
      "Provide technical guidance on security matters",
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Cybersecurity, or related field",
      "3+ years of experience in security engineering or similar role",
      "Strong knowledge of network security, encryption, and authentication systems",
      "Experience with firewalls, IDS/IPS, SIEM, and other security technologies",
      "Security certifications (e.g., CISSP, CCSP, CISM) preferred",
    ],
  },
  {
    id: "identity-specialist",
    title: "Identity and Access Management Specialist",
    type: "Full-Time",
    location: "Remote / West Palm Beach, FL",
    description: "Help our clients implement and manage identity and access management solutions to secure their digital assets.",
    responsibilities: [
      "Design and implement IAM solutions (including PAM, Saviynt, and CyberArk)",
      "Configure user access controls and permissions",
      "Conduct access reviews and audits",
      "Develop and enforce identity management policies",
      "Troubleshoot IAM issues and provide solutions",
    ],
    requirements: [
      "Bachelor's degree in IT, Cybersecurity, or related field",
      "3+ years of experience in IAM implementation and management",
      "Experience with PAM solutions, Saviynt, CyberArk, or similar technologies",
      "Understanding of authentication protocols and standards",
      "IAM certifications preferred",
    ],
  },
];

const Career = () => {
  const [filter, setFilter] = useState("all");

  const filteredJobs = filter === "all" 
    ? jobs 
    : jobs.filter(job => job.id.includes(filter));

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-lg text-gray-600">
              We're looking for talented individuals who are passionate about cybersecurity 
              and want to make a difference in protecting organizations from digital threats.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Join Cyvex Labs?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Growth and Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Continuous learning opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Professional certification support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Clear career progression paths</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Work-Life Balance</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Flexible work arrangements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Remote work opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Competitive time-off policies</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Impactful Work</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Work on cutting-edge security solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Help protect critical digital assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Solve challenging security problems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Current Openings</h2>
          
          <div className="flex justify-center mb-8">
            <div className="flex rounded-lg overflow-hidden border border-gray-200">
              <button 
                className={`px-6 py-2 ${filter === 'all' ? 'bg-cyvex text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setFilter('all')}
              >
                All Positions
              </button>
              <button 
                className={`px-6 py-2 ${filter === 'cybersec' ? 'bg-cyvex text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setFilter('cybersec')}
              >
                Cybersecurity
              </button>
              <button 
                className={`px-6 py-2 ${filter === 'identity' ? 'bg-cyvex text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setFilter('identity')}
              >
                Identity Management
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className="flex flex-col sm:flex-row sm:gap-4 mt-2">
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                          </svg>
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          {job.location}
                        </span>
                      </CardDescription>
                    </div>
                    <Button asChild className="bg-cyvex hover:bg-cyvex-dark">
                      <Link to={`/career/apply/${job.id}`}>Apply Now</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{job.description}</p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="responsibilities">
                      <AccordionTrigger>Responsibilities</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-5">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="requirements">
                      <AccordionTrigger>Requirements</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-5">
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link to={`/career/apply/${job.id}`}>View Details & Apply</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No positions found</h3>
                <p className="text-gray-600">Please check back later or try another category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Don't See the Right Fit?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to Cyvex Labs.
            </p>
            <Button asChild className="bg-cyvex hover:bg-cyvex-dark">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Career;
