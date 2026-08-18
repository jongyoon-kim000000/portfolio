# 포트폴리오 리뉴얼 스펙 (RENEWAL.md)

대상: E:\web\portfolio — 정적 HTML/CSS/JS, 빌드 없음, GitHub Pages.
방향: 다크 유지 + 깊이/색 풍부화 + 모션 강화 + 레이아웃 리듬 개선.
제약: 프레임워크·의존성 추가 금지, i18n/데이터 구조 유지, prefers-reduced-motion 가드 유지, 다크 전용.

---

## 1. 진단 (코드에서 확인한 구체적 문제)

### 1-1. "너무 어둡기만 하다" — 명도 단차가 사실상 없음
- 배경 `#0b0c0e` ↔ `--surface #111317` 명도 차가 약 2%. `.section-surface`(style.css 5행)가 배경만 살짝 바꾸고 `border-block:1px`로 구분하는데, 실제 화면에서는 거의 같은 검정으로 보임.
- 색은 accent `#bd3d45` 단 하나. 유일한 2차 색(시안 계열)이 이미 코드에 숨어 있음 — `hero-name-electric`의 `rgba(96,194,224,.48)`(polish.css 34행), `body::before` 커서 글로우의 `rgba(110,135,165,.025)`(style.css 16행). 그런데 토큰화되어 있지 않아 화면 전체 인상에 기여하지 못함.
- 커서 글로우 자체가 `rgba(189,61,69,.065)` — 너무 약해서 "이펙트가 있는지도 모르는" 수준.
- 그림자 시스템 부재: hover 시 `box-shadow:0 18px 60px rgba(0,0,0,.26)` 하나뿐. 검정 위 검정 그림자라 깊이감이 안 생김. 글로우형 그림자 없음.

### 1-2. "스크롤 압박" — 수치 근거
- `.section{padding-block:132px}` (style.css 5행) + `.section-heading{margin-bottom:64px}` → 섹션당 상하 여백만 328px.
- `.hero{min-height:100svh}` + `padding-top:calc(var(--header) + 72px)` + `.quick-info{margin-top:76px}` → 첫 화면이 통째로 히어로.
- `.contact{padding-block:110px}`, `.media-hero{padding-block:108px 72px}`(work.css).
- index.html에 독립 섹션이 9개(hero, showreel, work, production, growth, skills, about, credentials, contact). 특히 **credentials 섹션(index.html 157–161행)은 카드 3장짜리 내용인데 풀 섹션 패딩을 차지** — about과 병합 가능한 대표적 낭비.
- 현재 `#project-grid`는 published 프로젝트가 1개뿐(`data/projects.js` — project-tal만 published)이라 `is-single` 레이아웃인데도 work 섹션이 풀 높이를 점유.

### 1-3. "레이아웃이 뻔하다" — 모든 섹션이 같은 템플릿
- 6개 섹션 전부 `section-index(01/02/…) → section-heading(1fr 2fr 그리드) → 콘텐츠 그리드` 동일 구조. 좌측 정렬 → 풀폭 그리드 → 다음 섹션의 단조로운 반복.
- 유일한 변주가 `.section-surface` 배경 교대(work→기본, production→surface, growth→기본, skills→surface…)인데 1-1 때문에 교대가 보이지 않음.
- contact만 `text-align:center` — 오히려 갑자기 튀는 유일한 변주.

### 1-4. "지저분하다" — 코드 중복이 시각 버그 위험을 만듦
- **style.css 18–19행("Final portfolio polish" 블록)이 polish.css와 거의 통째로 중복.** `.brand-mark`, `.hero-copy padding`, `.work-library-cta`, focus 스타일이 두 파일에 존재.
- `hero h1 font-size`가 3곳에서 경합: style.css 4행(`clamp(76px,10vw,156px)`) → 14행(`clamp(70px,7.5vw,116px)`) → polish.css 29행(`clamp(66px,6.7vw,104px)`). `hero-name-glint` keyframes도 style.css 13행과 14행에 2번 정의.
- `body::before` 커서 글로우 포지셔닝이 style.css 16행(left/top transition)과 polish.css 77행(transform 방식)로 이중 정의.
- 리뉴얼 작업 전 이 중복을 정리하지 않으면 토큰 변경이 예측 불가능하게 적용됨. **선행 정리 필수.**

