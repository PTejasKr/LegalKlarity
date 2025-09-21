import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, Globe, Users, FileText } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced legal intelligence that understands context and provides actionable recommendations."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Enterprise-grade security with end-to-end encryption for all your legal documents."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process complex legal documents in seconds with our optimized AI processing engine."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Compliance with international legal frameworks and jurisdiction-specific regulations."
    },
    {
      icon: Users,
      title: "Collaborative Workspace",
      description: "Work together with colleagues and clients in real-time with role-based access."
    },
    {
      icon: FileText,
      title: "Smart Templates",
      description: "Generate customized legal documents with AI-powered clause recommendations."
    }
  ];

  const stats = [
    { value: "10M+", label: "Documents Processed" },
    { value: "99.9%", label: "Uptime" },
    { value: "50+", label: "Legal Experts" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Demystifying Legal Documents with <span className="text-purple-600 dark:text-purple-500">AI</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Transform how you interact with legal documents. Our AI-powered platform makes complex legal language accessible, actionable, and collaborative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/dashboard")}
                className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition shadow-lg flex items-center justify-center"
              >
                Upload a Document Now <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => navigate("/demo")}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg border border-purple-200 hover:bg-purple-50 transition flex items-center justify-center dark:bg-gray-800 dark:text-purple-400 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Revolutionary Legal Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with legal expertise to deliver unprecedented value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition dark:bg-gray-800 dark:hover:shadow-slate-800/50">
                <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-6 dark:bg-purple-900/30 dark:text-purple-400">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-purple-400">
            Ready to Transform Your Legal Workflow?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Join thousands of legal professionals who have already revolutionized their practice with LegalKlarity.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition shadow-lg text-lg"
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
