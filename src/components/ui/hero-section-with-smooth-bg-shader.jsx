const joinClassNames = (...values) => values.filter(Boolean).join(' ');

export function HeroSection({
  children,
  className = '',
  maxWidth = 'max-w-7xl',
  contentClassName = '',
  colors = ['#f6dce5', '#f0e7fb', '#fde6d7', '#fff4ea'],
  distortion = 1,
  swirl = 0.5,
  speed = 0.35,
  offsetX = 0,
  veilOpacity = 'bg-white/30',
}) {
  const safeColors = colors.length ? colors : ['#f6dce5', '#f0e7fb', '#fde6d7', '#fff4ea'];
  const gradient = `radial-gradient(circle at ${50 + offsetX * 100}% 20%, ${safeColors[0]} 0%, transparent 42%),
    radial-gradient(circle at 82% 18%, ${safeColors[1] ?? safeColors[0]} 0%, transparent 36%),
    radial-gradient(circle at 18% 78%, ${safeColors[2] ?? safeColors[0]} 0%, transparent 40%),
    radial-gradient(circle at 78% 82%, ${safeColors[3] ?? safeColors[1] ?? safeColors[0]} 0%, transparent 34%),
    linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,248,243,0.9))`;

  return (
    <section className={joinClassNames('relative overflow-hidden', className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: gradient,
          filter: `blur(${18 + distortion * 10}px) saturate(${1 + swirl * 0.4})`,
          transform: `scale(1.08) rotate(${swirl * 6}deg)`,
          animation: `heroShaderFloat ${Math.max(12, 28 - speed * 18)}s ease-in-out infinite alternate`,
        }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'linear-gradient(to bottom, black, rgba(0,0,0,0.5))',
        }}
      />
      <div className={joinClassNames('absolute inset-0 backdrop-blur-[2px]', veilOpacity)} />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/70 to-transparent" />

      <div className={joinClassNames('relative mx-auto w-full px-6', maxWidth, contentClassName)}>
        {children}
      </div>

      <style>{`
        @keyframes heroShaderFloat {
          0% {
            transform: scale(1.08) translate3d(-1.5%, 0%, 0) rotate(${swirl * 4}deg);
          }
          100% {
            transform: scale(1.14) translate3d(1.5%, 2%, 0) rotate(${swirl * -4}deg);
          }
        }
      `}</style>
    </section>
  );
}
