import React, { useState, useRef } from 'react';
import { BookOpen, Scale, HelpCircle, FileText, Search, Download, ExternalLink } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Refs for each section
  const legalGuidesRef = useRef<HTMLDivElement>(null);
  const caseLawsRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);

  // Legal Guides Data
  const legalGuides = [
    {
      category: "Employment",
      title: "Understanding Employment Contracts",
      description: "Complete guide to job offer terms, benefits, and clauses",
      readTime: "15 min read",
      icon: BookOpen
    },
    {
      category: "Property",
      title: "Rental Agreement Essentials",
      description: "What to look for in rental contracts and lease agreements",
      readTime: "12 min read",
      icon: BookOpen
    },
    {
      category: "Finance",
      title: "Loan Agreement Decoded",
      description: "Understanding interest rates, fees, and repayment terms",
      readTime: "18 min read",
      icon: BookOpen
    },
    {
      category: "Business",
      title: "Partnership Agreement Guide",
      description: "Key clauses for business partnerships and joint ventures",
      readTime: "20 min read",
      icon: BookOpen
    },
    {
      category: "Compliance",
      title: "Government Procedures",
      description: "Step-by-step guide for common government procedures",
      readTime: "25 min read",
      icon: BookOpen
    },
    {
      category: "Consumer",
      title: "Consumer Rights & Protection",
      description: "Know your rights in service agreements and purchases",
      readTime: "14 min read",
      icon: BookOpen
    }
  ];

  // Case Laws Data
  const caseLaws = [
    {
      court: "Supreme Court",
      title: "Employment Contract Termination",
      description: "Landmark ruling on unfair termination clauses in employment contracts",
      caseName: "ABC Corp vs. Employee Union (2023)",
      summary: "Court ruled that termination clauses must provide reasonable notice periods and cannot be one-sided in favor of employers."
    },
    {
      court: "High Court",
      title: "Rental Agreement Disputes",
      description: "Important precedent on security deposit and maintenance responsibilities",
      caseName: "Landlord vs. Tenant Rights (2023)",
      summary: "Established guidelines for fair security deposit amounts and maintenance responsibility allocation in rental agreements."
    }
  ];

  // FAQs Data
  const faqs = [
    {
      question: "Is my data safe with LegalKlarity?",
      answer: "Yes, we use enterprise-grade encryption and never store your documents permanently. All analysis is done securely and your data is deleted after processing."
    },
    {
      question: "How accurate is the AI analysis?",
      answer: "Our AI has a 95% accuracy rate and is trained on thousands of legal documents. However, we always recommend consulting a lawyer for complex legal matters."
    },
    {
      question: "What document formats are supported?",
      answer: "We support PDF, DOC, DOCX, and image formats (JPG, PNG). Our OCR technology can extract text from scanned documents as well."
    },
    {
      question: "Can I use this for legal advice?",
      answer: "LegalKlarity provides analysis and insights, but not legal advice. For legal decisions, always consult with a qualified lawyer."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! You can analyze up to 3 documents for free. No credit card required to get started."
    },
    {
      question: "How long does analysis take?",
      answer: "Most documents are analyzed within 30-60 seconds. Complex documents may take up to 2-3 minutes for complete analysis."
    }
  ];

  const filteredGuides = legalGuides.filter(guide => 
    guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCaseLaws = caseLaws.filter(caseLaw => 
    caseLaw.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    caseLaw.court.toLowerCase().includes(searchQuery.toLowerCase()) ||
    caseLaw.caseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    caseLaw.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Legal Resources & Knowledge Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Access comprehensive legal guides, case laws, and expert insights to enhance your understanding of legal documents and procedures.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg bg-white shadow-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Search legal guides, case laws, or ask a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Legal Guides */}
          <div className="bg-white rounded-xl shadow-sm p-8 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-pink-600 mr-3 dark:text-pink-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Legal Guides</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Step-by-step guides for common legal procedures. Comprehensive guides covering everything from contract basics to government procedure navigation.
            </p>
            <button 
              onClick={() => scrollToSection(legalGuidesRef)}
              className="text-pink-600 font-medium hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300 transition"
            >
              Browse Guides →
            </button>
          </div>
          
          {/* Case Laws & Precedents */}
          <div className="bg-white rounded-xl shadow-sm p-8 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Scale className="h-8 w-8 text-pink-600 mr-3 dark:text-pink-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Case Laws & Precedents</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Searchable database of relevant legal precedents. Access court rulings and legal precedents to understand how similar cases have been decided.
            </p>
            <button 
              onClick={() => scrollToSection(caseLawsRef)}
              className="text-pink-600 font-medium hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300 transition"
            >
              Search Cases →
            </button>
          </div>
          
          {/* FAQs & Support */}
          <div className="bg-white rounded-xl shadow-sm p-8 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <HelpCircle className="h-8 w-8 text-pink-600 mr-3 dark:text-pink-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">FAQs & Support</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Common questions and expert answers. Find answers to frequently asked questions about legal documents and LegalKlarity features.
            </p>
            <button 
              onClick={() => scrollToSection(faqsRef)}
              className="text-pink-600 font-medium hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300 transition"
            >
              View FAQs →
            </button>
          </div>
        </div>

        {/* Legal Guides Section */}
        <div ref={legalGuidesRef} id="legal-guides" className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-pink-600 mr-3 dark:text-pink-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Legal Guides</h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Practical guides to help you navigate common legal situations with confidence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition dark:bg-gray-800 dark:hover:shadow-slate-800/50 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center mr-4 dark:bg-pink-900/30 dark:text-pink-400">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-pink-600 bg-pink-100 rounded-full mb-2 dark:bg-pink-900/30 dark:text-pink-400">
                      {guide.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">{guide.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{guide.readTime}</span>
                  <button className="flex items-center text-pink-600 font-medium hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300 transition">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Laws & Precedents Section */}
        <div ref={caseLawsRef} id="case-laws" className="mb-16">
          <div className="flex items-center mb-8">
            <Scale className="h-8 w-8 text-pink-600 mr-3 dark:text-pink-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Case Laws & Precedents</h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Search through relevant court rulings and legal precedents to understand how similar cases have been decided.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Search case laws by keywords, court, or legal issue...
          </p>
          
          <div className="space-y-6">
            {filteredCaseLaws.map((caseLaw, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center mr-4 dark:bg-pink-900/30 dark:text-pink-400">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-pink-600 bg-pink-100 rounded-full mr-2 mb-2 dark:bg-pink-900/30 dark:text-pink-400">
                        {caseLaw.court}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{caseLaw.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{caseLaw.description}</p>
                    <p className="font-medium text-gray-900 dark:text-white mb-3">{caseLaw.caseName}</p>
                    <p className="text-gray-600 dark:text-gray-400 italic">"{caseLaw.summary}"</p>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="flex items-center text-pink-600 font-medium hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300 transition">
                    Read Full Case
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions Section */}
        <div ref={faqsRef} id="faqs" className="mb-16">
          <div className="flex items-center mb-8">
            <HelpCircle className="h-8 w-8 text-pink-600 mr-3 dark:text-pink-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Find answers to common questions about legal documents and LegalKlarity.
          </p>
          
          <div className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center mb-16 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-pink-400">Still Have Questions?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Our support team is here to help you understand legal documents and make the most of LegalKlarity.
          </p>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition dark:bg-pink-700 dark:hover:bg-pink-600">
            Contact Support
          </button>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Try LegalKlarity</h2>
          <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
            Experience the power of AI-driven legal analysis and protect your interests with confidence.
          </p>
          <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;