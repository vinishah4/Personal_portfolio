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
      ? "M13 18C15 9 23 5 32 5C40 5 48 10 50 19V28H13V18Z"
      : hairStyle === "bob"
        ? "M12 19C14 10 22 6 32 6C42 6 50 11 52 21V29C49 26 46 24 43 23C40 22 38 23 32 23C26 23 24 22 21 23C18 24 15 26 12 29V19Z"
        : hairStyle === "curly"
          ? "M12 20C14 10 22 6 32 6C42 6 50 11 52 21C49 18 46 18 44 20C42 16 39 15 35 17C32 13 28 13 25 17C21 15 18 16 16 20C15 18 14 18 12 20Z"
          : "M12 18C15 9 23 5 32 5C41 5 49 10 51 20C47 17 42 17 38 19C35 15 29 15 25 19C21 17 16 17 12 18Z";

  const sideHairPath =
    hairStyle === "bun"
      ? "M15 28C16 38 20 45 25 50M49 28C48 39 44 46 39 50"
      : hairStyle === "bob"
        ? "M15 26C15 37 18 46 23 50M49 26C49 37 46 46 41 50"
        : hairStyle === "curly"
          ? "M16 25C15 31 17 39 23 45M48 25C49 31 47 39 41 45"
          : "M16 25C15 34 18 42 23 47M48 25C49 34 46 42 41 47";

  return (
    <div
      className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-white/70 shadow-sm"
      style={{ backgroundColor: bg }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="h-10 w-10">
        <circle cx="32" cy="32" r="31" fill={bg} />
        <path d="M17 55C19 46 25 41 32 41C39 41 45 46 47 55" fill={shirt} />
        <path d={hairPath} fill={hair} />
        <path d={sideHairPath} stroke={hair} strokeWidth="6" strokeLinecap="round" />
        {hairStyle === "bun" ? <circle cx="40" cy="9" r="6" fill={hair} /> : null}
        <circle cx="32" cy="30" r="12.5" fill={skin} />
        <path d="M25.5 27.5C27 26.2 28.7 26.2 30 27.5" stroke="#4d4251" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M34 27.5C35.3 26.2 37 26.2 38.5 27.5" stroke="#4d4251" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="28" cy="30.5" r="1.25" fill="#4d4251" />
        <circle cx="36" cy="30.5" r="1.25" fill="#4d4251" />
        <path d="M32 31.5C31.4 33.2 31.5 34.4 32.4 35.5" stroke="#8c6f68" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M28.5 38C30.8 39.8 33.2 39.8 35.5 38" stroke="#4d4251" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="23" cy="35" r="2.2" fill={accent} opacity="0.55" />
        <circle cx="41" cy="35" r="2.2" fill={accent} opacity="0.55" />
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
