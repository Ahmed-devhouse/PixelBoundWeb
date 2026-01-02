import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Sparkles } from "lucide-react";
import { SiYoutube } from "react-icons/si";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || data.message || "Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background effects matching hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(236,72,153,0.08),transparent_40%)]" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          {...fadeIn(0)}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 ring-1 ring-white/10 backdrop-blur mb-4"
            {...fadeIn(0.1)}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Let's Connect
          </motion.div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-white">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            className="lg:col-span-2"
            {...fadeIn(0.1)}
          >
            <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] p-6 lg:p-8">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <Label htmlFor="name" className="text-white/90 mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    disabled={isSending}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-primary/20 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white/90 mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    disabled={isSending}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-primary/20 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white/90 mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    className="min-h-32 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-primary/20 backdrop-blur-sm resize-none"
                    required
                    disabled={isSending}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base font-semibold shadow-lg shadow-primary/30 group"
                  disabled={isSending}
                >
                  {isSending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-6"
            {...fadeIn(0.2)}
          >
            <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="rounded-xl bg-primary/20 p-3 border border-primary/30">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white">Email</h3>
                    <a
                      href="mailto:contact@pixelboundgames.com"
                      className="text-sm text-white/70 hover:text-primary transition-colors"
                    >
                      contact@pixelboundgames.com
                    </a>
                  </div>
                </motion.div>
             
                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="rounded-xl bg-primary/20 p-3 border border-primary/30">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white">Location</h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Suite C179 4 - 6, Greatorex Street,<br />
                      London, United Kingdom, E1 5NF
                    </p>
                  </div>
                </motion.div>
              </div>
            </Card>

            <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="font-bold mb-4 text-white">Follow Us</h3>
                <div className="flex gap-3">
                  <motion.a
                    href="https://www.youtube.com/@PixelBoundGames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 p-3 text-white transition-all group/btn backdrop-blur-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <SiYoutube className="w-5 h-5 group-hover/btn:text-red-500 transition-colors" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover/btn:from-red-500/10 group-hover/btn:to-transparent transition-all pointer-events-none" />
                  </motion.a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
