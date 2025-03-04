
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-purple-900/20" />
      <div className="absolute inset-0 bg-grid-white/5 bg-grid-16" />
      
      {/* Animated circle */}
      <motion.div
        className="absolute right-0 top-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute left-0 bottom-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Ready to Transform Your Experience?
            </h2>
            
            <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users already benefiting from our cutting-edge AI assistant. Get started today and see the difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                <Link href="/auth">Get Started for Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="mt-16">
              <p className="text-sm text-muted-foreground mb-6">TRUSTED BY LEADING COMPANIES</p>
              <div className="flex flex-wrap justify-center gap-8 mt-8">
                {['Microsoft', 'Google', 'Amazon', 'Tesla', 'Meta'].map((company, index) => (
                  <motion.div 
                    key={index} 
                    className="text-lg font-bold opacity-40 hover:opacity-80 transition-opacity cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.4, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {company}
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-10 right-10 w-20 h-20 border border-purple-500/20 rounded-full animate-pulse-tech" />
              <div className="absolute top-10 left-10 w-16 h-16 border border-blue-500/20 rounded-full animate-pulse-tech" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-sm animate-float" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
