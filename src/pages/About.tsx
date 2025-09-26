import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Alice Johnson",
    role: "CEO",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Bob Williams",
    role: "CTO",
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Carol Smith",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/150?img=34",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Innovatech
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovatech Solutions is dedicated to delivering cutting-edge technology solutions that
              empower businesses to thrive in the digital era. Our mission is to innovate, optimize,
              and transform your business with expert IT consulting, custom software, and cloud
              solutions.
            </p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="shadow-card hover:shadow-lg transition-smooth">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
