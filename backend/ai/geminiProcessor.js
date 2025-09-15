// ai/geminiProcessor.js
import { analyzeDocumentWithGemini, generateContractWithGemini, getLegalAdviceFromGemini } from '../services/geminiService.js';

export const processDocumentWithGemini = async (documentText, documentType, userRole) => {
  try {
    const analysis = await analyzeDocumentWithGemini(documentText, documentType, userRole);
    return analysis;
  } catch (error) {
    console.error('Error processing document with Qwen:', error);
    throw error;
  }
};

export const generateContractFromGemini = async (contractType, partyA, partyB, terms) => {
  try {
    const contract = await generateContractWithGemini(contractType, partyA, partyB, terms);
    return contract;
  } catch (error) {
    console.error('Error generating contract with Qwen:', error);
    throw error;
  }
};

export const getLegalAdviceFromQwen = async (question, context) => {
  try {
    const advice = await getLegalAdviceFromGemini(question, context);
    return advice;
  } catch (error) {
    console.error('Error getting legal advice from Qwen:', error);
    throw error;
  }
};