
import { Link } from "react-router-dom";
import { ShieldCheck, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Cyber Security",
    description: "Comprehensive protection for your digital assets with advanced threat detection and prevention solutions.",
    icon: ShieldCheck,
    link: "/services#cybersecurity"
  },
  {
    title: "Staffing Solutions",
    description: "Expert talent acquisition services to help you build the perfect team for your cybersecurity needs.",
    icon: Users,
    link: "/services#staffing"
  },
  {
    title: "Health Care",
    description: "Specialized security and compliance solutions for the healthcare industry to protect patient data.",
    icon: Heart,
    link: "/services#healthcare"
  }
];

export const ServicesPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions to protect your business from cyber threats and
            help you build secure, resilient digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-cyvex/10 rounded-full flex items-center justify-center mb-6">
                <service.icon size={24} className="text-cyvex" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to={service.link} className="text-cyvex font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-cyvex hover:bg-cyvex-dark">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
