import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "Vinita consistently goes above and beyond. Her ability to organize chaos into a streamlined process has been invaluable to our brand operations team.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    name: "Director of Marketing",
    role: "Arizona State University",
  },
  {
    text: "She handles high-pressure client situations with an easy grace. You give her a problem, and she simply figures it out. Highly dependable.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    name: "Client Success Manager",
    role: "Nomad Temporary Housing",
  },
];

const firstColumn = testimonials.slice(0, 1);
const secondColumn = testimonials.slice(1, 2);

const HomeTestimonials = () => {
  return (
    <section className="relative overflow-hidden bg-brand-lavender/75 px-6 py-24 md:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-white/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[620px] flex-col items-center justify-center text-center"
        >
          <div className="rounded-full border border-brand-line/70 bg-brand-white/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-plum">
            What They Say
          </div>

          <h2 className="mt-6 text-4xl font-serif font-bold text-brand-plum md:text-5xl">
            A few words from the people I&apos;ve worked with
          </h2>
          <p className="mt-5 text-base leading-[1.85] text-brand-charcoal/80 md:text-lg">
            A quick look at how teammates and collaborators describe my work style, follow-through, and impact.
          </p>
        </motion.div>

        <div className="mt-14 flex max-h-[720px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={18} />
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
