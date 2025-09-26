import Navigation from "@/components/Navigation";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We build bespoke software applications that address specific business challenges and drive efficiency.",
    icon: "💻",
  },
  {
    title: "Cloud Solutions",
    description:
      "We help businesses migrate to the cloud, manage their cloud infrastructure, and optimize cloud performance.",
    icon: "☁️",
  },
  {
    title: "IT Consulting",
    description:
      "Our expert consultants provide strategic guidance and support to help businesses leverage technology effectively.",
    icon: "🧠",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with our comprehensive cybersecurity solutions and risk management strategies.",
    icon: "🔒",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              We offer a range of services tailored to meet your unique business needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-card p-6 hover:shadow-lg transition-smooth"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="font-semibold text-lg text-foreground mb-2">{service.title}</h2>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
