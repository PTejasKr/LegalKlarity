import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, Key, ClipboardList, AlertTriangle, Lightbulb, Users, Building, Calendar, Gavel, FileQuestion, ShieldCheck, Rocket } from "lucide-react";

interface EnhancedAnalysisProps {
  analysis: {
    summary: string;
    key_terms: string[];
    main_clauses: string[];
    risks: string[];
    recommendations: string[];
    parties: string[];
    jurisdiction: string;
    obligations: string[];
    critical_dates: string[];
    missing_or_unusual: string[];
    compliance_issues: string[];
    next_steps: string[];
  };
}

const EnhancedDocumentAnalyzer: React.FC<EnhancedAnalysisProps> = ({ analysis }) => {
  const [activeTab, setActiveTab] = useState("summary");

  // Helper function to render list items
  const renderListItems = (items: string[], icon?: React.ReactNode) => {
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
  const renderKeyTerms = (terms: string[]) => {
    if (!terms || terms.length === 0) {
      return <p className="text-muted-foreground">No key terms defined.</p>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {terms.map((term, index) => {
          const [key, definition] = term.split(": ");
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
    <div className="space-y-6">
      {/* Document Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Document Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{analysis.summary}</p>
        </CardContent>
      </Card>

      {/* Analysis Categories - Tabbed Interface */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          <TabsTrigger value="summary" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Summary</span>
          </TabsTrigger>
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
        </TabsList>

        {/* Document Summary Tab */}
        <TabsContent value="summary" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Document Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{analysis.summary}</p>
              
              <Separator className="my-4" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Jurisdiction</h4>
                  <p>{analysis.jurisdiction || "Not specified"}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Critical Dates</h4>
                  {renderListItems(analysis.critical_dates, <Calendar className="h-4 w-4" />)}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Key Terms Tab */}
        <TabsContent value="key-terms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Key Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderKeyTerms(analysis.key_terms)}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Main Clauses Tab */}
        <TabsContent value="main-clauses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5" />
                Main Clauses
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderListItems(analysis.main_clauses, <ClipboardList className="h-4 w-4" />)}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Risks Tab */}
        <TabsContent value="risks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Identified Risks
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderListItems(analysis.risks, <AlertTriangle className="h-4 w-4" />)}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Recommendations Tab */}
        <TabsContent value="recommendations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderListItems(analysis.recommendations, <Lightbulb className="h-4 w-4" />)}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Parties Tab */}
        <TabsContent value="parties" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Involved Parties
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderListItems(analysis.parties, <Users className="h-4 w-4" />)}
              
              <Separator className="my-4" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Obligations</h4>
                  {renderListItems(analysis.obligations, <ClipboardList className="h-4 w-4" />)}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Missing/Unusual Clauses</h4>
                  {renderListItems(analysis.missing_or_unusual, <FileQuestion className="h-4 w-4" />)}
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Compliance Issues</h4>
                  {renderListItems(analysis.compliance_issues, <ShieldCheck className="h-4 w-4" />)}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Next Steps</h4>
                  {renderListItems(analysis.next_steps, <Rocket className="h-4 w-4" />)}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EnhancedDocumentAnalyzer;