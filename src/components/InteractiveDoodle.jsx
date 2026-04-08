import { useEffect, useRef, useState } from 'react';

const bubbleMessages = [
  'Psst — check out my work 👇',
  "Hi! I'm Vinny's portfolio buddy ✦",
  'Scroll down for the good stuff 🎯',
  "Let's get you to the right place →",
];

const sparkleSpecs = [
  { top: '8%', left: '10%', color: '#D4A373', delay: '0s', moveX: -16, moveY: -10 },
  { top: '10%', right: '14%', color: '#E89A83', delay: '0.06s', moveX: 18, moveY: -8 },
  { top: '38%', left: '0%', color: '#D4A373', delay: '0.12s', moveX: -20, moveY: 2 },
  { top: '44%', right: '2%', color: '#E89A83', delay: '0.18s', moveX: 22, moveY: 0 },
  { bottom: '18%', left: '16%', color: '#E89A83', delay: '0.24s', moveX: -12, moveY: 18 },
  { bottom: '12%', right: '18%', color: '#D4A373', delay: '0.3s', moveX: 16, moveY: 16 },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const StarSparkle = ({ color, style }) => (
  <svg
    viewBox="0 0 24 24"
    className="interactive-doodle__sparkle"
    style={{ ...style, color }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.5L14.2 9.8L21.5 12L14.2 14.2L12 21.5L9.8 14.2L2.5 12L9.8 9.8L12 2.5Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const InteractiveDoodle = ({ src, className = '' }) => {
  const doodleRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [isJumping, setIsJumping] = useState(false);
  const [sparkleBurst, setSparkleBurst] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const node = doodleRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const centerX = rect.left + rect.width * 0.5;
      const centerY = rect.top + rect.height * 0.33;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY) || 1;

      const nextX = clamp((deltaX / distance) * 3, -3, 3);
      const nextY = clamp((deltaY / distance) * 2, -2, 2);

      setEyeOffset({ x: nextX, y: nextY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setMessageIndex((current) => (current + 1) % bubbleMessages.length);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsJumping(true);
    setSparkleBurst((current) => current + 1);

    window.setTimeout(() => {
      setIsJumping(false);
    }, 500);
  };

  return (
    <div
      ref={doodleRef}
      className={`interactive-doodle absolute w-[180px] ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <style>{`
        .interactive-doodle {
          position: absolute;
          cursor: pointer;
          user-select: none;
        }

        .interactive-doodle__inner {
          position: relative;
          width: 100%;
          animation: interactiveDoodleFloat 3.6s ease-in-out infinite;
        }

        .interactive-doodle__inner.is-jumping {
          animation: interactiveDoodleJump 0.5s ease-in-out;
        }

        .interactive-doodle__image {
          display: block;
          width: 100%;
          height: auto;
        }

        .interactive-doodle__eyes {
          position: absolute;
          left: 50%;
          top: 41%;
          width: 42px;
          height: 14px;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .interactive-doodle__eye {
          position: absolute;
          top: 0;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #181818;
          transition: transform 0.1s ease;
        }

        .interactive-doodle__eye:first-child {
          left: 4px;
        }

        .interactive-doodle__eye:last-child {
          right: 4px;
        }

        .interactive-doodle__arm {
          position: absolute;
          right: 22px;
          top: 108px;
          width: 28px;
          height: 82px;
          transform-origin: top center;
          pointer-events: none;
        }

        .interactive-doodle__arm.is-waving {
          animation: interactiveDoodleWave 0.55s ease-in-out 3;
        }

        .interactive-doodle__bubble {
          position: absolute;
          left: 50%;
          top: -42px;
          width: 208px;
          padding: 12px 16px;
          border: 2px solid #2f2f2f;
          border-radius: 24px 21px 28px 18px;
          background: #fdf7ef;
          color: #4a3f55;
          font-family: "Caveat", "Bradley Hand", "Marker Felt", cursive;
          font-size: 27px;
          line-height: 1.03;
          text-align: center;
          box-shadow: 0 12px 24px rgba(74, 63, 85, 0.08);
          transform: translateX(-50%) scale(0);
          transform-origin: bottom center;
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
        }

        .interactive-doodle__bubble::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -14px;
          width: 22px;
          height: 22px;
          background: #fdf7ef;
          border-right: 2px solid #2f2f2f;
          border-bottom: 2px solid #2f2f2f;
          transform: translateX(-50%) rotate(28deg);
          border-bottom-right-radius: 8px;
        }

        .interactive-doodle__bubble.is-visible {
          opacity: 1;
          animation: interactiveDoodleBubbleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .interactive-doodle__sparkles {
          position: absolute;
          inset: -24px;
          pointer-events: none;
        }

        .interactive-doodle__sparkle {
          position: absolute;
          width: 18px;
          height: 18px;
          opacity: 0;
          transform: scale(0);
          animation: interactiveDoodleSparkle 0.8s ease-out forwards;
        }

        @keyframes interactiveDoodleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes interactiveDoodleWave {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-40deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-40deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes interactiveDoodleBubbleIn {
          0% { transform: translateX(-50%) scale(0); }
          100% { transform: translateX(-50%) scale(1); }
        }

        @keyframes interactiveDoodleJump {
          0% { transform: translateY(0); }
          35% { transform: translateY(-20px); }
          65% { transform: translateY(4px); }
          100% { transform: translateY(0); }
        }

        @keyframes interactiveDoodleSparkle {
          0% { opacity: 0; transform: translate(0, 0) scale(0); }
          20% { opacity: 1; }
          100% { opacity: 0; transform: translate(var(--sparkle-x), var(--sparkle-y)) scale(1); }
        }
      `}</style>

      <div className={`interactive-doodle__inner ${isJumping ? 'is-jumping' : ''}`}>
        <img src={src} alt="" aria-hidden="true" className="interactive-doodle__image" />

        <div className={`interactive-doodle__bubble ${isHovered ? 'is-visible' : ''}`}>
          {bubbleMessages[messageIndex]}
        </div>

        <div className="interactive-doodle__eyes" aria-hidden="true">
          <span
            className="interactive-doodle__eye"
            style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
          />
          <span
            className="interactive-doodle__eye"
            style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
          />
        </div>

        <svg
          viewBox="0 0 28 82"
          className={`interactive-doodle__arm ${isHovered ? 'is-waving' : ''}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M14 8C16 18 16 29 17 39C18 51 21 61 24 74"
            stroke="#181818"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 72C21 70 23 68 25 66"
            stroke="#181818"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <div className="interactive-doodle__sparkles" key={sparkleBurst} aria-hidden="true">
          {sparkleSpecs.map((sparkle, index) => (
            <StarSparkle
              key={`${sparkleBurst}-${index}`}
              color={sparkle.color}
              style={{
                ...sparkle,
                animationDelay: sparkle.delay,
                ['--sparkle-x']: `${sparkle.moveX}px`,
                ['--sparkle-y']: `${sparkle.moveY}px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveDoodle;
