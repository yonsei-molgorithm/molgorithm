import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#3c494e]/15 bg-[#131313] flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-16">
      <div className="text-lg font-black text-primary mb-8 md:mb-0">
        MOLGORITHM
      </div>
      <div className="font-label text-[10px] tracking-widest uppercase text-outline mb-8 md:mb-0">
        &copy; {new Date().getFullYear()} MOLGORITHM. YONSEI ALGORITHM CIRCLE.
      </div>
      <div className="flex gap-8">
        <Link
          href="/join"
          className="font-label text-[10px] tracking-widest uppercase text-outline hover:text-white transition-colors"
        >
          JOIN
        </Link>
        <Link
          href="/donate"
          className="font-label text-[10px] tracking-widest uppercase text-outline hover:text-white transition-colors"
        >
          DONATE
        </Link>
      </div>
    </footer>
  );
}
