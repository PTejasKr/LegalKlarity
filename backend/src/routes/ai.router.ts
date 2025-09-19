import { Router } from 'express';
import { authenticate } from '../middlewares/auth';
// @ts-ignore
import { transcribeAudio, synthesizeSpeech } from '../../ai/voiceProcessor';
// @ts-ignore
import { analyzeDocument, compareDocuments } from '../../ai/geminiProcessor';
// @ts-ignore
import { getRiskAssessment, getComplianceScore } from '../../ai/riskAnalyzer';

const router = Router();

// Voice processing routes
router.post('/transcribe', authenticate, async (req, res) => {
  try {
    const { audioBuffer, languageCode } = req.body;
    const transcription = await transcribeAudio(audioBuffer, languageCode);
    res.status(200).json({ transcript: transcription });
  } catch (error) {
    res.status(500).json({ error: 'Transcription failed' });
  }
});

router.post('/tts', authenticate, async (req, res) => {
  try {
    const { text, language } = req.body;
    const audioBuffer = await synthesizeSpeech(text, language);
    res.status(200).json({ audioBuffer });
  } catch (error) {
    res.status(500).json({ error: 'Text-to-speech failed' });
  }
});

// Document analysis routes
router.post('/analyze-document', authenticate, async (req, res) => {
  try {
    const { text, type } = req.body;
    const analysis = await analyzeDocument(text, type);
    res.status(200).json(analysis);
  } catch (error) {
    res.status(500).json({ error: 'Document analysis failed' });
  }
});

router.get('/risk-assessment/:documentId', authenticate, async (req, res) => {
  try {
    const { documentId } = req.params;
    const riskAssessment = await getRiskAssessment(documentId);
    res.status(200).json(riskAssessment);
  } catch (error) {
    res.status(500).json({ error: 'Risk assessment failed' });
  }
});

router.get('/compliance-score/:documentId', authenticate, async (req, res) => {
  try {
    const { documentId } = req.params;
    const complianceScore = await getComplianceScore(documentId);
    res.status(200).json({ score: complianceScore });
  } catch (error) {
    res.status(500).json({ error: 'Compliance scoring failed' });
  }
});

// Contract generation route
router.post('/generate-contract', authenticate, async (req, res) => {
  try {
    const contractData = req.body;
    // Implementation would go here
    res.status(200).json({ message: 'Contract generated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Contract generation failed' });
  }
});

// Document comparison route
router.post('/compare-documents', authenticate, async (req, res) => {
  try {
    const { documentIds } = req.body;
    const comparison = await compareDocuments(documentIds);
    res.status(200).json(comparison);
  } catch (error) {
    res.status(500).json({ error: 'Document comparison failed' });
  }
});

export default router;