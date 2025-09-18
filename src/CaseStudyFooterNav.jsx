import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronsLeft, ChevronsRight, BookOpenText } from "lucide-react";

export default function CaseStudyFooterNav({ current }) {
  const studies = [
    { id: 1, title: "Demand Forecasting Transformation" },
    { id: 2, title: "Impact with Regression and Ensemble Methods" },
    { id: 3, title: "Maximizing ROI with Data-Driven Pricing & Promotion Analytics" },
    { id: 4, title: "Mitigating Risk with Classification and Anomaly Detection" },
    { id: 5, title: "Transforming Business with Computer Vision and NLP" },
    { id: 6, title: "Scaling Innovation with Generative AI and LLMs" },
    { id: 7, title: "Unlocking Value with Data and Business Insights" },
    { id: 8, title: "Driving Growth with E-Commerce Analytics" },
  ];
  const total = studies.length;
  const prev = current > 1 ? current - 1 : total;
  const next = current < total ? current + 1 : 1;

  const cardCls = "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-transform duration-200 hover:scale-[1.01]";

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-white/80">
            <p className="text-sm">Case Study</p>
            <p className="text-lg font-semibold">{current} of {total}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link to={`/case-studies/1`} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">
              <ChevronsLeft className="h-4 w-4" /> Start
            </Link>
            <Link to={`/case-studies/${prev}`} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">
              <ArrowLeft className="h-4 w-4" /> Previous
            </Link>
            <Link to={`/case-studies/${total}`} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">
              End <ChevronsRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Link to={`/case-studies/${prev}`} className="block h-full" aria-label={`Open Case Study ${prev}: ${studies[prev - 1].title}`}>
            <div className={cardCls}>
              <div className="p-6 flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <BookOpenText className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-lg font-semibold">Previous: Case Study {prev}</h3>
                </div>
                <p className="mt-2 text-white/70">{studies[prev - 1].title}</p>
                <div className="mt-auto inline-flex items-center gap-2 text-sm text-indigo-400">
                  Read more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>

          <Link to={`/case-studies/${next}`} className="block h-full" aria-label={`Open Case Study ${next}: ${studies[next - 1].title}`}>
            <div className={cardCls}>
              <div className="p-6 flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <BookOpenText className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-lg font-semibold">Next: Case Study {next}</h3>
                </div>
                <p className="mt-2 text-white/70">{studies[next - 1].title}</p>
                <div className="mt-auto inline-flex items-center gap-2 text-sm text-indigo-400">
                  Read more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}


