import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const resumeUrl =
  'https://drive.google.com/file/d/1MZMkeq99DfANxSNMo7TMuTCLaBrQLkeF/view?usp=drive_link';

const resumeEmbedUrl =
  'https://drive.google.com/file/d/1MZMkeq99DfANxSNMo7TMuTCLaBrQLkeF/preview';

const Resume = () => {
  return (
    <div className="min-h-screen bg-brand-cream pt-28 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-brand-plum hover:text-brand-gold transition-colors font-sans font-medium"
        >
          <ArrowLeft size={18} />
          Back Home
        </Link>

        <div className="mt-8 rounded-[32px] border border-brand-line/70 bg-brand-white/80 p-6 md:p-8 shadow-[0_24px_60px_rgba(110,93,121,0.08)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-sans font-bold uppercase tracking-[0.24em] text-brand-gold">
                Resume
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-serif text-brand-plum">
                Vinita Shah Resume
              </h1>
              <p className="mt-3 max-w-2xl text-brand-charcoal font-sans leading-relaxed">
                A dedicated page for viewing my current resume. You can preview it here or open it directly in Google Drive.
              </p>
            </div>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-gold text-white font-medium hover:bg-brand-gold-deep transition-colors shadow-[0_16px_35px_rgba(212,163,115,0.22)]"
            >
              Open in Drive
              <ExternalLink size={18} />
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-brand-line/70 bg-white shadow-[0_16px_40px_rgba(110,93,121,0.08)]">
            <iframe
              title="Vinita Shah Resume"
              src={resumeEmbedUrl}
              className="h-[75vh] w-full"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
