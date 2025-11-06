export default function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/60 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} GlassPay. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
