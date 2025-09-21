import React from 'react';
import { FileText, Shield, MessageCircle, CheckCircle, Globe, Zap } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Keeping the existing heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Legal Intelligence Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how our advanced AI technology transforms complex legal documents into clear, actionable insights that anyone can understand.
          </p>
        </div>

        {/* Document Analysis Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <FileText className="h-10 w-10 text-green-600 dark:text-green-400 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Document Analysis</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Clause-by-Clause Breakdown</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our AI reads through your entire document and breaks down every clause, section, and term into plain English explanations that anyone can understand.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0 dark:text-green-400" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Smart Summarization</h4>
                    <p className="text-gray-600 dark:text-gray-400">Get concise summaries of lengthy legal sections</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0 dark:text-green-400" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Key Terms Highlighted</h4>
                    <p className="text-gray-600 dark:text-gray-400">Important clauses are automatically highlighted for quick review</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0 dark:text-green-400" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Instant Processing</h4>
                    <p className="text-gray-600 dark:text-gray-400">Get results in seconds, not hours</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Try Document Analysis
              </button>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-xl p-6 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Employment Contract Analysis</h4>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg dark:bg-gray-700">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">Clause 3.1 - Salary Terms</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">Standard salary structure with clear payment terms</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg dark:bg-gray-700">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Clause 5.2 - Termination Notice</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠</span>
                      <span className="text-gray-700 dark:text-gray-300">90-day notice period is longer than industry standard</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg dark:bg-gray-700">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Clause 7.1 - Non-Compete</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠</span>
                      <span className="text-gray-700 dark:text-gray-300">Broad non-compete clause may limit future opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Assessment Dashboard */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Shield className="h-10 w-10 text-green-600 dark:text-green-400 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Risk Assessment Dashboard</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Live Analysis</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Payment Terms</div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="font-medium text-gray-900 dark:text-white">Low Risk</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Liability Clauses</div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="font-medium text-gray-900 dark:text-white">Medium Risk</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Termination Rights</div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span className="font-medium text-gray-900 dark:text-white">High Risk</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">Overall Risk Score</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium dark:bg-yellow-900/30 dark:text-yellow-400">Medium</span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mt-6 mb-6">
                Color-coded risk scoring for quick identification of potential issues. Identify high-risk clauses at a glance with our intuitive scoring system that highlights areas requiring attention.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Low Risk (Green)</h4>
                    <p className="text-gray-600 dark:text-gray-400">Standard terms that are generally favorable</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Medium Risk (Yellow)</h4>
                    <p className="text-gray-600 dark:text-gray-400">Terms that require careful consideration</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-red-500 mt-1 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">High Risk (Red)</h4>
                    <p className="text-gray-600 dark:text-gray-400">Potentially unfavorable terms that need attention</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Try Risk Assessment
              </button>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center dark:bg-gray-700 dark:border-gray-600">
                <span className="text-gray-500 dark:text-gray-400">Risk Assessment Dashboard Visualization</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <MessageCircle className="h-10 w-10 text-green-600 dark:text-green-400 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">AI Assistant</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Ask Questions About Your Document</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Chat with our AI to get specific answers about clauses, terms, and potential implications. It's like having a legal expert available 24/7.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0 dark:text-green-400" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Natural Language Queries</h4>
                    <p className="text-gray-600 dark:text-gray-400">Ask questions in plain English</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0 dark:text-green-400" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Instant Responses</h4>
                    <p className="text-gray-600 dark:text-gray-400">Get immediate answers with relevant context</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0 dark:text-green-400" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Document Context</h4>
                    <p className="text-gray-600 dark:text-gray-400">AI understands your specific document</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Try AI Assistant
              </button>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-xl p-6 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AI Legal Assistant</h4>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg dark:bg-gray-700">
                    <div className="font-medium text-gray-900 dark:text-white mb-2">User:</div>
                    <p className="text-gray-700 dark:text-gray-300">What does the termination clause mean?</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg dark:bg-green-900/20">
                    <div className="font-medium text-green-700 dark:text-green-400 mb-2">AI Assistant:</div>
                    <p className="text-gray-700 dark:text-gray-300">
                      The termination clause (Section 8.2) allows either party to end the contract with 30 days written notice. 
                      However, the employer can terminate immediately for cause, while you must provide the full notice period.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Powerful Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">More Powerful Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Additional tools to ensure you have complete legal clarity and protection.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition dark:bg-gray-800 dark:hover:shadow-slate-800/50 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-6 dark:bg-green-900/30 dark:text-green-400">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Document Validation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Verify compliance with Indian laws and regulations</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>PAN and Aadhaar compliance checks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Regulatory requirement validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Legal format verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Missing clause identification</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition dark:bg-gray-800 dark:hover:shadow-slate-800/50 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-6 dark:bg-green-900/30 dark:text-green-400">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Multilingual Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Available in multiple Indian languages</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Hindi and English support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Regional language options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Cultural context awareness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Localized legal terminology</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition dark:bg-gray-800 dark:hover:shadow-slate-800/50 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-6 dark:bg-green-900/30 dark:text-green-400">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Legal Precedents</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Access relevant case laws and legal guides</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Similar case law references</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Court ruling insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Legal precedent database</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Expert commentary access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-green-400">Experience the Power of AI Legal Analysis</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of users who trust LegalKlarity to decode complex legal language and protect their interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Start Free Trial
            </button>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;