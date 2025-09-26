import { Card, CardContent } from "@/components/ui/card";
import { Code, Cloud, Users } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "We build bespoke software applications that address specific business challenges and drive efficiency."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "We help businesses migrate to the cloud, manage their cloud infrastructure, and optimize cloud performance."
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Our expert consultants provide strategic guidance and support to help businesses leverage technology effectively."
  }
];

const CoreServices = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of services tailored to meet the unique needs of each client.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-smooth border-0 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;