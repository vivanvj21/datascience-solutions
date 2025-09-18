import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartupLandingPage from './StartupLandingPage';
import DemandForecastingPage from './DemandForecastingPage';
import PredictiveAnalyticsPage from './PredictiveAnalyticsPage';
import PricingPromotionAnalyticsPage from './PricingPromotionAnalyticsPage';
import ClassificationAnomalyDetectionPage from './ClassificationAnomalyDetectionPage';
import ComputerVisionNLPPage from './ComputerVisionAndNLPPage';
import GenerativeAILLMPage from './GenerativeAILLMPage';
import DataBusinessInsightPage from './DataAndBusinessInsightsPage';
import EcommerceAnalyticsPage from './EcommerceAnalyticsPage';
import CaseStudiesPage from './CaseStudiesPage';
import ContactPage from './ContactPage';
import CaseStudyDetail1 from './CaseStudyDetail1';
import CaseStudyDetail2 from './CaseStudyDetail2';
import CaseStudyDetail3 from './CaseStudyDetail3';
import CaseStudyDetail5 from './CaseStudyDetail5';
import CaseStudyDetail6 from './CaseStudyDetail6';
import CaseStudyDetail4 from './CaseStudyDetail4';
import CaseStudyDetail7 from './CaseStudyDetail7';
import CaseStudyDetail8 from './CaseStudyDetail8';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartupLandingPage />} />
        <Route path="/demand-forecasting" element={<DemandForecastingPage />} />
        <Route path="/predictive-analytics" element={<PredictiveAnalyticsPage />} />
        <Route path="/pricing-promotion-analytics" element={<PricingPromotionAnalyticsPage />} />
        <Route path="/classification-anomaly-detection" element={<ClassificationAnomalyDetectionPage />} />
        <Route path="/computer-vision-nlp" element={<ComputerVisionNLPPage />} />
        <Route path="/generative-ai-llm" element={<GenerativeAILLMPage />} />
        <Route path="/data-business-insights" element={<DataBusinessInsightPage />} />
        <Route path="/ecommerce-analytics" element={<EcommerceAnalyticsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/1" element={<CaseStudyDetail1 />} />
        <Route path="/case-studies/2" element={<CaseStudyDetail2 />} />
        <Route path="/case-studies/3" element={<CaseStudyDetail3 />} />
        <Route path="/case-studies/5" element={<CaseStudyDetail5 />} />
        <Route path="/case-studies/6" element={<CaseStudyDetail6 />} />
        <Route path="/case-studies/7" element={<CaseStudyDetail7 />} />
        <Route path="/case-studies/8" element={<CaseStudyDetail8 />} />
        <Route path="/case-studies/4" element={<CaseStudyDetail4 />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
