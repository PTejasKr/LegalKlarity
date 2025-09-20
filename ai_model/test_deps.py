import sys
import pdfplumber
import docx
import pytesseract
import fitz
from PIL import Image
from transformers import pipeline
from flask import Flask
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet

print("All dependencies imported successfully!")
print("Python version:", sys.version)
print("pdfplumber version:", getattr(pdfplumber, '__version__', 'unknown'))
print("PyMuPDF version:", getattr(fitz, 'version', 'unknown'))

# Test creating a simple Flask app
app = Flask(__name__)
print("Flask app created successfully!")

# Test creating a transformer pipeline
try:
    classifier = pipeline("zero-shot-classification", model="valhalla/distilbart-mnli-12-3", device=-1)
    print("Transformer pipeline created successfully!")
except Exception as e:
    print("Error creating transformer pipeline:", str(e))

print("Test completed successfully!")