import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Hero background image */}
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Red accent background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyvex-light/10 via-cyvex/5 to-transparent" />

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center bg-cyvex/10 text-cyvex px-4 py-1.5 rounded-full mb-6">
              <ShieldCheck size={18} className="mr-1.5" />
              <span className="text-sm font-medium">
                Trusted Cybersecurity Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Securing Your Business in the Digital Age
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Cyvex Lab provides comprehensive cybersecurity services to protect
              your organization against evolving cyber threats. Our expert team
              delivers tailored solutions for businesses of all sizes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-cyvex hover:bg-cyvex-dark"
              >
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyvex to-cyvex-light rounded-full opacity-10 blur-3xl" />
            <div className="relative bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1420039900/photo/cyber-security-ransomware-email-phishing-encrypted-technology-digital-information-protected.jpg?s=612x612&w=0&k=20&c=8wFwFVMOpW9gF2GTOx0vagIKDaw3YNFnBVbYCmoTUSY="
                  alt="Cybersecurity"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              {/* <div className="space-y-4">
                <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded-full"></div>
                <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
