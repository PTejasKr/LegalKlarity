import React from 'react';
import { Brain, Shield, FileText, CheckCircle, Globe, Zap } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Summarization",
      description: "Clause-level breakdown of complex legal documents with clear explanations.",
      details: "Our AI analyzes every clause in your documents and provides plain-language summaries so you understand exactly what you're agreeing to."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Color-coded risk scoring for quick identification of potential issues.",
      details: "Identify high-risk clauses at a glance with our intuitive scoring system that highlights areas requiring attention."
    },
    {
      icon: Brain,
      title: "AI Legal Assistant",
      description: "Interactive chatbot for answering your legal questions in real-time.",
      details: "Get instant answers to your legal questions with our AI-powered assistant that can explain complex terms and provide guidance."
    },
    {
      icon: CheckCircle,
      title: "Document Validation",
      description: "PAN, Aadhaar, and other compliance checks for Indian legal documents.",
      details: "Ensure your documents meet all regulatory requirements with our automated validation tools."
    },
    {
      icon: Globe,
      title: "Precedents & Guides",
      description: "Searchable repository of legal precedents and step-by-step guides.",
      details: "Access a comprehensive database of case laws and practical guides to help you navigate legal processes."
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Analyze documents in seconds with our optimized AI engine.",
      details: "Get comprehensive legal insights in real-time with our high-performance processing capabilities."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Legal Intelligence Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform combines cutting-edge AI with legal expertise to deliver unprecedented value in understanding and managing legal documents.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition dark:bg-gray-800 dark:hover:shadow-slate-800/50 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-6 dark:bg-green-900/30 dark:text-green-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">{feature.details}</p>
                <button className="mt-4 text-green-600 font-medium hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition">
                  Try Now →
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-green-400">Ready to Transform Your Legal Workflow?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of legal professionals who have already revolutionized their practice with LegalKlarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Get Started Free
            </button>
            <button 
              onClick={() => window.location.href = '/pricing'}
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;