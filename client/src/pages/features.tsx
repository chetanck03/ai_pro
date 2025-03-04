import { motion } from "framer-motion";
import Features from "@/components/sections/features";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen  bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
       
        <Features />
      </motion.div>
    </main>
  );
}