### 1-5. "이펙트 부족 / placeholder 밋밋"
- reveal이 전 요소 동일: `translateY(28px)+blur(7px)`(style.css 16행). 방향·스케일 변주 없음. blur 트랜지션은 GPU 비용도 큼.
- 스크롤 연동 모션은 scroll-progress 바와 timeline 진행선뿐. 섹션 배경·장식 요소는 전부 정적.
- placeholder(`.project-visual`, style.css 5행): 모든 카드가 동일한 32px 그리드 + 우상단 동심원. `visualType`이 `tool`/`production` 2종뿐이고 차이는 그리드 색조뿐. 리깅/테크애님 정체성이 전혀 없음.

---

## 2. 디자인 스펙 — 토큰 (css/style.css `:root` 교체용)

```css
:root{
  /* 배경 엘리베이션 5단계 — 단차를 눈에 보이게 */
  --bg-deep:#07080a;        /* hero, contact 등 최심부 */
  --bg:#0b0c0e;             /* 기본 배경 (기존 유지) */
  --surface-1:#13161b;      /* 기존 --surface 대체, 한 단계 밝게 */
  --surface-2:#191d24;      /* 기존 --surface-2 대체 */
  --surface-3:#20252e;      /* 카드 hover / 최상위 요소 */

  --text:#f0f1f2; --muted:#9aa1ab; --faint:#7d848e;
  --border:#2b3038;
  --border-bright:rgba(255,255,255,.10);   /* 상단 하이라이트 보더 */

  /* 액센트 확장 — 기존 red + 코드에 이미 있던 cyan을 승격 + bright 변형 */
  --accent:#bd3d45;
  --accent-bright:#e0565f;
  --accent-soft:rgba(189,61,69,.15);
  --accent-2:#5fb6d4;                       /* electric glitch의 시안 계열 */
  --accent-2-soft:rgba(95,182,212,.12);

  /* 그라디언트 */
  --grad-accent:linear-gradient(120deg,var(--accent-bright),var(--accent) 55%,#7c333c);
  --grad-duo:linear-gradient(135deg,rgba(189,61,69,.14),rgba(95,182,212,.09));
  --grad-line:linear-gradient(90deg,transparent,var(--accent) 30%,var(--accent-2) 70%,transparent);
  --grad-text:linear-gradient(105deg,#f0f1f2 30%,#aeb8c8 50%,#f0f1f2 70%);

  /* 글로우 / 그림자 시스템 */
  --glow-accent:0 0 44px rgba(189,61,69,.28);
  --glow-cyan:0 0 44px rgba(95,182,212,.20);
  --shadow-1:0 2px 10px rgba(0,0,0,.35);
  --shadow-2:0 14px 40px rgba(0,0,0,.45),0 0 0 1px var(--border-bright);
  --shadow-3:0 28px 80px rgba(0,0,0,.55),0 0 0 1px var(--border-bright);

  /* 섹션 앰비언트 글로우 (배경용 radial) */
  --ambient-red:radial-gradient(ellipse 60% 45% at 18% 8%,rgba(189,61,69,.10),transparent 65%);
  --ambient-cyan:radial-gradient(ellipse 55% 40% at 85% 90%,rgba(95,182,212,.07),transparent 65%);

  --shell:min(1240px,calc(100vw - 64px));--header:78px;--ease:cubic-bezier(.2,.7,.2,1);
  --ease-spring:cubic-bezier(.34,1.56,.64,1);

  /* 간격 스케일 (섹션 3-1 참조) */
  --space-section:clamp(72px,9vh,104px);
  --space-heading:44px;
}
```

주의: `--surface`/`--surface-2` 참조처가 많으므로 기존 이름을 유지하고 값만 교체해도 됨(`--surface:#13161b;--surface-2:#191d24`). 새 이름 도입 시 전체 치환 필요.

### 그레인 텍스처 (SVG feTurbulence data-URI, 의존성 0)

```css
body::after{
  content:"";position:fixed;inset:0;z-index:3;pointer-events:none;
  opacity:.05;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size:160px;
}
```
- 기존 `body::before`(커서 글로우)와 공존 가능. z-index는 스크롤 프로그레스(250), 헤더(100)보다 아래·콘텐츠보다 위가 아니라 **시각적으로만 위**: `pointer-events:none`이므로 상호작용 무해. 모달/영상 재생 위에도 깔리는 게 싫으면 `z-index:1`로 낮추고 `main` 내부 요소에만 겹치게 조정.

