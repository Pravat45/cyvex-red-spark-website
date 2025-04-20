
import { Link } from "react-router-dom";
import { ShieldCheck, CheckCircle } from "lucide-react";

// Update the technologies array to use the uploaded image for PAM
const technologies = [
  {
    name: "PAM (Privileged Access Management)",
    description: "Our PAM solutions help organizations control, monitor, and secure privileged access to critical systems and data. We ensure that only authorized users have the right level of access to sensitive resources.",
    benefits: [
      "Secure privileged access to critical systems",
      "Granular control over admin permissions",
      "Automated credential management",
      "Comprehensive audit trails",
      "Real-time monitoring of privileged sessions",
    ],
    icon: ShieldCheck,
    image: "/lovable-uploads/25efcfbf-738f-47a0-a80c-553e27651d7b.png",
  },
  {
    name: "Saviynt",
    description: "We implement Saviynt's cloud-native identity governance platform to help organizations manage identities, enforce compliance, and secure access across applications and infrastructure.",
    benefits: [
      "Cloud-native identity governance",
      "Application access certification",
      "Automated provisioning and de-provisioning",
      "Risk-based access governance",
      "Compliance management and reporting",
    ],
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    name: "CyberArk",
    description: "Our CyberArk implementations provide robust privileged account security, helping organizations protect against advanced cyber threats through comprehensive privileged access management.",
    benefits: [
      "Secure storage of privileged credentials",
      "Session isolation and monitoring",
      "Just-in-time privileged access",
      "Application identity management",
      "Threat analytics and detection",
    ],
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },
  {
    name: "DevOps",
    description: "We integrate security into DevOps processes to create secure CI/CD pipelines that enable organizations to build and deploy secure applications at scale and speed.",
    benefits: [
      "Secure CI/CD pipeline integration",
      "Automated security testing",
      "Infrastructure as code security",
      "Container and Kubernetes security",
      "Continuous compliance monitoring",
    ],
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
];

const Technologies = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Technologies</h1>
            <p className="text-lg text-gray-600">
              Cyvex Lab leverages industry-leading technologies to deliver robust security solutions that protect your organization's most valuable assets.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="p-1 bg-gradient-to-br from-cyvex to-cyvex-light rounded-2xl inline-block mb-6">
                    <tech.icon size={36} className="text-white m-3" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{tech.name}</h2>
                  <p className="text-gray-600 mb-6">
                    {tech.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">Key Benefits:</h3>
                    <ul className="space-y-3">
                      {tech.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Technology image with overlayed faded name */}
                <div className="md:w-1/2 bg-gray-100 rounded-xl p-0 h-full relative flex items-center justify-center overflow-hidden min-h-[280px] md:min-h-[256px]">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl md:text-5xl text-white/60 font-bold text-center drop-shadow-lg break-words px-4 select-none">
                      {tech.name}
                    </span>
                  </div>
                  {/* Empty div for positioning */}
                  <div className="invisible">image</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need Expert Technology Implementation?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified experts can help you implement and optimize these technologies to enhance your security posture and operational efficiency.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-cyvex hover:bg-cyvex-dark text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technologies;

