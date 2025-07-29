"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-white rounded-4xl md:outline-2 md:outline-purple-300"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center px-4 py-6 md:p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Text Column */}
        <div className="md:col-span-4 text-left">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 gradient-text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Performance Appraisal
          </motion.h2>

         <motion.p
  className="text-base sm:text-lg md:text-xl text-black max-w-4xl leading-relaxed"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  viewport={{ once: true }}
>
  Track your entire Human Capital Life-cycle through automated, detailed, and seamless onboarding, identification of training needs, promotions and transfers, daily work summary, employee grievances, and exit.
</motion.p>


          <div className="mt-6 md:mt-8">
            <Button variant="destructive" className="bg-purple-500 hover:bg-purple-400">
              Click To Learn More
            </Button>
          </div>
        </div>

        {/* Image Column */}
        <div className="md:col-span-1 w-full">
          <img
            src="/asset/illustrationsvgs.png"
            alt="Performance Appraisal Illustration"
            className="w-full object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
