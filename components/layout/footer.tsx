import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#131313] border-t border-[#3c494e]/15 px-6 md:px-12 py-8">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="text-lg font-black text-primary mb-3">
            MOLGORITHM
          </div>
          <div className="space-y-1">
            <p className="text-xs text-outline">
              서울특별시 서대문구 연세로 50 제1공학관 A527 /{" "}
              <a
                href="mailto:yonseimolgorithm@gmail.com"
                className="hover:text-white transition-colors"
              >
                yonseimolgorithm@gmail.com
              </a>
            </p>
            <p className="font-label text-[10px] tracking-widest uppercase text-outline">
              &copy; {new Date().getFullYear()} MOLGORITHM. YONSEI ALGORITHM
              CLUB.
            </p>
          </div>
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
      </div>
    </footer>
  );
}
