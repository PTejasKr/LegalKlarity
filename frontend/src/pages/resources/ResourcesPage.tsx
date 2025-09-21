import React from 'react';
import { BookOpen, Scale, HelpCircle, FileText, Search } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Legal Guides",
      description: "Step-by-step guides for government procedures and common legal processes.",
      items: [
        "How to Register a Business in India",
        "Understanding Rental Agreements",
        "Step-by-Step Guide to Filing GST Returns",
        "Navigating Employment Law for Startups"
      ]
    },
    {
      icon: Scale,
      title: "Case Laws & Precedents",
      description: "Searchable database of landmark legal cases and their implications.",
      items: [
        "Landmark Employment Law Cases",
        "Consumer Protection Act Precedents",
        "Contract Dispute Resolution Cases",
        "Intellectual Property Rulings"
      ]
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      description: "Answers to common questions about LegalKlarity and legal documents.",
      items: [
        "Is my data safe with LegalKlarity?",
        "How accurate is the AI analysis?",
        "Can I use LegalKlarity for international documents?",
        "What types of documents can I upload?"
      ]
    }
  ];

  const faqs = [
    {
      question: "Is my data secure?",
      answer: "Yes, we prioritize your privacy with end-to-end encryption and strict data handling policies. All documents are processed securely and are never stored or shared without your consent."
    },
    {
      question: "How accurate is the AI analysis?",
      answer: "Our AI has been trained on thousands of legal documents and reviewed by legal experts. While we strive for 100% accuracy, we always recommend consulting with a qualified attorney for critical legal decisions."
    },
    {
      question: "Can I use LegalKlarity for international documents?",
      answer: "Currently, our platform is optimized for Indian legal documents and frameworks. We're working on expanding to other jurisdictions in future updates."
    },
    {
      question: "What types of documents can I upload?",
      answer: "We support PDF, DOCX, and image files. Our system can process contracts, agreements, legal notices, and other common legal documents."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Legal Resources & Knowledge Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering you with knowledge through comprehensive guides, case studies, and expert insights.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm p-8 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center mb-6 dark:bg-pink-900/30 dark:text-pink-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{resource.description}</p>
                <ul className="space-y-3">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-pink-600 mr-2 dark:text-pink-400">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-8">
            <HelpCircle className="h-8 w-8 text-pink-600 mr-3 dark:text-pink-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-pink-400">Need More Help?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Our legal experts are here to assist you with complex questions and provide personalized guidance.
          </p>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;