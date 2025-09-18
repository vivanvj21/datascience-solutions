import React from "react";
import { motion } from "framer-motion";
import { Home, BookOpenText } from "lucide-react";
import { Link } from "react-router-dom";
import CaseStudyFooterNav from "./CaseStudyFooterNav";

const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{children}</span>
);

const Section = ({ title, children }) => (
  <section className="mx-auto max-w-4xl px-6 py-8">
    <h2 className="text-2xl font-semibold md:text-3xl"><GradientText>{title}</GradientText></h2>
    <div className="mt-4 space-y-4 text-white/80 text-sm md:text-base">{children}</div>
  </section>
);

export default function CaseStudyDetail7() {
  return (
    <div className="relative min-h-screen bg-[#0b0b13] text-white">
      <header className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <BookOpenText className="h-5 w-5 text-indigo-400" />
          <h1 className="text-xl font-semibold">Case Study</h1>
        </div>
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl">
          <Home className="h-4 w-4" /> Back to Case Studies
        </Link>
      </header>

      <section className="relative h-[32vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b13] to-[#0f0f1c]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <motion.h2 className="max-w-5xl text-3xl font-bold md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Unlocking Value with <GradientText>Data</GradientText> and <GradientText>Business Insights</GradientText>
          </motion.h2>
          <motion.p className="mt-3 max-w-3xl text-white/70" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }}>
            Centralized data-to-insights framework to power predictive and prescriptive decisions.
          </motion.p>
        </div>
      </section>

      <Section title="Business Context">
        <p>
          The client, a diversified multinational enterprise, generated massive amounts of data across sales, supply chain, finance, and customer touchpoints. However, siloed systems and inconsistent reporting limited leadership’s ability to derive timely insights. The organization wanted to transition from descriptive reporting to predictive and prescriptive insights that could directly inform strategic decisions and drive business growth.
        </p>
      </Section>

      <Section title="Key Challenges">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Data Silos:</span> Multiple business units maintained fragmented datasets with no unified view.</li>
          <li><span className="font-medium">Limited Real-Time Insights:</span> Reports were backward-looking, delaying decision-making.</li>
          <li><span className="font-medium">Inconsistent Metrics:</span> Lack of standardized KPIs created confusion and misalignment across regions.</li>
          <li><span className="font-medium">Manual Reporting Overhead:</span> Analysts spent excessive time on data preparation instead of driving insights.</li>
          <li><span className="font-medium">Missed Opportunities:</span> Without predictive models, the company struggled to anticipate risks and emerging market trends.</li>
        </ul>
      </Section>

      <Section title="Solution Approach">
        <p>
          We partnered with the client to design a centralized data-to-insights framework, focusing on governance, advanced analytics, and decision enablement.
        </p>
        <p className="font-semibold text-white">Key interventions included:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Data Integration Platform:</span> Consolidated disparate data sources into a single enterprise-wide data lake with governance in place.</li>
          <li><span className="font-medium">Standardized KPIs & Dashboards:</span> Created interactive dashboards with consistent metrics accessible to leadership in real time.</li>
          <li><span className="font-medium">Advanced Analytics Models:</span> Applied machine learning for demand forecasting, customer segmentation, and risk assessment.</li>
          <li><span className="font-medium">Self-Service BI Tools:</span> Empowered business teams with intuitive tools to run ad-hoc queries without IT dependency.</li>
          <li><span className="font-medium">Change Management & Training:</span> Conducted workshops to embed a data-driven culture across all levels of the organization.</li>
        </ul>
      </Section>

      <Section title="Measurable Impact">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Faster Decisions:</span> Leadership gained real-time access to performance metrics, reducing decision cycles by 40%.</li>
          <li><span className="font-medium">Revenue Growth:</span> Data-driven sales insights identified cross-sell and up-sell opportunities, contributing to a 5–7% increase in revenue.</li>
          <li><span className="font-medium">Efficiency Gains:</span> Automated reporting saved analysts thousands of hours annually.</li>
          <li><span className="font-medium">Improved Forecasting:</span> Predictive models reduced forecast error rates by 25%, improving planning accuracy.</li>
          <li><span className="font-medium">Cultural Shift:</span> A data-first mindset enabled collaboration between business and technology teams.</li>
        </ul>
      </Section>

      <Section title="Unlock the Future">
        <p>
          Turning raw data into actionable business insights is no longer optional—it’s a competitive necessity. By unifying data, standardizing KPIs, and applying predictive analytics, organizations can unlock hidden value and accelerate growth. Partner with us to build an insights-driven enterprise where every decision is powered by data.
        </p>
      </Section>
      <CaseStudyFooterNav current={7} />
    </div>
  );
}


