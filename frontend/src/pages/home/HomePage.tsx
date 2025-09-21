import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, Globe, Users, FileText } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

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
          {/* Legal Complexity Problem Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Legal Complexity Problem
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Legal documents are filled with complex jargon that leaves people vulnerable to unfair terms and hidden risks.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-6 text-center dark:bg-gray-800">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">80%</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">of People</div>
              <p className="text-gray-600 dark:text-gray-400">Don't fully understand the contracts they sign, leading to costly mistakes and legal disputes.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center dark:bg-gray-800">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">60%</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Higher Risk</div>
              <p className="text-gray-600 dark:text-gray-400">Of unfavorable terms when people don't seek legal advice due to cost and complexity barriers.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center dark:bg-gray-800">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">Hours</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Wasted</div>
              <p className="text-gray-600 dark:text-gray-400">Trying to decode legal language that could be explained in simple terms with the right tools.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center dark:bg-gray-800">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">4.8/5</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">User Rating</div>
              <p className="text-gray-600 dark:text-gray-400">Satisfaction rate from users who have simplified their legal documents with our platform.</p>
            </div>
          </div>
          
          {/* Powerful AI Features Section */}
          <div className="text-center mb-16 mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our advanced AI breaks down complex legal documents into clear, actionable insights.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition dark:bg-gray-800 dark:hover:shadow-slate-800/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Document Summarization</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Get clause-by-clause breakdowns in plain English</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Our AI analyzes every section of your document and explains what each clause means in simple terms.</p>
              <button className="text-purple-600 font-medium hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition">
                Learn More →
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition dark:bg-gray-800 dark:hover:shadow-slate-800/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Risk Assessment</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Color-coded risk scoring for every clause</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Instantly identify high-risk clauses with our traffic light system: green (safe), yellow (caution), red (high risk).</p>
              <button className="text-purple-600 font-medium hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition">
                Learn More →
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition dark:bg-gray-800 dark:hover:shadow-slate-800/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Legal Assistant</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Ask questions about your document</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Chat with our AI to get specific answers about clauses, terms, and potential implications.</p>
              <button className="text-purple-600 font-medium hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition">
                Learn More →
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition dark:bg-gray-800 dark:hover:shadow-slate-800/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Document Validation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Verify compliance with Indian laws</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Check if your documents comply with PAN, Aadhaar, and other regulatory requirements.</p>
              <button className="text-purple-600 font-medium hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition">
                Learn More →
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition dark:bg-gray-800 dark:hover:shadow-slate-800/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Multilingual Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Available in multiple Indian languages</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Get explanations in Hindi, English, and other regional languages for better understanding.</p>
              <button className="text-purple-600 font-medium hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition">
                Learn More →
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition dark:bg-gray-800 dark:hover:shadow-slate-800/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Legal Precedents</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Access relevant case laws and guides</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Find similar cases and legal precedents to understand how courts have ruled on similar matters.</p>
              <button className="text-purple-600 font-medium hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition">
                Learn More →
              </button>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="bg-gray-50 rounded-xl p-8 text-center dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Proven Results</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">80%</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Faster Analysis</div>
                <p className="text-gray-600 dark:text-gray-400">Reduce document review time from hours to minutes</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">60%</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Risk Reduction</div>
                <p className="text-gray-600 dark:text-gray-400">Identify and avoid unfavorable terms before signing</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">95%</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Accuracy Rate</div>
                <p className="text-gray-600 dark:text-gray-400">AI-powered analysis with human-level precision</p>
              </div>
            </div>
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
