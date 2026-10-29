import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { projects, ALL_TABS } from "../data/projects";

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? projects
    : projects.filter((p) => p.stackCategories?.includes(activeTab));

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
          기술스택별로 프로젝트를 탐색해보세요.
        </p>

        {/* ── 탭 필터 ── */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {ALL_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
                activeTab === tab
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground/60 border-border hover:border-primary/40 hover:text-primary"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── 프로젝트 카드 그리드 ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border
                         transition-all duration-300
                         hover:border-primary/30 hover:-translate-y-1.5 hover:shadow-xl
                         flex flex-col"
            >
              {/* 썸네일 */}
              <Link to={`/projects/${project.id}`} className="block h-44 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700
                             group-hover:scale-105"
                />
              </Link>

              {/* 본문 */}
              <div className="p-5 flex flex-col flex-1">
                {/* 기술 태그 */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-full
                                 bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-0.5 text-[11px] font-medium rounded-full
                                     bg-muted text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <Link to={`/projects/${project.id}`} className="block flex-1">
                  <h3 className="text-base font-semibold mb-1
                                 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-xs text-muted-foreground mb-2">{project.period}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* 링크 */}
                <div className="flex items-center gap-3 mt-auto">
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-xs text-primary font-medium hover:underline flex items-center gap-1"
                  >
                    자세히 보기 →
                  </Link>
                  <div className="ml-auto flex gap-2">
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Demo 보기"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub 보기"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 빈 결과 */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground text-sm">
            해당 기술스택으로 진행한 프로젝트가 없습니다.
          </div>
        )}

        <div className="text-center mt-14">
          <a
            className="cosmic-button"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/eeeunhey"
          >
            <Github size={18} />
            Github에서 보기
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
