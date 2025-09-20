import React from 'react';
import { Brain, Shield, FileText, CheckCircle, Globe, Zap, Search, BarChart } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: FileText,
      title: "Document Analysis",
      description: "AI-powered clause-by-clause analysis of legal documents with risk scoring.",
      features: [
        "Clause-level breakdown with plain language explanations",
        "Color-coded risk assessment for quick identification",
        "Custom recommendations based on your role (student, citizen, business)"
      ]
    },
    {
      icon: Shield,
      title: "Risk Scoring",
      description: "Comprehensive risk evaluation with detailed mitigation strategies.",
      features: [
        "Instant risk scoring for all document types",
        "Detailed risk category breakdown (financial, legal, compliance)",
        "Actionable mitigation recommendations"
      ]
    },
    {
      icon: Brain,
      title: "AI Legal Assistant",
      description: "Interactive chatbot for real-time legal guidance and question answering.",
      features: [
        "24/7 availability for instant legal questions",
        "Context-aware responses based on uploaded documents",
        "Citation of relevant laws and precedents"
      ]
    },
    {
      icon: CheckCircle,
      title: "Validation & Compliance",
      description: "Automated compliance checking for Indian legal frameworks.",
      features: [
        "PAN, Aadhaar, and other document validation",
        "Multi-jurisdiction compliance checking",
        "Regulatory requirement verification"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Legal Intelligence Solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive tools designed to demystify legal documents and empower informed decision-making.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition dark:bg-slate-800 dark:hover:shadow-slate-800/50 border border-gray-200 dark:border-slate-700"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 dark:bg-indigo-900/30 dark:text-indigo-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{solution.title}</h3>
                <p className="text-gray-600 dark:text-slate-400 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0 dark:text-green-400" />
                      <span className="text-gray-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Additional Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-4 dark:bg-indigo-900/30 dark:text-indigo-400">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Multi-jurisdiction Support</h3>
              <p className="text-gray-600 dark:text-slate-400">Analysis across different legal frameworks and jurisdictions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-4 dark:bg-indigo-900/30 dark:text-indigo-400">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast Processing</h3>
              <p className="text-gray-600 dark:text-slate-400">Analyze complex documents in seconds with our optimized AI engine.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-4 dark:bg-indigo-900/30 dark:text-indigo-400">
                <BarChart className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Insights Dashboard</h3>
              <p className="text-gray-600 dark:text-slate-400">Track your legal health and identify patterns across documents.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white dark:from-indigo-700 dark:to-purple-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience Legal Clarity Today</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Join thousands of users who have transformed their approach to legal documents with AI-powered insights.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;