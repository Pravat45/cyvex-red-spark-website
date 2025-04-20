
import { Link } from "react-router-dom";
import { CheckCircle, ShieldCheck, Award, Users } from "lucide-react";

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Cyvex Labs</h1>
            <p className="text-lg text-gray-600">
              We are a leading cybersecurity company dedicated to protecting organizations 
              from evolving digital threats through innovative solutions and expert services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded by security experts with decades of industry experience, Cyvex Labs was established with a clear mission: to make advanced cybersecurity accessible to organizations of all sizes.
              </p>
              <p className="text-gray-600 mb-4">
                We recognized that as digital threats evolved, many organizations struggled to keep pace with the changing security landscape. Our team set out to bridge this gap by providing comprehensive security solutions that combine cutting-edge technology with practical, hands-on expertise.
              </p>
              <p className="text-gray-600">
                Today, Cyvex Labs serves clients across various industries, helping them build robust security frameworks that protect their critical assets and enable them to focus on their core business with confidence.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyvex to-cyvex-light flex items-center justify-center">
                <ShieldCheck size={80} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To empower organizations with the security expertise, technology, and support they need to protect their digital assets and thrive in an increasingly complex threat landscape.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-cyvex/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} className="text-cyvex" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the solutions we design to the service we provide to our clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-cyvex/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-cyvex" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with the highest level of integrity, transparency, and ethical standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-cyvex/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-cyvex" />
              </div>
              <h3 className="text-xl font-bold mb-3">Partnership</h3>
              <p className="text-gray-600">
                We build lasting partnerships with our clients, working collaboratively to achieve their security goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Cyvex Labs</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Expert Team</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Certified security professionals with extensive industry experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Specialists in various cybersecurity domains and technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Continuous training to stay ahead of emerging threats</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Comprehensive Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>End-to-end security services for complete protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Tailored solutions aligned with your specific needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Integration of leading security technologies</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Client-Centric Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Dedicated support throughout the engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Clear communication and transparent processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Long-term partnership focus</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Proven Track Record</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Successful projects across various industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>High client satisfaction and retention rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyvex flex-shrink-0 mt-1" />
                  <span>Demonstrated results in improving security postures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyvex text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-lg mb-8">
              Contact our team today to discuss how Cyvex Labs can help secure your organization and protect your valuable assets.
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

export default About;
