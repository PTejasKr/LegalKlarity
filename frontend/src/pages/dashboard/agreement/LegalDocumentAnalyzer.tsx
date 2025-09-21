import React, { useState, useRef } from "react";
import { Upload, FileText, Loader2, Key, ClipboardList, AlertTriangle, Lightbulb, Users, Gavel, Calendar, FileQuestion, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { agreementService } from "@/services/agreementService";
import { useAppSelector } from "@/hooks/redux";
import { useToast } from "@/components/ui/use-toast";

const LegalDocumentAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { user } = useAppSelector((state) => state.auth);
  const { toast } = useToast();

  const handleFiles = (files: FileList) => {
    if (files && files[0]) {
      const selectedFile = files[0];
      const fileType = selectedFile.type;
      const fileSize = selectedFile.size;

      // Validate file type
      if (!fileType.match("application/pdf") && 
          !fileType.match("application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive"
        });
        return;
      }

      // Validate file size (limit to 200MB)
      if (fileSize > 200 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 200MB.",
          variant: "destructive"
        });
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
    if (!file || !user) return;

    setIsAnalyzing(true);
    
    try {
      // Call the enhanced analysis endpoint
      const response: any = await agreementService.enhancedDocumentAnalysis(
        file, 
        user.uid, 
        "individual", // We can use a default since we're removing target group selection
        "en" // Default to English
      );

      if (response?.data?.analysis) {
        setAnalysis(response.data);
        toast({
          title: "Analysis complete!",
          description: "Your document has been successfully analyzed."
        });
      } else {
        throw new Error("Failed to get analysis");
      }
    } catch (error: any) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis failed",
        description: error.message || "Failed to analyze the document. Please try again.",
        variant: "destructive"
      });
    } finally {
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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                📄 Upload Your Legal Document
              </CardTitle>
              <CardDescription>
                Choose a document to analyze. Supported formats: PDF, DOCX
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  dragActive 
                    ? "border-primary bg-primary/10" 
                    : "border-gray-300 hover:border-primary"
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
                    <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <Button 
                        variant="outline" 
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile();
                        }}
                      >
                        Remove
                      </Button>
                      <Button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAnalyze();
                        }}
                        disabled={isAnalyzing}
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          "Analyze Document"
                        )}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Drag and drop file here</p>
                      <p className="text-sm text-muted-foreground">
                        Limit 200MB per file • PDF, DOCX
                      </p>
                    </div>
                    <Button variant="secondary">Choose File</Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold">Upload Document</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Choose any legal document in PDF or DOCX format
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold">AI Analysis</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Our AI breaks down complex legal jargon
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold">Get Insights</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Understand risks, obligations, and next steps
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        /* Analysis Results - Exactly like Legal-Document-Analyzer-main */
        <div className="space-y-6">
          {/* Document Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                📝 Document Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{analysis.analysis.summary}</p>
            </CardContent>
          </Card>

          {/* Analysis Categories - Tabbed Interface like Streamlit */}
          <Tabs defaultValue="key-terms" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <TabsTrigger value="key-terms" className="flex items-center gap-2">
                <Key className="h-4 w-4" />
                <span className="hidden sm:inline">Key Terms</span>
              </TabsTrigger>
              <TabsTrigger value="main-clauses" className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4" />
                <span className="hidden sm:inline">Main Clauses</span>
              </TabsTrigger>
              <TabsTrigger value="risks" className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                <span className="hidden sm:inline">Risks</span>
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                <span className="hidden sm:inline">Recommendations</span>
              </TabsTrigger>
              <TabsTrigger value="parties" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Parties</span>
              </TabsTrigger>
              <TabsTrigger value="more" className="flex items-center gap-2">
                <Gavel className="h-4 w-4" />
                <span className="hidden sm:inline">More</span>
              </TabsTrigger>
            </TabsList>

            {/* Key Terms Tab */}
            <TabsContent value="key-terms" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    🔑 Key Terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {renderKeyTerms(analysis.analysis.key_terms)}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Main Clauses Tab */}
            <TabsContent value="main-clauses" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardList className="h-5 w-5" />
                    📋 Main Clauses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {renderListItems(analysis.analysis.main_clauses, <ClipboardList className="h-4 w-4" />)}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Risks Tab */}
            <TabsContent value="risks" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    ⚠️ Potential Risks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {renderListItems(analysis.analysis.risks, <AlertTriangle className="h-4 w-4" />)}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Recommendations Tab */}
            <TabsContent value="recommendations" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    💡 Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {renderListItems(analysis.analysis.recommendations, <Lightbulb className="h-4 w-4" />)}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Parties Tab */}
            <TabsContent value="parties" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    👥 Parties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {renderListItems(analysis.analysis.parties, <Users className="h-4 w-4" />)}
                  
                  <Separator className="my-4" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">📌 Obligations</h4>
                      {renderListItems(analysis.analysis.obligations, <ClipboardList className="h-4 w-4" />)}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">⚖️ Jurisdiction</h4>
                      <p>{analysis.analysis.jurisdiction || "Not specified"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* More Tab */}
            <TabsContent value="more" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gavel className="h-5 w-5" />
                    More Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </motion.div>
  );
};

export default LegalDocumentAnalyzer;