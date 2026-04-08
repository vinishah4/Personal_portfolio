"use client";

import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = ({ className = "", testimonials, duration = 10 }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="max-w-sm w-full rounded-[28px] border border-brand-line/70 bg-brand-white/92 p-8 shadow-[0_18px_40px_rgba(110,93,121,0.1)] backdrop-blur-sm"
                key={`${name}-${index}-${i}`}
              >
                <p className="text-lg italic leading-[1.85] text-brand-charcoal font-serif">"{text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    width={44}
                    height={44}
                    src={image}
                    alt={name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-bold leading-5 text-brand-plum">{name}</div>
                    <div className="leading-5 text-sm text-brand-gold">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
