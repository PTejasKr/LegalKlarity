import React from 'react';
import { User, Users, Building, FileText, Shield, Zap, CheckCircle } from 'lucide-react';

const UseCasesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perfect for Every Legal Need
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you're a student, citizen, or business owner, LegalKlarity helps you understand and navigate legal documents with confidence.
          </p>
        </div>

        {/* For Students Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <User className="h-10 w-10 text-teal-600 dark:text-teal-400 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">For Students</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Navigate Your First Legal Documents</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Starting your career? Understand job offers, internship agreements, and rental contracts before you sign.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Job Offer Analysis
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Understand salary structures, benefits, probation periods, and termination clauses in your employment contract.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Rental Agreements
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Decode security deposits, maintenance responsibilities, and lease termination conditions in rental contracts.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Internship Contracts
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Review stipend terms, work expectations, and intellectual property clauses in internship agreements.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Freelance Agreements
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Understand payment terms, project scope, revision limits, and ownership rights in freelance contracts.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Educational Loan Agreements
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Analyze interest rates, repayment schedules, grace periods, and collateral requirements in education loans.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-teal-50 rounded-xl p-6 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800 mb-6">
                <div className="flex items-start mb-4">
                  <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mr-4">"</div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                      LegalKlarity helped me understand that my job offer had a 6-month notice period, which was unusually long. I negotiated it down to 2 months before signing!
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-3 dark:bg-teal-900/30 dark:text-teal-400">
                        P
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Priya S.</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Computer Science Graduate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-teal-50 rounded-xl p-6 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800">
                <div className="flex items-start mb-4">
                  <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mr-4">"</div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                      I was about to sign my internship agreement when LegalKlarity flagged an IP clause that would have given my company rights to all my future projects, even personal ones. I had them remove that clause before signing!
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-3 dark:bg-teal-900/30 dark:text-teal-400">
                        A
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Amit R.</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Engineering Student</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm mt-6 dark:bg-teal-800/30 border border-gray-200 dark:border-teal-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Student Legal Protection Metrics</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">85%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Better Offers</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">After Negotiation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">₹75K</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Average Savings</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Per Contract</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">4x</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Faster Review</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Than Manual</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For Citizens Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Users className="h-10 w-10 text-teal-600 dark:text-teal-400 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">For Citizens</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Protect Yourself in Daily Transactions</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                From loan agreements to service contracts, ensure you're not signing anything that could harm your interests.
              </p>
              
              <div className="bg-teal-50 rounded-xl p-6 mb-8 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">Risk Prevention</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Average savings: ₹25,000 per contract</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded-lg text-center dark:bg-teal-800/30">
                    <div className="text-2xl font-bold text-green-500">✓</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Hidden Fees Detected</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Avoided</div>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg text-center dark:bg-teal-800/30">
                    <div className="text-2xl font-bold text-yellow-500">!</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">High Interest Rate</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Flagged</div>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg text-center dark:bg-teal-800/30">
                    <div className="text-2xl font-bold text-red-500">⚠</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Unfair Penalty Clause</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">High Risk</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Loan Contracts
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Understand interest rates, processing fees, prepayment penalties, and default consequences in loan agreements.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Service Agreements
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Review terms for insurance policies, telecom services, and subscription contracts before committing.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Property Documents
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Verify property titles, sale deeds, and registration documents for compliance and authenticity.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Insurance Policies
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Decode exclusions, deductibles, claim procedures, and renewal terms in health, life, and general insurance policies.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Utility Connection Agreements
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Understand deposit amounts, connection charges, billing cycles, and disconnection policies for electricity, water, and gas.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-teal-50 rounded-xl p-6 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800 mb-6">
                <div className="flex items-start mb-4">
                  <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mr-4">"</div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                      LegalKlarity flagged a compound interest clause in my personal loan agreement that would have doubled my debt in just 3 years if I defaulted. I switched to a better loan option and saved lakhs!
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-3 dark:bg-teal-900/30 dark:text-teal-400">
                        S
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Sunita M.</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Software Professional</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-teal-50 rounded-xl p-6 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800">
                <div className="flex items-start mb-4">
                  <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mr-4">"</div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                      I almost signed a 5-year gym membership contract with a ₹50,000 penalty for early cancellation. LegalKlarity highlighted this clause and suggested negotiating a monthly payment option instead. I saved ₹45,000!
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-3 dark:bg-teal-900/30 dark:text-teal-400">
                        R
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Rahul T.</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Marketing Manager</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm mt-6 dark:bg-teal-800/30 border border-gray-200 dark:border-teal-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Citizen Legal Protection Dashboard</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-teal-50 p-3 rounded-lg text-center dark:bg-teal-900/20">
                    <div className="text-lg font-bold text-teal-600 dark:text-teal-400">92%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Risk Clauses</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Identified</div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg text-center dark:bg-teal-900/20">
                    <div className="text-lg font-bold text-teal-600 dark:text-teal-400">₹2.1L</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Average Savings</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Per User</div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg text-center dark:bg-teal-900/20">
                    <div className="text-lg font-bold text-teal-600 dark:text-teal-400">3.2x</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Faster</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Decision Making</div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg text-center dark:bg-teal-900/20">
                    <div className="text-lg font-bold text-teal-600 dark:text-teal-400">78%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Better Terms</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Negotiated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For Business Owners Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Building className="h-10 w-10 text-teal-600 dark:text-teal-400 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">For Business Owners</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Secure Your Business Interests</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Ensure vendor contracts, partnership agreements, and compliance documents protect your business and meet regulatory requirements.
              </p>
              
              <div className="bg-teal-50 rounded-xl p-6 mb-8 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">Business Impact</div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg dark:bg-teal-800/30">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">₹2.5L</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Average Savings</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg dark:bg-teal-800/30">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">75%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Faster Review</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Vendor Contracts
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Analyze payment terms, delivery schedules, quality standards, and liability clauses in supplier agreements.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Partnership Agreements
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Review profit sharing, decision-making authority, and exit clauses in business partnership documents.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Compliance Documents
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Ensure MOAs, AOAs, and regulatory filings meet legal requirements and protect your business interests.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Employee Contracts
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Review confidentiality clauses, non-compete terms, termination conditions, and benefit structures in employment agreements.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 dark:text-teal-400" />
                    Lease Agreements
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Understand rent escalation clauses, maintenance responsibilities, and renewal options in commercial property leases.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-teal-50 rounded-xl p-6 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800 mb-6">
                <div className="flex items-start mb-4">
                  <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mr-4">"</div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                      LegalKlarity identified a liability clause that could have cost us lakhs. We renegotiated and saved our business from potential disaster.
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-3 dark:bg-teal-900/30 dark:text-teal-400">
                        R
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Rajesh K.</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Manufacturing Business Owner</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-teal-50 rounded-xl p-6 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800">
                <div className="flex items-start mb-4">
                  <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mr-4">"</div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                      Our startup was about to sign a vendor contract with a 90-day payment term that would have severely impacted our cash flow. LegalKlarity helped us negotiate it down to 30 days, preserving our working capital!
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-3 dark:bg-teal-900/30 dark:text-teal-400">
                        P
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Priya S.</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Tech Startup Founder</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm mt-6 dark:bg-teal-800/30 border border-gray-200 dark:border-teal-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Business Legal Protection Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-teal-50 p-3 rounded-lg text-center dark:bg-teal-900/20">
                    <div className="text-lg font-bold text-teal-600 dark:text-teal-400">₹4.2L</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Average Savings</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Per Contract</div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg text-center dark:bg-teal-900/20">
                    <div className="text-lg font-bold text-teal-600 dark:text-teal-400">82%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Risk Clauses</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Identified</div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg text-center dark:bg-teal-900/20">
                    <div className="text-lg font-bold text-teal-600 dark:text-teal-400">65%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Better Terms</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Negotiated</div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg text-center dark:bg-teal-900/20">
                    <div className="text-lg font-bold text-teal-600 dark:text-teal-400">3.8x</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Faster Review</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Than Manual</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-teal-400">Ready to Protect Your Interests?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of users who trust LegalKlarity to understand their legal documents and make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
              Start Your Free Trial
            </button>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesPage;