# Design for Claude — 디자인 컨텍스트 문서 묶음

작성일: 2026-05-06

## 배경

molgorithm 사이트의 디자인을 claude.ai 대화에서 변경하고, 그 결과(JSX/CSS)를 그대로 프로젝트에 붙여넣는 작업 흐름을 만들고 싶다. 그러려면 Claude가 다음을 정확히 알아야 한다:

- 현재 사이트의 디자인 시스템 (컬러 토큰, 타이포, 레이아웃 규칙)
- 각 페이지의 현재 구조와 JSX
- 호환되는 코드를 생성하기 위한 기술 스택 제약 (Next.js 16, React 19, Tailwind v4, shadcn 컴포넌트 목록)

이 정보를 "Claude에 붙여넣기 좋은 형태"의 문서 묶음으로 정리한다.

## 목표

- claude.ai 대화창에 붙여넣어 디자인 변경을 요청할 수 있는 마크다운 문서 묶음을 만든다.
- Claude가 만든 JSX는 **수정 없이** 프로젝트에 붙여넣을 수 있어야 한다 (동일한 props 시그니처, 디자인 토큰 사용).
- 페이지 단위로 골라서 붙여넣을 수 있도록 문서를 분리한다 (토큰 절약).

## 비목표

- 자동 생성 스크립트는 만들지 않는다. 코드 변경 시 손으로 갱신.
- 디자인 자체를 변경하지 않는다. 이 작업은 "현재 디자인을 문서화"까지만.
- 스크린샷/이미지는 포함하지 않는다 (텍스트 기반).

## 산출물 — 폴더 구조

```
docs/design-for-claude/
├── README.md                 # 사용법, 시나리오별 붙여넣기 조합
├── 00-design-system.md       # 디자인 토큰, 폰트, shadcn 컴포넌트 목록, 기술 스택 제약
├── 01-layout.md              # Header, Footer, PageHeader (모든 페이지 공통)
├── 02-page-home.md           # app/(main)/page.tsx + Hero/About/Gallery 섹션
├── 03-page-members.md        # app/(main)/members/page.tsx
├── 04-page-activities.md     # app/(main)/activities/page.tsx
├── 05-page-awards.md         # app/(main)/awards/page.tsx
├── 06-page-join.md           # app/(main)/join/page.tsx
└── 07-page-donate.md         # app/(main)/donate/page.tsx
```

## 페이지/레이아웃 문서의 공통 형식

01~07 문서는 모두 다음 섹션 구조를 따른다:

```markdown
# [페이지/컴포넌트 이름]

## 경로
- 파일: `app/(main)/<page>/page.tsx`
- URL: `/<page>`

## 목적
한 줄 요약 — 이 페이지가 무엇을 보여주는가

## 사용하는 데이터
- 출처: `lib/data.ts` 의 함수 또는 정적 데이터
- 타입: `types/types.ts` 의 타입명
- 타입 정의 (인라인 복붙):
  ```ts
  type X = { ... }
  ```

## 사용하는 컴포넌트
- `<PageHeader title="..." subtitle="..." />` (from `01-layout.md`)
- shadcn: `<Badge />`, `<Card />`, ...
- lucide-react 아이콘: `ExternalLink`, ...

## 현재 구조 (섹션 단위)
1. **섹션명** — 설명
2. ...

## 현재 JSX (전문)
```tsx
<현재 page.tsx 또는 컴포넌트 전체 코드>
```

## 디자인 변경 시 지켜야 할 제약
- 디자인 토큰만 사용 (`00-design-system.md` 참고)
- 모서리는 항상 sharp
- 다크모드 대응 필수 (토큰 자동)
- 한국어/영어 혼용 그대로 유지
```

## `00-design-system.md` 의 내용 범위

별도 형식. 다음 항목을 포함:

1. **디자인 철학** (한 단락) — 에디토리얼/미니멀, sharp corners, 듀얼 팔레트(라이트/다크), 한영 혼용
2. **컬러 토큰 표** — `globals.css` 정의된 모든 토큰 (background, foreground, primary, secondary, tertiary, muted, accent, destructive, border, input, ring, surface, surface-container/-low/-high, on-surface-variant, outline, outline-variant, sidebar-*) 의 라이트/다크 hex 값
3. **타이포그래피** — `font-sans` (Manrope + Pretendard), `font-headline` (Manrope), `font-label` (Inter), `font-mono` (Geist) 와 사용 패턴
4. **레이아웃 규칙** — `--radius: 0px` (sharp corners), 컨테이너 max-width, 페이지 좌우 패딩 (실제 코드에서 추출)
5. **shadcn 컴포넌트 목록** — `components/ui/` 의 모든 컴포넌트와 import 경로 (`@/components/ui/...`)
6. **아이콘** — `lucide-react` 만 사용
7. **기술 스택 제약** — Next.js 16 App Router, React 19, Tailwind CSS v4 (`@theme inline`, `@apply`), Server Components 기본 / 인터랙션은 `"use client"`, 다크모드는 `next-themes` + `.dark` 클래스
8. **금지/지양 사항** — 인라인 hex 색상 X, 둥근 모서리(`rounded-md`) X, 신규 컴포넌트 라이브러리 X, 외부 폰트 추가 X, 한국어 텍스트 임의 번역 X

## `README.md` 의 내용 범위

폴더 안내 + 시나리오별 붙여넣기 조합:

- **특정 페이지 한 개 변경**: `00` + `01` + 해당 페이지 문서
- **공통 레이아웃 변경**: `00` + `01`
- **디자인 시스템 자체 변경**: `00` 만 → 결과는 `app/globals.css` 토큰 값 교체
- **전체 사이트 리디자인**: 전부 (토큰 부담 큼, 마지막 수단)

Claude 출력을 코드로 옮기는 법:

- **페이지 코드**: `app/(main)/<페이지>/page.tsx` 통째로 교체
- **공통 레이아웃**: `components/layout/<header|footer|page-header>.tsx` 교체
- **디자인 토큰**: `app/globals.css` 의 `:root` / `.dark` 블록 변수 값만 교체
- **새 컴포넌트**: `components/main/` 또는 `components/layout/` 에 신규 파일

문서 갱신 안내 — 코드 변경 시 손으로 업데이트해야 하는 부분:

- 페이지 문서의 "현재 JSX (전문)" — 페이지 코드가 바뀔 때마다
- `00-design-system.md` 컬러 토큰 표 — `globals.css` 가 바뀔 때
- shadcn 컴포넌트 목록 — `components/ui/` 에 추가/제거될 때

## 작업 단위 분해 (구현 계획용 힌트)

각 문서는 독립적으로 만들 수 있다. 의존 관계:

- `00`, `README` 는 다른 문서에 의존하지 않는다
- `01-layout.md` 는 `00` 의 토큰 표기법을 참조하지만, 별도로 작성 가능
- `02`~`07` 페이지 문서는 모두 동일 템플릿 — 병렬 작성 가능

## 성공 기준

- 모든 9개 파일 (`README` + `00`~`07`) 이 작성되어 있다
- 각 페이지 문서의 "현재 JSX (전문)" 이 실제 `app/(main)/<page>/page.tsx` 와 일치한다
- `00-design-system.md` 의 컬러 토큰 표가 `app/globals.css` 의 `:root` / `.dark` 정의와 일치한다
- README의 시나리오 예시대로 파일을 골라 붙여넣었을 때, Claude가 호환 코드를 생성하기에 충분한 컨텍스트가 담겨 있다
