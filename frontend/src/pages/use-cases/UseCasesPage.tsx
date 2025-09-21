import React from 'react';
import { Users, User, Building, FileText, Shield, Zap } from 'lucide-react';

const UseCasesPage: React.FC = () => {
  const useCases = [
    {
      icon: User,
      title: "Students",
      problem: "Students often struggle with understanding job offers, internships agreements, and rental contracts which can lead to unfavorable terms.",
      solution: "LegalKlarity breaks down these documents into simple language, highlighting key terms, risks, and benefits so students can make informed decisions.",
      example: "A student receives a 6-month internship offer with complex IP clauses. LegalKlarity identifies that the company would own all work product, even personal projects created on weekends, and suggests negotiating terms."
    },
    {
      icon: Users,
      title: "Citizens",
      problem: "Citizens face challenges with loan agreements, service contracts, and insurance policies filled with legal jargon that can hide unfavorable terms.",
      solution: "Our platform demystifies these documents, explaining clauses in plain language and identifying potential financial risks or hidden costs.",
      example: "A citizen reviewing a loan agreement discovers through LegalKlarity that the fine print includes a clause allowing the lender to increase interest rates arbitrarily without notice."
    },
    {
      icon: Building,
      title: "Business Owners",
      problem: "Small business owners need to understand vendor contracts, MoA compliance, and partnership agreements but often lack legal expertise.",
      solution: "LegalKlarity provides business-focused analysis of contracts, identifying compliance issues, risk areas, and opportunities for negotiation.",
      example: "A startup founder uses LegalKlarity to review a vendor contract and discovers that the termination clause heavily favors the vendor, with a 6-month notice period and significant penalties."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Use Cases for Every Legal Need
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            LegalKlarity empowers different user groups with tailored legal intelligence to make informed decisions and protect their interests.
          </p>
        </div>

        {/* Use Cases */}
        <div className="space-y-12">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm p-8 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center dark:bg-teal-900/30 dark:text-teal-400">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="md:w-3/4 md:pl-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{useCase.title}</h2>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">Problem</h3>
                      <p className="text-gray-600 dark:text-gray-400">{useCase.problem}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2">How LegalKlarity Helps</h3>
                      <p className="text-gray-600 dark:text-gray-400">{useCase.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">Example Outcome</h3>
                      <p className="text-gray-600 dark:text-gray-400">{useCase.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-teal-400">See How LegalKlarity Can Help You</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Upload your first document and experience the power of AI-driven legal analysis tailored to your needs.
          </p>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
            Upload Document Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseCasesPage;