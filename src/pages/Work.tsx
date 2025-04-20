
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "Financial Institution Security Transformation",
    description: "Helped a leading bank implement comprehensive PAM solutions to secure privileged access and protect sensitive customer data.",
    results: [
      "90% reduction in security incidents",
      "100% compliance with financial regulations",
      "50% faster access management processes",
    ],
    industry: "Finance"
  },
  {
    title: "Healthcare Provider Data Protection",
    description: "Implemented advanced security solutions for a major healthcare network to protect patient data and ensure HIPAA compliance.",
    results: [
      "Zero data breaches since implementation",
      "Full HIPAA compliance achieved",
      "Enhanced protection for 500,000+ patient records",
    ],
    industry: "Healthcare"
  },
  {
    title: "Government Agency Security Enhancement",
    description: "Upgraded the security infrastructure of a government agency to protect sensitive information and critical systems.",
    results: [
      "Secure access controls for 10,000+ employees",
      "Advanced threat detection capabilities",
      "Streamlined security operations",
    ],
    industry: "Government"
  },
  {
    title: "Manufacturing Security Modernization",
    description: "Helped a manufacturing company secure their operational technology (OT) and IT systems against cyber threats.",
    results: [
      "Protected intellectual property",
      "Secured industrial control systems",
      "Prevented production downtime",
    ],
    industry: "Manufacturing"
  },
];

const Work = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-lg text-gray-600">
              Explore our successful projects and see how we've helped organizations across various industries enhance their security posture and protect their critical assets.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-cyvex to-cyvex-light flex items-center justify-center text-white">
                  <span className="text-2xl font-bold">{study.industry}</span>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {study.description}
                  </p>
                  
                  <h4 className="font-semibold mb-3">Key Results:</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="text-cyvex font-medium hover:underline flex items-center"
                  >
                    Learn more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Cyvex Labs transformed our security operations. Their team provided expert guidance and implemented solutions that significantly enhanced our security posture. We now have confidence in our ability to protect our sensitive data and systems."
              </p>
              <div>
                <p className="font-bold">John Smith</p>
                <p className="text-sm text-gray-500">CIO, Financial Services Company</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The team at Cyvex Labs understood our unique healthcare security challenges. They implemented solutions that not only ensured our HIPAA compliance but also enhanced our overall security framework. Their expertise has been invaluable to our organization."
              </p>
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-sm text-gray-500">CISO, Healthcare Provider</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyvex text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Security?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how Cyvex Labs can help secure your organization and protect your most valuable assets.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-cyvex hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Work;
