import { motion } from "framer-motion";
import ContactForm from "@/components/sections/contact-form";

export default function Contact() {
  return (
    <main className="min-h-screen pt-16 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </motion.div>
    </main>
  );
}