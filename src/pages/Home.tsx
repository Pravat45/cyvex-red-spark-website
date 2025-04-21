import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ClientsSection } from "@/components/common/ClientsSection";

const Home = () => {
  return (
    <main>
      <HeroSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cyber Security Excellence for Your Business
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Cyvex Lab, we provide comprehensive cybersecurity services to
              protect your business against evolving digital threats. Our expert
              team delivers tailored security solutions designed to safeguard
              your critical assets and maintain business continuity in an
              increasingly complex digital landscape.
            </p>
            <p className="text-lg text-gray-600">
              We combine cutting-edge technology with industry expertise to
              deliver robust security frameworks that address your unique
              security challenges. From threat detection and prevention to
              compliance management and security training, our holistic approach
              ensures your organization stays protected against cyber threats.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://si-interactive.s3.amazonaws.com/prod/plansponsor-com/wp-content/uploads/2022/12/27102352/PS-CybersecurityKey-Considerations-and-Resources-for-Plan-Sponsors.jpg"
              alt="Cybersecurity visualization"
              className="rounded-lg shadow-lg max-w-[420px] w-full mx-auto"
            />
          </div>
        </div>
      </section>

      <ServicesPreview />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Cyvex Lab?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
              <div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our security professionals bring years of industry experience
                  and specialized knowledge to every engagement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Tailored Solutions</h3>
                <p className="text-gray-600">
                  We develop custom security strategies aligned with your
                  specific business needs and risk profile.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Our dedicated support team provides continuous monitoring and
                  assistance whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientsSection />
    </main>
  );
};

export default Home;
