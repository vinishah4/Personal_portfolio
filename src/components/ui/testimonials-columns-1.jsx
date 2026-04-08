"use client";

import React from "react";
import { motion } from "framer-motion";

const FaceAvatar = ({ face }) => {
  const {
    bg = "#f4e7ee",
    skin = "#f3d1bf",
    hair = "#5f4b4b",
    shirt = "#d9dff2",
    accent = "#f7b8c7",
    hairStyle = "wave",
  } = face || {};

  const hairPath =
    hairStyle === "bun"
      ? "M13 17C16 9 24 6 32 6C40 6 47 10 50 18V26H13V17Z"
      : hairStyle === "bob"
        ? "M12 18C14 10 22 7 32 7C42 7 49 11 51 20V28C48 25 45 23 42 22C39 21 37 22 32 22C27 22 25 21 22 22C19 23 16 25 13 28L12 18Z"
        : hairStyle === "curly"
          ? "M12 20C14 10 22 6 32 6C42 6 50 11 52 21C49 18 46 18 44 20C42 16 39 15 35 17C32 13 28 13 25 17C21 15 18 16 16 20C15 18 14 18 12 20Z"
          : "M12 18C15 9 23 5 32 5C41 5 49 10 51 20C47 17 42 17 38 19C35 15 29 15 25 19C21 17 16 17 12 18Z";

  return (
    <div
      className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-white/70 shadow-sm"
      style={{ backgroundColor: bg }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="h-10 w-10">
        <circle cx="32" cy="32" r="31" fill={bg} />
        <path d="M18 54C20 46 26 42 32 42C38 42 44 46 46 54" fill={shirt} />
        <path d={hairPath} fill={hair} />
        {hairStyle === "bun" ? <circle cx="40" cy="9" r="6" fill={hair} /> : null}
        <circle cx="32" cy="29" r="13" fill={skin} />
        <circle cx="27" cy="29" r="1.4" fill="#4d4251" />
        <circle cx="37" cy="29" r="1.4" fill="#4d4251" />
        <path d="M29 35C31 36.4 33 36.4 35 35" stroke="#4d4251" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="23" cy="33" r="2" fill={accent} opacity="0.7" />
        <circle cx="41" cy="33" r="2" fill={accent} opacity="0.7" />
      </svg>
    </div>
  );
};

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
            {testimonials.map(({ text, image, avatarFace, name, role }, i) => (
              <div
                className="w-full max-w-[23rem] rounded-[28px] border border-brand-line/70 bg-brand-white/92 p-8 shadow-[0_18px_40px_rgba(110,93,121,0.1)] backdrop-blur-sm"
                key={`${name}-${index}-${i}`}
              >
                <p className="text-lg italic leading-[1.85] text-brand-charcoal font-serif">"{text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  {avatarFace ? (
                    <FaceAvatar face={avatarFace} />
                  ) : (
                    <img
                      width={44}
                      height={44}
                      src={image}
                      alt={name}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  )}
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
