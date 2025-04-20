import { Link } from "react-router-dom";
import { Shield, Users, Heart, CheckCircle } from "lucide-react";

const Services = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-600">
              Cyvex Labs provides comprehensive services across three key areas to help organizations build secure, resilient, and efficient operations.
            </p>
          </div>
        </div>
      </section>

      {/* Cyber Security Section */}
      <section id="cybersecurity" className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="p-1 bg-gradient-to-br from-cyvex to-cyvex-light rounded-2xl inline-block mb-6">
                <Shield size={36} className="text-white m-3" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Cyber Security</h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive cybersecurity services help organizations identify, protect against, and respond to cyber threats effectively. We provide end-to-end security solutions tailored to your specific needs.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-xl">Our Cybersecurity Solutions Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                    <span><strong>Security Assessment & Auditing:</strong> Comprehensive evaluation of your security posture to identify vulnerabilities and compliance gaps.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                    <span><strong>24/7 Security Monitoring:</strong> Continuous monitoring of your network and systems to detect and respond to security threats in real-time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                    <span><strong>Incident Response:</strong> Rapid response to security incidents to minimize damage and restore normal operations quickly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                    <span><strong>Security Training:</strong> Comprehensive training programs to educate your staff on best security practices and threat awareness.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="Cybersecurity services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Solutions Section */}
      <section id="staffing" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            <div className="md:w-1/2 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Staffing solutions"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-1/2">
              <div className="p-1 bg-gradient-to-br from-cyvex to-cyvex-light rounded-2xl inline-block mb-6">
                <Users size={36} className="text-white m-3" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Staffing Solutions</h2>
              <p className="text-gray-600 mb-6">
                Our specialized IT and cybersecurity staffing services help organizations build strong teams with the right expertise. We connect you with top talent for both permanent and contract positions.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-xl">Our Staffing Solutions Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                    <span><strong>Executive Search:</strong> Recruiting C-level and director-level security professionals for leadership positions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                    <span><strong>Contract Staffing:</strong> Providing skilled security professionals for project-based and temporary needs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                    <span><strong>Permanent Placement:</strong> Identifying and recruiting full-time cybersecurity experts for your organization.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                    <span><strong>Staff Augmentation:</strong> Supplementing your existing team with specialized security skills when needed.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Section */}
      <section id="healthcare" className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="p-1 bg-gradient-to-br from-cyvex to-cyvex-light rounded-2xl inline-block mb-6">
                <Heart size={36} className="text-white m-3" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Healthcare Services</h2>
              <p className="text-gray-600 mb-6">
                Our dedicated healthcare services focus on securing sensitive patient data, ensuring regulatory compliance, and enabling secure digital transformation in the healthcare sector.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-xl">Our Healthcare Solutions Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                    <span><strong>HIPAA Compliance:</strong> Ensuring your systems and processes comply with healthcare data protection regulations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                    <span><strong>Medical Device Security:</strong> Protecting connected medical devices from cyber threats and unauthorized access.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                    <span><strong>Telehealth Security:</strong> Implementing secure telehealth solutions that protect patient privacy during remote consultations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                    <span><strong>EMR/EHR Security:</strong> Securing electronic medical records and healthcare information systems.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Healthcare services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyvex text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Organization?</h2>
            <p className="text-lg mb-8">
              Contact our team today to discuss how Cyvex Labs can help protect your business with our comprehensive services and solutions.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-cyvex hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
