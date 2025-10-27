import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiX, SiDiscord, SiLinkedin, SiYoutube } from "react-icons/si";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const submitMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setName("");
      setEmail("");
      setMessage("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({ name, email, message });
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Card className="p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    disabled={submitMutation.isPending}
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    disabled={submitMutation.isPending}
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    className="min-h-32"
                    required
                    disabled={submitMutation.isPending}
                    data-testid="input-message"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full" 
                  disabled={submitMutation.isPending}
                  data-testid="button-send-message"
                >
                  {submitMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">hello@pixelbound.games</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <button className="p-2 rounded-lg hover-elevate active-elevate-2" data-testid="link-twitter">
                  <SiX className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg hover-elevate active-elevate-2" data-testid="link-discord">
                  <SiDiscord className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg hover-elevate active-elevate-2" data-testid="link-linkedin">
                  <SiLinkedin className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg hover-elevate active-elevate-2" data-testid="link-youtube">
                  <SiYoutube className="w-5 h-5" />
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
