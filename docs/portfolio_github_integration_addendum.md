# 포트폴리오 GitHub 분석 기반 추가·보완안

> 작성: 2026-10-21  
> 문서 성격: `resume_portfolio_master_plan_v03.md`에 **추가할 제안서**. 기존 PDF 프로젝트, 원문, 중복 기록을 삭제·병합하지 않는다.  
> 주의: GitHub README의 주장, 코드 확인 사항, 사용자 작성 초안, 목표 설계는 서로 다른 근거 수준이다. 최종 이력서·포트폴리오에는 구현·검증된 내용만 확정형 문장으로 옮긴다.

## 1. 권장 포트폴리오 목차

| 섹션 | 목적 | 구성 |
|---|---|---|
| 01. Cover & Summary | 무엇을 하는지 간결하게 소개 | 프로젝트 2개 대표 링크, 기술 관심 분야, 연락 링크. 검증되지 않은 '신뢰성 확보' 등 단정적 역량 표현 자제 |
| 02. Technical Focus | 기술 나열 대신 실제 사용 맥락 제시 | AI/LLM, 데이터 흐름, 웹·백엔드, 자동화. **프로젝트 링크와 연결한 기술만** 명시 |
| 03. Case Study — QUOKIT | 서비스 파이프라인과 AI Agent 확장 설계 | 현행 플랫폼 데이터 흐름 → 개선 요구 → 목표 LangGraph 구성 → 검증/시연 자료 |
| 04. Case Study — Culture Fit Agent | 협업 구조 및 LangGraph 구현 경험 | 지원자/기업 파트, 개인 기여, 상태·도구·스키마, 테스트, 한계 |
| 05. Applied Automation Tools | 현업형 문제 해결을 보여줌 | PPT Translator를 주요 사례로, ExcelAuto를 학습·프로토타입 사례로 |
| 06. Other Development Projects | 기존 프로젝트 이력 **보존** | ResumeProject 추가 + PDF 기반 7개 프로젝트를 각각 별도 항목으로 유지 |
| 07. Engineering Notes & Evidence | 기술적 주장 근거 확보 | 설계·대안·코드 링크·테스트·재현·배포 및 학습 기록 |

> `Engineering Mindset` 같은 추상 제목보다 실제 선택과 재현 가능한 근거를 모아 둔 `Engineering Notes & Evidence`가 더 구체적이다. 필요 시 별도 메뉴 대신 각 상세 프로젝트에 흡수한다.

## 2. 근거 상태 정의

- **[GitHub 코드 확인]**: 공개된 특정 파일 내용/설정에서 직접 확인한 것. 전체 서비스 동작 검증을 뜻하지는 않음.
- **[GitHub README 설명]**: 프로젝트 작성자가 README에 설명한 기능·성과. 테스트나 실측을 별도로 확인한 것은 아님.
- **[기존 PDF 기록]**: 기존 제출 자료에 기재된 설명. 유지하되 필요 시 코드와 대조.
- **[사용자 초안]**: 본 대화의 새 구조 제안 또는 본인 설명. 정확한 구현 범위 확인 필요.
- **[가정 완료 설계]**: 미래 확장을 모두 마친 상태를 가정해 설계한 포트폴리오 서술 계획. 현 구현 사실로 단정하지 않음.
- **[확인 필요]**: 기술 적용, 기여, 수치, 배포·테스트가 부족한 내용.

## 3. 대표 프로젝트 01 — QUOKIT

- 저장소: https://github.com/eeeunhey/quokit-platform
- 서비스 주소(저장소 기재): https://quokit-kr.vercel.app/
- **[GitHub README 설명]**: GitHub Trending 수집, 한국어 README 번역 fallback, Upstash Redis 및 Supabase 캐시/조회, Cheerio 스크래핑, Vercel Cron, 토픽 기반 유사 프로젝트 추천.
- **[가정 완료 설계]**: Python / LangChain / LangGraph 기반 Research–Verification–Report Agent, 상태 분기, 소스 근거 확인, 재탐색 루프, Next.js와의 연결, 필요한 경우 RAG.
- 최종 포트폴리오 구성 추천:
  1. 실제 사용자의 문제: 영어 README 탐색, 기술 정보 파악의 번거로움.
  2. 현행 데이터 흐름: GitHub 수집 → 번역 → 캐시/DB → Next.js UI.
  3. 확장 필요성: 요약을 넘어 기술 조사 및 원문 검증이 필요한 지점.
  4. 목표 Agent 설계: Graph State, Node, Tool, Retry 분기, 근거 데이터 흐름.
  5. 기능별 코드 링크와 재현 테스트를 연결한 뒤 구현 상태 확정.
