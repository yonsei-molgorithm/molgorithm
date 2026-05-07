# Design for Claude — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a `docs/design-for-claude/` bundle of 9 markdown documents that can be pasted into claude.ai to request design changes and receive drop-in JSX/CSS for the molgorithm project.

**Architecture:** Pure documentation — no app code changes. Each file mirrors the actual source (verbatim JSX, exact tokens) so Claude generates compatible code. Files are split so a single page change requires only 3 docs (`00` + `01` + page).

**Tech Stack:** Markdown only. Sources to mirror: Next.js 16 App Router, React 19, Tailwind CSS v4, shadcn/ui, lucide-react.

**Spec:** [docs/superpowers/specs/2026-05-06-design-for-claude-design.md](../specs/2026-05-06-design-for-claude-design.md)

---

## File Structure

All files are markdown documentation under `docs/design-for-claude/`:

| File | Responsibility | Mirrors source from |
|---|---|---|
| `README.md` | Usage guide, paste combos, how to apply Claude's output | n/a (new content) |
| `00-design-system.md` | Design tokens, fonts, shadcn list, stack constraints | `app/globals.css`, `app/layout.tsx`, `components/ui/`, `package.json` |
| `01-layout.md` | Header, Footer, PageHeader, ThemeProvider, root/main layouts | `components/layout/*.tsx`, `app/layout.tsx`, `app/(main)/layout.tsx` |
| `02-page-home.md` | Home page + Hero + About sections | `app/(main)/page.tsx`, `components/main/{hero,about}-section.tsx` |
| `03-page-members.md` | Members listing | `app/(main)/members/page.tsx`, `lib/data.ts`, `types/types.ts` |
| `04-page-activities.md` | Activities (3 sections, alternating bg) | `app/(main)/activities/page.tsx` |
| `05-page-awards.md` | Awards (year-grouped tables) | `app/(main)/awards/page.tsx`, `lib/data.ts`, `types/types.ts` |
| `06-page-join.md` | Join (recruit info + form link) | `app/(main)/join/page.tsx` |
| `07-page-donate.md` | Donate (account info card) | `app/(main)/donate/page.tsx` |

Each page/layout doc follows the common template defined in the spec. Files are independent — `02`–`07` can be written in any order.

---

## Task 1: Create folder and write `00-design-system.md`

**Files:**
- Create: `docs/design-for-claude/00-design-system.md`

- [ ] **Step 1: Create folder**

```bash
mkdir -p docs/design-for-claude
```

- [ ] **Step 2: Write `00-design-system.md`**

Write the file with this exact content:

````markdown
# Design System

molgorithm 사이트의 디자인 토큰·폰트·컴포넌트 카탈로그·기술 스택 제약을 정리한 문서입니다.
**모든** 디자인 변경 요청 시 이 문서를 함께 붙여넣으세요.

## 디자인 철학

에디토리얼/미니멀. **Sharp corners (radius = 0)** — 모든 요소는 각진 모서리. 라이트/다크 듀얼 팔레트 (다크가 기본). 한국어 본문 + 영어 라벨/네비게이션 혼용. Material Symbols Outlined 아이콘을 일부 사용하지만 새 코드에서는 `lucide-react` 우선.

## 컬러 토큰

`app/globals.css` 의 `:root` (라이트) 와 `.dark` (다크) 에서 정의됩니다. **항상 토큰명을 사용하세요. hex 직접 사용 금지.**

| 토큰 | Light | Dark | 용도 |
|---|---|---|---|
| `background` | `#f5f5f5` | `#131313` | 페이지 배경 |
| `foreground` | `#111111` | `#e2e2e2` | 본문 텍스트 |
| `card` / `card-foreground` | `#ffffff` / `#111111` | `#1f1f1f` / `#e2e2e2` | 카드/헤더/푸터 배경 |
| `popover` / `popover-foreground` | `#ffffff` / `#111111` | `#1f1f1f` / `#e2e2e2` | 팝오버 |
| `primary` / `primary-foreground` | `#0077a3` / `#ffffff` | `#9de2ff` / `#003545` | 강조 (CTA, 링크) |
| `secondary` / `secondary-foreground` | `#e8e8e8` / `#005f82` | `#1b1b1b` / `#9dcee3` | 보조 |
| `tertiary` | `#d48a00` | `#ffab27` | PageHeader 라벨, 강조 포인트 |
| `muted` / `muted-foreground` | `#e8e8e8` / `#5a6a70` | `#1b1b1b` / `#869399` | 약화된 영역 |
| `accent` / `accent-foreground` | `#e8e8e8` / `#334b52` | `#1b1b1b` / `#bbc8d0` | 액센트 |
| `destructive` | `#c0392b` | `#ffb4ab` | 삭제/오류 |
| `border` | `rgba(60,73,78,0.15)` | `rgba(60,73,78,0.2)` | 테두리 |
| `input` | `rgba(60,73,78,0.15)` | `rgba(60,73,78,0.3)` | 입력 테두리 |
| `ring` | `#0077a3` | `#9de2ff` | 포커스 링 |
| `surface` | `#f5f5f5` | `#131313` | 페이지 섹션 베이스 |
| `surface-container` | `#ffffff` | `#1f1f1f` | 컨테이너 1단계 |
| `surface-container-low` | `#efefef` | `#1b1b1b` | 컨테이너 약화 (교차 배경) |
| `surface-container-high` | `#e0e0e0` | `#2a2a2a` | 컨테이너 강조 |
| `on-surface-variant` | `#334b52` | `#bbc8d0` | 본문 보조 텍스트 |
| `outline` | `#7a8d93` | `#869399` | 약화 텍스트/구분선 |
| `outline-variant` | `#c0ccce` | `#3c494e` | 약화 구분선 |
| `chart-1`~`chart-5` | (라이트 5색) | (다크 5색) | 차트 |
| `sidebar*` | (라이트 사이드바 토큰) | (다크 사이드바 토큰) | 사이드바 |

**Tailwind 클래스로 사용:**
- 배경: `bg-background`, `bg-card`, `bg-primary`, `bg-surface-container-low` 등
- 텍스트: `text-foreground`, `text-primary`, `text-tertiary`, `text-on-surface-variant`, `text-outline` 등
- 테두리: `border-border`, `border-outline-variant`, `border-primary/20` (alpha 사용 가능)

## 타이포그래피

| 토큰 | 스택 | 사용처 |
|---|---|---|
| `font-sans` (기본) | Manrope, Pretendard Variable, Pretendard, system | 본문 전반 |
| `font-headline` | Manrope, (sans fallback) | 제목, 큰 숫자, 강조 텍스트 |
| `font-label` | Inter, (sans fallback) | 라벨, 트래킹 넓은 작은 텍스트 (예: `tracking-widest uppercase text-xs`) |
| `font-mono` | Geist Mono | 코드 |

