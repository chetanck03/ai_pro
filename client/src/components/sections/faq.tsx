import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI assistant work?",
    answer: "Our AI assistant uses advanced natural language processing to understand your queries and provide relevant responses. It learns from interactions to improve accuracy over time."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security seriously. All conversations are encrypted and we follow strict privacy guidelines to protect your information."
  },
  {
    question: "What languages are supported?",
    answer: "The AI assistant supports multiple languages including English, Spanish, French, German, Chinese, and Japanese, with more languages being added regularly."
  },
  {
    question: "Can I use it on mobile devices?",
    answer: "Yes, our AI assistant is fully responsive and works seamlessly on all devices including smartphones and tablets."
  }
];

export default function FAQ() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common questions about our AI assistant</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
