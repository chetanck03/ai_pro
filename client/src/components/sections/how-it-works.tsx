import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Brain, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Ask Anything",
    description: "Type your question in natural language, just like chatting with a friend"
  },
  {
    icon: Brain,
    title: "AI Processing",
    description: "Our advanced algorithms analyze your request for the best possible response"
  },
  {
    icon: Sparkles,
    title: "Get Smart Results",
    description: "Receive accurate, helpful answers tailored to your needs instantly"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started with your AI assistant in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 hidden md:block -translate-y-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <Card className="relative bg-background/50 backdrop-blur-sm border-primary/10 overflow-hidden group">
                <CardContent className="p-6">
                  <div className="mb-6 relative">
                    {/* Step number */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Arrow for non-last items */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-8 -right-4 text-primary/40 hidden md:block">
                        <ArrowRight className="w-8 h-8" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}