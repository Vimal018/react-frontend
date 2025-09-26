import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                We're here to help and answer any questions you might have.
                We look forward to hearing from you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1-555-123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">support@innovatech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">123 Innovation St, Tech City, 12345</p>
                  </div>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="mt-12">
                <Card className="overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.020152831291!2d-122.41941548468016!3d37.774929779759814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0a4e99%3A0x4d66b4b1c3ef9b8a!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1694686500000!5m2!1sen!2sin"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Card>

              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div>
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                        Your Name
                      </Label>
                      <Input 
                        id="name"
                        placeholder="Enter your name"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                        Your Email
                      </Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                        Your Message
                      </Label>
                      <Textarea 
                        id="message"
                        placeholder="Enter your message"
                        rows={6}
                        className="w-full resize-y"   // ⬅️ allow vertical resizing
                      />

                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full py-6 text-lg shadow-hero"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
       <footer className="border-t border-border bg-muted/30 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
    <p className="text-left text-muted-foreground">
      © 2025 Innovatech Solutions. All rights reserved.
    </p>
    <div className="flex space-x-6">
      <a href="https://www.linkedin.com/company/innovatech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href="https://twitter.com/innovatech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
        <Twitter className="w-5 h-5" />
      </a>
      <a href="https://facebook.com/innovatech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
        <Facebook className="w-5 h-5" />
      </a>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Contact;