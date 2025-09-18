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

export default function CaseStudyDetail4() {
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
            Mitigating Risk with <GradientText>Classification</GradientText> and <GradientText>Anomaly Detection</GradientText>
          </motion.h2>
          <motion.p className="mt-3 max-w-3xl text-white/70" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }}>
            Building scalable ML frameworks to identify anomalies and classify patterns in real time for a multinational financial services client.
          </motion.p>
        </div>
      </section>

      <Section title="Market Setting">
        <p>
          In today’s data-driven economy, organizations face growing risks in the form of fraud, system failures, and irregular customer behavior. Detecting these anomalies early can safeguard revenue, improve compliance, and enhance customer trust. At the same time, classification models enable businesses to segment, predict, and respond with precision. For a multinational financial services client, the challenge was clear: build scalable ML-driven frameworks to identify anomalies and classify patterns in real time.
        </p>
      </Section>

      <Section title="Core Pain Points">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Fraud Detection Gaps:</span> Traditional rule-based systems failed to capture complex fraud patterns, leading to financial losses.</li>
          <li><span className="font-medium">Operational Inefficiencies:</span> High false positives in anomaly detection created unnecessary investigations and wasted resources.</li>
          <li><span className="font-medium">Data Complexity:</span> Large, unstructured datasets made it difficult to classify behaviors accurately.</li>
          <li><span className="font-medium">Delayed Insights:</span> Manual monitoring slowed down response times, impacting customer experience and risk mitigation.</li>
          <li><span className="font-medium">Scalability Issues:</span> Legacy systems were not equipped to handle growing transaction volumes.</li>
        </ul>
      </Section>

      <Section title="Analytics-Driven Approach">
        <p>
          We designed and deployed a hybrid classification and anomaly detection framework combining statistical, machine learning, and deep learning methods.
        </p>
        <p className="font-semibold text-white">Key initiatives included:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Supervised Classification Models:</span> Implemented logistic regression, decision trees, and random forests to classify normal vs. high-risk transactions.</li>
          <li><span className="font-medium">Unsupervised Anomaly Detection:</span> Used clustering and isolation forests to identify unusual patterns without labeled data.</li>
          <li><span className="font-medium">Real-Time Detection Pipeline:</span> Deployed models into production with streaming data capabilities for instant alerts.</li>
          <li><span className="font-medium">Model Optimization:</span> Balanced sensitivity and specificity to reduce false positives while ensuring high-risk cases were flagged.</li>
          <li><span className="font-medium">Visualization & Dashboards:</span> Built monitoring dashboards to track anomalies, fraud cases, and classification outcomes across business units.</li>
        </ul>
      </Section>

      <Section title="Value Delivered">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Fraud Reduction:</span> Early anomaly detection reduced fraudulent transactions by 30% within the first year.</li>
          <li><span className="font-medium">Operational Efficiency:</span> False positives decreased by 40%, cutting down wasted investigation hours.</li>
          <li><span className="font-medium">Customer Trust:</span> Faster resolution and proactive detection improved customer confidence and retention.</li>
          <li><span className="font-medium">Scalability:</span> Models successfully scaled to process millions of daily transactions without performance loss.</li>
          <li><span className="font-medium">Cross-Industry Potential:</span> Framework applicable to finance, retail, cybersecurity, and manufacturing quality control.</li>
        </ul>
      </Section>

      <Section title="Imagine the Possibilities">
        <p>
          Classification and anomaly detection unlock the ability to spot hidden risks and opportunities within vast datasets. Whether it’s fraud prevention in banking, defect detection in manufacturing, or customer behavior segmentation in retail, ML-driven solutions deliver speed, accuracy, and resilience. Partner with us to harness advanced analytics for a safer, smarter, and more agile future.
        </p>
      </Section>
      <CaseStudyFooterNav current={4} />
    </div>
  );
}


