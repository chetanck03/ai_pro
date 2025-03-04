import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd",
    content: "This AI assistant has revolutionized my workflow. The responses are incredibly accurate and helpful."
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    content: "I've tried many AI tools, but this one stands out. It's fast, reliable, and understands context perfectly."
  },
  {
    name: "Alex Rivera",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    content: "This AI assistant has revolutionized my workflow. The responses are incredibly accurate and helpful."
  },
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd",
    content: "This AI assistant has revolutionized my workflow. The responses are incredibly accurate and helpful."
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    content: "I've tried many AI tools, but this one stands out. It's fast, reliable, and understands context perfectly."
  },
  {
    name: "Alex Rivera",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    content: "This AI assistant has revolutionized my workflow. The responses are incredibly accurate and helpful."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
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

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            What Users Say
          </h2>
          <p className="text-muted-foreground">Trusted by professionals worldwide</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
