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

export default function CaseStudyDetail5() {
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
            Transforming Business with <GradientText>Computer Vision</GradientText> and <GradientText>NLP</GradientText>
          </motion.h2>
          <motion.p className="mt-3 max-w-3xl text-white/70" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }}>
            AI-driven automation and insights from images and text at global retail scale.
          </motion.p>
        </div>
      </section>

      <Section title="Business Context">
        <p>
          The client, a global retail and e-commerce enterprise, was looking to enhance both customer experience and operational efficiency. While massive volumes of product images and customer feedback were being generated daily, existing manual processes for analyzing them were time-consuming, error-prone, and unable to scale. The leadership sought to leverage Computer Vision and Natural Language Processing (NLP) to automate insights, improve personalization, and optimize decision-making.
        </p>
      </Section>

      <Section title="Key Challenges">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Unstructured Data Overload:</span> Large volumes of images, reviews, and text data were not being fully utilized for insights.</li>
          <li><span className="font-medium">Manual Review Bottlenecks:</span> Human-led tagging and content moderation slowed down go-to-market speed.</li>
          <li><span className="font-medium">Inconsistent Quality:</span> Product categorization and sentiment analysis varied by market, causing misaligned decisions.</li>
          <li><span className="font-medium">Limited Personalization:</span> Inability to analyze customer feedback in real time hindered targeted campaigns and product improvements.</li>
          <li><span className="font-medium">Scalability Concerns:</span> Existing systems could not handle multilingual text or high-resolution image datasets effectively.</li>
        </ul>
      </Section>

      <Section title="Solution Approach">
        <p>
          We designed and implemented an AI-driven framework combining Computer Vision and NLP to unlock hidden value in unstructured data.
        </p>
        <p className="font-semibold text-white">Key initiatives included:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Image Recognition with Computer Vision:</span> Automated product tagging, defect detection, and visual search capabilities using convolutional neural networks (CNNs).</li>
          <li><span className="font-medium">Text Analytics with NLP:</span> Deployed sentiment analysis, entity recognition, and topic modeling to extract insights from multilingual customer feedback and reviews.</li>
          <li><span className="font-medium">Chatbots & Virtual Assistants:</span> Integrated NLP-powered conversational AI for improved customer engagement and faster query resolution.</li>
          <li><span className="font-medium">Content Moderation:</span> Automated detection of inappropriate or low-quality content across digital channels.</li>
          <li><span className="font-medium">Integrated Dashboards:</span> Created visualization tools to monitor real-time product quality trends, customer sentiments, and engagement metrics.</li>
        </ul>
      </Section>

      <Section title="Business Impact">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Operational Efficiency:</span> Automated image tagging reduced manual review efforts by 60%, saving significant costs.</li>
          <li><span className="font-medium">Customer Insights:</span> Real-time sentiment analysis improved marketing personalization, driving a 15% increase in campaign effectiveness.</li>
          <li><span className="font-medium">Improved Quality Control:</span> Computer vision models flagged defective products early, reducing returns by 20%.</li>
          <li><span className="font-medium">Enhanced Engagement:</span> AI-powered chatbots handled 70% of customer queries, freeing up support teams for complex issues.</li>
          <li><span className="font-medium">Scalability:</span> Models supported multilingual text analysis and millions of daily images, ensuring global rollouts.</li>
        </ul>
      </Section>

      <Section title="Unlocking the Future">
        <p>
          The convergence of Computer Vision and NLP enables businesses to see and understand like humans—at scale. From automated product classification to understanding customer sentiment across markets, these technologies unlock new levels of efficiency and personalization. Partner with us to design scalable AI solutions that turn unstructured data into actionable intelligence and competitive advantage.
        </p>
      </Section>
      <CaseStudyFooterNav current={5} />
    </div>
  );
}