- **주의**: LangGraph, pgvector RAG, SHA-256 캐시 키, 'LLM 비용 0원', '정확도 향상'은 별도 코드·측정 없이 사실 문장으로 넣지 않는다. 단순 자체 confidence 0.8 기준이 곧 환각 검증을 의미하지 않는다.

## 4. 대표 프로젝트 02 — 조직 적합도 및 조기 퇴사 위험 분석 AI Agent

- 저장소: https://github.com/eeeunhey/culture-fit-agent
- 사용자 확인 프로젝트 상태: **완성**. 단, 개별 기능 구현 확인과 구분한다.
- **[GitHub README 설명]**: 기업(Company)·지원자(Applicant) 파트의 독립 실험 후 공통 `src` 패키지로 통합하는 협업 구조, `uv sync`, 노트북 구분.
- **[GitHub 코드 확인]**: `langgraph.json`은 `./src/workflows/graph.py:graph`를 참조한다. 확인 시점(2026-10-21) 공개 `main`의 `graph.py`는 0바이트이므로 그래프 통합 실행 코드는 이 경로에서 확인되지 않았다.
- **[추가 확인]**: 그래프가 존재하는 다른 브랜치/로컬 경로, 본인 작성 노드, Pydantic 스키마, 평가 축과 점수 범위, 재검색 분기, 실제 테스트 실행 결과.
- 추천 상세 페이지:
  1. 해결하려는 문제와 평가 지표의 한계.
  2. Company / Applicant 분리 이유와 팀 협업 구조.
  3. 본인 지원자 파트의 기능·코드 경로·테스트.
  4. 기업·지원자 데이터 비교 및 점수 산출 방식.
  5. 평가 근거의 부족/충돌 및 비결정적 LLM 출력 처리.
  6. 실제 결과·예외·미해결 문제.
- **표현 주의**: '객관적 매칭 점수' 및 '조기 퇴사 예측'은 실제 예측 타당성을 입증한 것처럼 보일 수 있다. 검증 데이터가 없으면 '정의한 기준에 따른 적합도 지표' 및 '잠재 위험 요인 분석'으로 표현한다.

## 5. Applied Automation Tools — 신규 섹션

### 5.1 PPT Translator — 주요 자동화 사례

- 저장소: https://github.com/eeeunhey/PPT_Translate
- **[GitHub 코드 확인]**: `app.py`, `ppt_handler.py`, `translator.py`, `Dockerfile`, `docker-compose.yml`, 일부 테스트 스크립트가 공개되어 있다.
- **[GitHub README 설명]**: PPTX 내 텍스트 번역, 도형·표 처리, 원본/번역 비교 UI, Docker 실행.
- 추천 요약 문구 초안:
  > PowerPoint 문서의 텍스트를 자동 추출·번역하고 원본 슬라이드 구조에 맞춰 교체하는 Python/Flask 도구. 표와 그룹 도형의 텍스트를 처리하며, 번역 결과를 원본과 비교할 수 있도록 화면을 구성함.
- 핵심 기술적 설명 후보:
  - `python-pptx`를 이용한 일반 텍스트·표 셀·그룹 도형의 텍스트 순회.
  - 텍스트 조각(`run`) 단위 교체와 PPTX 재생성.
  - 번역 결과 길이에 따른 줄바꿈·글꼴 크기 조정.
  - Flask API 및 Docker 배포 구성.
- **수정 필수**: '원본 서식 100% 보존'은 삭제 또는 범위 제한. 현재 코드에서는 일부 글꼴/크기 조정을 수행함. 완벽한 서식 보존률을 실측하지 않았다면 숫자 사용 금지.
- 자료 확보: 원본 PPTX / 번역 PPTX 시연 화면, 도형·표 복합 사례, 실패한 요소 및 개선 방식, 테스트 데이터.

### 5.2 ExcelAuto — 학습 및 자동화 실험

- 저장소: https://github.com/eeeunhey/ExcelAuto
- **[GitHub README 설명]**: Excel 자동화 학습 기록. `xlwings`, `pandas`, `openpyxl` 노트북, 시트 처리, 데이터 취합, 서식 제어 등 실습.
- 추천 요약 문구 초안:
  > Python을 사용한 Excel 파일 처리와 반복 작업 자동화 학습. `xlwings`, `pandas`, `openpyxl`로 다중 시트 접근, 데이터 취합, 셀 서식 처리를 실습하고 과정을 노트북으로 기록함.
- **수정 필수**: '대용량 배치 스케줄링 운영', '물류 WMS 무결성 제어를 코드로 추상화'는 공개 저장소에서 확인되지 않음. 이를 독립 운영용 시스템으로 소개하려면 실제 CLI/스크립트, 실데이터 대체 샘플, 테스트 결과를 추가해야 함.
- 권장 위치: `Applied Automation Tools > Learning & Experiments`. 별도 대형 Case Study로 과장하지 않음.