웹폰트 로딩: `app/layout.tsx` 에서 `next/font/google` 로 Manrope/Inter/Geist_Mono 로드, Pretendard CDN 링크, Material Symbols Outlined CDN 링크.

**전형적 패턴:**
- 페이지 제목: `font-headline text-4xl md:text-6xl font-bold tracking-tighter`
- 섹션 라벨: `font-label tracking-widest uppercase text-xs text-tertiary` (또는 `text-primary`)
- 본문: 기본 sans
- 작은 메타 텍스트: `font-label text-[10px] tracking-widest uppercase text-outline`

## 레이아웃 규칙

- **Radius = 0** — `--radius: 0px`. 모든 `radius-*` 토큰이 0. `rounded-md`, `rounded-lg` 등 절대 추가하지 마세요.
- **페이지 좌우 패딩**: `px-6 md:px-12` (모든 페이지/섹션 공통)
- **페이지 상단 여백**: PageHeader 사용 시 `pt-32 pb-12` (헤더 fixed 보정 포함)
- **섹션 세로 여백**: `py-24` ~ `py-48` (섹션마다 차이)
- **그리드/플렉스 갭**: `gap-0` (보더로 구분) 또는 `gap-8` ~ `gap-24` (여백 큰 디자인)
- **컨테이너 최대폭**: 명시 거의 없음. `max-w-7xl mx-auto` 는 갤러리 캐로셀 한 곳에서만.

## Shadow

`globals.css` 에 정의된 표준 Tailwind shadow 토큰. 거의 사용하지 않으며, 필요 시 `shadow-sm`, `shadow-2xl` 등.

## 다크모드

- `next-themes` 미사용. **자체 ThemeProvider** (`components/layout/theme-provider.tsx`) — `localStorage.theme` 읽고 `<html>` 에 `.dark` 클래스 토글.
- 초기 값은 root `<head>` 의 인라인 스크립트로 깜빡임 방지.
- **다크모드 스타일을 별도 클래스로 작성하지 마세요** (`dark:bg-...` 불필요). 토큰이 자동으로 라이트/다크 값을 처리합니다.

## shadcn/ui 컴포넌트 카탈로그

`components/ui/` 에 있는 컴포넌트만 사용 가능. import 경로: `@/components/ui/<name>`

- `alert-dialog`
- `badge`
- `button`
- `card`
- `carousel`
- `combobox`
- `dropdown-menu`
- `field`
- `input`
- `input-group`
- `label`
- `navigation-menu`
- `select`
- `separator`
- `textarea`

**새 shadcn 컴포넌트가 필요하면**: 먼저 사용자에게 알리고 `npx shadcn add <name>` 으로 추가 후 사용. 임의로 신규 라이브러리 도입 금지.

## 아이콘

- `lucide-react` (설치됨, 우선 사용)
- Material Symbols Outlined (CDN 로드, `<span class="material-symbols-outlined">icon_name</span>` 형태로 일부 레거시 코드에서 사용)

신규 코드에는 `lucide-react` 사용.

## 기술 스택 제약 (Claude가 호환 코드를 만들기 위해 알아야 할 것)

- **Next.js 16 App Router** — `app/` 디렉터리 구조
- **React 19** — Server Components 기본. 인터랙션(useState, useEffect, onClick 등) 필요 시 파일 최상단 `"use client";`
- **Tailwind CSS v4** — `@import "tailwindcss";`, `@theme inline { ... }` 로 토큰 매핑, `@apply` 사용 가능
- **TypeScript** — 모든 파일 `.tsx` / `.ts`
- **Path alias** — `@/...` 가 프로젝트 루트
- **Image** — 외부 이미지는 `<img>` 태그 사용 중 (next/image 미사용)
- **Link** — 내부 링크는 `next/link` 의 `<Link href="...">`
- **데이터 페칭** — `lib/data.ts` 의 `getMembers()` / `getAwards()` / `getSessions()` 는 async Server Component 에서 `await`. CSV 출처(Google Sheets), `revalidate: 60`.

## 금지/지양 사항

- ❌ 인라인 hex 색상 (`bg-[#fff]`) — 토큰 사용
- ❌ 둥근 모서리 (`rounded-md`, `rounded-full` 등)
- ❌ `dark:` 접두 클래스 — 토큰이 자동 처리
- ❌ 새 컴포넌트 라이브러리 도입 (chakra, mantine 등)
- ❌ 새 폰트 추가 (Manrope/Inter/Pretendard/Geist Mono/Material Symbols 외)
- ❌ 한국어 텍스트 임의 영번역 — 한국어 그대로 유지
- ❌ `next/image` 도입 (현재 `<img>` 통일)
````

- [ ] **Step 3: Verify file exists and is non-empty**

```bash
test -s docs/design-for-claude/00-design-system.md && echo OK
```

Expected: `OK`

- [ ] **Step 4: Commit**

```bash
git add docs/design-for-claude/00-design-system.md
git commit -m "docs(design-for-claude): add 00-design-system reference"
```

---

## Task 2: Write `01-layout.md`

**Files:**
- Create: `docs/design-for-claude/01-layout.md`

- [ ] **Step 1: Write `01-layout.md`**

Write the file with this exact content:

````markdown
# Layout — Header, Footer, PageHeader

모든 페이지에 공통으로 사용되는 레이아웃 컴포넌트입니다. 페이지 단위 디자인 변경 시
이 문서도 함께 붙여넣으면 PageHeader 등을 일관되게 다룰 수 있습니다.

## 경로

- 루트 레이아웃: `app/layout.tsx` (폰트, ThemeProvider, head 링크)
- 메인 레이아웃: `app/(main)/layout.tsx` (Header + main + Footer)
- 컴포넌트: `components/layout/{header,footer,page-header,theme-provider}.tsx`

## 사용하는 데이터

없음 (정적). `next/link` 의 `<Link>` 사용.

## 사용하는 컴포넌트

- `next/link` 의 `<Link>`
- `useState`, `useEffect`, `useContext`, `createContext` (Header, ThemeProvider)
- Material Symbols Outlined (`<span class="material-symbols-outlined">`)

## 현재 구조

1. **루트 layout** — `<html lang="ko">` + 폰트 변수 + ThemeProvider 래핑. head 에 다크모드 깜빡임 방지 인라인 스크립트, Pretendard CDN, Material Symbols CDN.
2. **메인 layout** — `min-h-screen bg-background` 컨테이너 안에 `<Header />` + `<main>` + `<Footer />`.
3. **Header** — fixed top, 스크롤 시 그림자 추가. 데스크탑은 가로 메뉴 + JOIN CTA + 테마 토글, 모바일은 햄버거 + 드롭다운.
4. **Footer** — `bg-card`, 좌측 주소/이메일/저작권, 우측 JOIN/DONATE 링크.
5. **PageHeader** — 모든 서브 페이지 상단. 라벨(작은 트래킹 텍스트) + 제목 + 선택적 fetchedAt 타임스탬프.
6. **ThemeProvider** — Context로 `theme` ("light" | "dark") 와 `toggle()` 제공. localStorage 동기화.

