import React from "react";
import { motion } from "framer-motion";
import { Home, BookOpenText } from "lucide-react";
import { Link } from "react-router-dom";

const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{children}</span>
);

const Section = ({ title, children }) => (
  <section className="mx-auto max-w-4xl px-6 py-8">
    <h2 className="text-2xl font-semibold md:text-3xl"><GradientText>{title}</GradientText></h2>
    <div className="mt-4 space-y-4 text-white/80 text-sm md:text-base">{children}</div>
  </section>
);

export default function CaseStudyDetail1() {
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
          <motion.h2 className="max-w-4xl text-3xl font-bold md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Demand Forecasting Transformation for a Global <GradientText>FMCG</GradientText>
          </motion.h2>
          <motion.p className="mt-3 max-w-2xl text-white/70" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }}>
            Building a centralized, accurate, and scalable forecasting framework across regions.
          </motion.p>
        </div>
      </section>

      <Section title="Understanding the Landscape">
        <p>
          The client, a global FMCG major operating across Asia, Africa, and Latin America, was dealing with rising market complexity and evolving consumer demand patterns. With operations spanning multiple regions, the company struggled to anticipate demand accurately, leading to inefficiencies in inventory management, stockouts in high-demand markets, and overstocking in slower ones. To maintain competitiveness and agility, the client needed a robust, data-driven forecasting framework capable of adapting to diverse market conditions.
        </p>
      </Section>

      <Section title="The Challenge">
        <p>The organization faced several demand planning and forecasting challenges:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Forecasting relied on basic spreadsheets and manual inputs, resulting in low accuracy and limited scalability.</li>
          <li>Existing models failed to capture seasonality, regional variations, and external demand drivers.</li>
          <li>Lack of a unified forecasting framework created inconsistencies across business units, causing misalignment between supply chain, sales, and production teams.</li>
          <li>Inaccurate projections led to working capital lock-ups and missed revenue opportunities.</li>
        </ul>
        <p>
          These issues made it urgent for the client to adopt a modern forecasting approach that could bring consistency, accuracy, and transparency across geographies.
        </p>
      </Section>

      <Section title="Our Approach">
        <p>
          Our team collaborated with the client to design and implement a centralized demand forecasting framework leveraging advanced statistical and machine learning models.
        </p>
        <p className="font-semibold text-white">Key steps included:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Assessment of Current Practices:</span> Conducted workshops across regions to identify existing forecasting gaps and pain points.</li>
          <li><span className="font-medium">Model Selection & Customization:</span> Evaluated and implemented suitable forecasting techniques such as ARIMA, SARIMA, Prophet, and Delphi, aligning model selection to business needs (e.g., seasonality, data availability, market maturity).</li>
          <li><span className="font-medium">Hybrid Framework Design:</span> Developed a layered model combining quantitative methods (time series, ML) with qualitative insights (Delphi method, market expertise).</li>
          <li><span className="font-medium">Automation & Tool Deployment:</span> Migrated from Excel to an integrated platform offering real-time forecasting dashboards and scenario planning.</li>
          <li><span className="font-medium">Capability Building:</span> Delivered hands-on training to demand planners, enabling adoption and continuous refinement of models.</li>
        </ul>
        <p>
          This structured approach ensured forecasts were not only accurate but also actionable across supply chain, finance, and sales functions.
        </p>
      </Section>

      <Section title="Outcomes That Matter">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Improved Accuracy:</span> Forecast accuracy increased by 20–25%, reducing both stockouts and excess inventory.</li>
          <li><span className="font-medium">Optimized Working Capital:</span> Better demand visibility released significant cash tied up in slow-moving inventory.</li>
          <li><span className="font-medium">Faster Decision-Making:</span> Real-time dashboards enabled leadership to respond quickly to demand fluctuations.</li>
          <li><span className="font-medium">Standardized Framework:</span> Unified forecasting practices across regions, ensuring consistency and scalability.</li>
          <li><span className="font-medium">Cross-Functional Alignment:</span> Improved collaboration between supply chain, sales, and production teams.</li>
        </ul>
        <p>
          The client’s leadership recognized this initiative as a strategic enabler that not only strengthened operational efficiency but also enhanced resilience against market volatility.
        </p>
      </Section>

      <Section title="Explore What’s Possible">
        <p>
          If your organization struggles with fragmented forecasting practices or low prediction accuracy, adopting a modern demand forecasting framework could unlock significant value. Partner with us to design and implement a tailored forecasting model that improves agility, optimizes resources, and drives sustainable growth.
        </p>
      </Section>
    </div>
  );
}


