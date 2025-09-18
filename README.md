# React Motion Components Library

React 기반 모션/애니메이션 컴포넌트 라이브러리로, Framer Motion과 Three.js를 활용한 재사용 가능한 컴포넌트들을 shadcn/ui 방식으로 제공합니다.

## 프로젝트 개요

이 프로젝트는 개발자들이 쉽게 복사하여 사용할 수 있는 고품질 애니메이션 컴포넌트를 제공합니다. shadcn/ui의 철학을 따라, npm 패키지가 아닌 소스코드 복사 방식으로 컴포넌트를 배포합니다.

### 주요 특징

- 🎨 **Framer Motion** 기반 2D 애니메이션
- 🎮 **Three.js & React Three Fiber** 기반 3D 그래픽
- 🎯 **TypeScript** 완벽 지원
- 🎨 **Tailwind CSS** 스타일링
- 📦 **shadcn/ui 스타일** 컴포넌트 배포
- 🚀 **Vite** 기반 빠른 개발 환경

## 기술 스택

### Core
- **React 19** - UI 프레임워크
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구 및 개발 서버

### Animation & 3D
- **Motion** - 새로운 애니메이션 라이브러리 (Framer Motion의 최신 버전)
- **Framer Motion** - 선언적 애니메이션 라이브러리
- **Three.js** - 3D 그래픽 라이브러리
- **@react-three/fiber** - React용 Three.js 렌더러
- **@react-three/drei** - R3F 유틸리티 컴포넌트

### Styling
- **Tailwind CSS** - 유틸리티 우선 CSS
- **class-variance-authority** - 조건부 클래스 관리
- **tailwind-merge** - Tailwind 클래스 병합
- **clsx** - 클래스명 유틸리티

## 프로젝트 구조

```
react-mov/
├── src/
│   ├── components/
│   │   ├── ui/              # 기본 UI 컴포넌트
│   │   └── animations/       # 애니메이션 컴포넌트
│   ├── registry/            # 컴포넌트 레지스트리
│   │   ├── index.ts         # 레지스트리 설정
│   │   └── components/      # 등록된 컴포넌트들
│   ├── lib/
│   │   └── utils.ts         # 유틸리티 함수
│   ├── hooks/               # 커스텀 훅
│   ├── App.tsx              # 메인 앱 컴포넌트
│   ├── main.tsx             # 엔트리 포인트
│   └── index.css            # 글로벌 스타일
├── public/                  # 정적 파일
├── components.json          # shadcn/ui 설정
├── tailwind.config.js       # Tailwind 설정
├── tsconfig.json           # TypeScript 설정
├── vite.config.ts          # Vite 설정
└── package.json            # 프로젝트 의존성
```

## 시작하기

### 필요 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
```bash
git clone https://github.com/mooyeon-choi/react-mov.git
cd react-mov
```

2. **의존성 설치**
```bash
npm install
```

3. **개발 서버 실행**
```bash
npm run dev
```

4. **빌드**
```bash
npm run build
```

### 사용 가능한 스크립트

```bash
npm run dev        # 개발 서버 실행 (기본: http://localhost:5173)
npm run build      # 프로덕션 빌드
npm run preview    # 빌드된 결과물 미리보기
npm run typecheck  # TypeScript 타입 체크
npm run lint       # 린트 검사
```

## 컴포넌트 사용법

### 1. CLI를 통한 설치 (추천)

향후 CLI 도구를 제공할 예정입니다:
```bash
npx react-mov add [component-name]
```

### 2. 수동 복사

1. `src/registry/components/`에서 원하는 컴포넌트 찾기
2. 프로젝트에 복사하여 사용
3. 필요한 의존성 설치

### 예시 컴포넌트 사용

```tsx
import { MotionCard } from '@/components/animations/motion-card'

function MyComponent() {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Animated Content</h2>
    </MotionCard>
  )
}
```

## 컴포넌트 개발 가이드

### 새로운 컴포넌트 추가

1. **컴포넌트 파일 생성**
```tsx
// src/components/animations/my-animation.tsx
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface MyAnimationProps {
  className?: string
  children?: React.ReactNode
}

export function MyAnimation({ className, children }: MyAnimationProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  )
}
```

2. **레지스트리에 등록**
```typescript
// src/registry/index.ts
export const registry = [
  {
    name: "my-animation",
    type: "components:animation",
    files: ["my-animation.tsx"],
    dependencies: ["framer-motion"],
  }
]
```

### 컴포넌트 작성 규칙

1. **TypeScript 타입 정의 필수**
2. **Props 인터페이스 export**
3. **cn() 유틸리티로 className 병합**
4. **의존성 명시**
5. **스토리북 예제 제공** (선택)

## 컴포넌트 카테고리

### Motion (Framer Motion)
- Fade In/Out
- Slide Animations
- Scale Animations
- Rotate Animations
- Path Animations
- Gesture Animations
- Scroll-triggered Animations
- Page Transitions

### 3D (Three.js)
- 3D Card Flip
- Particle Systems
- 3D Text Effects
- Mesh Animations
- Camera Controls
- Lighting Effects
- Post-processing Effects

### UI Components
- Animated Buttons
- Loading Spinners
- Progress Bars
- Tooltips
- Modals
- Drawers
- Accordions
- Tabs

## 배포 시스템

### Registry 구조

컴포넌트는 다음 형식으로 registry에 등록됩니다:

```json
{
  "name": "component-name",
  "type": "components:ui",
  "registryDependencies": [],
  "dependencies": ["framer-motion"],
  "devDependencies": [],
  "files": [
    {
      "name": "component-name.tsx",
      "content": "// Component source code"
    }
  ]
}
```

### 컴포넌트 메타데이터

각 컴포넌트는 메타데이터를 포함합니다:
- 이름 및 설명
- 의존성 목록
- 사용 예제
- API 문서
- 브라우저 호환성

## 기여하기

### 기여 방법

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 코드 스타일

- ESLint 규칙 준수
- Prettier 포맷팅 적용
- 컴포넌트별 단위 테스트 작성
- Storybook 스토리 제공

## 로드맵

### Phase 1: 기초 설정 ✅
- [x] 프로젝트 초기 설정
- [x] TypeScript, Vite 구성
- [x] Tailwind CSS 설정
- [x] Framer Motion, Three.js 통합
- [x] shadcn/ui 스타일 설정

### Phase 2: 핵심 컴포넌트
- [ ] 기본 모션 컴포넌트 10개
- [ ] 3D 컴포넌트 5개
- [ ] 인터랙티브 컴포넌트 5개

### Phase 3: 배포 시스템
- [ ] CLI 도구 개발
- [ ] 온라인 문서 사이트
- [ ] 컴포넌트 플레이그라운드
- [ ] npm 패키지 배포

### Phase 4: 확장
- [ ] 애니메이션 프리셋 시스템
- [ ] 테마 커스터마이징
- [ ] 플러그인 시스템
- [ ] 커뮤니티 컴포넌트

## 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

## 링크

- [GitHub Repository](https://github.com/mooyeon-choi/react-mov)
- [Documentation](#) (준비중)
- [Component Gallery](#) (준비중)
- [Discord Community](#) (준비중)

## 문의 및 지원

- Issues: [GitHub Issues](https://github.com/mooyeon-choi/react-mov/issues)
- Email: your-email@example.com
- Twitter: @yourhandle

---

Built with ❤️ using React, Framer Motion, and Three.js