## 현재 JSX (전문)

### `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Molgorithm — 연세대학교 알고리즘 학회",
  description:
    "연세대학교 알고리즘 학회 모르고리즘입니다. 문제 해결, 팀 연습, 대회 참가를 통해 함께 성장합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t!=='light')document.documentElement.classList.add('dark');})()`,
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${manrope.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

### `app/(main)/layout.tsx`

```tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
```

### `components/layout/header.tsx`

```tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/layout/theme-provider";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/awards", label: "AWARDS" },
  { href: "/activities", label: "ACTIVITIES" },
  { href: "/members", label: "MEMBERS" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-300 ${
        scrolled
          ? "bg-card/80 backdrop-blur-xl shadow-sm"
          : "bg-card/60 backdrop-blur-xl"
      }`}
    >
      <Link
        href="/"
        className="text-2xl font-black tracking-tighter text-primary"
      >
        MOLGORITHM
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex gap-12 items-center">
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-bold tracking-tight uppercase text-xs transition-all duration-300 ${
              i === 0
                ? "text-primary font-black"
                : "text-foreground/70 hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/join"
          className="px-6 py-2 bg-primary text-primary-foreground font-bold tracking-tight uppercase text-xs transition-transform hover:scale-95"
        >
          JOIN
        </Link>
        <button
          onClick={toggle}
          className="text-foreground/50 hover:text-primary transition-colors"
          aria-label="테마 전환"
        >
          <span className="material-symbols-outlined text-xl">
            {mounted ? (theme === "dark" ? "light_mode" : "dark_mode") : "light_mode"}
          </span>
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={toggle}
          className="text-foreground/50 hover:text-primary transition-colors"
          aria-label="테마 전환"
        >
          <span className="material-symbols-outlined text-xl">
            {mounted ? (theme === "dark" ? "light_mode" : "dark_mode") : "light_mode"}
          </span>
        </button>
        <button
          className="text-primary"
          onClick={() => setOpen(!open)}
        >
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-card/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 font-bold tracking-tight uppercase text-xs text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="mt-2 py-3 bg-primary text-primary-foreground font-bold tracking-tight uppercase text-xs text-center"
              onClick={() => setOpen(false)}
            >
              JOIN
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
```

### `components/layout/footer.tsx`

```tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border px-6 md:px-12 py-8">
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
```

### `components/layout/page-header.tsx`

```tsx
interface PageHeaderProps {
  label: string;
  title: string;
  labelColor?: "primary" | "tertiary";
  fetchedAt?: Date;
}

export function PageHeader({
  label,
  title,
  labelColor = "primary",
  fetchedAt,
}: PageHeaderProps) {
  const colorClass =
    labelColor === "tertiary" ? "text-tertiary" : "text-primary";

  return (
    <div className="pt-32 pb-12 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
        <div>
          <span
            className={`font-label ${colorClass} tracking-widest uppercase text-xs mb-4 block`}
          >
            {label}
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
            {title}
          </h2>
        </div>
        {fetchedAt && (
          <div className="text-right hidden md:block">
            <p className="font-label text-[10px] tracking-widest text-outline">
              최근 갱신 //{" "}
              {fetchedAt.toLocaleString("ko-KR", {
                timeZone: "Asia/Seoul",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
```

### `components/layout/theme-provider.tsx`

```tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "dark", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme) ?? "dark";
    setTheme(stored);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : "dark", toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## PageHeader props 시그니처 (가장 자주 재사용)

```tsx
interface PageHeaderProps {
  label: string;                          // 예: "04 // THE NODES"
  title: string;                          // 예: "Members"
  labelColor?: "primary" | "tertiary";   // 기본 "primary"
  fetchedAt?: Date;                       // CSV에서 받은 데이터의 갱신 시각
}
```

## 디자인 변경 시 지켜야 할 제약

- **PageHeader props 시그니처는 변경 금지** — 이미 5개 페이지가 사용 중. 내부 마크업은 자유.
- **Header 의 nav 링크는 변경 금지** — Home/Awards/Activities/Members + JOIN. 추가/제거는 사용자 확인 필요.
- **다크모드 토큰 자동 처리** — `dark:` 접두사 사용 금지.
- **fixed Header 보정** — 페이지 상단 콘텐츠는 `pt-32` 정도의 여백 필요 (PageHeader가 알아서 처리).
- **Material Symbols 아이콘은 레거시** — 신규 추가 시 `lucide-react` 우선 검토. (단 Header 의 토글/햄버거는 현재 Material 사용 중)
````

- [ ] **Step 2: Verify file**

```bash
test -s docs/design-for-claude/01-layout.md && echo OK
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add docs/design-for-claude/01-layout.md
git commit -m "docs(design-for-claude): add 01-layout reference"
```

---

## Task 3: Write `02-page-home.md`

**Files:**
- Create: `docs/design-for-claude/02-page-home.md`

- [ ] **Step 1: Write `02-page-home.md`**

````markdown
# Page — Home

## 경로

- 페이지: `app/(main)/page.tsx`
- 섹션 컴포넌트:
  - `components/main/hero-section.tsx`
  - `components/main/about-section.tsx`
- URL: `/`

## 목적

랜딩 페이지. Hero (대형 타이포 + 슬로건) + About (3개 가치 소개 그리드).

## 사용하는 데이터

없음 (정적, About 섹션 내 `items` 배열).

## 사용하는 컴포넌트

- 없음 (shadcn/lucide 미사용)
- Material Symbols Outlined (`architecture`, `psychology`, `code`, `emoji_events`)

## 현재 구조

1. **HeroSection** (`min-h-screen`) — 우측 상단 그라디언트 오버레이, EST/CLUB 라벨, 거대 "MOLGORITHM" 워드마크 (`text-[12vw]`), 슬로건, 우측 큰 architecture 아이콘
2. **AboutSection** (`py-32`, `bg-surface-container-low`) — "01 // PHILOSOPHY" 라벨, "생각하고, 풀고, 경쟁한다." 제목, 3열 그리드 (생각한다/푼다/경쟁한다)

## 현재 JSX (전문)

### `app/(main)/page.tsx`

```tsx
import { HeroSection } from "@/components/main/hero-section";
import { AboutSection } from "@/components/main/about-section";

export default function MainPage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
    </div>
  );
}
```

### `components/main/hero-section.tsx`

```tsx
export function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 relative overflow-hidden"
      id="hero"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent" />
      </div>
      <div className="z-10">
        <span className="font-label text-tertiary tracking-[0.4em] uppercase text-xs mb-8 block">
          EST. 2000 / YONSEI ALGORITHM CLUB
        </span>
        <h1 className="font-headline text-[12vw] font-extrabold leading-[0.85] tracking-tighter text-foreground mb-12">
          MOLGORITHM
        </h1>
        <div className="flex flex-col md:flex-row md:items-end gap-12">
          <p className="max-w-xl font-headline text-xl md:text-2xl font-light leading-relaxed opacity-60">
            연세대학교 알고리즘 학회 모르고리즘.
            <br />
            우리는 생각하고, 문제를 풀고, 경쟁합니다.
          </p>
          <div className="flex-1 flex justify-end">
            <span className="material-symbols-outlined text-8xl text-primary/10 select-none">
              architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `components/main/about-section.tsx`

```tsx
const items = [
  {
    icon: "psychology",
    title: "생각한다",
    description:
      "알고리즘의 핵심은 사고입니다. 매주 정기 세션에서 문제를 분석하고, 최적의 접근법을 설계하며, 논리적 사고력을 키웁니다.",
  },
  {
    icon: "code",
    title: "푼다",
    description:
      "생각을 코드로 구현합니다. 난이도별 트랙에서 문제를 풀고, 서로의 풀이를 리뷰하며 더 나은 해법을 찾아갑니다.",
  },
  {
    icon: "emoji_events",
    title: "경쟁한다",
    description:
      "ICPC, SCPC, UCPC 등 국내외 프로그래밍 대회에 팀을 이루어 참가합니다. 실전 경험을 통해 한계를 시험합니다.",
  },
];

export function AboutSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface-container-low" id="about">
      <div className="mb-24">
        <span className="font-label text-tertiary tracking-widest uppercase text-xs mb-4 block">
          01 // PHILOSOPHY
        </span>
        <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
          생각하고,
          <br />
          풀고, 경쟁한다.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/20">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`p-12 hover:bg-surface-container transition-colors duration-500 ${
              i < items.length - 1 ? "border-b md:border-b-0 md:border-r border-outline-variant/20" : ""
            }`}
          >
            <span className="material-symbols-outlined text-primary mb-8 text-4xl">
              {item.icon}
            </span>
            <h3 className="font-headline text-xl font-bold mb-6">
              {item.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

## 디자인 변경 시 지켜야 할 제약

- 디자인 토큰만 사용 (`00-design-system.md` 참고)
- 모서리는 항상 sharp
- 다크모드 대응 필수 (토큰 자동)
- 한국어/영어 혼용 그대로 유지
- "EST. 2000 / YONSEI ALGORITHM CLUB", "MOLGORITHM" 워드마크, "생각하고, 풀고, 경쟁한다." 슬로건은 유지하거나 사용자 확인 후 변경
- About 섹션의 3개 아이템(생각한다/푼다/경쟁한다)은 학회 정체성. 변경 시 사용자 확인.
````

- [ ] **Step 2: Verify file**

```bash
test -s docs/design-for-claude/02-page-home.md && echo OK
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add docs/design-for-claude/02-page-home.md
git commit -m "docs(design-for-claude): add 02-page-home reference"
```

---

## Task 4: Write `03-page-members.md`

**Files:**
- Create: `docs/design-for-claude/03-page-members.md`

- [ ] **Step 1: Write `03-page-members.md`**

````markdown
# Page — Members

## 경로

- 파일: `app/(main)/members/page.tsx`
- URL: `/members`

## 목적

학회 멤버 명단. 이름 + BOJ 핸들 링크. CSV 데이터 기반.

## 사용하는 데이터

- 출처: `lib/data.ts` 의 `getMembers()` (Google Sheets CSV, `revalidate: 60`)
- 타입: `types/types.ts` 의 `Member`
- 타입 정의:
  ```ts
  export interface Member {
    연도: string;
    학기: string;
    이름: string;
    핸들: string;
  }
  ```
- 반환 형태: `{ data: Member[]; fetchedAt: Date }`
- 빈 핸들/이름 행은 `getMembers()` 가 자동 필터링

## 사용하는 컴포넌트

- `<PageHeader label="04 // THE NODES" title="Members" labelColor="tertiary" fetchedAt={fetchedAt} />` (from `01-layout.md`)
- 외부 링크: `https://www.acmicpc.net/user/{핸들}` (백준 프로필)

## 현재 구조

1. **PageHeader** — `04 // THE NODES` 라벨 + "Members" 제목 + fetchedAt 타임스탬프
2. **Members Grid** — 1/2/3열 반응형 그리드, 각 행: 이름(좌) + `@핸들`(우, BOJ 링크), 행 사이 `border-b border-outline-variant/10`
3. **Empty state** — `members.length === 0` 일 때 "멤버 데이터를 불러오는 중입니다..."

## 현재 JSX (전문)

```tsx
import { getMembers } from "@/lib/data";
import { PageHeader } from "@/components/layout/page-header";

export default async function MembersPage() {
  const { data: members, fetchedAt } = await getMembers();

  return (
    <section className="bg-surface" id="members">
      <PageHeader
        label="04 // THE NODES"
        title="Members"
        labelColor="tertiary"
        fetchedAt={fetchedAt}
      />
      <div className="px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {members.map((member) => (
            <div
              key={member.핸들}
              className="flex items-center justify-between py-6 px-4 border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors"
            >
              <span className="font-headline font-bold text-lg">
                {member.이름}
              </span>
              <a
                href={`https://www.acmicpc.net/user/${member.핸들}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-xs text-outline tracking-widest hover:text-primary transition-colors"
              >
                @{member.핸들}
              </a>
            </div>
          ))}
        </div>

        {members.length === 0 && (
          <p className="mt-14 text-center text-outline">
            멤버 데이터를 불러오는 중입니다...
          </p>
        )}
      </div>
    </section>
  );
}
```

## 디자인 변경 시 지켜야 할 제약

- async Server Component 유지 (`await getMembers()`)
- 한국어 필드명 (`이름`, `핸들`) 그대로 사용 — CSV 헤더와 일치해야 함
- BOJ 외부 링크 구조 유지 (`target="_blank" rel="noopener noreferrer"`)
- PageHeader props 시그니처 유지
- 디자인 토큰만 사용, sharp corners, 다크모드 토큰 자동
````

- [ ] **Step 2: Verify file**

```bash
test -s docs/design-for-claude/03-page-members.md && echo OK
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add docs/design-for-claude/03-page-members.md
git commit -m "docs(design-for-claude): add 03-page-members reference"
```

---

## Task 5: Write `04-page-activities.md`

**Files:**
- Create: `docs/design-for-claude/04-page-activities.md`

- [ ] **Step 1: Write `04-page-activities.md`**

````markdown
# Page — Activities

## 경로

- 파일: `app/(main)/activities/page.tsx`
- URL: `/activities`

## 목적

학회 활동 소개 (정기 세션 / 팀 연습 / 대회 참가). 스크롤 섹션 형태, 교차 배경.

## 사용하는 데이터

- 정적 (페이지 파일 내 `activities` 배열, 3개 항목)
- 각 항목: `{ number, label, title, description, details: { label, value }[] }`

## 사용하는 컴포넌트

- `<PageHeader label="03 // THE CURRICULUM" title="Activities" labelColor="tertiary" />` (from `01-layout.md`)
- 외부 라이브러리 컴포넌트 미사용

## 현재 구조

1. **PageHeader** — `03 // THE CURRICULUM` 라벨 + "Activities" 제목
2. **3개 활동 섹션** — `activities.map((item, i) => ...)`, `i % 2` 로 배경 교차 (`bg-surface` ↔ `bg-surface-container-low`), 각 섹션은 `border-t border-outline-variant/20`
3. **각 섹션 레이아웃** — `lg:grid-cols-[1fr_2fr]`, 좌측: 거대 number (`text-7xl md:text-8xl text-primary/10`) + 라벨 + 제목, 우측: 설명 + 3열 details (border-left 강조)

## 현재 JSX (전문)

```tsx
import { PageHeader } from "@/components/layout/page-header";

const activities = [
  {
    number: "01",
    label: "WEEKLY SESSION",
    title: "정기 세션",
    description:
      "매주 진행되는 알고리즘 세션. 난이도별 트랙으로 나뉘어 문제를 풀고, 풀이를 공유하고 리뷰합니다.",
    details: [
      { label: "주기", value: "매주" },
      { label: "형식", value: "주제별 발표 + 문제풀이 리뷰" },
      { label: "주제", value: "DP, 그래프, 문자열, 수학 등" },
    ],
  },
  {
    number: "02",
    label: "TEAM PRACTICE",
    title: "팀 연습",
    description:
      "ICPC 대회를 대비한 3인 1팀 연습. 실전과 동일한 환경에서 팀 커뮤니케이션과 전략을 다듬습니다.",
    details: [
      { label: "주기", value: "매주 토요일" },
      { label: "구분", value: "Div 1 / Div 2 구분 운영" },
      { label: "셋", value: "Codeforces / AtCoder 기출 활용" },
    ],
  },
  {
    number: "03",
    label: "COMPETITIONS",
    title: "대회 참가",
    description:
      "ICPC, SCPC, UCPC 등 국내외 주요 프로그래밍 대회에 참가하며 실전 경험을 쌓습니다.",
    details: [
      { label: "주요 대회", value: "ICPC, SCPC, UCPC 등" },
    ],
  },
];

export default function ActivitiesPage() {
  return (
    <section className="bg-surface" id="activities">
      <PageHeader
        label="03 // THE CURRICULUM"
        title="Activities"
        labelColor="tertiary"
      />

      {activities.map((item, i) => (
        <div
          key={item.title}
          className={`px-6 md:px-12 py-24 ${
            i % 2 === 0 ? "bg-surface" : "bg-surface-container-low"
          } border-t border-outline-variant/20`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <span className="font-headline text-7xl md:text-8xl font-extrabold text-primary/10 block mb-4">
                {item.number}
              </span>
              <span className="font-label text-[10px] tracking-widest text-primary block mb-2">
                {item.label}
              </span>
              <h3 className="font-headline text-3xl md:text-4xl font-bold">
                {item.title}
              </h3>
            </div>
            <div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
                {item.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {item.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="border-l-2 border-primary/20 pl-6"
                  >
                    <p className="font-label text-[10px] tracking-widest text-outline uppercase mb-2">
                      {detail.label}
                    </p>
                    <p className="text-sm text-foreground font-bold">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
```

## 디자인 변경 시 지켜야 할 제약

- 활동 항목 3개 (정기 세션 / 팀 연습 / 대회 참가) 의 텍스트는 학회 운영 정보. 변경 시 사용자 확인.
- `details` 항목 수는 가변 (활동마다 1~3개). 디자인은 0~5개에서도 깨지지 않도록.
- PageHeader props 시그니처 유지
- 디자인 토큰만 사용, sharp corners, 다크모드 토큰 자동
````

- [ ] **Step 2: Verify file**

```bash
test -s docs/design-for-claude/04-page-activities.md && echo OK
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add docs/design-for-claude/04-page-activities.md
git commit -m "docs(design-for-claude): add 04-page-activities reference"
```

---

## Task 6: Write `05-page-awards.md`

**Files:**
- Create: `docs/design-for-claude/05-page-awards.md`

- [ ] **Step 1: Write `05-page-awards.md`**

````markdown
# Page — Awards

## 경로

- 파일: `app/(main)/awards/page.tsx`
- URL: `/awards`

## 목적

학회 수상 내역. 연도별 그룹, 각 연도는 4열 테이블 (Event / Award / Name / Team).

## 사용하는 데이터

- 출처: `lib/data.ts` 의 `getAwards()` (Google Sheets CSV, `revalidate: 60`)
- 타입: `types/types.ts` 의 `Award`
- 타입 정의:
  ```ts
  export interface Award {
    순번: string;
    연도: string;
    월: string;
    내용: string;
    상명: string;
    이름: string;
    팀명: string;
  }
  ```
- 반환 형태: `{ data: Award[]; fetchedAt: Date }`
- 빈 `내용` 행은 `getAwards()` 가 자동 필터링
- 페이지에서 연도별 그룹화 후 연도 내림차순, 같은 연도 내에서는 월 내림차순 정렬

## 사용하는 컴포넌트

- `<PageHeader label="02 // VERIFIED STATS" title="Awards" labelColor="tertiary" fetchedAt={fetchedAt} />` (from `01-layout.md`)
- HTML `<table>` (네이티브) — shadcn `Table` 미사용

## 현재 구조

1. **PageHeader** — `02 // VERIFIED STATS` 라벨 + "Awards" 제목 + fetchedAt
2. **연도별 섹션** — 정렬된 연도마다:
   - 거대 연도 헤더 (`text-4xl md:text-5xl font-extrabold text-primary/10`)
   - 4열 테이블 (`table-fixed` + `colgroup` 으로 25/15/30/30 % 너비 고정)
   - thead: Event / Award / Name / Team (작은 라벨 스타일)
   - tbody: 각 행 hover 효과
3. **Empty state** — `awards.length === 0` 일 때 "수상 데이터를 불러오는 중입니다..."

## 현재 JSX (전문)

```tsx
import { getAwards } from "@/lib/data";
import { PageHeader } from "@/components/layout/page-header";

export default async function AwardsPage() {
  const { data: awards, fetchedAt } = await getAwards();

  const grouped = awards.reduce<Record<string, typeof awards>>((acc, award) => {
    const year = award.연도;
    if (!acc[year]) acc[year] = [];
    acc[year].push(award);
    return acc;
  }, {});

  const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="bg-surface" id="awards">
      <PageHeader
        label="02 // VERIFIED STATS"
        title="Awards"
        labelColor="tertiary"
        fetchedAt={fetchedAt}
      />
      <div className="px-6 md:px-12 pb-16">
        {sortedYears.map((year) => (
          <div key={year} className="mb-8">
            <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-primary/10 mb-2">
              {year}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse table-fixed">
                <colgroup>
                  <col className="w-[25%]" />
                  <col className="w-[15%]" />
                  <col className="w-[30%]" />
                  <col className="w-[30%]" />
                </colgroup>
                <thead>
                  <tr className="border-b border-outline-variant/30">
                    <th className="py-2 font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                      Event
                    </th>
                    <th className="py-2 font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                      Award
                    </th>
                    <th className="py-2 font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                      Name
                    </th>
                    <th className="py-2 font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                      Team
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {grouped[year]
                    .sort((a, b) => Number(b.월) - Number(a.월))
                    .map((award) => (
                    <tr
                      key={award.순번}
                      className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors"
                    >
                      <td className="py-2">{award.내용}</td>
                      <td className="py-2">{award.상명}</td>
                      <td className="py-2">{award.이름}</td>
                      <td className="py-2 text-outline">{award.팀명}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {awards.length === 0 && (
          <p className="mt-14 text-center text-outline">
            수상 데이터를 불러오는 중입니다...
          </p>
        )}
      </div>
    </section>
  );
}
```

## 디자인 변경 시 지켜야 할 제약

- async Server Component 유지 (`await getAwards()`)
- 한국어 필드명 (`순번`, `연도`, `월`, `내용`, `상명`, `이름`, `팀명`) 그대로 사용 — CSV 헤더와 일치
- 정렬 로직 (연도 내림차순, 월 내림차순) 유지
- 4열 너비 비율 (25/15/30/30%) 은 한국어 길이 고려한 결과 — 변경 시 모바일 가독성 확인
- PageHeader props 시그니처 유지
- 디자인 토큰만 사용, sharp corners, 다크모드 토큰 자동
````

- [ ] **Step 2: Verify file**

```bash
test -s docs/design-for-claude/05-page-awards.md && echo OK
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add docs/design-for-claude/05-page-awards.md
git commit -m "docs(design-for-claude): add 05-page-awards reference"
```

---

## Task 7: Write `06-page-join.md`

**Files:**
- Create: `docs/design-for-claude/06-page-join.md`

- [ ] **Step 1: Write `06-page-join.md`**

````markdown
# Page — Join

## 경로

- 파일: `app/(main)/join/page.tsx`
- URL: `/join`

## 목적

학회 모집 안내 + 외부 지원서(Google Form) 링크.

## 사용하는 데이터

- `process.env.NEXT_PUBLIC_JOIN_FORM_URL` — 지원 폼 URL (없으면 `"#"`)
- 정적 텍스트 (지원 자격, 모집 일정, 선발 방식)

## 사용하는 컴포넌트

- 없음 (PageHeader 미사용 — 자체 헤더 디자인)
- shadcn / lucide 미사용

## 현재 구조

1. **풀폭 섹션** — `bg-primary` (브랜드 컬러로 페이지 전체 채움), `py-32 px-6 md:px-12`
2. **2열 그리드** — `lg:grid-cols-2 gap-24`
   - **좌측 (text-primary-foreground)** — `05 // RECRUITMENT` 라벨, "Join the Monolith." 거대 제목 (`text-6xl md:text-8xl font-black`), 3개 정보 블록 (지원 자격 / 모집 일정 / 선발 방식, 사이는 `border-b border-[#003545]/20`)
   - **우측 카드** — `bg-[#131313] p-12 shadow-2xl`, "지원하기" 제목, 안내문, "지원서 작성" CTA 버튼(외부 링크), 안내 문구

## 현재 JSX (전문)

```tsx
export default function JoinPage() {
  const formUrl = process.env.NEXT_PUBLIC_JOIN_FORM_URL || "#";

  return (
    <section className="py-32 px-6 md:px-12 bg-primary" id="join">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="text-primary-foreground">
          <span className="font-label tracking-widest uppercase text-xs mb-4 block opacity-80">
            05 // RECRUITMENT
          </span>
          <h2 className="font-headline text-6xl md:text-8xl font-black tracking-tighter mb-12">
            Join the
            <br />
            Monolith.
          </h2>
          <div className="space-y-8 max-w-lg">
            <div className="border-b border-[#003545]/20 pb-8">
              <h4 className="font-headline text-xl font-bold mb-2">
                지원 자격
              </h4>
              <p className="opacity-80">
                연세대학교 학부생 또는 대학원생으로 C++, Python, Java 등
                프로그래밍 언어에 기초적인 이해가 있는 분이면 누구나 지원
                가능합니다.
              </p>
            </div>
            <div className="border-b border-[#003545]/20 pb-8">
              <h4 className="font-headline text-xl font-bold mb-2">
                모집 일정
              </h4>
              <p className="opacity-80">
                매년 3월과 9월, 학기 초에 모집합니다. 정확한 모집 일정은 추후
                공지됩니다.
              </p>
            </div>
            <div>
              <h4 className="font-headline text-xl font-bold mb-2">
                선발 방식
              </h4>
              <p className="opacity-80">
                서류 지원으로만 선발합니다. 별도의 코딩 테스트나 면접은 없습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#131313] p-12 shadow-2xl">
          <h3 className="font-headline text-3xl font-bold text-foreground mb-4">
            지원하기
          </h3>
          <p className="text-outline mb-12">
            아래 버튼을 통해 지원서를 작성해 주세요. 간단한 자기소개와 알고리즘
            관심 분야를 적어주시면 됩니다.
          </p>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-6 bg-primary text-primary-foreground font-headline font-bold uppercase tracking-widest hover:bg-white transition-colors text-center"
          >
            지원서 작성
          </a>
          <p className="mt-6 text-xs text-outline text-center">
            모집 기간이 아닌 경우 다음 모집 시 안내드리겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
```

## 디자인 변경 시 지켜야 할 제약

- 우측 카드의 `bg-[#131313]` 와 좌측 구분선의 `border-[#003545]/20` 는 **인라인 hex** — 일반 규칙에는 위배되지만 다크 베이스 위에 라이트 강조를 만들기 위한 의도. 디자인 변경 시 디자인 토큰으로 치환 검토 (예: `bg-background`, `border-primary-foreground/20`).
- 페이지 전체가 `bg-primary` — 라이트/다크 모두 강한 시각적 임팩트.
- `process.env.NEXT_PUBLIC_JOIN_FORM_URL` 의존성 유지.
- 한국어 텍스트 (지원 자격 / 모집 일정 / 선발 방식 본문) 변경 시 사용자 확인.
- "Join the Monolith." 슬로건은 학회 정체성. 변경 시 사용자 확인.
- PageHeader 미사용 — 의도적으로 다른 페이지와 차별화. 변경 시 사용자 확인.
- 디자인 토큰만 사용 (위 예외 제외), sharp corners, 다크모드 토큰 자동
````

- [ ] **Step 2: Verify file**

```bash
test -s docs/design-for-claude/06-page-join.md && echo OK
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add docs/design-for-claude/06-page-join.md
git commit -m "docs(design-for-claude): add 06-page-join reference"
```

---

## Task 8: Write `07-page-donate.md`

**Files:**
- Create: `docs/design-for-claude/07-page-donate.md`

- [ ] **Step 1: Write `07-page-donate.md`**

````markdown
# Page — Donate

## 경로

- 파일: `app/(main)/donate/page.tsx`
- URL: `/donate`

## 목적

후원 안내. 계좌 정보 카드 + 계좌 복사/문의 버튼 (현재 핸들러 미연결).

## 사용하는 데이터

없음 (정적, "추후 안내 예정" 플레이스홀더).

## 사용하는 컴포넌트

- 없음 (PageHeader 미사용)
- shadcn / lucide 미사용

## 현재 구조

1. **중앙 정렬 섹션** — `py-48 px-6 md:px-12 bg-surface flex flex-col items-center text-center`
2. **헤더** — `06 // SUPPORT` 라벨 + "후원 안내" 제목
3. **본문** — 후원 목적 설명 (`max-w-2xl text-outline`)
4. **계좌 카드** — `bg-surface-container-low p-12 border border-outline-variant/30 max-w-md`
   - 입금 계좌 (현재 "추후 안내 예정")
   - 예금주 ("모르고리즘")
   - 두 버튼: "계좌 복사" (filled) / "문의하기" (outlined) — 현재 onClick 미연결

## 현재 JSX (전문)

```tsx
export default function DonatePage() {
  return (
    <section
      className="py-48 px-6 md:px-12 bg-surface flex flex-col items-center text-center"
      id="donate"
    >
      <span className="font-label text-primary tracking-widest uppercase text-xs mb-8">
        06 // SUPPORT
      </span>
      <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-8">
        후원 안내
      </h2>
      <p className="max-w-2xl text-outline text-lg leading-relaxed mb-16">
        모르고리즘의 대회 참가비, 서버 운영비, 스터디 교재비 등을 후원해 주세요.
        여러분의 후원이 다음 세대의 알고리즘 인재를 키웁니다.
      </p>
      <div className="bg-surface-container-low p-12 border border-outline-variant/30 max-w-md w-full">
        <div className="mb-8">
          <p className="font-label text-[10px] tracking-widest text-outline uppercase mb-2">
            입금 계좌
          </p>
          <p className="font-headline text-2xl font-bold text-primary">
            추후 안내 예정
          </p>
        </div>
        <div className="mb-12">
          <p className="font-label text-[10px] tracking-widest text-outline uppercase mb-2">
            예금주
          </p>
          <p className="font-headline text-xl font-bold">모르고리즘</p>
        </div>
        <div className="flex flex-col gap-4">
          <button className="bg-foreground text-background py-4 font-bold uppercase tracking-widest text-xs">
            계좌 복사
          </button>
          <button className="border border-outline-variant text-foreground py-4 font-bold uppercase tracking-widest text-xs">
            문의하기
          </button>
        </div>
      </div>
    </section>
  );
}
```

## 디자인 변경 시 지켜야 할 제약

- 두 버튼은 현재 onClick 핸들러가 없음. 디자인 리뉴얼 시 인터랙션 추가하려면 `"use client"` 추가 필요.
- "추후 안내 예정" 은 실제 계좌가 결정되면 교체될 플레이스홀더.
- PageHeader 미사용 — 중앙 정렬 정적 페이지로 의도. 변경 시 사용자 확인.
- 디자인 토큰만 사용, sharp corners, 다크모드 토큰 자동
- 한국어 텍스트 그대로 유지
````

- [ ] **Step 2: Verify file**

```bash
test -s docs/design-for-claude/07-page-donate.md && echo OK
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add docs/design-for-claude/07-page-donate.md
git commit -m "docs(design-for-claude): add 07-page-donate reference"
```

---

## Task 9: Write `README.md`

**Files:**
- Create: `docs/design-for-claude/README.md`

- [ ] **Step 1: Write `README.md`**

````markdown
# Design for Claude

이 폴더는 [claude.ai](https://claude.ai) 에서 molgorithm 사이트의 디자인을 변경할 때
대화창에 붙여넣는 컨텍스트 문서들입니다. Claude가 만든 JSX/CSS를 그대로
프로젝트에 붙여넣을 수 있도록, 현재 컴포넌트의 정확한 구조·디자인 토큰·기술
스택 제약을 명시합니다.

## 폴더 구조

| 파일 | 내용 |
|---|---|
| `00-design-system.md` | 디자인 토큰, 폰트, shadcn 컴포넌트 카탈로그, Next.js/React/Tailwind 제약, 금지 사항 |
| `01-layout.md` | Header, Footer, PageHeader, ThemeProvider, root/main layout |
| `02-page-home.md` | `/` (Hero + About) |
| `03-page-members.md` | `/members` (CSV 데이터 기반) |
| `04-page-activities.md` | `/activities` (3개 활동 섹션) |
| `05-page-awards.md` | `/awards` (CSV 데이터, 연도별 테이블) |
| `06-page-join.md` | `/join` (모집 안내 + 외부 폼 링크) |
| `07-page-donate.md` | `/donate` (후원 안내 카드) |

## 작업 시나리오별 붙여넣기 조합

### 시나리오 A: 특정 페이지 한 개의 디자인 변경

가장 흔한 케이스. 예: members 페이지를 좀 더 카드형으로 바꾸고 싶다.

붙여넣을 파일:
1. `00-design-system.md`
2. `01-layout.md`
3. 해당 페이지 문서 1개 (예: `03-page-members.md`)

요청 예시:
> "[붙여넣은 컨텍스트] 위 멤버 페이지를 카드 그리드 형태로 다시 디자인해줘.
> 각 카드에 이름과 핸들이 들어가고, hover 시 살짝 떠오르는 느낌이면 좋겠어.
> 다른 페이지와 일관된 톤은 유지해줘."

결과 적용:
- 받은 JSX 를 `app/(main)/members/page.tsx` 에 통째로 교체

### 시나리오 B: 공통 레이아웃(Header/Footer/PageHeader) 변경

붙여넣을 파일:
1. `00-design-system.md`
2. `01-layout.md`

결과 적용:
- `components/layout/<header|footer|page-header>.tsx` 교체
- PageHeader props 시그니처는 유지 (다른 페이지가 사용 중)

### 시나리오 C: 디자인 시스템 자체(컬러/타이포) 변경

붙여넣을 파일:
1. `00-design-system.md` 만

결과 적용:
- `app/globals.css` 의 `:root` 와 `.dark` 블록 변수 값을 교체
- 새 폰트라면 `app/layout.tsx` 의 `next/font` 설정도 함께 수정

### 시나리오 D: 전체 사이트 일관 리디자인

마지막 수단. 토큰 부담이 큼.

붙여넣을 파일: 전부 (`README` 제외 8개)

결과 적용: 페이지/컴포넌트별로 차근차근 교체. 한 번에 적용하지 말고
PR 단위로 나누는 것을 권장.

## Claude 출력을 코드로 옮기는 법

| Claude가 준 것 | 적용 위치 |
|---|---|
| 페이지 JSX (예: `MembersPage()`) | `app/(main)/<페이지>/page.tsx` 통째로 교체 |
| 레이아웃 컴포넌트 JSX (Header 등) | `components/layout/<name>.tsx` 교체 |
| 메인 섹션 컴포넌트 (Hero/About 등) | `components/main/<name>.tsx` 교체 |
| 디자인 토큰 (CSS 변수) | `app/globals.css` 의 `:root` / `.dark` 변수 값 교체 |
| 새 컴포넌트 추가 | `components/main/` (페이지 섹션) 또는 `components/layout/` (공통) 에 신규 파일 |
| 새 shadcn 컴포넌트 사용 | 먼저 `npx shadcn add <name>` 으로 추가 후 사용 |

## 문서 갱신 (수동)

이 문서들은 자동 생성되지 않습니다. 코드가 바뀌면 손으로 업데이트하세요.

| 코드 변경 위치 | 갱신해야 할 문서 |
|---|---|
| `app/(main)/<page>/page.tsx` | 해당 `0X-page-<name>.md` 의 "현재 JSX (전문)" |
| `components/layout/*.tsx` | `01-layout.md` 의 "현재 JSX (전문)" |
| `components/main/*.tsx` | `02-page-home.md` 의 해당 섹션 |
| `app/globals.css` (토큰 변경) | `00-design-system.md` 의 컬러 토큰 표 |
| `components/ui/` (shadcn 추가/제거) | `00-design-system.md` 의 shadcn 카탈로그 |
| `package.json` (의존성 추가) | `00-design-system.md` 의 기술 스택 / 금지 사항 |
| `lib/data.ts` 또는 `types/types.ts` | 사용하는 페이지 문서 (`03`, `05`) 의 타입 정의 |

## 메타: Claude에 요청할 때 팁

- 변경 범위를 명확히 하세요. "이 페이지를 좀 더 ___" 보다 "Members 페이지의 그리드를 카드형으로, 각 카드에 ___ 표시하고, ___ 인터랙션 추가" 처럼 구체적으로.
- "디자인 토큰만 사용, sharp corners, `dark:` 접두 금지" 는 `00-design-system.md` 에 적혀 있지만, 결과가 어긋나면 명시적으로 다시 요청.
- 결과 코드를 받으면 한 번 더 검토: 인라인 hex 색상이 들어갔는지, `rounded-*` 가 들어갔는지, props 시그니처가 변경됐는지.
````

- [ ] **Step 2: Verify file**

```bash
test -s docs/design-for-claude/README.md && echo OK
```

Expected: `OK`

- [ ] **Step 3: Verify all 9 files exist**

```bash
ls docs/design-for-claude/ | sort
```

Expected output (9 lines):
```
00-design-system.md
01-layout.md
02-page-home.md
03-page-members.md
04-page-activities.md
05-page-awards.md
06-page-join.md
07-page-donate.md
README.md
```

- [ ] **Step 4: Commit**

```bash
git add docs/design-for-claude/README.md
git commit -m "docs(design-for-claude): add README usage guide"
```

---

## Task 10: Final consistency check

**Files:** (read-only verification)

- [ ] **Step 1: Verify each page doc's JSX matches the source file**

For each pair, run a diff-like comparison. The "현재 JSX (전문)" section in each
doc should contain the exact text of the corresponding source file.

```bash
# Extract page sources to compare
diff <(sed -n '/```tsx$/,/^```$/p' docs/design-for-claude/03-page-members.md | sed '1d;$d' | head -50) <(head -50 app/\(main\)/members/page.tsx)
```

Expected: no diff output for the JSX block (initial blank-line differences are
acceptable; the actual code lines must match).

If any page doc's JSX has drifted from the source, update the doc with the
current source code and re-commit (`docs(design-for-claude): sync 0X-...
JSX with source`).

- [ ] **Step 2: Verify token table in `00-design-system.md` matches `globals.css`**

```bash
grep -E '^\s*--(background|foreground|primary|tertiary|surface|outline)' app/globals.css
```

Confirm each listed token's hex value matches what's in
`docs/design-for-claude/00-design-system.md` 's color table for both `:root`
(Light) and `.dark` (Dark) sections. If any value drifted, fix the table and
re-commit.

- [ ] **Step 3: Verify shadcn catalog matches `components/ui/`**

```bash
ls components/ui/ | sed 's/\.tsx$//' | sort
```

Confirm every entry appears as a bullet in the "shadcn/ui 컴포넌트 카탈로그"
section of `00-design-system.md`. If anything is missing or extra, fix and
re-commit.

- [ ] **Step 4: End-to-end smoke test (manual)**

Open `docs/design-for-claude/README.md`. Pick scenario A (e.g., members page).
Mentally walk through:

1. Would pasting `00` + `01` + `03-page-members.md` into claude.ai give Claude
   enough context to generate a `MembersPage` Server Component that:
   - imports `getMembers` from `@/lib/data`
   - imports `PageHeader` from `@/components/layout/page-header`
   - uses `member.이름` and `member.핸들` (Korean field names)
   - uses design tokens (no hex colors, no `rounded-*`)
   - links handles to `https://www.acmicpc.net/user/{핸들}`
2. If yes, the bundle is complete. If no, identify what's missing and add it
   to the appropriate doc.

This step has no automated check — it's a sanity check on the value of the
deliverable. Document any gaps found and address them in a follow-up commit.

- [ ] **Step 5: Final commit (if any fixes were made in steps 1-4)**

```bash
git status
# If clean, no commit needed.
# If changes exist:
git add docs/design-for-claude/
git commit -m "docs(design-for-claude): sync references with current source"
```
