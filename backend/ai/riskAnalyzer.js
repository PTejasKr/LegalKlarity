// ai/riskAnalyzer.js
import { calculateRiskScore, generateRiskReport } from '../services/riskAnalysisService.js';

export const analyzeDocumentRisk = async (documentAnalysis) => {
  try {
    const riskScore = calculateRiskScore(documentAnalysis);
    const riskReport = generateRiskReport(riskScore);
    return riskReport;
  } catch (error) {
    console.error('Error analyzing document risk:', error);
    throw error;
  }
};