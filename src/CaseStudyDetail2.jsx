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

export default function CaseStudyDetail2() {
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
            Impact with <GradientText>Regression</GradientText> and <GradientText>Ensemble</GradientText> Methods
          </motion.h2>
          <motion.p className="mt-3 max-w-2xl text-white/70" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }}>
            A multi-layered ML framework tailored to business needs and scale.
          </motion.p>
        </div>
      </section>

      <Section title="Business Context">
        <p>
          A global consumer-focused enterprise was exploring advanced analytics to improve decision-making. With rapidly evolving market trends and growing data complexity, leadership sought to leverage machine learning models to forecast business outcomes, optimize operations, and gain deeper insights. However, challenges around interpretability, model selection, and scalability slowed down adoption.
        </p>
      </Section>

      <Section title="Key Challenges">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Model Complexity vs Interpretability:</span> Traditional regression models were easy to explain but lacked the predictive power needed for complex datasets. Advanced methods like XGBoost and LightGBM offered accuracy but were harder for business leaders to interpret.</li>
          <li><span className="font-medium">Talent Shortage:</span> A significant skills gap in the organization limited effective deployment and maintenance of ML models.</li>
          <li><span className="font-medium">Scalability Concerns:</span> Existing systems struggled with large datasets, leading to delays and reduced efficiency.</li>
          <li><span className="font-medium">Alignment with Business Needs:</span> Balancing speed, accuracy, and transparency in model outcomes was a persistent issue.</li>
        </ul>
      </Section>

      <Section title="Solution Approach">
        <p>
          Our team designed a multi-layered machine learning framework that balanced accuracy, interpretability, and scalability.
        </p>
        <p className="font-semibold text-white">Key initiatives included:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Regression Models:</span> Deployed for transparent, explainable predictions on straightforward numeric outcomes like sales forecasting.</li>
          <li><span className="font-medium">Decision Trees:</span> Implemented to provide intuitive “if-then” insights, making data-driven logic clear to business stakeholders.</li>
          <li><span className="font-medium">Ensemble Methods (XGBoost, LightGBM):</span> Leveraged for high-performance predictions on large, complex datasets, with regularization to control overfitting.</li>
          <li><span className="font-medium">Model Selection Framework:</span> Developed clear guidelines to match business objectives with the right model type, considering accuracy, interpretability, and operational constraints.</li>
          <li><span className="font-medium">Capability Building:</span> Trained cross-functional teams to maintain and scale models, reducing dependency on external experts.</li>
        </ul>
      </Section>

      <Section title="Value Delivered">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Improved Accuracy:</span> Predictive accuracy improved by up to 30% for complex forecasting use cases.</li>
          <li><span className="font-medium">Faster Decisions:</span> LightGBM implementation reduced training time significantly, enabling near real-time forecasting.</li>
          <li><span className="font-medium">Enhanced Transparency:</span> Decision trees and regression provided clear, interpretable insights for leadership.</li>
          <li><span className="font-medium">Future-Ready Capability:</span> The organization built internal talent pipelines, reducing reliance on external consultants.</li>
          <li><span className="font-medium">Market Leadership:</span> By balancing accuracy with interpretability, the client positioned itself to harness the $225B ML market growth projected by 2030.</li>
        </ul>
      </Section>

      <Section title="Unlocking Potential">
        <p>
          Organizations today face the challenge of choosing between accuracy, speed, and interpretability in machine learning adoption. A tailored approach that blends regression, decision trees, and ensemble methods can deliver both performance and clarity. Partner with us to build scalable, interpretable ML solutions that turn data into lasting competitive advantage.
        </p>
      </Section>
      <CaseStudyFooterNav current={2} />
    </div>
  );
}


