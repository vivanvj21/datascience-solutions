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

export default function CaseStudyDetail6() {
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
            Scaling Innovation with <GradientText>Generative AI</GradientText> and <GradientText>LLMs</GradientText>
          </motion.h2>
          <motion.p className="mt-3 max-w-3xl text-white/70" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }}>
            Secure, enterprise-grade deployment to boost productivity, content creation, and customer engagement.
          </motion.p>
        </div>
      </section>

      <Section title="Market Landscape">
        <p>
          Generative AI and Large Language Models (LLMs) are redefining the way businesses innovate and operate. For a global professional services client, the challenge was to harness these rapidly evolving technologies to improve productivity, accelerate content generation, and enhance customer engagement—without compromising security, accuracy, or brand integrity.
        </p>
      </Section>

      <Section title="Core Challenges">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Content Bottlenecks:</span> Marketing, sales, and support teams spent significant time manually creating reports, proposals, and campaign content.</li>
          <li><span className="font-medium">Knowledge Management Gaps:</span> Vast internal knowledge bases were underutilized due to poor searchability and lack of structured insights.</li>
          <li><span className="font-medium">Customer Experience Limitations:</span> Existing chatbots lacked contextual understanding, leading to low customer satisfaction.</li>
          <li><span className="font-medium">Scalability Concerns:</span> Deploying generative AI at scale raised questions around cost, governance, and model accuracy.</li>
          <li><span className="font-medium">Risk of Hallucination:</span> Ensuring factual accuracy and compliance in AI-generated responses was critical for adoption.</li>
        </ul>
      </Section>

      <Section title="Solution Approach">
        <p>
          We partnered with the client to deploy a secure, enterprise-grade generative AI framework powered by LLMs.
        </p>
        <p className="font-semibold text-white">Key initiatives included:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">AI-Powered Content Generation:</span> Automated the creation of marketing collateral, research summaries, and client reports with human-in-the-loop review.</li>
          <li><span className="font-medium">Enterprise Knowledge Assistant:</span> Developed a domain-specific LLM fine-tuned on the client’s proprietary data for contextual, accurate responses.</li>
          <li><span className="font-medium">Conversational AI:</span> Built advanced chatbots capable of handling multi-turn, context-rich conversations to improve customer engagement.</li>
          <li><span className="font-medium">Governance & Risk Mitigation:</span> Established guardrails including prompt engineering, fact-checking pipelines, and ethical usage policies.</li>
          <li><span className="font-medium">Scalable Cloud Deployment:</span> Leveraged APIs and containerized deployment to ensure scalability across regions and business units.</li>
        </ul>
      </Section>

      <Section title="Business Impact">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Productivity Gains:</span> Reduced content creation time by 50–60%, freeing employees for higher-value work.</li>
          <li><span className="font-medium">Faster Decision-Making:</span> AI assistants delivered instant, accurate insights from unstructured knowledge bases.</li>
          <li><span className="font-medium">Enhanced Customer Experience:</span> Chatbots improved first-contact resolution rates by 35%, boosting satisfaction scores.</li>
          <li><span className="font-medium">Cost Savings:</span> Automated workflows reduced dependency on external vendors for content creation and support.</li>
          <li><span className="font-medium">Future-Ready Capability:</span> The client established an AI Center of Excellence to drive continuous innovation.</li>
        </ul>
      </Section>

      <Section title="Imagine the Possibilities">
        <p>
          Generative AI and LLMs are no longer experimental—they’re strategic tools for transforming the way businesses operate. From automating complex workflows to enabling hyper-personalized customer engagement, these technologies unlock innovation at scale. Partner with us to responsibly adopt generative AI and unlock its full potential for your enterprise.
        </p>
      </Section>
      <CaseStudyFooterNav current={6} />
    </div>
  );
}


