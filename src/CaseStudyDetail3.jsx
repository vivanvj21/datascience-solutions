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

export default function CaseStudyDetail3() {
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
            Maximizing ROI with <GradientText>Data-Driven Pricing & Promotion Analytics</GradientText>
          </motion.h2>
          <motion.p className="mt-3 max-w-2xl text-white/70" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }}>
            Optimizing price, promotion mix, and ROI with advanced analytics.
          </motion.p>
        </div>
      </section>

      <Section title="Strategic Context">
        <p>
          The client, a consumer goods leader operating in competitive markets, sought to optimize its pricing and promotional strategies. While discounting and promotional campaigns were driving volume growth, margin pressures and inconsistent ROI raised concerns for leadership. The need was clear: adopt advanced analytics to balance revenue growth, profitability, and customer loyalty.
        </p>
      </Section>

      <Section title="Key Business Challenges">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Margin Erosion:</span> Frequent discounting boosted sales volume but reduced profitability by eroding margins.</li>
          <li><span className="font-medium">Limited Visibility on ROI:</span> The absence of advanced analytics made it difficult to attribute sales growth to specific promotions.</li>
          <li><span className="font-medium">Inefficient Promotion Mix:</span> Budget allocation across campaigns lacked data-driven precision, resulting in suboptimal returns.</li>
          <li><span className="font-medium">Forecasting Gaps:</span> Existing models struggled to accurately forecast sales, leading to inventory mismatches and lost opportunities.</li>
          <li><span className="font-medium">Data Quality Issues:</span> Fragmented data across sales, promotions, and media channels hindered holistic insights.</li>
        </ul>
      </Section>

      <Section title="Our Approach">
        <p>
          We partnered with the client to implement a data-driven pricing and promotion analytics framework, designed to maximize ROI and enable agile market responses.
        </p>
        <p className="font-semibold text-white">Key interventions included:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Price Elasticity Modeling:</span> Quantified consumer response to price changes, identifying optimal price points.</li>
          <li><span className="font-medium">Market Mix Modeling (MMM):</span> Applied regression techniques to isolate and measure the impact of promotions, advertising, and discounts on sales outcomes.</li>
          <li><span className="font-medium">Promotion Scenario Planning:</span> Designed multiple promotion mix scenarios, simulating sales, profit, and ROI for each, and selecting the optimal mix.</li>
          <li><span className="font-medium">Cross-Channel Integration:</span> Consolidated pricing, media, and sales data into a unified view to enable comprehensive decision-making.</li>
          <li><span className="font-medium">Capability Building:</span> Equipped commercial teams with tools and training to embed analytics into daily pricing and promotion decisions.</li>
        </ul>
      </Section>

      <Section title="Tangible Impact">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Revenue Growth:</span> Pricing optimization delivered a 3–5% uplift in revenue.</li>
          <li><span className="font-medium">Sales Uplift:</span> Targeted promotions generated a 35% increase in sales volume in key categories.</li>
          <li><span className="font-medium">Margin Gains:</span> Coordinated strategies improved profit margins by 2–4 percentage points.</li>
          <li><span className="font-medium">Forecast Accuracy:</span> MMM-driven insights improved sales forecasting, enhancing supply chain planning and reducing stockouts.</li>
          <li><span className="font-medium">Agile Market Response:</span> Leadership gained the ability to pivot quickly with real-time visibility into promotion ROI.</li>
        </ul>
      </Section>

      <Section title="Driving the Future of Growth">
        <p>
          Data-driven pricing and promotion analytics have proven to be a strategic lever for growth, balancing volume and profitability while improving customer loyalty. By embedding advanced analytics into core processes, organizations can sustain long-term competitive advantage, optimize spend, and fuel innovation in pricing strategy.
        </p>
        <p>
          <span className="font-medium">Keep title:</span> Maximizing ROI with Data-Driven Pricing & Promotion Analytics
        </p>
      </Section>
      <CaseStudyFooterNav current={3} />
    </div>
  );
}


