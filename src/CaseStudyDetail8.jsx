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

export default function CaseStudyDetail8() {
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
            Driving Growth with <GradientText>E-Commerce Analytics</GradientText>
          </motion.h2>
          <motion.p className="mt-3 max-w-3xl text-white/70" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }}>
            End-to-end analytics ecosystem for personalization, forecasting, and conversion optimization.
          </motion.p>
        </div>
      </section>

      <Section title="Market Landscape">
        <p>
          The e-commerce industry is evolving at an unprecedented pace, with customer expectations for personalization, speed, and seamless experiences at an all-time high. A leading online retail client wanted to leverage analytics to improve customer engagement, optimize pricing and promotions, and streamline operations. However, the lack of a robust analytics framework was preventing the business from fully capitalizing on its data.
        </p>
      </Section>

      <Section title="Core Challenges">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Fragmented Customer Insights:</span> Data from multiple touchpoints (web, mobile, social) was not integrated, limiting 360° customer visibility.</li>
          <li><span className="font-medium">Inefficient Campaigns:</span> Marketing promotions lacked personalization, leading to lower conversion rates.</li>
          <li><span className="font-medium">Cart Abandonment:</span> High levels of incomplete transactions reduced revenue potential.</li>
          <li><span className="font-medium">Inventory Mismatches:</span> Poor demand forecasting caused stockouts of popular items and overstock of slow-moving products.</li>
          <li><span className="font-medium">Lack of Predictive Models:</span> The business relied mostly on descriptive reporting, missing forward-looking insights.</li>
        </ul>
      </Section>

      <Section title="Our Approach">
        <p>
          We collaborated with the client to build a comprehensive e-commerce analytics ecosystem that connected customer, sales, and operational data into actionable insights.
        </p>
        <p className="font-semibold text-white">Key initiatives included:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Customer Segmentation:</span> Applied clustering and behavioral analytics to build personas for targeted campaigns.</li>
          <li><span className="font-medium">Personalized Recommendations:</span> Leveraged machine learning algorithms to deliver dynamic product suggestions, increasing relevance.</li>
          <li><span className="font-medium">Conversion Funnel Analysis:</span> Identified drop-off points in the purchase journey and redesigned interventions to reduce abandonment.</li>
          <li><span className="font-medium">Demand Forecasting Models:</span> Implemented time-series and ML-based forecasting to optimize inventory and supply chain decisions.</li>
          <li><span className="font-medium">Marketing ROI Dashboards:</span> Built interactive dashboards to track campaign effectiveness, sales impact, and customer lifetime value.</li>
        </ul>
      </Section>

      <Section title="Measurable Impact">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Revenue Growth:</span> Personalized recommendations increased average order value by 12%.</li>
          <li><span className="font-medium">Customer Engagement:</span> Targeted campaigns improved click-through rates by 18% and conversion rates by 10%.</li>
          <li><span className="font-medium">Reduced Abandonment:</span> Funnel optimization lowered cart abandonment rates by 15%.</li>
          <li><span className="font-medium">Inventory Efficiency:</span> Forecasting accuracy improved by 20%, reducing both stockouts and excess stock.</li>
          <li><span className="font-medium">Data-Driven Culture:</span> Marketing and operations teams adopted analytics-driven decision-making across campaigns and planning.</li>
        </ul>
      </Section>

      <Section title="Imagine the Possibilities">
        <p>
          E-commerce analytics goes beyond tracking transactions—it enables businesses to understand their customers, anticipate demand, and deliver hyper-personalized experiences at scale. By embedding advanced analytics into core operations, organizations can achieve sustainable growth and strengthen customer loyalty. Partner with us to unlock the full potential of your e-commerce data.
        </p>
      </Section>
      <CaseStudyFooterNav current={8} />
    </div>
  );
}


