export const projects = [
  {
    id: 10,
    title: "Culture Fit Agent — 조직 적합도 분석 AI 에이전트",
    period: "2026 · SeSAC 팀 프로젝트",
    description:
      "기업의 인재상과 조직문화, 지원자 서류를 비교하여 적합도와 위험 요인을 명확한 근거와 함께 분석하는 AI 에이전트 서비스입니다.",
    image: "/images/queit.png",
    tags: ["LangGraph", "LangChain", "Python", "Pydantic", "AI Agent"],
    demoUrl: "#",
    githubUrl: "https://github.com/eeeunhey/culture-fit-agent",
    overview:
      "기업의 인재상 · 조직문화와 지원자 서류를 비교해 적합도와 위험 요인을 근거와 함께 분석하는 멀티 에이전트 서비스입니다.",
    features: [
      "인재상·서류 심층 비교 — 기업 문화와 지원자 경험을 다각도로 대조해 평가 근거를 도출합니다",
      "에이전트 역할 분리 — 기업 분석과 지원자 분석을 독립된 에이전트로 나누어 신뢰도를 높였습니다",
      "LangGraph State 연결 — 개별 에이전트의 중간 분석 결과를 State로 엮어 최종 종합 평가를 생성합니다",
      "Pydantic 스키마 검증 — LLM 출력 구조를 고정하여 평가 근거와 결과 형식의 일관성을 유지했습니다",
    ],
    tech: ["Python", "LangGraph", "LangChain", "Pydantic"],
    role: "지원자 분석 파트, 공통 모듈 구조 설계, 그래프 통합",
    team: "SeSAC 팀 프로젝트",
    stackCategories: ["AI", "Python"],
    problem: [
      "단일 프롬프트로 기업 문화와 지원자 서류를 동시에 비교하면 평가 기준이 흐려지거나 근거가 빠지는 일이 발생했습니다",
      "LLM 응답 형식이 일정하지 않아 분석 결과를 일정한 보고서 형식으로 저장하기 어려웠습니다",
    ],
    solution: [
      "기업 분석과 지원자 분석을 별도 에이전트로 나누고 LangGraph State로 결과를 안전하게 연결했습니다",
      "Pydantic 스키마로 출력 구조를 고정해 평가 근거와 결과 형식을 일관되게 유지했습니다",
    ],
    architecture: [
      { name: "서류 입력", desc: "기업 인재상 + 지원자 서류" },
      { name: "기업 분석 Agent", desc: "핵심 가치 및 인재상 추출" },
      { name: "지원자 분석 Agent", desc: "역량 및 경험 데이터 정리" },
      { name: "LangGraph State", desc: "분석 결과 공유 및 상태 통합" },
      { name: "종합 평가 노드", desc: "적합도 점수 및 위험 요인 도출" },
      { name: "Pydantic 출력", desc: "정형화된 최종 분석 리포트" },
    ],
    challenges: [
      {
        problem: "방대한 서류를 한 번에 LLM에 넘겼을 때 인재상 매칭의 정밀도가 떨어지는 한계가 있었습니다",
        solution: "모듈 단위로 에이전트 역할을 나누고, LangGraph를 통해 단계별로 검증된 데이터를 누적 전달하도록 설계했습니다",
      },
      {
        problem: "자유 텍스트 출력 시 평가 항목이 누락되거나 포맷이 깨지는 현상이 빈번했습니다",
        solution: "Pydantic 모델을 기반으로 구조화된 출력을 지정하여 데이터 누락 없이 안전하게 처리했습니다",
      },
    ],
    results: [
      "LangGraph를 활용해 다중 에이전트 협업 및 상태 관리 구조를 직접 설계하고 구현했습니다",
      "Pydantic 기반 스키마 설계를 통해 비결정적인 LLM 출력을 안정적으로 다루는 방법을 익혔습니다",
      "팀 프로젝트에서 지원자 분석 파트와 공통 모듈 설계, 전체 그래프 통합을 주도했습니다",
    ],
  },
  {
    id: 8,
    title: "QUOKIT — LangGraph 기술 리서치 Agent & 큐레이션",
    period: "2026.01 ~ 현재 · 개인 프로젝트",
    description:
      "GitHub Trending 오픈소스를 실시간으로 모으고, 리서치·검증·리포트 작성을 나눠 맡는 LangGraph 멀티 에이전트로 기술 스택을 분석해 근거가 있는 한글 요약을 제공하는 큐레이션 서비스입니다.",
    image: "/images/queit.png",
    tags: ["LangGraph", "LangChain", "Python", "Next.js 16", "TypeScript", "Supabase", "Upstash Redis"],
    demoUrl: "https://quokit-kr.vercel.app/",
    githubUrl: "https://github.com/eeeunhey/quokit-platform",
    overview:
      "GitHub Trending 오픈소스를 실시간으로 모으고, 리서치·검증·리포트 작성을 나눠 맡는 LangGraph 멀티 에이전트로 기술 스택을 분석해 근거가 있는 한글 요약을 제공하는 큐레이션 서비스입니다.",
    features: [
      "LangGraph 멀티 에이전트 — 리서치, 검증, 리포트 작성을 각각 다른 노드가 맡아 요약의 근거를 확인합니다",
      "자동 재탐색 — 근거가 부족하다고 판단되면 정해진 횟수까지 다시 조사하도록 분기했습니다",
      "Pydantic 스키마 — 핵심 기능, 기술 스택, 제약사항을 정해진 형식으로 받아 DB에 안전하게 저장합니다",
      "커밋 SHA 기반 Redis 캐시 — 코드가 바뀌지 않은 저장소는 다시 분석하지 않아 LLM 호출을 약 90% 줄였습니다",
      "Trending 큐레이션 — Stars/Forks를 기준으로 일간·주간·월간 랭킹을 보여줍니다",
      "언어·토픽 필터 — Python, TypeScript, Rust 같은 언어별 랭킹과 #ai, #cli 같은 토픽 검색을 지원합니다",
    ],
    tech: ["LangGraph", "LangChain", "Python", "Next.js 16", "TypeScript", "Supabase", "Upstash Redis", "Tailwind CSS"],
    role: "AI Agent / Full-stack",
    team: null,
    stackCategories: ["AI", "Python", "Next.js", "TypeScript", "React"],
    problem: [
      "영문 README를 그대로 번역한 요약만으로는 실제 구조와 기술 스택이 맞는지 확인하기 어려웠습니다",
      "LLM을 한 번만 호출하면 라이브러리 기능이나 버전을 잘못 말하거나 근거 없이 단정하는 일이 생겼습니다",
      "저장소를 매일 반복해서 분석하면 토큰 비용과 응답 시간이 빠르게 늘어났습니다",
    ],
    solution: [
      "LangGraph로 조사 노드와 검증 노드를 나누고, 검증에서 걸리면 다시 조사하는 흐름을 만들었습니다",
      "LangChain Structured Output과 Pydantic으로 핵심 기능, 기술 스택, 제약사항의 형식을 고정했습니다",
      "커밋 SHA를 키로 Upstash Redis에 먼저 캐싱하고, Supabase(PostgreSQL)에 저장해 중복 호출을 막았습니다",
    ],
    architecture: [
      { name: "트렌딩 수집", desc: "Cheerio + GitHub API" },
      { name: "Research Agent", desc: "원문·코드 조사" },
      { name: "Verification Agent", desc: "근거 확인·재탐색 요청" },
      { name: "Report Agent", desc: "형식이 정해진 리포트 작성" },
      { name: "Redis & DB", desc: "Upstash 캐시 + Supabase 저장" },
      { name: "Next.js UI", desc: "큐레이션 화면" },
    ],
    challenges: [
      {
        problem: "프롬프트 하나로 README 전체를 요약하면 라이브러리 기능이나 버전이 사실과 다르게 나왔습니다",
        solution: "조사와 검증 노드를 나누고, 원문에서 인용한 근거가 부족하면 다시 조사하도록 만들었습니다",
      },
      {
        problem: "LLM 출력 형식이 매번 달라 JSON 파싱이 실패하거나 필수 항목이 빠진 채 저장되는 일이 잦았습니다",
        solution: "Structured Output과 Pydantic으로 형식을 검증한 뒤에만 DB에 저장하도록 했습니다",
      },
      {
        problem: "트렌딩 순위가 바뀔 때마다 같은 저장소를 다시 분석해 토큰 비용이 늘었습니다",
        solution: "최신 커밋 SHA를 캐시 키로 써서, 코드가 바뀌지 않았다면 저장된 결과를 바로 돌려줍니다",
      },
    ],
    results: [
      "LangGraph로 에이전트 사이의 상태와 흐름을 관리하는 구조를 직접 설계하고 구현했습니다",
      "환각을 프롬프트만으로 막으려 하지 않고, 검증 노드와 재탐색 분기로 줄이는 방법을 익혔습니다",
      "Python 에이전트 백엔드와 Next.js 16 웹 서비스를 연결해 하나의 서비스로 만들었습니다",
    ],
  },
  {
    id: 7,
    title: "Daily Emotion Log — 감정 기록",
    period: "2025.12 · 팀 프로젝트",
    description:
      "감정 기록을 Gemini API로 분석해 피드백을 주고, 날짜별 감정 변화를 차트로 보여주는 서비스를 설계하고 구현했습니다.",
    image: "/images/EmotionLog.png",
    tags: ["HTML/CSS/JS", "Flask", "MariaDB", "Gemini API", "Cloudtype"],
    demoUrl: "#",
    githubUrl: "https://github.com/eeeunhey/daily-emotion-log",
    overview:
      "감정 기록을 Gemini API로 분석해 피드백을 주고, 날짜별 감정 변화를 차트로 보여주는 서비스를 설계하고 구현했습니다.",
    features: [
      "감정 선택 화면 — 8가지 감정 중 하나를 고르고 메모를 남길 수 있습니다",
      "AI 피드백 — 선택한 감정에 맞춰 Gemini API가 분석 내용을 알려줍니다",
      "감정별 프롬프트 — 감정마다 다른 프롬프트 템플릿을 써서 답변의 품질과 형식을 맞췄습니다",
      "감정 차트 — 날짜별 감정 변화를 라인 차트로 보여줍니다",
      "트렌드 리포트 — 주간·월간 감정 흐름을 자동으로 요약합니다",
      "조회 속도 개선 — 날짜 범위에 인덱스를 걸어 차트가 더 빨리 뜨도록 했습니다",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Flask", "MariaDB", "Gemini API", "Cloudtype"],
    role: "PM / Full-stack",
    team: "5인 팀 프로젝트",
    stackCategories: ["JavaScript", "Python", "AI"],
    problem: [
      "기존 일기 앱은 기록만 할 수 있고, 감정이 어떻게 변했는지는 알려주지 않았습니다",
      "사용자가 자신의 감정 변화를 스스로 알아차리기 어려웠습니다",
      "기록한 감정에 대해 객관적인 피드백을 받을 방법이 없었습니다",
    ],
    solution: [
      "8가지 감정을 고르고 메모를 쓰면 Gemini API가 맞춤 피드백을 만들어 주도록 했습니다",
      "날짜별 감정 데이터를 차트와 타임라인으로 보여줘서 변화를 한눈에 볼 수 있게 했습니다",
      "주간·월간 트렌드 리포트로 감정 패턴을 요약했습니다",
    ],
    architecture: [
      { name: "감정 입력", desc: "8종 감정 선택 + 메모" },
      { name: "프론트엔드", desc: "입력 확인 및 화면" },
      { name: "Flask 서버", desc: "감정별 프롬프트 선택" },
      { name: "Gemini API", desc: "감정별 피드백 생성" },
      { name: "MariaDB", desc: "기록 + 분석 결과 저장" },
      { name: "차트 출력", desc: "트렌드 시각화" },
    ],
    challenges: [
      {
        problem: "8개 감정 버튼 중 무엇을 골랐는지 구분이 안 됐고, Gemini 응답을 기다리는 1~3초 동안 화면에 아무 표시가 없었습니다",
        solution: "선택한 버튼은 확대, 배경색 강조, 체크 아이콘으로 구분하고, 대기 중에는 스켈레톤 UI를 보여준 뒤 응답이 오면 부드럽게 나타나도록 했습니다",
      },
    ],
    results: [
      "프론트엔드부터 Flask, Gemini API, MariaDB까지 전체 흐름을 처음부터 직접 설계하고 만들었습니다",
      "프롬프트를 감정별로 나누고 응답을 JSON으로 받아 처리하는 구조를 실제로 만들어 봤습니다",
      "PM을 맡아 스탠드업 미팅, 일정 관리, 역할 분배를 함께 진행했습니다",
    ],
  },
  {
    id: 1,
    title: "Ascend — 이력서 코칭 웹",
    period: "2025.10–2025.12 · 개인 프로젝트",
    description:
      "이력서 PDF를 올리면 AI가 섹션별로 점수를 매기고 ATS 키워드까지 분석해 주는 코칭 서비스를 설계하고 구현했습니다.",
    image: "/images/ascend.png",
    tags: ["React", "TypeScript", "Vite", "Zustand", "React Query", "Puter.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/eeeunhey/Ascend",
    overview:
      "이력서 PDF를 올리면 AI가 섹션별로 점수를 매기고 ATS 키워드까지 분석해 주는 코칭 서비스를 설계하고 구현했습니다.",
    features: [
      "PDF 섹션 나누기 — 정규표현식으로 이력서를 경력, 학력, 스킬 등으로 자동으로 나눕니다",
      "AI 채점 — 섹션마다 1~100점으로 평가하고 문장별 수정안을 알려줍니다",
      "키워드 분석 — 이력서에 쓴 키워드를 보여주고 빠진 키워드를 제안합니다",
      "상태 관리 분리 — 화면 상태는 Zustand, AI 응답은 React Query가 맡도록 나눴습니다",
      "응답 캐싱 — 같은 이력서를 다시 분석하면 저장된 결과를 바로 보여줍니다",
      "문구 수정안 — '이 문장은 이렇게 바꾸세요'처럼 구체적인 수정안을 알려줍니다",
    ],
    tech: ["TypeScript", "React", "Vite", "Zustand", "React Query", "Puter.js", "Tailwind CSS"],
    role: "개인 프로젝트 (Full-stack)",
    team: null,
    stackCategories: ["React", "TypeScript", "AI"],
    problem: [
      "이력서를 여러 번 고쳐도 어디가 부족한지 스스로 판단하기 어려웠습니다",
      "ATS 기준으로 핵심 키워드가 빠졌는지 확인할 방법이 없었습니다",
      "어떤 문장을 어떻게 바꿔야 하는지 알려주는 도구가 없었습니다",
    ],
    solution: [
      "PDF를 올리면 정규표현식으로 섹션을 자동으로 나누도록 구현했습니다",
      "Puter.js AI가 섹션별로 1~100점을 매기고 문장별 수정안을 만들어 줍니다",
      "이력서 키워드를 보여주고, 업계에서 많이 쓰는 키워드 중 빠진 것을 제안합니다",
    ],
    architecture: [
      { name: "PDF 업로드", desc: "텍스트 추출" },
      { name: "섹션 분리", desc: "정규표현식으로 나누기" },
      { name: "Puter.js AI", desc: "채점 + 수정안" },
      { name: "Zustand", desc: "화면 상태 관리" },
      { name: "React Query", desc: "AI 응답 캐싱" },
      { name: "키워드 맵", desc: "빠진 키워드 제안" },
    ],
    challenges: [
      {
        problem: "AI 분석 결과, 입력값, 탭 상태가 여러 컴포넌트에 흩어져 props를 3~4단계씩 넘겨야 했고, 같은 이력서를 다시 분석하면 AI를 또 호출했습니다",
        solution: "화면 상태는 Zustand, 서버 데이터는 React Query로 나눠 관리하고 캐싱으로 중복 호출을 없앴습니다. 상태가 어디서 바뀌는지 알기 쉬워져 버그 찾는 시간도 약 50% 줄었습니다",
      },
    ],
    results: [
      "화면 상태와 서버 데이터를 나눠 관리하는 구조를 직접 설계해 적용했습니다",
      "PDF 텍스트 추출, AI 채점, 키워드 분석까지 전체 흐름을 만들었습니다",
      "타입을 먼저 정의하고 개발하는 방식이 이후 프로젝트의 기본 습관이 되었습니다",
    ],
  },
  {
    id: 3,
    title: "Interview Simulator — AI 모의 면접",
    period: "2025.09–2025.11 · 팀 프로젝트",
    description:
      "카메라로 표정을 분석하고 음성을 텍스트로 바꿔서, 면접 연습 결과를 시간순 타임라인으로 보여주는 서비스를 구현했습니다.",
    image: "/images/Mockinterview.png",
    tags: ["React", "TypeScript", "WebRTC", "Recharts", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/eeeunhey/MockInterview",
    overview:
      "카메라로 표정을 분석하고 음성을 텍스트로 바꿔서, 면접 연습 결과를 시간순 타임라인으로 보여주는 서비스를 구현했습니다.",
    features: [
      "AI 질문 생성 — 직무와 경험에 맞는 면접 질문을 그 자리에서 만들어 줍니다",
      "음성 인식 — STT로 답변을 바로 텍스트로 바꿔 기록합니다",
      "표정 분석 — 카메라 영상에서 표정을 읽어 감정과 집중도를 수치로 나타냅니다",
      "동기화 타임라인 — 질문, 답변, 감정을 같은 시간축에 맞춰 보여줍니다",
      "상태 머신 — WebRTC의 비동기 흐름을 단계별로 관리하고, 오류가 나면 이전 단계로 되돌립니다",
      "세션 리포트 — 답변 품질, 감정 변화, 개선할 점을 한 번에 정리해 줍니다",
    ],
    tech: ["React", "TypeScript", "WebRTC", "Recharts", "Node.js", "Express", "MongoDB"],
    role: "Frontend",
    team: "팀 프로젝트",
    stackCategories: ["React", "TypeScript", "Node.js"],
    problem: [
      "면접에서는 답변 내용뿐 아니라 표정과 시선도 평가에 영향을 줍니다",
      "답변과 표정 같은 비언어적 요소를 함께 분석해 주는 연습 도구가 없었습니다",
      "영상, 음성, 감정 데이터가 만들어지는 시점이 서로 달라 하나로 합치기 어려웠습니다",
    ],
    solution: [
      "AI가 면접 질문을 만들고, STT로 답변을 실시간으로 텍스트로 바꾸도록 구현했습니다",
      "WebRTC 카메라로 표정과 집중도를 수치로 분석했습니다",
      "질문, 답변, 감정을 같은 시간축에 맞춰 타임라인으로 보여줬습니다",
    ],
    architecture: [
      { name: "WebRTC", desc: "카메라·마이크 스트림" },
      { name: "표정 분석", desc: "감정·집중도 수치화" },
      { name: "STT 엔진", desc: "실시간 텍스트 변환" },
      { name: "상태 머신", desc: "단계별 관리·되돌리기" },
      { name: "MongoDB", desc: "세션 데이터 저장" },
      { name: "타임라인", desc: "시간순 시각화" },
    ],
    challenges: [
      {
        problem: "표정 데이터는 0.5초마다, STT 결과는 문장이 끝날 때 만들어져서 타임라인에서 표정과 답변이 서로 맞지 않았습니다",
        solution: "모든 이벤트에 ms 단위 타임스탬프를 붙여 시간순으로 정렬하고, 상태 머신으로 비동기 흐름을 한곳에서 관리했습니다",
      },
    ],
    results: [
      "WebRTC, 표정 분석, STT, 시각화로 이어지는 실시간 흐름을 직접 구현했습니다",
      "타임스탬프를 기준으로 서로 다른 시점의 데이터를 맞추는 방법을 배웠습니다",
      "API 명세를 먼저 문서로 정리하면 프론트와 백엔드 연동이 훨씬 수월하다는 것을 느꼈습니다",
    ],
  },
  {
    id: 6,
    title: "BalanceEat — AI 식단 관리",
    period: "2025.10–2025.11 · 팀 프로젝트",
    description:
      "먹은 음식의 영양소를 자동으로 분석하고, 부족한 영양소에 맞춰 AI가 식단을 추천하는 서비스를 구현했습니다.",
    image: "/images/BalanceEat.png",
    tags: ["React", "TypeScript", "Gemini AI", "Nutrition API", "Figma"],
    demoUrl: "#",
    githubUrl: "https://github.com/eeeunhey/balanceeat",
    overview:
      "음식 섭취를 기록하고 AI가 식단을 분석해서, 균형 잡힌 식단을 관리할 수 있게 도와주는 웹 서비스입니다.",
    features: [
      "영양 정보 자동 검색 — 음식 이름만 입력하면 Nutrition API에서 영양 정보를 가져옵니다",
      "AI 식단 추천 — 최근 3일 섭취량을 분석해 부족한 영양소를 채울 식단을 제안합니다",
      "달성률 차트 — 칼로리, 단백질, 탄수화물, 지방의 목표 달성률을 도넛 차트로 보여줍니다",
      "날짜별 기록 — 캘린더에서 날짜를 고르면 그날의 식단과 영양 요약을 볼 수 있습니다",
      "타입 안정성 — API 응답 구조를 TypeScript interface로 미리 정의해 오류를 줄였습니다",
      "브라우저 저장 — Local Storage를 사용해 서버 없이도 데이터가 남도록 했습니다",
    ],
    tech: ["React", "TypeScript", "Gemini AI", "Nutrition API", "Local Storage", "Figma"],
    role: "PO / Frontend",
    team: "4인 팀 프로젝트",
    stackCategories: ["React", "TypeScript", "AI"],
    problem: [
      "기존 식단 앱은 음식을 일일이 직접 입력해야 해서 사용자가 번거로웠습니다",
      "영양을 분석해도 맞춤 추천까지는 이어지지 않았습니다",
      "어떤 영양소가 부족한지 사용자가 직접 판단하기 어려웠습니다",
    ],
    solution: [
      "음식 이름을 입력하면 Nutrition API로 영양 정보를 자동으로 가져오도록 연동했습니다",
      "최근 3일 섭취 데이터를 Gemini AI에 보내 부족한 영양소를 채우는 식단을 추천받도록 했습니다",
      "영양소별 달성률을 도넛 차트로 바로바로 보여주도록 만들었습니다",
    ],
    architecture: [
      { name: "음식 검색", desc: "이름 + 섭취량 입력" },
      { name: "React + TS", desc: "타입 정의 + 입력 확인" },
      { name: "Nutrition API", desc: "영양소 자동 조회" },
      { name: "Local Storage", desc: "브라우저에 저장" },
      { name: "Gemini AI", desc: "부족 영양소 분석" },
      { name: "차트 출력", desc: "달성률 시각화" },
    ],
    challenges: [
      {
        problem: "Nutrition API 응답이 음식마다 필드가 달라 값이 빠지는 경우가 있었고, 값이 없으면 차트에서 undefined 에러가 났습니다. 데이터가 바뀔 때마다 도넛 차트 4개가 전부 다시 그려져 화면이 버벅였습니다",
        solution: "값이 없으면 0으로 채우는 함수를 만들고 TypeScript interface로 영양소 타입을 정의해 컴파일 단계에서 오류를 잡았습니다. React.memo와 useMemo로 바뀐 영양소만 다시 그리게 했습니다",
      },
    ],
    results: [
      "강의에서 배운 내용을 실제 서비스로 완성해 본 첫 팀 프로젝트이며, React 프로젝트 우수상을 받았습니다",
      "PO로서 Figma 와이어프레임을 먼저 그리고 팀원들과 방향을 맞추는 과정을 이끌었습니다",
      "TypeScript로 타입을 먼저 정의하는 습관이 생겼고, 이후 프로젝트에도 기본으로 적용하고 있습니다",
    ],
  },
  {
    id: 9,
    title: "ResumeProject — AI 이력서 진단",
    period: "개인 프로젝트",
    description:
      "React 19와 React Router 7 환경에서 구축하고 Docker로 컨테이너화하여 Vercel에 배포한 AI 이력서 진단 웹 애플리케이션입니다.",
    image: "/images/resumeBuild.png",
    tags: ["React 19", "React Router 7", "TypeScript", "Docker", "Vercel"],
    demoUrl: "https://resume-project-steel.vercel.app/",
    githubUrl: "https://github.com/eeeunhey",
    overview:
      "React 19와 React Router 7을 기반으로 최신 웹 표준 라우팅을 구성하고, Dockerfile 작성 후 Vercel에 배포한 AI 이력서 진단 웹 애플리케이션입니다.",
    features: [
      "React Router 7 라우팅 — 최신 라우터 구조를 적용해 유연한 페이지 전환과 데이터 로딩을 구현했습니다",
      "React 19 환경 — 최신 React 기능을 바탕으로 안정적인 컴포넌트 렌더링 환경을 구축했습니다",
      "도커 배포 환경 — Dockerfile을 작성하여 일관된 빌드 환경을 구성하고 Vercel에 배포했습니다",
    ],
    tech: ["React 19", "React Router 7", "TypeScript", "Docker", "Vercel"],
    role: "개인 프로젝트",
    team: null,
    stackCategories: ["React", "TypeScript"],
    problem: [
      "최신 React 19와 React Router 7 도입 시 새로운 라우팅 규칙과 빌드 설정을 안정적으로 맞출 필요가 있었습니다",
    ],
    solution: [
      "React Router 7 최신 구조에 맞춰 라우팅을 체계적으로 구성하고, Dockerfile을 작성하여 배포 환경을 표준화했습니다",
    ],
    architecture: [
      { name: "사용자 화면", desc: "React 19 + TypeScript" },
      { name: "라우팅 계층", desc: "React Router 7" },
      { name: "빌드 & 컨테이너", desc: "Dockerfile 환경 구성" },
      { name: "클라우드 서빙", desc: "Vercel 자동 배포" },
    ],
    challenges: [
      {
        problem: "최신 메이저 버전 업데이트로 인한 기존 라우팅 및 빌드 환경 호환성 문제",
        solution: "공식 마이그레이션 가이드를 준수하여 새로운 라우터 모듈 방식으로 깔끔하게 정리했습니다",
      },
    ],
    results: [
      "React 19와 React Router 7의 최신 생태계를 빠르게 익혀 실전 프로젝트에 적용했습니다",
      "Dockerfile을 작성하고 Vercel 배포 파이프라인을 구축하는 경험을 쌓았습니다",
    ],
  },
  {
    id: 2,
    title: "ResumeBuilder — 이력서 작성 지원",
    period: "2025.10–2025.11 · 개인 프로젝트",
    description:
      "섹션별 입력 가이드와 실시간 미리보기로 이력서를 더 쉽게 쓸 수 있게 만든 이력서 빌더 웹앱입니다.",
    image: "/images/resumeBuild.png",
    tags: ["React", "TypeScript", "Vite", "State Management"],
    demoUrl: "#",
    githubUrl: "https://github.com/eeeunhey/ResumeBuilder",
    overview:
      "구직자가 항목별 가이드를 보며 이력서를 쓰고, 오른쪽에서 완성된 모습을 바로 확인할 수 있는 이력서 빌더 웹앱입니다.",
    features: [
      "항목별 입력 폼 — 경력, 학력, 스킬, 프로젝트마다 전용 입력 양식을 만들었습니다",
      "실시간 미리보기 — 입력하는 즉시 오른쪽 패널에 이력서 모양으로 반영됩니다",
      "항목 추가·삭제 — 섹션을 자유롭게 추가하거나 지울 수 있고, 고유 키를 줘서 입력값이 사라지지 않게 했습니다",
      "작성 가이드 — 입력칸을 누르면 무엇을 쓰면 좋을지 안내해 줍니다",
      "렌더링 최적화 — 메모이제이션으로 불필요한 다시 그리기를 막았습니다",
      "입력값 유지 — 다른 페이지로 이동해도 쓰던 내용이 남아 있습니다",
    ],
    tech: ["TypeScript", "React", "Vite", "State Management"],
    role: "개인 프로젝트",
    team: null,
    stackCategories: ["React", "TypeScript"],
    problem: [
      "빈 화면에서 이력서를 쓰려면 막막했고, 줄 맞춤과 서식을 정리하는 데 시간이 많이 들었습니다",
      "입력한 내용이 어떻게 보일지 바로 확인할 수 없었습니다",
      "항목마다 무엇을 어떻게 써야 하는지 안내해 주는 도구가 없었습니다",
    ],
    solution: [
      "경력, 학력, 스킬, 프로젝트마다 전용 입력 폼과 작성 가이드를 제공했습니다",
      "오른쪽 패널에서 실시간으로 미리볼 수 있도록 만들었습니다",
      "섹션을 자유롭게 추가하고 삭제할 수 있게 했습니다",
    ],
    architecture: [
      { name: "사용자 입력", desc: "섹션별 전용 폼" },
      { name: "입력 확인", desc: "유효성 검사 + 가이드" },
      { name: "단일 상태 트리", desc: "상위 컴포넌트에서 상태 관리" },
      { name: "메모이제이션", desc: "바뀐 부분만 다시 그리기" },
      { name: "미리보기 패널", desc: "실시간 반영" },
    ],
    challenges: [
      {
        problem: "글자를 입력할 때마다 미리보기 전체가 다시 그려져 타이핑이 버벅였고, 섹션을 추가하거나 지우면 key가 겹쳐 입력값이 사라지는 버그가 있었습니다",
        solution: "React.memo로 미리보기를 감싸고 useMemo로 섹션별 결과를 저장해 두었으며, 항목마다 uuid를 줘서 key가 겹치지 않게 했습니다",
      },
    ],
    results: [
      "여러 섹션의 입력 상태를 하나의 트리로 모아 관리하는 설계를 직접 해 봤습니다",
      "실시간 미리보기가 느려지지 않도록 메모이제이션을 적용했습니다",
      "상태 관리의 한계를 직접 겪은 것이 이후 Ascend에서 Zustand를 쓰게 된 계기가 되었습니다",
    ],
  },
  {
    id: 4,
    title: "Velin — AI Interview Prep",
    period: "2025.08–2025.09 · 개인 프로젝트",
    description:
      "직무와 경력을 입력하면 AI가 맞춤 면접 질문, 예상 답변, 체크리스트를 한 번에 만들어 주는 서비스를 설계하고 구현했습니다.",
    image: "/images/velin-mainpage.png",
    tags: ["React", "TypeScript", "Node.js", "Vercel"],
    demoUrl: "https://ai-interview-prep-3rshahg4n-eunhyes-projects-b3620ae0.vercel.app/",
    githubUrl: "https://github.com/eeeunhey/AI_InterviewPrep",
    overview:
      "실무 관점의 면접 질문과 답변 근거, 체크리스트를 자동으로 만들고 회차별 연습 기록을 비교할 수 있는 면접 준비 웹 서비스입니다.",
    features: [
      "맞춤 프롬프트 — 직무, 포지션, 경력을 조합해 상황에 맞는 프롬프트를 만듭니다",
      "답변 가이드 — 질문마다 어떤 방향으로 답하면 좋은지 핵심 포인트를 함께 알려줍니다",
      "답변 근거 — 답변에 쓸 수 있는 논리적인 근거를 자동으로 만들어 줍니다",
      "면접 체크리스트 — 면접 전에 점검할 항목을 AI가 정리해 줍니다",
      "회차별 비교 — 연습 기록을 저장해 두고 이전 연습과 비교할 수 있습니다",
      "오류 처리 — AI 응답이 늦어지면 타임아웃 안내와 재시도를 할 수 있게 했습니다",
    ],
    tech: ["TypeScript", "React", "Node.js", "Vercel"],
    role: "개인 프로젝트 (Full-stack)",
    team: null,
    stackCategories: ["React", "TypeScript", "Node.js", "AI"],
    problem: [
      "기술 면접 질문은 검색하면 나오지만, 내 직무와 경력에 맞는 질문은 찾기 어려웠습니다",
      "질문에 어떤 방향으로 답해야 하는지 알려주는 도구가 없었습니다",
      "면접 준비 과정을 체계적으로 기록하고 비교할 수 없었습니다",
    ],
    solution: [
      "직무, 포지션, 경력을 입력하면 AI가 맞춤 질문과 답변 방향을 만들어 줍니다",
      "답변에 쓸 근거와 면접 전 체크리스트를 함께 만들도록 설계했습니다",
      "회차별 기록을 저장해 이전 연습과 비교할 수 있게 했습니다",
    ],
    architecture: [
      { name: "직무 입력", desc: "포지션·경력 선택" },
      { name: "React", desc: "입력 확인 + 요청" },
      { name: "Node.js", desc: "프롬프트 조합" },
      { name: "프롬프트 엔진", desc: "조건별 템플릿 조합" },
      { name: "AI 응답", desc: "JSON으로 파싱" },
      { name: "세션 저장", desc: "회차별 비교" },
    ],
    challenges: [
      {
        problem: "AI 응답이 올 때까지 3~5초 동안 화면에 아무 표시가 없어 사용자가 고장난 줄 알고 새로고침을 누르곤 했습니다. 또 프롬프트 하나로 모든 직무를 처리해 질문 품질이 들쭉날쭉했습니다",
        solution: "'질문을 만들고 있습니다...' 문구와 진행 애니메이션을 넣고, 5초가 넘으면 타임아웃 안내와 재시도 버튼을 보여줍니다. 직무와 경력 수준별로 프롬프트를 다르게 조합해 질문 품질의 편차를 줄였습니다",
      },
    ],
    results: [
      "프론트엔드와 백엔드를 혼자 설계하고 구현한 첫 풀스택 프로젝트입니다",
      "조건에 따라 프롬프트를 조합하는 템플릿 엔진을 직접 만들었습니다",
      "Vercel로 배포하면서 환경 변수 관리와 CI/CD를 경험했습니다",
    ],
  },
  {
    id: 5,
    title: "ALBAIT — 구인·구직 플랫폼",
    period: "2025.04–2025.05 · 개인 프로젝트",
    description:
      "Java와 Oracle DB로 회원, 공고, 지원 CRUD를 콘솔에서 구현하고, DAO/DTO 패턴으로 계층을 나눈 프로젝트입니다.",
    image: "/images/ALBA-mainpage.png",
    tags: ["Java", "Oracle DB", "JDBC", "SQL"],
    demoUrl: "https://github.com/eeeunhey/ALBAIT",
    githubUrl: "https://github.com/eeeunhey/ALBAIT",
    overview:
      "Java와 Oracle DB로 구인·구직 서비스의 핵심 기능(회원, 공고, 지원 CRUD와 관리자 통계)을 콘솔 환경에서 구현한 학습 프로젝트입니다.",
    features: [
      "회원 CRUD — 구직자와 사업장의 가입, 로그인, 정보 수정, 탈퇴를 모두 구현했습니다",
      "공고 관리 — 채용 공고를 등록, 수정, 삭제하고 조건별로 검색할 수 있습니다",
      "지원 관리 — 지원을 받은 뒤 대기, 합격, 불합격 상태로 바꿀 수 있습니다",
      "관리자 통계 — 인기 공고 Top 5와 지역·직종별 통계를 보여줍니다",
      "DAO/DTO 패턴 — 데이터 접근 코드와 비즈니스 로직을 분리했습니다",
      "SQL 인젝션 방지 — 모든 파라미터를 PreparedStatement로 바인딩했습니다",
    ],
    tech: ["Java", "Oracle DB", "JDBC", "SQL"],
    role: "개인 프로젝트",
    team: null,
    stackCategories: ["Java"],
    problem: [
      "실제 서비스와 비슷한 주제로 CRUD 전체 과정을 직접 구현해 보고 싶었습니다",
      "서비스 로직과 DB 접근 코드가 섞이면 유지보수가 어려워집니다",
      "복잡한 집계 쿼리를 직접 작성하고 개선해 보는 경험이 필요했습니다",
    ],
    solution: [
      "회원, 공고, 지원처럼 테이블 사이의 관계가 많은 구인·구직 도메인을 골랐습니다",
      "DAO/DTO 패턴으로 서비스 로직과 데이터 접근 계층을 나눴습니다",
      "GROUP BY와 JOIN을 함께 써서 관리자 통계 기능을 만들었습니다",
    ],
    architecture: [
      { name: "콘솔 UI", desc: "메뉴 기반 입력" },
      { name: "서비스 계층", desc: "비즈니스 로직" },
      { name: "DTO", desc: "데이터 전달 객체" },
      { name: "DAO", desc: "CRUD + 통계 쿼리" },
      { name: "JDBC", desc: "파라미터 바인딩" },
      { name: "Oracle DB", desc: "관계형 DB 저장" },
    ],
    challenges: [
      {
        problem: "한 파일에 메뉴, SQL, 결과 처리를 모두 넣어 코드가 500줄이 넘었고, 공고를 고치면 회원 코드까지 영향을 받았습니다. 사용자 입력을 SQL에 그대로 붙이는 부분은 SQL 인젝션 위험도 있었습니다",
        solution: "DAO, DTO, Service 계층으로 나눠 수정 범위를 줄이고, PreparedStatement로 파라미터를 바인딩해 인젝션 위험을 없앴습니다",
      },
    ],
    results: [
      "DAO/DTO 패턴을 처음 적용해 봤고, 이후 모든 프로젝트에서 계층을 나누는 기본 원칙이 되었습니다",
      "Oracle DB의 시퀀스, 외래키, 제약 조건을 써서 관계형 DB를 설계해 봤습니다",
      "GROUP BY, 서브쿼리, JOIN을 활용해 복잡한 집계 쿼리를 작성하고 개선했습니다",
    ],
  },
];

// 탭 목록: 모든 주요 기술스택 카테고리
export const ALL_TABS = ["All", "AI", "Python", "Next.js", "React", "TypeScript", "JavaScript", "Node.js", "Java"];
