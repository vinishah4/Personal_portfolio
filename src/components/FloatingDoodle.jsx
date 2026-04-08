import { useState } from 'react';

const FloatingDoodle = ({ className = "" }) => {
  const [isAwake, setIsAwake] = useState(false);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-auto absolute h-auto w-[215px] ${className}`}
      style={{ zIndex: 1 }}
      onMouseEnter={() => setIsAwake(true)}
      onMouseLeave={() => setIsAwake(false)}
    >
      <style>{`
        .doodle-wrap {
          animation: doodleFloat 3.5s ease-in-out infinite, doodleWobble 3.5s ease-in-out infinite;
          transform-origin: center bottom;
        }

        @keyframes doodleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes doodleWobble {
          0%, 100% { rotate: -1deg; }
          50% { rotate: 1deg; }
        }

        .doodle-eyes-closed,
        .doodle-eyes-open {
          transition: opacity 220ms ease, transform 220ms ease;
          transform-origin: center;
        }

        .doodle-eyes-open {
          animation: doodleBlink 2s ease-in-out infinite;
        }

        @keyframes doodleBlink {
          0%, 42%, 48%, 100% { transform: scaleY(1); }
          45% { transform: scaleY(0.12); }
        }
      `}</style>

      <svg
        viewBox="0 0 190 240"
        className="h-auto w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="doodle-wrap" stroke="#181818" strokeLinecap="round" strokeLinejoin="round">
          <path d="M28 30 C46 18 66 18 86 28" strokeWidth="3.2" strokeDasharray="1 7" />

          <circle cx="94" cy="92" r="44" strokeWidth="2.8" />

          {[
            "M48 86 C41 60 57 42 74 48",
            "M58 58 C74 34 102 34 118 50",
            "M116 51 C133 45 145 61 138 87",
            "M50 73 C57 61 66 54 78 52",
            "M67 52 C79 45 96 45 108 52",
            "M108 52 C120 56 130 64 132 78",
            "M47 96 C41 78 45 63 59 53",
            "M138 96 C144 80 143 63 129 52",
          ].map((d, index) => (
            <path key={index} d={d} strokeWidth="2.8" opacity="0.9" />
          ))}

          {[
            [52, 63], [60, 54], [71, 50], [84, 48], [98, 49], [111, 53], [123, 60], [131, 72],
            [49, 77], [47, 92], [51, 105], [60, 116], [123, 115], [134, 104], [137, 89], [134, 74],
          ].map(([cx, cy], index) => (
            <ellipse
              key={index}
              cx={cx}
              cy={cy}
              rx="7"
              ry="12"
              strokeWidth="2.1"
              transform={`rotate(${index % 2 === 0 ? -18 : 16} ${cx} ${cy})`}
            />
          ))}

          <g
            className="doodle-eyes-closed"
            style={{ opacity: isAwake ? 0 : 1, transform: isAwake ? 'translateY(-1px)' : 'translateY(0px)' }}
          >
            <path d="M76 90 C80 96 86 96 90 90" strokeWidth="2.4" />
            <path d="M100 90 C104 96 110 96 114 90" strokeWidth="2.4" />
          </g>
          <g
            className="doodle-eyes-open"
            style={{ opacity: isAwake ? 1 : 0, transform: isAwake ? 'translateY(0px)' : 'translateY(1px)' }}
          >
            <ellipse cx="83" cy="92" rx="3.2" ry="4.6" strokeWidth="2.2" fill="none" />
            <ellipse cx="107" cy="92" rx="3.2" ry="4.6" strokeWidth="2.2" fill="none" />
          </g>
          <path d="M95 106 C97 109 101 109 103 106" strokeWidth="2.4" />
          <path d="M80 126 C87 138 107 138 114 126" strokeWidth="2.8" />

          <path d="M95 136 L94 151" strokeWidth="2.6" />
          <path d="M94 151 C78 158 68 171 56 188" strokeWidth="2.8" />
          <path d="M94 151 C108 158 120 171 132 188" strokeWidth="2.8" />

          <path d="M74 149 C66 164 61 175 58 187" strokeWidth="2.6" />
          <path d="M114 149 C122 164 127 175 130 187" strokeWidth="2.6" />

          <path d="M74 149 C82 145 104 145 114 149 L121 184 C107 189 83 190 68 184 Z" strokeWidth="2.8" />

          {[
            [82, 159], [95, 163], [107, 158], [86, 171], [100, 174], [111, 169],
          ].map(([cx, cy], index) => (
            <circle
              key={index}
              cx={cx}
              cy={cy}
              r="2.6"
              strokeWidth="1.8"
              fill="none"
            />
          ))}

          <path d="M67 184 C57 190 46 195 36 204" strokeWidth="2.6" />
          <path d="M122 184 C131 190 143 195 153 204" strokeWidth="2.6" />
          <path d="M56 203 C71 198 87 197 95 201" strokeWidth="2.6" />
          <path d="M95 201 C104 197 120 198 136 203" strokeWidth="2.6" />
          <path d="M79 181 C73 190 67 199 61 210" strokeWidth="2.6" />
          <path d="M110 181 C117 190 123 199 129 210" strokeWidth="2.6" />

          <circle cx="74" cy="99" r="4.5" fill="#f3a8b8" fillOpacity="0.8" stroke="none" />
          <circle cx="115" cy="99" r="4.5" fill="#f3a8b8" fillOpacity="0.8" stroke="none" />
        </g>
      </svg>
    </div>
  );
};

export default FloatingDoodle;
