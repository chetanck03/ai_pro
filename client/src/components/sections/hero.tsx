import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Model3D from "@/components/3d/Model3D";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 bg-background/95 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-background to-blue-600/10 animate-gradient" />

      <div className="container mx-auto px-4 pt-10 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-blue-400 leading-tight">
                Advanced AI 
              </h1>
              <motion.p 
                className="text-2xl text-muted-foreground mb-10 leading-relaxed"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Revolutionize your workflow with our advanced AI technology. Experience intelligent automation, insightful analytics, and seamless integration.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg py-6">
                  <Link href="/auth">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10 text-lg py-6">
                  <Link href="/features">Learn More</Link>
                </Button>
              </motion.div>

              {/* Metrics */}
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                <div>
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                    99%
                  </h3>
                  <p className="text-muted-foreground text-sm">Accuracy Rate</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                    24/7
                  </h3>
                  <p className="text-muted-foreground text-sm">Available Support</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
                    10x
                  </h3>
                  <p className="text-muted-foreground text-sm">Productivity Boost</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column: 3D Model */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[550px] w-full max-w-[600px] mx-auto lg:mr-0 lg:ml-auto"
          >
            {/* 3D Model - interactive AI animation */}
            <div className="relative h-full w-full">
              <Model3D />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-center text-white/80 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                ⚡ Click the AI core to see what it can do
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-white/50 rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}