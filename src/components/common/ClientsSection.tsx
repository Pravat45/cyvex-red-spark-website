
import { useRef } from "react";

const clients = [
  { name: "Informatica", logo: "informatica-logo.png" },
  { name: "Kforce", logo: "kforce-logo.png" },
  { name: "Oxford Consulting", logo: "oxford-logo.png" },
  { name: "CBTS", logo: "cbts-logo.png" },
  { name: "FIS", logo: "fis-logo.png" },
  { name: "Cardinal Health", logo: "cardinal-health-logo.png" },
  { name: "Judge Group", logo: "judge-group-logo.png" },
  { name: "Beacon Hill Staffing", logo: "beacon-hill-logo.png" },
  { name: "The Home Depot", logo: "home-depot-logo.png" },
  { name: "Johnson & Johnson", logo: "johnson-and-johnson-logo.png" },
  { name: "Walmart", logo: "walmart-logo.png" },
  { name: "Bank of America", logo: "bank-of-america-logo.png" },
  { name: "Wells Fargo", logo: "wells-fargo-logo.png" },
];

export const ClientsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Trusted Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to work with leading organizations across various industries,
            providing them with top-notch cybersecurity and staffing solutions.
          </p>
        </div>

        {/* Clients slider */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-8 py-6 overflow-x-auto scrollbar-none"
          >
            {clients.map((client, index) => (
              <div 
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow min-w-[180px]"
              >
                {/* We're using a text placeholder since actual logos aren't available */}
                <div className="w-28 h-28 flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-800">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