## 6. 기존 PDF 프로젝트 유지 + 새 프론트엔드 프로젝트 추가

### 6.1 새롭게 추가할 프로젝트

- **ResumeProject**: https://github.com/eeeunhey/ResumeProject
- **[GitHub 코드 확인]**: React Router 7 기반 빌드 설정, React 19, TypeScript, Vite, Dockerfile 등 프로젝트 구조가 존재함.
- **[확인 필요]**: Puter.js의 정확한 사용 범위, 실제 제공 기능, SSR 활용 여부, Docker 멀티스테이지 구성 및 이미지 크기 실측.
- 기능이 유사하더라도 `Ascend` 또는 `ResumeBuilder`와 동일 프로젝트로 병합하지 않음. 해당 관계를 사용자에게 확인한 뒤 상호 관련 작업으로 소개할지 결정.

### 6.2 기존 PDF 7개 — 원본 유지

이 파일은 각각 별도 프로젝트로 보존한다. 축약 표현은 포트폴리오 공개 페이지에서만 적용하고, `resume_portfolio_master_plan_v03.md`의 프로젝트별 원문은 그대로 남긴다.

1. Daily Emotion Log
2. BalanceEat
3. Ascend
4. ResumeBuilder
5. Interview Simulator
6. Velin
7. ALBAIT

**BalanceEat 충돌 정리:** 새 초안의 Spring Boot·Java·MariaDB는 현재 공개 `balanceeat` 저장소 및 기존 PDF의 기술 설명과 불일치한다. 기존 PDF에 기재된 React·TypeScript·Gemini AI·Nutrition API·Local Storage를 우선 보존한다. 공개 README는 개인 역할을 PO로, 기존 PDF는 PO/Frontend로 기재하므로 본인 구현 범위를 다시 확인한다. 공개 README에는 'React 프로젝트 우수상'이 기재되어 있으므로 증빙을 확보한 후 Activities/Awards 섹션에 활용 가능하다.

## 7. 문구·디자인 가이드 적용

- 한국어 설명: https://github.com/toss/technical-writing
- 첫 디자인 생성: https://github.com/anthropics/skills/tree/main/skills/frontend-design
- UI 코드 품질: https://github.com/vercel-labs/web-interface-guidelines
- AI식 템플릿 징후 점검용 커뮤니티 도구: https://github.com/funboy322/avoid-ai-design

**AI 에이전트 작업 지침:** 참고 레포에서 실제 지침을 읽고, 내용과 구조를 먼저 확정한다. 미확인 프로젝트 성과나 추상적인 홍보 문구를 디자인 채우기용으로 만들지 않는다. 카드·그라데이션·아이콘은 기능과 정보 표현 목적이 있을 때만 사용한다. 사용자가 구조를 승인하기 전에 HTML을 생성하지 않는다.

## 8. 최종 확인이 필요한 핵심 정보

| 질문 | 필요 이유 |
|---|---|
| Culture Fit Agent 완성본 그래프는 어느 브랜치/폴더에 있나요? | 공개 `main`의 `src/workflows/graph.py`가 비어 있어 전체 실행 근거 확인 불가 |
| `ResumeProject`는 `Ascend`의 후속 버전인가요, 별개 프로젝트인가요? | 기능이 유사하지만 프로젝트 기록은 보존해야 함 |
| BalanceEat에서 직접 구현한 Frontend 작업은 무엇인가요? | README의 PO와 기존 PDF의 PO/Frontend 범위 차이 해소 |
| PPT Translator에 서식/번역 정확도 테스트 자료가 있나요? | 100% 보존처럼 검증되지 않은 정량 표현을 피하기 위함 |

## 9. 직접 확인한 GitHub 증거 링크

- QUOKIT README: https://github.com/eeeunhey/quokit-platform#readme
- Culture Fit README: https://github.com/eeeunhey/culture-fit-agent#readme
- Culture Fit Graph 설정: https://github.com/eeeunhey/culture-fit-agent/blob/main/langgraph.json
- Culture Fit Graph 파일: https://github.com/eeeunhey/culture-fit-agent/blob/main/src/workflows/graph.py
- Culture Fit 의존성: https://github.com/eeeunhey/culture-fit-agent/blob/main/pyproject.toml
- PPT Translator 텍스트 처리: https://github.com/eeeunhey/PPT_Translate/blob/main/ppt_handler.py
- ResumeProject 의존성: https://github.com/eeeunhey/ResumeProject/blob/main/package.json
- BalanceEat README: https://github.com/eeeunhey/balanceeat#readme
- ExcelAuto README: https://github.com/eeeunhey/ExcelAuto#readme
