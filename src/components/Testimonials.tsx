import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Innovatech's custom software streamlined our entire workflow, saving us countless hours and boosting our productivity significantly. Their team was professional, responsive, and a pleasure to work with.",
    author: "Jane Doe",
    position: "CEO, TechCorp",
    initials: "JD",
    // 👇 male-looking placeholder
    image: "https://i.pravatar.cc/150?img=68",
  },
  {
    quote:
      "Migrating to the cloud was a daunting task, but Innovatech made it seamless. Their expertise and support were invaluable, and we've seen a massive improvement in our system's performance and scalability.",
    author: "John Smith",
    position: "CTO, NextGen",
    initials: "JS",
    image: "https://i.pravatar.cc/150?img=59",
  },
  {
    quote:
      "The IT consulting from Innovatech has been a game-changer for us. Their strategic insights helped us optimize our IT infrastructure and align our technology with our business goals. Highly recommended!",
    author: "Samuel Green",
    position: "IT Director, HealthFirst",
    initials: "SG",
    image: "https://i.pravatar.cc/150?img=12",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from businesses who have transformed with Innovatech Solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-lg transition-smooth border-0"
            >
              <CardContent className="p-6">
                <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
