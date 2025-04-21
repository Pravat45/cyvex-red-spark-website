
import { useRef } from "react";
import informatica from "../../assets/infomatica.jpeg"
import kforce from "../../assets/kforce.png";
import oxford from "../../assets/oxford.png";
import cbts from "../../assets/cbts.png";
import fis from "../../assets/fis.png";
import cardinal from "../../assets/cardinal.png";
import judge from "../../assets/judge.png";
import beacon from "../../assets/beacon.jpeg";
import homedepot from "../../assets/homeDepot.jpg";
import johnson from "../../assets/jhonson.png";
import walmart from "../../assets/walmart.png";
import bofa from "../../assets/bankOfAmerica.png";
import wells from "../../assets/wellsFargo.png";

const clients = [
  { name: "Informatica", logo: informatica },
  { name: "Kforce", logo: kforce },
  { name: "Oxford Consulting", logo: oxford },
  { name: "CBTS", logo: cbts },
  { name: "FIS", logo: fis },
  { name: "Cardinal Health", logo: cardinal },
  { name: "Judge Group", logo: judge },
  { name: "Beacon Hill Staffing", logo: beacon },
  { name: "The Home Depot", logo: homedepot },
  { name: "Johnson & Johnson", logo: johnson },
  { name: "Walmart", logo: walmart },
  { name: "Bank of America", logo: bofa },
  { name: "Wells Fargo", logo: wells },
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
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
