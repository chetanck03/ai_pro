import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Zap, Shield, BarChart, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI",
    description: "Powered by state-of-the-art machine learning algorithms that continuously improve over time."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get immediate responses with our optimized infrastructure designed for speed and efficiency."
  },
  {
    icon: Cpu,
    title: "Smart Processing",
    description: "Complex data analysis and pattern recognition to provide intelligent insights."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security with end-to-end encryption to keep your data safe."
  },
  {
    icon: BarChart,
    title: "Analytics",
    description: "Comprehensive analytics dashboard to track performance and usage patterns."
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Access from anywhere in the world with our cloud-based infrastructure."
  }
];

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Key Features</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Discover what sets our AI assistant apart from the rest
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border border-white/10 bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-colors group overflow-hidden h-full">
                <CardContent className="p-6 relative">
                  {/* Gradient circle behind icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-lg group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative mb-4">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-lg inline-block">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground group-hover:text-white/70 transition-colors">
                    {feature.description}
                  </p>

                  {/* Corner gradient */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
