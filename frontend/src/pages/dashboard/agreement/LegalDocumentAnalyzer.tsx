import React, { useState, useRef } from "react";
import { Upload, FileText, Loader2, Key, ClipboardList, AlertTriangle, Lightbulb, Users, Gavel, Calendar, FileQuestion, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";
// Remove imports that don't exist

const LegalDocumentAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [dragActive, setDragActive] = useState(false);
  const [activeTab, setActiveTab] = useState("summary");
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Remove useAppSelector since we don't have proper imports

  const handleFiles = (files: FileList) => {
    if (files && files[0]) {
      const selectedFile = files[0];
      const fileType = selectedFile.type;
      const fileSize = selectedFile.size;

      // Validate file type
      if (!fileType.match("application/pdf") && 
          !fileType.match("application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
        console.log("Invalid file type: Please upload a PDF or DOCX file.");
        return;
      }

      // Validate file size (limit to 200MB)
      if (fileSize > 200 * 1024 * 1024) {
        console.log("File too large: Please upload a file smaller than 200MB.");
        return;
      }

      setFile(selectedFile);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    
    try {
      // In a real implementation, you would call your API here
      // For now, let's simulate a response
      setTimeout(() => {
        const mockAnalysis = {
          summary: "This is a sample legal document summary. The document outlines the terms and conditions of an agreement between parties.",
          key_terms: [
            "Term 1: Definition of term 1",
            "Term 2: Definition of term 2",
            "Term 3: Definition of term 3"
          ],
          main_clauses: [
            "Clause 1: Description of clause 1",
            "Clause 2: Description of clause 2",
            "Clause 3: Description of clause 3"
          ],
          risks: [
            "Risk 1: Description of potential risk",
            "Risk 2: Description of another risk"
          ],
          recommendations: [
            "Recommendation 1: Suggested action",
            "Recommendation 2: Another suggested action"
          ],
          parties: [
            "Party 1: Role of party 1",
            "Party 2: Role of party 2"
          ],
          jurisdiction: "Applicable law and jurisdiction",
          obligations: [
            "**Party 1**: Obligation of party 1",
            "**Party 2**: Obligation of party 2"
          ],
          critical_dates: [
            "Date 1: Important deadline",
            "Date 2: Another important date"
          ],
          missing_or_unusual: [
            "Missing clause: Description of missing clause",
            "Unusual clause: Description of unusual clause"
          ],
          compliance_issues: [
            "Compliance issue 1: Description of compliance concern",
            "Compliance issue 2: Another compliance concern"
          ],
          next_steps: [
            "Next step 1: Recommended action",
            "Next step 2: Another recommended action"
          ]
        };
        
        setAnalysis({
          analysis: mockAnalysis,
          filename: file.name,
          timestamp: new Date().toISOString()
        });
        
        console.log("Analysis complete!");
        setIsAnalyzing(false);
      }, 2000);
    } catch (error: any) {
      console.error("Analysis error:", error);
      console.log("Analysis failed: " + (error.message || "Failed to analyze the document. Please try again."));
      setIsAnalyzing(false);
    }
  };

  const removeFile = () => {
    setFile(null);
    setAnalysis(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Helper function to render list items
  const renderListItems = (items: string[] | undefined, icon?: React.ReactNode) => {
    if (!items || items.length === 0) {
      return <p className="text-muted-foreground">No information available.</p>;
    }

    return (
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            {icon && <span className="mt-1 flex-shrink-0">{icon}</span>}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  // Helper function to render key terms
  const renderKeyTerms = (terms: string[] | undefined) => {
    if (!terms || terms.length === 0) {
      return <p className="text-muted-foreground">No key terms defined.</p>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {terms.map((term, index) => {
          // Split the term into key and definition
          const [key, definition] = term.includes(": ") ? term.split(": ") : [term, ""];
          return (
            <Card key={index} className="p-4">
              <h4 className="font-semibold text-primary">{key}</h4>
              <p className="text-sm text-muted-foreground mt-1">{definition}</p>
            </Card>
          );
        })}
      </div>
    );
  };

  // Tab definitions
  const tabs = [
    { id: "summary", label: "Summary", icon: <FileText className="h-4 w-4" /> },
    { id: "key-terms", label: "Key Terms", icon: <Key className="h-4 w-4" /> },
    { id: "main-clauses", label: "Main Clauses", icon: <ClipboardList className="h-4 w-4" /> },
    { id: "risks", label: "Risks", icon: <AlertTriangle className="h-4 w-4" /> },
    { id: "recommendations", label: "Recommendations", icon: <Lightbulb className="h-4 w-4" /> },
    { id: "parties", label: "Parties", icon: <Users className="h-4 w-4" /> },
    { id: "more", label: "More", icon: <Gavel className="h-4 w-4" /> }
  ];

  return (
    <motion.div
      className="min-h-screen max-w-7xl mx-auto p-6 space-y-6 mt-24 dark:bg-slate-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-black flex items-center justify-center gap-2 tracking-tight dark:text-white">
          ⚖️ Legal Document Analyzer
        </h1>
        <p className="text-gray-800 text-lg mt-2 dark:text-slate-300">
          Simplify Complex Legal Documents with AI
        </p>
      </header>

      {!analysis ? (
        <div className="space-y-6">
          {/* File Upload Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5" />
              <h2 className="text-xl font-semibold">📄 Upload Your Legal Document</h2>
            </div>
            <p className="text-gray-500 mb-4 dark:text-slate-400">
              Choose a document to analyze. Supported formats: PDF, DOCX
            </p>
            
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                dragActive 
                  ? "border-blue-500 bg-blue-50 dark:bg-slate-700" 
                  : "border-gray-300 hover:border-blue-500 dark:border-slate-600"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={onButtonClick}
            >
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".pdf,.docx"
                onChange={handleChange}
              />
              
              {file ? (
                <div className="space-y-4">
                  <FileText className="mx-auto h-12 w-12 text-gray-400" />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-gray-500 dark:text-slate-400">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <button 
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:hover:bg-slate-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                    >
                      Remove
                    </button>
                    <button 
                      className={`px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        isAnalyzing ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAnalyze();
                      }}
                      disabled={isAnalyzing}
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
                          Analyzing...
                        </>
                      ) : (
                        "Analyze Document"
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div>
                    <p className="font-medium">Drag and drop file here</p>
                    <p className="text-sm text-gray-500 dark:text-slate-400">
                      Limit 200MB per file • PDF, DOCX
                    </p>
                  </div>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Choose File
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 dark:bg-slate-800 dark:border-slate-700">
            <h2 className="text-xl font-semibold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 dark:bg-slate-700">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold">Upload Document</h3>
                <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">
                  Choose any legal document in PDF or DOCX format
                </p>
              </div>
              <div className="text-center p-4">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 dark:bg-slate-700">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold">AI Analysis</h3>
                <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">
                  Our AI breaks down complex legal jargon
                </p>
              </div>
              <div className="text-center p-4">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 dark:bg-slate-700">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold">Get Insights</h3>
                <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">
                  Understand risks, obligations, and next steps
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Analysis Results */
        <div className="space-y-6">
          {/* Document Summary */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5" />
              <h2 className="text-xl font-semibold">📝 Document Summary</h2>
            </div>
            <p className="text-gray-500 dark:text-slate-400">{analysis.analysis.summary}</p>
          </div>

          {/* Tab Navigation - Simple button approach since we don't have Tabs component */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 text-sm font-medium rounded-md flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 dark:bg-slate-800 dark:border-slate-700">
            <div className="p-6">
              {activeTab === "summary" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">📝 Document Summary</h3>
                  <p className="text-gray-500 dark:text-slate-400">{analysis.analysis.summary}</p>
                </div>
              )}

              {activeTab === "key-terms" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">🔑 Key Terms</h3>
                  {renderKeyTerms(analysis.analysis.key_terms)}
                </div>
              )}

              {activeTab === "main-clauses" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">📋 Main Clauses</h3>
                  {renderListItems(analysis.analysis.main_clauses, <ClipboardList className="h-4 w-4" />)}
                </div>
              )}

              {activeTab === "risks" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">⚠️ Potential Risks</h3>
                  {renderListItems(analysis.analysis.risks, <AlertTriangle className="h-4 w-4" />)}
                </div>
              )}

              {activeTab === "recommendations" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">💡 Recommendations</h3>
                  {renderListItems(analysis.analysis.recommendations, <Lightbulb className="h-4 w-4" />)}
                </div>
              )}

              {activeTab === "parties" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">👥 Parties</h3>
                  {renderListItems(analysis.analysis.parties, <Users className="h-4 w-4" />)}
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">📌 Obligations</h4>
                      {renderListItems(analysis.analysis.obligations, <ClipboardList className="h-4 w-4" />)}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">⚖️ Jurisdiction</h4>
                      <p>{analysis.analysis.jurisdiction || "Not specified"}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "more" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">More Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">📅 Critical Dates</h4>
                      {renderListItems(analysis.analysis.critical_dates, <Calendar className="h-4 w-4" />)}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">❗ Missing/Unusual</h4>
                      {renderListItems(analysis.analysis.missing_or_unusual, <FileQuestion className="h-4 w-4" />)}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">🛑 Compliance Issues</h4>
                      {renderListItems(analysis.analysis.compliance_issues, <ShieldCheck className="h-4 w-4" />)}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">➡️ Next Steps</h4>
                      {renderListItems(analysis.analysis.next_steps, <Rocket className="h-4 w-4" />)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default LegalDocumentAnalyzer;