### 커서 글로우 강화 (기존 body::before 값 교체)
```css
background:radial-gradient(circle,rgba(189,61,69,.10) 0%,rgba(95,182,212,.05) 38%,transparent 68%);
```

### 타이포
- 폰트 추가 없음(Inter/Noto 유지). 변경점 하나: `.section-heading h2`에 `--grad-text` 클립 적용(선택), hero h1 크기 정의는 **polish.css 29행 한 곳으로 단일화**하고 style.css 4·14행의 중복 정의 삭제.

---

## 3. 레이아웃 개선안 (index.html 섹션별)

### 3-0. 전역 간격 (스크롤 압박 1차 해소)
- `.section{padding-block:132px}` → `padding-block:var(--space-section)` (72–104px).
- `.section-heading{margin-bottom:64px}` → `var(--space-heading)` (44px).
- `.contact{padding-block:110px}` → `88px`. `.quick-info{margin-top:76px}` → `56px`.
- 모바일 쿼리의 `100px/78px` 오버라이드는 삭제(clamp가 대체).
- 예상 효과: 전체 페이지 높이 약 15–20% 감소.

### 3-1. Hero (#top)
- `min-height:100svh` → `min-height:min(92svh,900px)`. 다음 섹션 상단이 살짝 보여 "아래에 더 있다"는 신호를 줌.
- 배경에 앰비언트 글로우 2겹 추가: `.hero::before`(기존 그리드) 유지, hero에 `background:var(--ambient-red)` + 우하단에 `--ambient-cyan`을 새 의사요소나 hero 자체 background 다중값으로. hero만 `--bg-deep` 배경으로 깔아 아래 섹션(--bg)과 첫 단차 형성.

### 3-2. Work (#work)
- 프로젝트가 2개 이상 공개되면 **비대칭 그리드**: 첫 카드 `grid-column:span 2`(가로형 히어로 카드), 이후 2열. CSS:
  `.project-grid>:first-child{grid-column:1/-1}` + 첫 카드 내부를 `is-single`과 같은 좌우 분할 재사용.
- 현재 1개 상태에서는 `is-single` 유지하되 work 섹션과 production 섹션의 heading 사이 간격을 줄여 연속 블록처럼 보이게.

### 3-3. Production (#production)
- `.section-heading` 좌측 컬럼(section-index + h2)을 데스크톱에서 `position:sticky;top:calc(var(--header) + 32px)` — 섹션이 길어도 문맥이 따라옴. skills에도 동일 적용. (900px 이하에서는 해제.)
- `.section-surface`를 `--surface-1` + `--ambient-red` 배경 + 상단 `--grad-line` 1px 라인으로 교체 → 교대가 실제로 보임.

### 3-4. Growth (#growth) — 스크롤 압박 주범 중 하나
- timeline(5열)과 community-experience 사이 `margin-top:64px` → `40px`.
- timeline은 이미 가로형이므로 구조 유지. 대신 아이템에 스크롤 연동 stagger(모션 4-1)로 시각 보상.

