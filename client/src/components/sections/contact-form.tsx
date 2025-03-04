import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactForm() {
  return (
    <section className="py-24 h-full relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-purple-900/20" />
      <div className="absolute inset-0 bg-grid-white/5 bg-grid-16" />
      
      {/* Animated decorative elements */}
      <motion.div
        className="absolute right-0 top-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.div
        className="absolute left-0 bottom-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container mx-auto px-4 max-w-md relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="backdrop-blur-lg bg-white/10 border border-white/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-white">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[100px] focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
