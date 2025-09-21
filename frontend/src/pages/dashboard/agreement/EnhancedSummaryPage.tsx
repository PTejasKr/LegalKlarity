import { useState, useRef } from "react";
import { Upload, FileText, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import EnhancedDocumentAnalyzer from "./EnhancedDocumentAnalyzer";
import { agreementService } from "@/services/agreementService";
import { useAppSelector } from "@/hooks/redux";

const EnhancedSummaryPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { user } = useAppSelector((state) => state.auth);

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

  const handleUpload = async () => {
    if (!file || !user) return;

    setIsUploading(true);
    
    try {
      // Call the enhanced analysis endpoint
      const response: any = await agreementService.enhancedDocumentAnalysis(
        file, 
        user.uid, 
        "individual", // Default to individual for now
        "en" // Default to English
      );

      if (response?.data?.analysis) {
        setAnalysis(response.data.analysis);
        toast({
          title: "Analysis complete!",
          description: "Your document has been successfully analyzed."
        });
      } else {
        throw new Error("Failed to get analysis");
      }
    } catch (error: any) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: error.message || "Failed to analyze the document. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  const removeFile = () => {
    setFile(null);
    setAnalysis(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
          Simplify complex legal documents with AI-powered analysis
        </p>
      </header>

      {!analysis ? (
        <div className="space-y-6">
          {/* File Upload Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Upload Your Legal Document
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
                          handleUpload();
                        }}
                        disabled={isUploading}
                      >
                        {isUploading ? (
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
        /* Analysis Results */
        <EnhancedDocumentAnalyzer analysis={analysis} />
      )}
    </motion.div>
  );
};

export default EnhancedSummaryPage;