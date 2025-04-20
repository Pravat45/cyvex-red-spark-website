
import { CheckCircle } from "lucide-react";

const industries = [
  {
    name: "Finance",
    description: "Secure financial institutions with advanced cybersecurity solutions designed to protect sensitive customer data, ensure regulatory compliance, and maintain the trust of your clients.",
    benefits: [
      "Enhanced protection of customer financial data",
      "Compliance with financial regulations and standards",
      "Fraud detection and prevention solutions",
      "Secure transaction processing systems",
    ],
    image: "finance.jpg"
  },
  {
    name: "Healthcare",
    description: "Protect patient data and ensure healthcare service continuity with comprehensive security solutions that address the unique challenges of the healthcare sector.",
    benefits: [
      "HIPAA compliance and data protection",
      "Medical device security solutions",
      "Telehealth security frameworks",
      "Protected health information (PHI) safeguards",
    ],
    image: "healthcare.jpg"
  },
  {
    name: "Insurance",
    description: "Secure sensitive policyholder information and maintain operational integrity with tailored cybersecurity solutions for insurance providers.",
    benefits: [
      "Protection of client policy and claims data",
      "Secure digital transformation initiatives",
      "Regulatory compliance frameworks",
      "Advanced fraud prevention systems",
    ],
    image: "insurance.jpg"
  },
  {
    name: "Manufacturing",
    description: "Protect your production systems and intellectual property with industrial cybersecurity solutions designed for manufacturing environments.",
    benefits: [
      "OT/IT convergence security",
      "Supply chain risk management",
      "Intellectual property protection",
      "Industrial control system security",
    ],
    image: "manufacturing.jpg"
  },
  {
    name: "Government",
    description: "Secure critical infrastructure and sensitive citizen data with government-grade cybersecurity solutions that meet strict regulatory requirements.",
    benefits: [
      "Critical infrastructure protection",
      "Classified data security frameworks",
      "Compliance with government standards",
      "Citizen data privacy protection",
    ],
    image: "government.jpg"
  },
  {
    name: "Education",
    description: "Create safe learning environments by protecting student information and educational resources with specialized education sector security solutions.",
    benefits: [
      "Student data protection protocols",
      "Secure distance learning platforms",
      "Campus network security",
      "Research data protection systems",
    ],
    image: "education.jpg"
  },
];

const Industries = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industry-Specific Security Solutions
            </h1>
            <p className="text-lg text-gray-600">
              Cyvex Labs provides tailored cybersecurity solutions across a wide range of industries, addressing the unique challenges and regulatory requirements of each sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {industries.map((industry, index) => (
              <div key={index} className="border border-gray-100 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">{industry.name}</h2>
                <p className="text-gray-600 mb-6">
                  {industry.description}
                </p>
                <h3 className="font-semibold mb-3 text-cyvex">Key Benefits:</h3>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need Industry-Specific Cybersecurity Solutions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team today to discuss how we can help secure your organization with tailored cybersecurity solutions designed for your industry's specific needs.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-cyvex hover:bg-cyvex-dark text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Industries;
