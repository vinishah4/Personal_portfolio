import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "Vinita brings a proactive mindset, strong coordination skills, and a positive energy to every project. She quickly adapted to managing workflows in Wrike and consistently supports team alignment and execution.",
    avatarFace: {
      bg: "#f1deea",
      skin: "#f2cdb8",
      hair: "#6b5149",
      shirt: "#d9dff2",
      accent: "#f5b6c5",
      hairStyle: "wave",
    },
    name: "Lauren Azevedo",
    role: "Sr. Program Manager, The Academy Brand Enterprise",
  },
  {
    text: "Vinita has been a standout member of our team, contributing to high-visibility projects with confidence and ease. She quickly got up to speed and took ownership of her work with minimal guidance, consistently delivering strong results. Any organization she joins will benefit from her talent, drive, and ability to deliver.",
    avatarFace: {
      bg: "#e5eedc",
      skin: "#eabfa8",
      hair: "#4d433f",
      shirt: "#d8eadf",
      accent: "#efb2b9",
      hairStyle: "bun",
    },
    name: "Alyssa Olsen",
    role: "Project Manager, Brand Enterprise ASU",
  },
  {
    text: "Vinita demonstrated strong leadership and communication skills as a WPC 101 Facilitator at ASU, creating an inclusive and engaging learning environment for students. She brings a thoughtful, adaptable approach to teamwork, balancing structure with empathy to support group success. Her professionalism, reliability, and ability to connect with diverse individuals make her a standout leader and collaborator.",
    avatarFace: {
      bg: "#ebe1f5",
      skin: "#e8c6b4",
      hair: "#3f373c",
      shirt: "#e1d8ef",
      accent: "#f1b5c4",
      hairStyle: "bob",
    },
    name: "Victoria Lopez",
    role: "Program Manager, W. P. Carey School of Business",
  },
  {
    text: "Vinita quickly proved to be an exceptional and dependable team member, demonstrating strong adaptability and a willingness to learn. She consistently applied feedback, took initiative beyond her assigned responsibilities, and contributed meaningfully to team operations. Her proactive mindset and strong work ethic make her a valuable asset to any organization.",
    avatarFace: {
      bg: "#f6e2d7",
      skin: "#f0cbb5",
      hair: "#5a4540",
      shirt: "#f0ddd2",
      accent: "#f3b5be",
      hairStyle: "curly",
    },
    name: "Jeannette Martinez",
    role: "Assistant Operations Manager, Nomad Temporary Housing",
  },
  {
    text: "Vinita brought genuine care, energy, and dedication to the International Education Center community. She went out of her way to support students, build connections, and create a welcoming environment for everyone involved. Her commitment to helping others and her strong sense of responsibility truly set her apart.",
    avatarFace: {
      bg: "#dfe8f1",
      skin: "#efceb9",
      hair: "#4a433f",
      shirt: "#d7e3ef",
      accent: "#eab1bf",
      hairStyle: "wave",
    },
    name: "Shane Liliedahl",
    role: "Director, International Education Center, Orange Coast College",
  },
  {
    text: "Vinita consistently demonstrated exceptional reliability, initiative, and problem-solving skills during her time at Orange Coast College Library. She took ownership of supporting students, often working one-on-one to resolve challenges and ensure a positive experience. Her ability to take initiative without direction and exceed expectations made her an exemplary and trusted team member.",
    avatarFace: {
      bg: "#efe4d8",
      skin: "#e8c5ae",
      hair: "#5d4d47",
      shirt: "#ead9cf",
      accent: "#efb5bf",
      hairStyle: "bob",
    },
    name: "Colleen Ausmus",
    role: "Library Manager, Orange Coast College",
  },
  {
    text: "Vinita demonstrated strong customer service, reliability, and teamwork during her time as a barista at Starbucks. She handled high-volume environments with efficiency, maintained a positive attitude, and consistently delivered a great customer experience. Her ability to stay composed, communicate effectively, and support her team made her a dependable and valuable contributor.",
    avatarFace: {
      bg: "#e7e0da",
      skin: "#efcab4",
      hair: "#4b403d",
      shirt: "#d9d3cc",
      accent: "#f0b8bf",
      hairStyle: "bun",
    },
    name: "Mounier Hanchem",
    role: "Assistant Manager, Starbucks Orange Coast College",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 5);
const thirdColumn = testimonials.slice(5, 7);

const HomeTestimonials = () => {
  return (
    <section className="relative overflow-hidden bg-brand-lavender/75 px-6 py-24 md:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-white/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[620px] flex-col items-center justify-center text-center"
        >
          <div className="rounded-full border border-brand-line/70 bg-brand-white/70 px-5 py-2 text-[15px] font-bold uppercase tracking-[0.22em] text-brand-plum">
            What They Say
          </div>

          <h2 className="mt-6 text-4xl font-serif font-bold text-brand-plum md:text-5xl">
            A few words from the people I&apos;ve worked with
          </h2>
          <p className="mt-5 text-base leading-[1.85] text-brand-charcoal/80 md:text-lg">
            Feedback from managers, teammates, and collaborators on how I show up, follow through, and contribute.
          </p>
        </motion.div>

        <div className="mt-14 flex max-h-[720px] justify-center gap-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={30} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={36} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden xl:block" duration={32} />
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