### 3-5. About + Credentials 병합 (섹션 1개 제거)
- **index.html 157–161행 credentials 섹션을 #about 안으로 이동**: `.about-grid`를 `grid-template-columns:1fr 2fr`, 좌측에 heading, 우측에 about-copy, 그리고 credentials 3장을 about 하단 풀폭 가로 스트립(`display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin-top:64px`)으로. 독립 섹션 패딩 208px(104×2)이 통째로 사라짐.
- 병합 후 nav 앵커는 변경 불필요(#about 유지, credentials는 앵커 없음).

### 3-6. Contact (#contact)
- 중앙정렬 유지(마지막 섹션의 변주로 오히려 유효). `--bg-deep` 배경 + `--ambient-red`+`--ambient-cyan` 이중 글로우로 피날레 연출. h2에 `--grad-text` 클립.

### 3-7. work.html
- `.media-hero{padding-block:108px 72px}` → `80px 56px`. `.media-tabs button{min-height:92px}` → `76px`. 나머지 구조 유지(탭+그리드는 이미 좋은 패턴).

---

## 4. 모션 스펙

전략: **장식 모션(배경 글로우 패럴랙스, 라인 그리기)은 CSS scroll-driven(`animation-timeline: view()`)을 `@supports`로 점진 적용, 콘텐츠 reveal은 기존 IntersectionObserver 유지**(전 브라우저 동작 보장). 이중 시스템을 만들지 않는 게 핵심.

### 4-1. Reveal 개선 (js/visuals.js `initSectionReveals` + style.css `.reveal-item`)
- `blur(7px)` 제거(비용 대비 효과 낮음) → `opacity + translateY(24px)`만.
- 변주 도입: 대상별 방향 클래스 3종 `reveal-up`(기본) / `reveal-left`(section-heading) / `reveal-scale`(project-card, `scale(.97)`). visuals.js의 selector 목록에서 매핑만 추가.
- timeline-item, credentials article에 `--reveal-delay: index*80ms` stagger (skill-list li와 동일 패턴 재사용).
- reduced-motion: 기존 가드 유지(`reducedMotion.matches`면 IO 미가동, CSS에서 opacity:1 강제 — 이미 구현됨, 유지).

### 4-2. CSS scroll-driven 패럴랙스 (신규, css만)
```css
@supports (animation-timeline: view()) {
  .section{view-timeline-name:--sec}
  .section::before{ /* 앰비언트 글로우 레이어 */
    animation:ambient-drift linear both;
    animation-timeline:--sec;animation-range:entry 0% exit 100%;
  }
  @keyframes ambient-drift{from{transform:translateY(6%);opacity:.4}to{transform:translateY(-6%);opacity:1}}
  .section-heading h2{animation:heading-rise linear both;animation-timeline:view();animation-range:entry 0% entry 60%}
  @keyframes heading-rise{from{opacity:.2;transform:translateY(30px)}to{opacity:1;transform:none}}
}
@media(prefers-reduced-motion:reduce){.section::before,.section-heading h2{animation:none!important}}
```
- 미지원 브라우저: 글로우는 정적으로 표시, heading은 IO reveal이 커버. 폴백 JS 불필요.
- `.scroll-progress`도 지원 브라우저에선 `animation-timeline:scroll()`로 전환 가능하지만 기존 JS가 전역 동작하므로 유지(중복 구현 금지).

### 4-3. 마그네틱 버튼 (js/visuals.js에 함수 추가)
- 대상: `.button`, `.contact-email`. 조건: `pointer:fine` && `prefers-reduced-motion:no-preference`.
- 스펙: 요소별 `pointermove`에서 중심 대비 offset 계산, `translate(dx*.22, dy*.22)` 최대 ±7px, rAF 스로틀(기존 initPointerLight 패턴 재사용). `pointerleave` 시 `transition:transform .5s var(--ease-spring)`으로 복귀, move 중엔 `transition:none`.
```js
function initMagneticButtons(){
  if(reducedMotion.matches||!finePointer.matches)return;
  document.querySelectorAll(".button,.contact-email").forEach(el=>{
    el.addEventListener("pointermove",e=>{
      const b=el.getBoundingClientRect();
      const dx=(e.clientX-b.left-b.width/2)*.22, dy=(e.clientY-b.top-b.height/2)*.22;
      el.style.transition="none";
      el.style.translate=`${Math.max(-7,Math.min(7,dx))}px ${Math.max(-7,Math.min(7,dy))}px`;
    },{passive:true});
    el.addEventListener("pointerleave",()=>{el.style.transition="translate .5s var(--ease-spring)";el.style.translate="0 0"});
  });
}
```
- 주의: `.button::before` shine이 overflow:hidden 내부라 translate와 충돌 없음.

### 4-4. Hover 영상 프리뷰 (점진적 향상)
- **데이터 주도 활성화**: 파일 존재 프로브 금지. `data/projects.js` 항목에 `preview:"assets/video/<id>.webm"`, `data/media.js` 항목에 `preview` 필드가 **있을 때만** 렌더러가 video를 생성. 현재 assets/video가 비어 있으므로 필드도 없음 → 아무것도 변하지 않음(안전).
- js/projects.js: `project.preview`가 있으면 `.project-visual`에
  `<video class="project-preview" muted loop playsinline preload="none" src="...">` 추가. `mouseenter`/`focusin`에서 `video.play()`(첫 재생 시 로드), `mouseleave`/`focusout`에서 `pause()`. opacity 0→1 트랜지션 .3s.
- js/media-gallery.js: media-card `.media-play`에 동일 패턴.
- reduced-motion 또는 `pointer:coarse`: hover 재생 비활성(클릭 재생만). `matchMedia` 가드 재사용.
- `Save-Data`/저사양 배려: `preload="none"` + hover 시에만 로드로 충분.

### 4-5. 섹션 전환 효과
- 각 `.section-surface` 상단의 `border-block` → `border` 제거하고 `::after`로 `--grad-line` 1px 라인 + scroll-driven `scaleX(0→1)`(4-2와 동일 `@supports` 블록, 폴백은 정적 라인).
- 섹션 배경 단차(3-3)와 결합하면 "전환"이 색·라인·글로우 3중으로 인지됨. 별도 JS 없음.

---

## 5. 카드 placeholder 개선안 (CSS-only, 리깅 테마 제너레이티브)

렌더러는 이미 index를 앎(js/projects.js의 map index). **각 카드에 인라인 `style="--i:${index}"`만 추가**(JS 1줄) 하면 CSS가 결정적 변주를 만듦. 나머지는 전부 CSS.

```css
/* 공통: index 기반 색상 회전 — red↔cyan 사이를 순환 */
.project-visual{
  --h:calc(var(--i,0) * 47);
  background-color:#101319;
}
/* 패턴 1 (3n): 컨투어 라인 — 웨이트맵/지형 등고선 */
.project-card:nth-child(3n+1) .project-visual{
  background-image:
    repeating-radial-gradient(ellipse 120% 90% at 75% -10%,
      transparent 0 26px, hsl(calc(354 + var(--h)) 45% 55% / .13) 26px 27px),
    linear-gradient(180deg,transparent 40%,rgba(8,9,11,.85));
}
/* 패턴 2 (3n+2): 노드 그래프 — 리그 계층/컨스트레인트 */
.project-card:nth-child(3n+2) .project-visual{
  background-image:
    radial-gradient(circle 5px at 22% 30%, hsl(calc(354 + var(--h)) 60% 60% / .9) 98%, transparent),
    radial-gradient(circle 4px at 55% 62%, hsl(calc(354 + var(--h)) 60% 60% / .7) 98%, transparent),
    radial-gradient(circle 6px at 78% 24%, hsl(calc(354 + var(--h)) 60% 60% / .8) 98%, transparent),
    radial-gradient(circle 3px at 40% 80%, rgba(255,255,255,.5) 98%, transparent),
    linear-gradient(31deg, transparent 49.7%, rgba(255,255,255,.14) 49.7% 50.3%, transparent 50.3%),
    linear-gradient(-24deg, transparent 49.6%, rgba(255,255,255,.10) 49.6% 50.4%, transparent 50.4%),
    linear-gradient(180deg,transparent 40%,rgba(8,9,11,.85));
}
/* 패턴 3 (3n+3): 스플라인/조인트 체인 — IK 커브 느낌 */
.project-card:nth-child(3n) .project-visual{
  background-image:
    repeating-linear-gradient(115deg,
      transparent 0 34px, hsl(calc(354 + var(--h)) 40% 58% / .10) 34px 35px),
    radial-gradient(circle 4px at 18% 70%, rgba(255,255,255,.55) 98%, transparent),
    radial-gradient(circle 4px at 42% 52%, rgba(255,255,255,.45) 98%, transparent),
    radial-gradient(circle 4px at 66% 40%, rgba(255,255,255,.35) 98%, transparent),
    radial-gradient(circle 4px at 88% 34%, hsl(calc(354 + var(--h)) 60% 62% / .9) 98%, transparent),
    linear-gradient(180deg,transparent 40%,rgba(8,9,11,.85));
}
/* 기존 동심원 ::before는 유지하되 hue 연동 */
.project-visual::before{border-color:hsl(calc(354 + var(--h)) 30% 60% / .18)}
/* hover 시 패턴 미세 확대(기존 polish.css hover 블록에 병합) */
.project-card:hover .project-visual{background-position:0 -4px}
```
- `--h` 기준 354°는 기존 `#bd3d45`의 hue. index가 돌수록 red→마젠타→시안 방향으로 회전해 `--accent-2`와 자연스럽게 어울림.
- `.production` 변형(red 그리드)은 유지 — Project TAL은 실제 썸네일이 있어 placeholder 미노출.
- 생성 이미지 불필요. 위 3패턴 + hue 회전으로 6개 프로젝트까지 전부 다르게 보임.

---

## 6. 작업 분할 (의존 순서대로)

### 0단계 — 선행 정리
| # | 구분 | 작업 | 파일 |
|---|------|------|------|
| 0-1 | [COMPLEX] | 중복 제거: style.css 18–19행 "Final portfolio polish" 블록을 polish.css와 대조해 style.css 쪽 삭제, hero h1 크기 정의를 polish.css 한 곳으로 단일화, hero-name-glint 중복 keyframes(13·14행) 하나로 통합, body::before 포지셔닝은 polish.css transform 방식만 유지 | css/style.css, css/polish.css |

### 1단계 — 토큰/텍스처 (0-1 이후)
| # | 구분 | 작업 | 파일 |
|---|------|------|------|
| 1-1 | [SIMPLE] | §2 토큰 교체(:root) — 기존 변수명 유지하고 값 교체 + 신규 변수 추가 | css/style.css |
| 1-2 | [SIMPLE] | 그레인 오버레이(body::after data-URI) 추가 | css/polish.css |
| 1-3 | [SIMPLE] | 커서 글로우 강도/이중색 교체, 스크롤 프로그레스 바 그라디언트를 `--grad-line`으로 | css/style.css |

### 2단계 — 간격/깊이 (1단계 이후)
| # | 구분 | 작업 | 파일 |
|---|------|------|------|
| 2-1 | [SIMPLE] | §3-0 간격 스케일 적용(.section/.section-heading/.contact/.quick-info + 모바일 오버라이드 삭제) | css/style.css, css/polish.css |
| 2-2 | [SIMPLE] | 섹션 배경 단차: hero/contact `--bg-deep`, section-surface `--surface-1`+앰비언트 글로우, 그라디언트 라인 디바이더 | css/style.css |
| 2-3 | [SIMPLE] | work.html 간격(media-hero, media-tabs 높이) | css/work.css |
| 2-4 | [SIMPLE] | 그림자 시스템 치환: 카드 hover를 `--shadow-2/3`+글로우로 통일 | css/style.css, css/polish.css |

### 3단계 — 레이아웃 재구성 (2단계 이후)
| # | 구분 | 작업 | 파일 |
|---|------|------|------|
| 3-1 | [COMPLEX] | credentials 섹션을 #about으로 병합(§3-5) — 마크업 이동 + about-grid 재구성 + reveal selector 영향 확인 | index.html, css/style.css, js/visuals.js |
| 3-2 | [COMPLEX] | production/skills heading sticky(§3-3) + 900px 해제 | css/style.css |
| 3-3 | [COMPLEX] | 비대칭 프로젝트 그리드(§3-2, 첫 카드 풀폭) — is-single 로직과의 공존 판단 필요 | css/style.css, js/projects.js |
| 3-4 | [SIMPLE] | hero min-height 92svh + 앰비언트 글로우(§3-1), contact 피날레 연출(§3-6) | css/style.css |

### 4단계 — 모션 (1–3단계 이후)
| # | 구분 | 작업 | 파일 |
|---|------|------|------|
| 4-1 | [SIMPLE] | reveal 변주 3종 클래스 + blur 제거 + timeline/credentials stagger(§4-1) | css/style.css, js/visuals.js |
| 4-2 | [COMPLEX] | CSS scroll-driven 패럴랙스/라인 시스템(§4-2, §4-5) — @supports 경계 설계, IO와 중복 방지 판단 | css/polish.css |
| 4-3 | [SIMPLE] | 마그네틱 버튼(§4-3 코드 그대로) | js/visuals.js |
| 4-4 | [COMPLEX] | hover 영상 프리뷰 점진 향상(§4-4) — projects/media 렌더러 양쪽, 가드 조건 | js/projects.js, js/media-gallery.js, css/style.css, css/work.css |

### 5단계 — 카드 비주얼 (1단계 이후 언제든)
| # | 구분 | 작업 | 파일 |
|---|------|------|------|
| 5-1 | [SIMPLE] | js/projects.js 카드에 `style="--i:${index}"` 1줄 추가 | js/projects.js |
| 5-2 | [SIMPLE] | §5 패턴 CSS 3종 + hue 회전 적용 | css/style.css |

집계: [SIMPLE] 12건 / [COMPLEX] 6건.
검증 공통: 각 단계 후 4개 언어 전환, 900px/600px 브레이크포인트, prefers-reduced-motion 에뮬레이션, 키보드 포커스 순회 확인.

---

## 7. 패치노트

| 날짜 | 작업 | 파일 | 상태 |
|------|------|------|------|
| 2026-08-18 | 1-1 토큰 교체(:root 엘리베이션 5단계·accent-2·그라디언트·글로우·그림자·간격 변수) | css/style.css | 완료 |
| 2026-08-18 | 1-2 그레인 오버레이(body::after feTurbulence) | css/polish.css | 완료 |
| 2026-08-18 | 1-3 커서 글로우 red/cyan 강화 + 스크롤바 --grad-line | css/style.css | 완료 |
| 2026-08-18 | 2-1 간격 스케일(--space-section/heading, 모바일 padding 오버라이드 삭제) | css/style.css | 완료 |
| 2026-08-18 | 2-2 섹션 단차(section-surface 앰비언트+grad-line 상단 라인, hero/contact 앰비언트) | css/style.css | 완료 |
| 2026-08-18 | 2-3 work.html 간격(media-hero 80/56, 탭 76px) | css/work.css | 완료 |
| 2026-08-18 | 2-4 그림자 토큰 치환(hover --shadow-2/3+glow, focus-within) | css/style.css, css/polish.css | 완료 |
| 2026-08-18 | 3-4 hero min(92svh,900px)+앰비언트, contact bg-deep+grad-text 피날레 | css/style.css | 완료 |
| 2026-08-18 | 4-1 reveal 변주(reveal-left/scale)+blur 제거+timeline/credentials stagger | css/style.css, js/visuals.js | 완료 |
| 2026-08-18 | 4-3 마그네틱 버튼(.button/.contact-email, ±7px, spring 복귀) | js/visuals.js | 완료 |
| 2026-08-18 | 5-1 카드 인라인 --i 인덱스 | js/projects.js | 완료 |
| 2026-08-18 | 5-2 제너레이티브 카드 패턴 3종(hue 회전 354+47i, production 제외) | css/style.css | 완료 |
| 2026-08-18 | 0-1 CSS 중복 정리 (polish 블록 단일화, hero h1 크기 단일화, glint keyframes 통합, 커서 글로우 단일화) | css/style.css, css/polish.css | 완료 |
| 2026-08-18 | 3-1 credentials 섹션을 #about 하단 풀폭 3열 스트립으로 병합(독립 섹션 삭제, i18n·reveal selector 유지) | index.html, css/style.css | 완료 |
| 2026-08-18 | 3-2 production/skills 헤딩 sticky 좌측 레일(.shell 1fr/2.4fr 그리드, top:header+32px, 901px 이상 전용, production-card 세로 스택) | css/style.css | 완료 |
| 2026-08-18 | 3-3 비대칭 프로젝트 그리드(is-single 규칙을 :first-child 공용 규칙으로 통합 — 첫 카드 풀폭 가로 분할, 이후 2열, 900px 이하 1열) | css/style.css | 완료 |
| 2026-08-18 | 4-2 스크롤 연동 장식 모션(@supports animation-timeline: grad-line scaleX 드로인, 앰비언트 background-position 드리프트, h2 rise — IO는 컨테이너/타임라인은 h2만 소유, reduced-motion 해제) | css/polish.css | 완료 |
| 2026-08-18 | 4-4 hover 영상 프리뷰(preview 필드 존재 시에만 video 렌더, mouseenter/focusin 재생, reduced-motion·pointer:coarse 가드, 재렌더 시 리스너 재바인딩 없음) | js/projects.js, js/media-gallery.js, css/style.css, css/work.css | 완료 |
| 2026-08-18 | 유저 피드백: 커서 추적 라이트 효과 제거(body::before, initPointerLight) | css/style.css, css/polish.css, js/visuals.js | 완료 |
| 2026-08-18 | 유저 피드백: 스킬 FullBody IK → UE Control Rig(FullBody IK·프로시저럴 리깅, 4개 언어) | data/profile.js | 완료 |
